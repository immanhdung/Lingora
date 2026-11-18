export type UserRole = 'Student' | 'Parent' | 'Admin';
export type LearningProgramType = 'Kids' | 'General' | 'TOEIC' | 'IELTS';
export type EnglishLevel = 'Beginner' | 'Elementary' | 'Pre-Intermediate' | 'Intermediate' | 'Upper-Intermediate' | 'Advanced';

export interface User {
  id: string;
  email: string;
  fullName: string;
  role: UserRole;
  avatarUrl?: string;
  targetProgram: LearningProgramType;
  currentLevel: EnglishLevel;
  targetScore: string;
  dailyGoalMinutes: number;
  streakDays: number;
  totalXp: number;
  stars: number;
  coins: number;
  createdAt: string;
}

export interface VocabularyWord {
  id: string;
  topicId: string;
  word: string;
  phonetic: string;
  audioUrl?: string;
  meaningVi: string;
  definitionEn: string;
  exampleEn: string;
  exampleVi: string;
  partOfSpeech: string;
  difficultyLevel: string;
  synonyms?: string[];
  antonyms?: string[];
  srsState?: 'New' | 'Learning' | 'Review' | 'Mastered';
  nextReviewDate?: string;
}

export interface VocabularyTopic {
  id: string;
  title: string;
  slug: string;
  icon: string;
  description: string;
  wordCount: number;
}

export interface GrammarLesson {
  id: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  title: string;
  vietnameseTitle: string;
  explanationVi: string;
  formula?: string;
  examples: {
    en: string;
    vi: string;
    highlight?: string;
  }[];
  commonMistakes: {
    incorrect: string;
    correct: string;
    explanation: string;
  }[];
  exercises: {
    id: string;
    question: string;
    options: string[];
    correctIndex: number;
    explanationVi: string;
  }[];
}

export interface KidsWorld {
  id: string;
  name: string;
  vietnameseName: string;
  slug: string;
  icon: string;
  description: string;
  orderIndex: number;
  requiredStars: number;
  themeColor: string;
  bgGradient: string;
  levelsCount: number;
  unlocked: boolean;
}

export type KidsGameType =
  | 'WordMatch'
  | 'PictureGuess'
  | 'ListenChoose'
  | 'Spelling'
  | 'MemoryCards'
  | 'WordShooting'
  | 'SentenceBuilder'
  | 'Pronunciation'
  | 'TreasureHunt'
  | 'DailyQuiz';

export interface KidsPet {
  name: string;
  type: 'fox' | 'cat' | 'dragon' | 'robot';
  level: number;
  exp: number;
  happiness: number;
  stage: 'egg' | 'baby' | 'teen' | 'legendary';
  accessory?: string;
}

export interface ToeicQuestion {
  id: string;
  partNumber: number; // 1 to 7
  questionNumber: number;
  audioUrl?: string;
  imageUrl?: string;
  passageText?: string;
  questionText: string;
  options: {
    label: 'A' | 'B' | 'C' | 'D';
    text: string;
  }[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanationVi: string;
  transcriptEn?: string;
  vocabularyList?: { word: string; meaning: string }[];
}

export interface ToeicTest {
  id: string;
  title: string;
  year: number;
  durationMinutes: number;
  totalQuestions: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  listeningQuestionsCount: number;
  readingQuestionsCount: number;
  attemptsCount: number;
}

export interface IeltsTest {
  id: string;
  title: string;
  type: 'Academic' | 'General';
  durationMinutes: number;
  skills: ('Listening' | 'Reading' | 'Writing' | 'Speaking')[];
  difficulty: string;
}

export interface IeltsWritingEvaluation {
  id: string;
  taskType: 'Task 1' | 'Task 2';
  prompt: string;
  userEssay: string;
  overallBand: number;
  criteria: {
    taskAchievement: { score: number; comment: string };
    coherenceCohesion: { score: number; comment: string };
    lexicalResource: { score: number; comment: string };
    grammaticalAccuracy: { score: number; comment: string };
  };
  strengths: string[];
  weaknesses: string[];
  grammarCorrections: {
    original: string;
    correction: string;
    explanation: string;
  }[];
  improvedEssay: string;
  recommendations: string[];
}

export interface IeltsSpeakingEvaluation {
  id: string;
  part: number;
  topic: string;
  transcript: string;
  overallBand: number;
  fluencyCoherence: { score: number; comment: string };
  lexicalResource: { score: number; comment: string };
  grammaticalAccuracy: { score: number; comment: string };
  pronunciation: { score: number; comment: string };
  strengths: string[];
  weaknesses: string[];
  betterExpressions: { original: string; better: string }[];
}

export interface AiChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  audioUrl?: string;
  corrections?: {
    original: string;
    better: string;
    rule: string;
  }[];
}

export interface MistakeDnaItem {
  id: string;
  category: 'Tenses' | 'Prepositions' | 'Articles' | 'WordChoice' | 'SentenceStructure' | 'ListeningDetail' | 'ReadingInference';
  count: number;
  severity: 'low' | 'medium' | 'high';
  exampleEn: string;
  correctEn: string;
  tipVi: string;
}
