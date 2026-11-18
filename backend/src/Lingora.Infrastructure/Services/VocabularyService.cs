using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Lingora.Application.DTOs;
using Lingora.Application.Interfaces;
using Lingora.Domain.Entities;
using Lingora.Domain.Enums;
using Lingora.Infrastructure.Persistence;

namespace Lingora.Infrastructure.Services;

public class VocabularyService : IVocabularyService
{
    private readonly ApplicationDbContext _db;

    public VocabularyService(ApplicationDbContext db)
    {
        _db = db;
    }

    public async Task<IEnumerable<VocabularyTopic>> GetTopicsAsync()
    {
        return await _db.VocabularyTopics.Include(t => t.Words).ToListAsync();
    }

    public async Task<IEnumerable<VocabularyWordDto>> GetWordsByTopicAsync(Guid topicId, Guid userId)
    {
        var words = await _db.VocabularyWords
            .Where(w => w.TopicId == topicId)
            .ToListAsync();

        var srsMap = await _db.UserVocabularySrs
            .Where(s => s.UserId == userId)
            .ToDictionaryAsync(s => s.WordId);

        return words.Select(w =>
        {
            var srs = srsMap.GetValueOrDefault(w.Id);
            return new VocabularyWordDto(
                w.Id,
                w.TopicId,
                w.Word,
                w.Phonetic,
                w.AudioUrl,
                w.MeaningVi,
                w.DefinitionEn,
                w.ExampleEn,
                w.ExampleVi,
                w.PartOfSpeech,
                w.DifficultyLevel,
                srs?.State.ToString() ?? "New"
            );
        });
    }

    public async Task SubmitSrsReviewAsync(Guid userId, SrsReviewRequest request)
    {
        var srs = await _db.UserVocabularySrs
            .FirstOrDefaultAsync(s => s.UserId == userId && s.WordId == request.WordId);

        if (srs == null)
        {
            srs = new UserVocabularySrs
            {
                UserId = userId,
                WordId = request.WordId,
                State = SrsState.Learning,
                Repetitions = 0,
                IntervalDays = 1,
                EaseFactor = 2.5
            };
            _db.UserVocabularySrs.Add(srs);
        }

        // SM-2 Algorithm Calculation
        int q = Math.Clamp(request.Quality, 0, 5);
        if (q < 3)
        {
            srs.Repetitions = 0;
            srs.IntervalDays = 1;
            srs.State = SrsState.Learning;
        }
        else
        {
            if (srs.Repetitions == 0) srs.IntervalDays = 1;
            else if (srs.Repetitions == 1) srs.IntervalDays = 6;
            else srs.IntervalDays = Math.Round(srs.IntervalDays * srs.EaseFactor);

            srs.Repetitions++;
            srs.State = srs.Repetitions >= 5 ? SrsState.Mastered : SrsState.Review;
        }

        // Update Ease Factor
        srs.EaseFactor = Math.Max(1.3, srs.EaseFactor + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)));
        srs.LastReviewedAt = DateTime.UtcNow;
        srs.NextReviewDate = DateTime.UtcNow.AddDays(srs.IntervalDays);

        await _db.SaveChangesAsync();
    }
}
