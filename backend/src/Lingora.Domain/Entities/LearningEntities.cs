using System;
using Lingora.Domain.Enums;

namespace Lingora.Domain.Entities;

// --- VOCABULARY & SRS ---
public class VocabularyTopic
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public string Title { get; set; } = string.Empty;
    public string Slug { get; set; } = string.Empty;
    public string Icon { get; set; } = "📚";
    public string Description { get; set; } = string.Empty;

    public ICollection<VocabularyWord> Words { get; set; } = new List<VocabularyWord>();
}

public class VocabularyWord
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public Guid TopicId { get; set; }
    public VocabularyTopic Topic { get; set; } = null!;

    public string Word { get; set; } = string.Empty;
    public string Phonetic { get; set; } = string.Empty;
    public string? AudioUrl { get; set; }
    public string MeaningVi { get; set; } = string.Empty;
    public string DefinitionEn { get; set; } = string.Empty;
    public string ExampleEn { get; set; } = string.Empty;
    public string ExampleVi { get; set; } = string.Empty;
    public string PartOfSpeech { get; set; } = "Noun";
    public string DifficultyLevel { get; set; } = "B1";
}

public class UserVocabularySrs
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public Guid UserId { get; set; }
    public Guid WordId { get; set; }
    public VocabularyWord Word { get; set; } = null!;

    public SrsState State { get; set; } = SrsState.New;
    public int Repetitions { get; set; } = 0;
    public double IntervalDays { get; set; } = 1;
    public double EaseFactor { get; set; } = 2.5;
    public DateTime NextReviewDate { get; set; } = DateTime.UtcNow;
    public DateTime? LastReviewedAt { get; set; }
}

// --- KIDS ENTITIES ---
public class KidsWorld
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public string Name { get; set; } = string.Empty;
    public string VietnameseName { get; set; } = string.Empty;
    public string Slug { get; set; } = string.Empty;
    public string Icon { get; set; } = "🦁";
    public string Description { get; set; } = string.Empty;
    public int OrderIndex { get; set; }
    public int RequiredStars { get; set; }
    public string ThemeColor { get; set; } = "#F59E0B";
    public string BgGradient { get; set; } = "from-amber-400 to-orange-500";
    public int LevelsCount { get; set; } = 6;
}

public class UserPet
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public Guid UserId { get; set; }
    public string Name { get; set; } = "Lingokid";
    public string Type { get; set; } = "fox";
    public int Level { get; set; } = 1;
    public int Exp { get; set; } = 0;
    public int Happiness { get; set; } = 100;
    public string Stage { get; set; } = "baby";
    public string? Accessory { get; set; }
}

// --- TOEIC & IELTS ---
public class ToeicTest
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public string Title { get; set; } = string.Empty;
    public int Year { get; set; } = 2026;
    public int DurationMinutes { get; set; } = 120;
    public int TotalQuestions { get; set; } = 200;
    public string Difficulty { get; set; } = "Medium";

    public ICollection<ToeicQuestion> Questions { get; set; } = new List<ToeicQuestion>();
}

public class ToeicQuestion
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public Guid TestId { get; set; }
    public ToeicTest Test { get; set; } = null!;

    public int PartNumber { get; set; }
    public int QuestionNumber { get; set; }
    public string? ImageUrl { get; set; }
    public string? AudioUrl { get; set; }
    public string? PassageText { get; set; }
    public string QuestionText { get; set; } = string.Empty;
    public string OptionsJson { get; set; } = "[]";
    public string CorrectAnswer { get; set; } = "A";
    public string ExplanationVi { get; set; } = string.Empty;
    public string? TranscriptEn { get; set; }
}

public class WritingSubmission
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public Guid UserId { get; set; }
    public string TaskType { get; set; } = "Task 2";
    public string Prompt { get; set; } = string.Empty;
    public string EssayText { get; set; } = string.Empty;
    public double BandScore { get; set; }
    public double TrScore { get; set; }
    public double CcScore { get; set; }
    public double LrScore { get; set; }
    public double GraScore { get; set; }
    public string FeedbackJson { get; set; } = "{}";
    public string? ImprovedEssay { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}

public class SpeakingSession
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public Guid UserId { get; set; }
    public int PartNumber { get; set; } = 2;
    public string Topic { get; set; } = string.Empty;
    public string Transcript { get; set; } = string.Empty;
    public double OverallBand { get; set; }
    public double FluencyScore { get; set; }
    public double LexicalScore { get; set; }
    public double GrammarScore { get; set; }
    public double PronunciationScore { get; set; }
    public string FeedbackJson { get; set; } = "{}";
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}

// --- AI ENTITIES ---
public class AiConversation
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public Guid UserId { get; set; }
    public string Persona { get; set; } = "Friendly";
    public string Title { get; set; } = "New Conversation";
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public ICollection<AiMessage> Messages { get; set; } = new List<AiMessage>();
}

public class AiMessage
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public Guid ConversationId { get; set; }
    public AiConversation Conversation { get; set; } = null!;

    public string Sender { get; set; } = "user"; // "user" or "ai"
    public string MessageText { get; set; } = string.Empty;
    public string? CorrectionsJson { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}

public class UserMistakeLog
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public Guid UserId { get; set; }
    public string Category { get; set; } = "Prepositions"; // Tenses, Prepositions, Articles, etc.
    public string QuestionContext { get; set; } = string.Empty;
    public string UserAnswer { get; set; } = string.Empty;
    public string CorrectAnswer { get; set; } = string.Empty;
    public string ExplanationVi { get; set; } = string.Empty;
    public bool Resolved { get; set; } = false;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
