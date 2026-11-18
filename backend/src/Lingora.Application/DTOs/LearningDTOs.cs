namespace Lingora.Application.DTOs;

public record VocabularyWordDto(
    Guid Id,
    Guid TopicId,
    string Word,
    string Phonetic,
    string? AudioUrl,
    string MeaningVi,
    string DefinitionEn,
    string ExampleEn,
    string ExampleVi,
    string PartOfSpeech,
    string DifficultyLevel,
    string SrsState
);

public record SrsReviewRequest(
    Guid WordId,
    int Quality // 0 to 5
);

public record AiChatRequest(
    string Persona,
    string Message
);

public record AiChatResponse(
    string ReplyText,
    string? CorrectionsJson
);

public record WritingEvaluationRequest(
    string TaskType,
    string Prompt,
    string EssayText
);

public record SpeakingEvaluationRequest(
    int PartNumber,
    string Topic,
    string Transcript
);
