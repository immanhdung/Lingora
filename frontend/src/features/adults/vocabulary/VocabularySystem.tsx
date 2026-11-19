import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  Volume2,
  ChevronLeft,
  ChevronRight,
  RotateCw,
  BookOpen,
  Check,
  Plane,
  Briefcase,
  Cpu,
  Coffee,
  Coins,
  GraduationCap,
  Leaf,
  Sparkles,
  Shuffle,
  Building2,
  HeartPulse,
  Utensils,
  Search,
  CheckCircle2,
  XCircle,
  HelpCircle,
  BookMarked,
  Award,
  Layers,
  Flame,
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { speakEnglish } from '@/lib/speech';
import { sounds, playCelebration } from '@/lib/utils';
import { useAuthStore } from '@/stores/useAuthStore';
import {
  VOCABULARY_TOPICS,
  ALL_VOCABULARY_WORDS,
  searchVocabulary,
  getVocabularyStats,
  WordItem,
  VocabularyTopic,
} from '@/data/vocabularyData';

const ICON_MAP: Record<string, React.ElementType> = {
  Briefcase,
  GraduationCap,
  Building2,
  Cpu,
  Plane,
  Coins,
  Coffee,
  HeartPulse,
  Leaf,
  BookOpen,
  Utensils,
  Sparkles,
};

export const VocabularySystem: React.FC = () => {
  const { updateStats } = useAuthStore();
  const [selectedTopicId, setSelectedTopicId] = useState<string>('toeic');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [viewMode, setViewMode] = useState<'flashcard' | 'list' | 'quiz'>('flashcard');

  // List view pagination
  const [currentPage, setCurrentPage] = useState(1);
  const PAGE_SIZE = 24;

  // Quiz state
  const [quizScore, setQuizScore] = useState(0);
  const [quizStreak, setQuizStreak] = useState(0);
  const [quizSelectedOption, setQuizSelectedOption] = useState<string | null>(null);
  const [isQuizAnswered, setIsQuizAnswered] = useState(false);

  // Global vocab stats
  const vocabStats = useMemo(() => getVocabularyStats(), []);

  // Filtered active word list based on topic, level, and search query
  const filteredWords = useMemo(() => {
    return searchVocabulary(searchQuery, selectedTopicId, selectedLevel);
  }, [searchQuery, selectedTopicId, selectedLevel]);

  // Current topic metadata
  const currentTopic = useMemo(() => {
    if (selectedTopicId === 'all') {
      return {
        id: 'all',
        title: 'Tất Cả 12 Chủ Đề',
        description: 'Toàn bộ kho từ vựng chuyên sâu 1,116+ từ đã được chọn lọc và kiểm định chất lượng',
        icon: 'BookMarked',
        color: 'text-primary-600',
        wordCount: ALL_VOCABULARY_WORDS.length,
      };
    }
    return (
      VOCABULARY_TOPICS.find((t) => t.id === selectedTopicId) ||
      VOCABULARY_TOPICS[0]
    );
  }, [selectedTopicId]);

  // Reset indices when filters change
  useEffect(() => {
    setCardIndex(0);
    setIsFlipped(false);
    setCurrentPage(1);
  }, [selectedTopicId, selectedLevel, searchQuery]);

  // Current active flashcard
  const activeList = filteredWords.length > 0 ? filteredWords : ALL_VOCABULARY_WORDS;
  const safeCardIndex = Math.min(cardIndex, activeList.length - 1);
  const currentCard = activeList[safeCardIndex] || activeList[0];

  // Navigation handlers
  const handleNextCard = useCallback(() => {
    sounds.playClick();
    setIsFlipped(false);
    setCardIndex((prev) => (prev + 1) % activeList.length);
  }, [activeList.length]);

  const handlePrevCard = useCallback(() => {
    sounds.playClick();
    setIsFlipped(false);
    setCardIndex((prev) => (prev - 1 + activeList.length) % activeList.length);
  }, [activeList.length]);

  const handleShuffle = useCallback(() => {
    sounds.playClick();
    setIsFlipped(false);
    const randomIndex = Math.floor(Math.random() * activeList.length);
    setCardIndex(randomIndex);
  }, [activeList.length]);

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA'
      ) {
        return;
      }

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNextCard();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrevCard();
      } else if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        sounds.playClick();
        setIsFlipped((f) => !f);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNextCard, handlePrevCard]);

  // Text to Speech
  const handleSpeak = (text: string) => {
    speakEnglish(text);
  };

  // SRS Rating
  const handleSrsRating = (isKnown: boolean) => {
    if (isKnown) {
      sounds.playCoin();
      updateStats(10, 1, 5);
    } else {
      sounds.playClick();
    }
    handleNextCard();
  };

  // Quiz generator
  const quizQuestion = useMemo(() => {
    if (activeList.length < 4) return null;
    const targetWord = activeList[safeCardIndex];
    // Pick 3 random distractor meanings from ALL_VOCABULARY_WORDS
    const distractors = ALL_VOCABULARY_WORDS.filter(
      (w) => w.id !== targetWord.id && w.meaningVi !== targetWord.meaningVi
    )
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map((w) => w.meaningVi);

    const options = [targetWord.meaningVi, ...distractors].sort(
      () => 0.5 - Math.random()
    );

    return {
      word: targetWord,
      options,
      correctAnswer: targetWord.meaningVi,
    };
  }, [activeList, safeCardIndex]);

  const handleQuizAnswer = (selectedOption: string) => {
    if (isQuizAnswered || !quizQuestion) return;
    setQuizSelectedOption(selectedOption);
    setIsQuizAnswered(true);

    if (selectedOption === quizQuestion.correctAnswer) {
      sounds.playSuccess();
      setQuizScore((s) => s + 1);
      setQuizStreak((s) => s + 1);
      updateStats(15, 1, 10);
      if ((quizStreak + 1) % 5 === 0) {
        playCelebration();
      }
    } else {
      sounds.playError();
      setQuizStreak(0);
    }
  };

  const handleNextQuiz = () => {
    setQuizSelectedOption(null);
    setIsQuizAnswered(false);
    handleNextCard();
  };

  // Pagination for List View
  const totalPages = Math.ceil(filteredWords.length / PAGE_SIZE) || 1;
  const paginatedWords = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredWords.slice(start, start + PAGE_SIZE);
  }, [filteredWords, currentPage]);

  const CurrentTopicIcon =
    ICON_MAP[currentTopic.icon] || BookOpen;

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* HEADER & OVERALL STATS */}
      <div className="rounded-3xl border border-slate-200/90 bg-gradient-to-r from-primary-900 via-indigo-900 to-slate-900 p-6 sm:p-8 text-white shadow-xl dark:border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-500/20 px-3 py-1 text-xs font-bold text-primary-300 border border-primary-400/30">
                <Sparkles className="h-3.5 w-3.5" />
                Ngân Hàng 1,116+ Từ Vựng Theo 12 Chủ Đề
              </span>
              <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-300">
                Chuẩn CEFR A2 - C1
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              Kho Từ Vựng Tiếng Anh Chuyên Sâu
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Tích hợp phát âm chuẩn IPA, audio bản xứ, câu ví dụ thực tế song ngữ, phương pháp lặp lại ngắt quãng SRS và phím tắt chuyển từ nhanh bằng mũi tên ← →.
            </p>
          </div>

          {/* Quick Metrics Bento */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 shrink-0">
            <div className="rounded-2xl bg-white/10 p-3 text-center backdrop-blur-sm border border-white/10">
              <div className="text-xl sm:text-2xl font-black text-amber-300">
                {vocabStats.totalWords.toLocaleString()}
              </div>
              <div className="text-[10px] uppercase font-bold text-slate-300 tracking-wider">
                Tổng từ vựng
              </div>
            </div>
            <div className="rounded-2xl bg-white/10 p-3 text-center backdrop-blur-sm border border-white/10">
              <div className="text-xl sm:text-2xl font-black text-purple-300">
                {vocabStats.totalTopics}
              </div>
              <div className="text-[10px] uppercase font-bold text-slate-300 tracking-wider">
                Chủ đề chuẩn
              </div>
            </div>
            <div className="rounded-2xl bg-white/10 p-3 text-center backdrop-blur-sm border border-white/10">
              <div className="text-xl sm:text-2xl font-black text-sky-300">
                {vocabStats.levelCounts['C1']}
              </div>
              <div className="text-[10px] uppercase font-bold text-slate-300 tracking-wider">
                Từ C1 Academic
              </div>
            </div>
            <div className="rounded-2xl bg-white/10 p-3 text-center backdrop-blur-sm border border-white/10">
              <div className="text-xl sm:text-2xl font-black text-emerald-300">
                {vocabStats.levelCounts['B2']}
              </div>
              <div className="text-[10px] uppercase font-bold text-slate-300 tracking-wider">
                Từ B2 Cao Cấp
              </div>
            </div>
          </div>
        </div>

        {/* View Mode Switcher Pills */}
        <div className="mt-6 pt-5 border-t border-white/15 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-300 font-medium">Chế độ học:</span>
            <div className="inline-flex rounded-xl bg-white/15 p-1 backdrop-blur-md">
              <button
                onClick={() => setViewMode('flashcard')}
                className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all ${
                  viewMode === 'flashcard'
                    ? 'bg-white text-slate-900 shadow-md'
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                Thẻ Flashcard
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all ${
                  viewMode === 'list'
                    ? 'bg-white text-slate-900 shadow-md'
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                Danh Sách Tra Cứu ({filteredWords.length})
              </button>
              <button
                onClick={() => setViewMode('quiz')}
                className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all ${
                  viewMode === 'quiz'
                    ? 'bg-white text-slate-900 shadow-md'
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                Trắc Nghiệm Ôn Tập
              </button>
            </div>
          </div>

          <div className="text-[11px] text-slate-300 hidden sm:flex items-center gap-1.5">
            <span>Phím tắt:</span>
            <kbd className="px-1.5 py-0.5 rounded bg-white/20 text-white font-mono text-[10px]">←</kbd>
            <kbd className="px-1.5 py-0.5 rounded bg-white/20 text-white font-mono text-[10px]">→</kbd>
            <span>đổi từ,</span>
            <kbd className="px-1.5 py-0.5 rounded bg-white/20 text-white font-mono text-[10px]">Space</kbd>
            <span>lật thẻ</span>
          </div>
        </div>
      </div>

      {/* SEARCH & LEVEL FILTER BAR */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        {/* Real-time Search Input */}
        <div className="md:col-span-8 relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm kiếm từ vựng (ví dụ: negotiate, đàm phán, algorithm, bồi hoàn, itinerary...)"
            className="w-full rounded-2xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-xs sm:text-sm text-slate-800 placeholder-slate-400 shadow-sm transition-all focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-slate-800 dark:bg-slate-900 dark:text-white"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              Xóa
            </button>
          )}
        </div>

        {/* Level Filter Pills */}
        <div className="md:col-span-4 flex items-center justify-between sm:justify-end gap-1.5">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 mr-1">
            Trình độ:
          </span>
          {['all', 'B1', 'B2', 'C1'].map((lvl) => (
            <button
              key={lvl}
              onClick={() => setSelectedLevel(lvl)}
              className={`rounded-xl px-2.5 py-1.5 text-xs font-bold transition-all border ${
                selectedLevel === lvl
                  ? 'bg-primary-600 text-white border-primary-600 shadow-sm'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400'
              }`}
            >
              {lvl === 'all' ? 'Tất cả' : lvl}
            </button>
          ))}
        </div>
      </div>

      {/* TOPICS HORIZONTAL SELECTOR (12 Topics) */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 px-1">
          <span>Chọn chủ đề ({VOCABULARY_TOPICS.length} nhóm chủ đề chuyên sâu):</span>
          {selectedTopicId !== 'all' && (
            <button
              onClick={() => setSelectedTopicId('all')}
              className="text-primary-600 hover:underline font-bold text-[11px]"
            >
              Xem tất cả chủ đề
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
          {/* 'All' button */}
          <button
            onClick={() => {
              sounds.playClick();
              setSelectedTopicId('all');
            }}
            className={`flex items-center gap-2 px-3.5 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all border shrink-0 ${
              selectedTopicId === 'all'
                ? 'bg-primary-600 text-white border-primary-600 shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800 dark:hover:bg-slate-800'
            }`}
          >
            <BookMarked className="h-4 w-4" />
            <span>Tất Cả Chủ Đề</span>
            <span
              className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                selectedTopicId === 'all'
                  ? 'bg-white/25 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
              }`}
            >
              {ALL_VOCABULARY_WORDS.length}
            </span>
          </button>

          {VOCABULARY_TOPICS.map((t) => {
            const Icon = ICON_MAP[t.icon] || BookOpen;
            const isSelected = selectedTopicId === t.id;
            return (
              <button
                key={t.id}
                onClick={() => {
                  sounds.playClick();
                  setSelectedTopicId(t.id);
                }}
                className={`flex items-center gap-2 px-3.5 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all border shrink-0 ${
                  isSelected
                    ? 'bg-primary-600 text-white border-primary-600 shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800 dark:hover:bg-slate-800'
                }`}
              >
                <Icon className={`h-4 w-4 ${isSelected ? 'text-white' : t.color}`} />
                <span>{t.title}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isSelected
                      ? 'bg-white/25 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                  }`}
                >
                  {t.wordCount}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* VIEW MODE 1: FLASHCARD */}
      {viewMode === 'flashcard' && (
        <div className="space-y-4">
          {/* Progress & Counter Bar */}
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                Từ số {safeCardIndex + 1} / {activeList.length}
              </span>
              <Badge variant="outline" className="text-[10px] font-bold">
                {currentCard.difficultyLevel}
              </Badge>
              <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                {currentCard.partOfSpeech}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleShuffle}
                title="Xáo trộn ngẫu nhiên danh sách"
                className="text-xs h-8 px-2.5"
              >
                <Shuffle className="h-3.5 w-3.5 mr-1 text-slate-500" />
                <span>Xáo trộn</span>
              </Button>
            </div>
          </div>

          {/* Progress Line */}
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
            <div
              className="h-full bg-primary-600 transition-all duration-300 rounded-full"
              style={{
                width: `${((safeCardIndex + 1) / activeList.length) * 100}%`,
              }}
            />
          </div>

          {/* FLASHCARD WITH BIG PREV / NEXT ARROW BUTTONS */}
          <div className="relative flex items-center justify-between gap-3 sm:gap-4">
            {/* Left Prev Arrow Button */}
            <button
              onClick={handlePrevCard}
              title="Từ trước đó (Phím ←)"
              className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-md transition-all hover:bg-slate-50 hover:scale-105 active:scale-95 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 cursor-pointer"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Flashcard Main Flip Card */}
            <div
              onClick={() => {
                sounds.playClick();
                setIsFlipped(!isFlipped);
              }}
              className="relative flex-1 min-h-[360px] sm:min-h-[400px] cursor-pointer rounded-3xl border-2 border-slate-200/90 bg-white p-6 sm:p-8 text-center shadow-md transition-all hover:border-primary-400 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 flex flex-col justify-between select-none"
            >
              {!isFlipped ? (
                /* Mặt trước (Từ tiếng Anh + Phát âm + Gợi ý) */
                <div className="my-auto space-y-4">
                  <div className="inline-block rounded-full bg-primary-50 px-3.5 py-1 text-[11px] font-semibold text-primary-700 dark:bg-primary-950/60 dark:text-primary-300 border border-primary-200 dark:border-primary-800">
                    Chạm thẻ hoặc phím cách để xem nghĩa & ví dụ
                  </div>

                  <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
                    {currentCard.word}
                  </h2>

                  <div className="flex items-center justify-center gap-3">
                    <span className="font-mono text-base text-slate-500 dark:text-slate-400">
                      {currentCard.phonetic}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSpeak(currentCard.word);
                      }}
                      title="Nghe phát âm chuẩn bản xứ"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-100 text-primary-700 hover:bg-primary-200 dark:bg-primary-950 dark:text-primary-300 transition-colors shadow-sm"
                    >
                      <Volume2 className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="pt-2 text-xs text-slate-400">
                    Thuộc nhóm:{' '}
                    <span className="font-semibold text-slate-700 dark:text-slate-300">
                      {currentTopic.title}
                    </span>{' '}
                    • Loại từ:{' '}
                    <span className="font-semibold text-slate-700 dark:text-slate-300">
                      {currentCard.partOfSpeech}
                    </span>
                  </div>
                </div>
              ) : (
                /* Mặt sau (Nghĩa tiếng Việt + Định nghĩa Anh + Ví dụ thực tế) */
                <div className="my-auto space-y-4 animate-in fade-in">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">
                      Nghĩa Tiếng Việt
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                      {currentCard.meaningVi}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic max-w-lg mx-auto bg-slate-50 dark:bg-slate-800/40 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                    "{currentCard.definitionEn}"
                  </p>

                  {/* Ví dụ thực tế */}
                  <div className="rounded-2xl bg-slate-50 p-4 text-left border border-slate-100 dark:bg-slate-800/60 dark:border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold text-primary-700 dark:text-primary-400">
                      <span>Ví dụ minh họa ngữ cảnh:</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSpeak(currentCard.exampleEn);
                        }}
                        className="text-slate-500 hover:text-primary-600 flex items-center gap-1 transition-colors"
                      >
                        <Volume2 className="h-3.5 w-3.5" />
                        <span className="text-[10px]">Đọc câu</span>
                      </button>
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white leading-relaxed">
                      {currentCard.exampleEn}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {currentCard.exampleVi}
                    </div>
                  </div>

                  {/* Từ đồng nghĩa */}
                  {currentCard.synonyms && currentCard.synonyms.length > 0 && (
                    <div className="flex items-center justify-center gap-1.5 flex-wrap pt-1">
                      <span className="text-[11px] font-medium text-slate-400">
                        Từ đồng nghĩa:
                      </span>
                      {currentCard.synonyms.map((syn, idx) => (
                        <span
                          key={idx}
                          className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                        >
                          {syn}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Bottom footer bar */}
              <div className="text-[11px] text-slate-400 font-medium pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <span>Hệ thống ghi nhớ ngắt quãng SRS</span>
                <span>Chạm thẻ để lật qua lại</span>
              </div>
            </div>

            {/* Right Next Arrow Button */}
            <button
              onClick={handleNextCard}
              title="Từ tiếp theo (Phím →)"
              className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-md transition-all hover:bg-slate-50 hover:scale-105 active:scale-95 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 cursor-pointer"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Quick Action Buttons & SRS Controls */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handlePrevCard}
                className="text-xs font-semibold"
              >
                <ChevronLeft className="mr-1 h-4 w-4" /> Từ trước (←)
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  sounds.playClick();
                  setIsFlipped(!isFlipped);
                }}
                className="text-xs font-semibold"
              >
                <RotateCw className="mr-1 h-4 w-4" /> Lật thẻ
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={handleNextCard}
                className="text-xs font-semibold"
              >
                Từ tiếp (→) <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>

            {/* SRS Recall Grade */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-medium text-slate-400 mr-1">
                Đánh giá mức nhớ:
              </span>
              <button
                onClick={() => handleSrsRating(false)}
                className="rounded-xl border border-rose-200 bg-rose-50/50 px-3 py-1.5 text-xs font-bold text-rose-600 hover:bg-rose-100 dark:border-rose-900/60 dark:bg-rose-950/40 dark:text-rose-400 transition-colors"
              >
                Chưa nhớ
              </button>
              <button
                onClick={() => handleSrsRating(true)}
                className="rounded-xl border border-emerald-200 bg-emerald-50/50 px-3 py-1.5 text-xs font-bold text-emerald-600 hover:bg-emerald-100 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-400 transition-colors shadow-sm"
              >
                Đã thuộc (+10 XP)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* VIEW MODE 2: PAGINATED LIST VIEW */}
      {viewMode === 'list' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider">
            <span>
              Tìm thấy {filteredWords.length} từ vựng phù hợp
            </span>
            <span>
              Trang {currentPage} / {totalPages}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {paginatedWords.map((item) => (
              <Card
                key={item.id}
                className="p-4 border-slate-200 hover:border-primary-400 hover:shadow-md transition-all dark:border-slate-800"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">
                        {item.word}
                      </h4>
                      <Badge variant="outline" className="text-[10px] font-bold">
                        {item.difficultyLevel}
                      </Badge>
                      <span className="text-xs text-slate-400 font-mono">
                        {item.phonetic}
                      </span>
                    </div>
                    <div className="text-xs font-bold text-primary-700 dark:text-primary-400">
                      {item.meaningVi}
                    </div>
                  </div>
                  <button
                    onClick={() => handleSpeak(item.word)}
                    title="Nghe phát âm"
                    className="p-2 rounded-xl text-slate-400 hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-950/60 transition-colors"
                  >
                    <Volume2 className="h-4 w-4" />
                  </button>
                </div>

                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 italic">
                  "{item.definitionEn}"
                </p>

                <div className="mt-2 rounded-xl bg-slate-50 dark:bg-slate-800/40 p-2.5 text-xs space-y-1 border border-slate-100 dark:border-slate-800/60">
                  <div className="font-semibold text-slate-800 dark:text-slate-200">
                    {item.exampleEn}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                    {item.exampleVi}
                  </div>
                </div>

                {item.synonyms && item.synonyms.length > 0 && (
                  <div className="mt-2.5 flex items-center gap-1.5 flex-wrap">
                    <span className="text-[10px] text-slate-400 font-medium">Đồng nghĩa:</span>
                    {item.synonyms.map((s, idx) => (
                      <span
                        key={idx}
                        className="rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="pt-4 flex items-center justify-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="text-xs"
              >
                <ChevronLeft className="h-4 w-4 mr-1" /> Trang trước
              </Button>

              <div className="text-xs font-semibold text-slate-600 dark:text-slate-300 px-3">
                Trang {currentPage} / {totalPages}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="text-xs"
              >
                Trang tiếp <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          )}
        </div>
      )}

      {/* VIEW MODE 3: QUIZ MODE */}
      {viewMode === 'quiz' && quizQuestion && (
        <Card className="p-6 sm:p-8 max-w-2xl mx-auto space-y-6 border-slate-200 dark:border-slate-800 shadow-md">
          {/* Quiz Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-amber-500" />
              <span className="text-sm font-bold text-slate-800 dark:text-white">
                Trắc Nghiệm Ôn Tập Từ Vựng
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs font-bold">
              <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400">
                <Flame className="h-4 w-4" /> Streak: {quizStreak}
              </span>
              <span className="text-emerald-600 dark:text-emerald-400">
                Điểm đúng: {quizScore}
              </span>
            </div>
          </div>

          {/* Question Prompt */}
          <div className="text-center space-y-2 py-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Hãy chọn nghĩa Tiếng Việt chính xác nhất của từ:
            </span>
            <div className="flex items-center justify-center gap-3">
              <h3 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
                {quizQuestion.word.word}
              </h3>
              <button
                onClick={() => handleSpeak(quizQuestion.word.word)}
                className="p-2 rounded-full bg-primary-50 text-primary-600 hover:bg-primary-100 dark:bg-primary-950 dark:text-primary-300 transition-colors"
              >
                <Volume2 className="h-5 w-5" />
              </button>
            </div>
            <div className="text-xs font-mono text-slate-400">
              {quizQuestion.word.phonetic} • {quizQuestion.word.partOfSpeech} • {quizQuestion.word.difficultyLevel}
            </div>
          </div>

          {/* 4 Choices */}
          <div className="grid grid-cols-1 gap-2.5">
            {quizQuestion.options.map((option, idx) => {
              const isSelected = quizSelectedOption === option;
              const isCorrect = option === quizQuestion.correctAnswer;
              let btnStyle =
                'border-slate-200 hover:border-primary-400 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/60';

              if (isQuizAnswered) {
                if (isCorrect) {
                  btnStyle =
                    'border-emerald-500 bg-emerald-50 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-200 font-bold';
                } else if (isSelected && !isCorrect) {
                  btnStyle =
                    'border-rose-500 bg-rose-50 text-rose-800 dark:bg-rose-950/60 dark:text-rose-200 font-bold';
                } else {
                  btnStyle = 'opacity-50 border-slate-200 dark:border-slate-800';
                }
              }

              return (
                <button
                  key={idx}
                  disabled={isQuizAnswered}
                  onClick={() => handleQuizAnswer(option)}
                  className={`w-full p-4 rounded-2xl border text-left text-xs sm:text-sm font-semibold transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                >
                  <span>{option}</span>
                  {isQuizAnswered && isCorrect && (
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  )}
                  {isQuizAnswered && isSelected && !isCorrect && (
                    <XCircle className="h-5 w-5 text-rose-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation & Next Button */}
          {isQuizAnswered && (
            <div className="pt-2 flex items-center justify-between gap-4 animate-in fade-in">
              <div className="text-xs text-slate-500 italic max-w-sm">
                "{quizQuestion.word.exampleEn}"
              </div>
              <Button variant="primary" size="sm" onClick={handleNextQuiz} className="shrink-0">
                Câu tiếp theo <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          )}
        </Card>
      )}
    </div>
  );
};
