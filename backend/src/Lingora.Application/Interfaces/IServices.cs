using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Lingora.Application.DTOs;
using Lingora.Domain.Entities;

namespace Lingora.Application.Interfaces;

public interface IAuthService
{
    Task<AuthResponse> RegisterAsync(RegisterRequest request);
    Task<AuthResponse> LoginAsync(LoginRequest request);
    Task<AuthResponse> RefreshTokenAsync(RefreshTokenRequest request);
    Task<UserProfileDto?> GetUserProfileAsync(Guid userId);
}

public interface IAiService
{
    Task<AiChatResponse> ChatAsync(string persona, string message);
    Task<WritingSubmission> EvaluateWritingAsync(Guid userId, WritingEvaluationRequest request);
    Task<SpeakingSession> EvaluateSpeakingAsync(Guid userId, SpeakingEvaluationRequest request);
}

public interface IVocabularyService
{
    Task<IEnumerable<VocabularyTopic>> GetTopicsAsync();
    Task<IEnumerable<VocabularyWordDto>> GetWordsByTopicAsync(Guid topicId, Guid userId);
    Task SubmitSrsReviewAsync(Guid userId, SrsReviewRequest request);
}
