import React, { useState } from 'react';
import {
  Volume2,
  BrainCircuit,
  RotateCw,
  CheckCircle2,
  Sparkles,
  BookOpen,
  Filter,
  Check,
  X,
  ArrowRight,
  RotateCcw,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { VocabularyWord, VocabularyTopic } from '@/types';
import { speakEnglish } from '@/lib/speech';
import { sounds, playCelebration } from '@/lib/utils';
import { useAuthStore } from '@/stores/useAuthStore';

export const VocabularySystem: React.FC = () => {
  const { updateStats } = useAuthStore();
  const [selectedTopic, setSelectedTopic] = useState<string>('topic-travel');
  const [viewMode, setViewMode] = useState<'flashcard' | 'quiz' | 'srs'>('flashcard');
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Quiz state
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [quizScore, setQuizScore] = useState(0);

  const topics: VocabularyTopic[] = [
    { id: 'topic-travel', title: 'Du Lịch & Khách Sạn', slug: 'travel', icon: '✈️', description: 'Sân bay, làm thủ tục, đặt phòng & chỉ đường', wordCount: 45 },
    { id: 'topic-business', title: 'Tiếng Anh Công Sở & Business', slug: 'business', icon: '💼', description: 'Đàm phán, email chuyên nghiệp, họp hành & báo cáo', wordCount: 60 },
    { id: 'topic-tech', title: 'Công Nghệ & AI (Technology)', slug: 'tech', icon: '💻', description: 'Phần mềm, dữ liệu, lập trình & trí tuệ nhân tạo', wordCount: 50 },
    { id: 'topic-daily', title: 'Giao Tiếp Hàng Ngày', slug: 'daily', icon: '☕', description: 'Chào hỏi, mua sắm, ẩm thực & các mối quan hệ', wordCount: 80 },
    { id: 'topic-finance', title: 'Tài Chính & Ngân Hàng', slug: 'finance', icon: '💳', description: 'Đầu tư, thanh toán, tài khoản & thị trường', wordCount: 40 },
    { id: 'topic-academic', title: 'Học Thuật & Nghiên Cứu', slug: 'academic', icon: '📚', description: 'Luận điểm, phân tích, phương pháp & phản biện', wordCount: 55 },
  ];

  const words: Record<string, VocabularyWord[]> = {
    'topic-travel': [
      {
        id: 'v1',
        topicId: 'topic-travel',
        word: 'Itinerary',
        phonetic: '/aɪˈtɪn.ə.rer.i/',
        meaningVi: 'Lịch trình chuyến đi chi tiết',
        definitionEn: 'A detailed plan or route of a journey.',
        exampleEn: 'We must finalize our travel itinerary before booking the flights.',
        exampleVi: 'Chúng ta phải chốt lịch trình du lịch trước khi đặt vé máy bay.',
        partOfSpeech: 'Noun',
        difficultyLevel: 'B2',
        synonyms: ['Schedule', 'Travel plan'],
        srsState: 'Learning',
      },
      {
        id: 'v2',
        topicId: 'topic-travel',
        word: 'Embark',
        phonetic: '/ɪmˈbɑːrk/',
        meaningVi: 'Lên tàu / bắt đầu chuyến hành trình mới',
        definitionEn: 'To go on board a ship, aircraft, or other vehicle; to begin a journey.',
        exampleEn: 'Passengers are requested to embark immediately at Gate 12.',
        exampleVi: 'Hành khách được yêu cầu lên tàu bay ngay lập tức tại Cửa số 12.',
        partOfSpeech: 'Verb',
        difficultyLevel: 'C1',
        synonyms: ['Board', 'Set out'],
        srsState: 'Review',
      },
      {
        id: 'v3',
        topicId: 'topic-travel',
        word: 'Accommodation',
        phonetic: '/əˌkɑː.məˈdeɪ.ʃən/',
        meaningVi: 'Chỗ ở, phòng nghỉ lưu trú',
        definitionEn: 'A place where you live or stay, especially when traveling.',
        exampleEn: 'The resort provides luxurious accommodation overlooking the sea.',
        exampleVi: 'Khu nghỉ dưỡng cung cấp chỗ ở sang trọng nhìn ra biển.',
        partOfSpeech: 'Noun',
        difficultyLevel: 'B1',
        synonyms: ['Lodging', 'Housing'],
        srsState: 'Mastered',
      },
      {
        id: 'v4',
        topicId: 'topic-travel',
        word: 'Customs',
        phonetic: '/ˈkʌs.təmz/',
        meaningVi: 'Hải quan, kiểm soát biên giới',
        definitionEn: 'The place at a port, airport, or frontier where officials check incoming goods.',
        exampleEn: 'It took forty minutes to declare our luggage at customs.',
        exampleVi: 'Mất bốn mươi phút để khai báo hành lý tại quầy hải quan.',
        partOfSpeech: 'Noun',
        difficultyLevel: 'B1',
        synonyms: ['Border control'],
        srsState: 'New',
      },
    ],
    'topic-business': [
      {
        id: 'v5',
        topicId: 'topic-business',
        word: 'Consensus',
        phonetic: '/kənˈsen.səs/',
        meaningVi: 'Sự đồng thuận chung, nhất trí',
        definitionEn: 'A generally accepted opinion or decision among a group of people.',
        exampleEn: 'The board finally reached a consensus on the new marketing budget.',
        exampleVi: 'Ban giám đốc cuối cùng đã đạt được sự đồng thuận về ngân sách tiếp thị mới.',
        partOfSpeech: 'Noun',
        difficultyLevel: 'C1',
        synonyms: ['Agreement', 'Harmony'],
        srsState: 'Learning',
      },
      {
        id: 'v6',
        topicId: 'topic-business',
        word: 'Feasibility',
        phonetic: '/ˌfiː.zəˈbɪl.ə.t̬i/',
        meaningVi: 'Tính khả thi của dự án',
        definitionEn: 'The possibility that can be made, done, or achieved, or is reasonable.',
        exampleEn: 'We conducted a comprehensive study to evaluate the project feasibility.',
        exampleVi: 'Chúng tôi đã tiến hành một nghiên cứu toàn diện để đánh giá tính khả thi của dự án.',
        partOfSpeech: 'Noun',
        difficultyLevel: 'B2',
        synonyms: ['Viability', 'Practicability'],
        srsState: 'Review',
      },
    ],
  };

  const currentWordsList = words[selectedTopic] || words['topic-travel'];
  const currentCard = currentWordsList[cardIndex] || currentWordsList[0];

  const handleSpeak = (text: string) => {
    speakEnglish(text);
  };

  const handleNextCard = () => {
    sounds.playClick();
    setIsFlipped(false);
    if (cardIndex + 1 < currentWordsList.length) {
      setCardIndex(cardIndex + 1);
    } else {
      setCardIndex(0);
    }
  };

  const handleSrsReview = (quality: 'Again' | 'Hard' | 'Good' | 'Easy') => {
    sounds.playCoin();
    playCelebration();
    updateStats(15, 1, 10);
    handleNextCard();
  };

  return (
    <div className="space-y-6">
      {/* Header and View Mode Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary-600" /> Hệ Thống Học Từ Vựng Chuyên Sâu
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Học chuẩn IPA, ví dụ song ngữ và ôn tập lặp lại ngắt quãng theo thuật toán SRS SM-2
          </p>
        </div>

        <div className="flex gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
          <Button
            variant={viewMode === 'flashcard' ? 'primary' : 'ghost'}
            size="sm"
            onClick={() => setViewMode('flashcard')}
            className="text-xs font-bold"
          >
            Thẻ Flashcard
          </Button>
          <Button
            variant={viewMode === 'quiz' ? 'primary' : 'ghost'}
            size="sm"
            onClick={() => setViewMode('quiz')}
            className="text-xs font-bold"
          >
            Trắc Nghiệm
          </Button>
          <Button
            variant={viewMode === 'srs' ? 'primary' : 'ghost'}
            size="sm"
            onClick={() => setViewMode('srs')}
            className="text-xs font-bold"
          >
            Sổ Từ Vựng SRS
          </Button>
        </div>
      </div>

      {/* Topic Horizontal Selector */}
      <div className="flex items-center gap-3 overflow-x-auto pb-2">
        {topics.map((t) => (
          <button
            key={t.id}
            onClick={() => {
              sounds.playClick();
              setSelectedTopic(t.id);
              setCardIndex(0);
              setIsFlipped(false);
            }}
            className={`flex items-center gap-2 shrink-0 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedTopic === t.id
                ? 'bg-primary-600 text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800'
            }`}
          >
            <span className="text-base">{t.icon}</span>
            <span>{t.title}</span>
            <span className="text-[10px] opacity-75">({t.wordCount})</span>
          </button>
        ))}
      </div>

      {/* FLASHCARD MODE */}
      {viewMode === 'flashcard' && (
        <div className="max-w-xl mx-auto space-y-6">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500">
            <span>Thẻ {cardIndex + 1} / {currentWordsList.length}</span>
            <Badge variant="outline">{currentCard.difficultyLevel} • {currentCard.partOfSpeech}</Badge>
          </div>

          {/* Flip Card */}
          <div
            onClick={() => {
              sounds.playClick();
              setIsFlipped(!isFlipped);
            }}
            className="min-h-80 w-full cursor-pointer rounded-3xl border-2 border-primary-200 bg-white p-8 text-center shadow-xl transition-all duration-300 hover:shadow-2xl dark:border-primary-900/60 dark:bg-slate-900 flex flex-col justify-between"
          >
            {!isFlipped ? (
              /* Front Side */
              <div className="my-auto space-y-4">
                <span className="inline-block rounded-full bg-primary-50 px-3 py-1 text-xs font-bold text-primary-700 dark:bg-primary-950 dark:text-primary-300">
                  Chạm vào thẻ để xem nghĩa tiếng Việt & ví dụ
                </span>
                <h3 className="text-4xl font-black text-slate-900 dark:text-white tracking-wide">
                  {currentCard.word}
                </h3>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-slate-500 font-mono text-base">{currentCard.phonetic}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSpeak(currentCard.word);
                    }}
                    className="h-8 w-8 rounded-full bg-primary-100 text-primary-700 hover:bg-primary-200 flex items-center justify-center transition-colors dark:bg-primary-950 dark:text-primary-300"
                  >
                    <Volume2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ) : (
              /* Back Side */
              <div className="my-auto space-y-4 animate-in fade-in">
                <Badge variant="success" className="text-xs">Định nghĩa & Nghĩa Tiếng Việt</Badge>
                <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
                  {currentCard.meaningVi}
                </div>
                <p className="text-xs text-slate-500 italic max-w-md mx-auto">
                  "{currentCard.definitionEn}"
                </p>

                <div className="rounded-2xl bg-slate-50 p-4 text-left border border-slate-100 dark:bg-slate-800/60 dark:border-slate-800 space-y-1.5">
                  <div className="text-xs font-bold text-primary-600 flex items-center gap-1.5">
                    Ví dụ câu thực tế:
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSpeak(currentCard.exampleEn);
                      }}
                      className="text-slate-400 hover:text-primary-600"
                    >
                      <Volume2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <div className="text-xs font-medium text-slate-900 dark:text-white">
                    {currentCard.exampleEn}
                  </div>
                  <div className="text-xs text-slate-500">
                    {currentCard.exampleVi}
                  </div>
                </div>
              </div>
            )}

            <div className="text-[11px] text-slate-400 font-medium">
              Phương pháp phản xạ tích cực Lingora SRS
            </div>
          </div>

          {/* SM-2 Recall Feedback Buttons */}
          <div className="space-y-2">
            <div className="text-center text-xs font-bold text-slate-400 uppercase tracking-wider">
              Đánh giá mức độ nhớ của bạn:
            </div>
            <div className="grid grid-cols-4 gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleSrsReview('Again')}
                className="border-rose-300 text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950 text-xs font-bold py-2.5"
              >
                Chưa nhớ (1 ngày)
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleSrsReview('Hard')}
                className="border-amber-300 text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950 text-xs font-bold py-2.5"
              >
                Khó (3 ngày)
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleSrsReview('Good')}
                className="border-blue-300 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 text-xs font-bold py-2.5"
              >
                Tốt (7 ngày)
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleSrsReview('Easy')}
                className="border-emerald-300 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950 text-xs font-bold py-2.5"
              >
                Dễ (14 ngày)
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* QUIZ MODE */}
      {viewMode === 'quiz' && (
        <Card className="max-w-xl mx-auto p-6 text-center space-y-6">
          <Badge variant="primary">Trắc Nghiệm Nhanh Từ Vựng</Badge>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Từ tiếng Anh nào có nghĩa là: <strong>"{currentCard.meaningVi}"</strong>?
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentWordsList.map((w) => {
              const isSelected = selectedAnswer === w.word;
              const isCorrect = w.word === currentCard.word;

              let style = 'border-slate-200 hover:border-primary-400 bg-white dark:bg-slate-800';
              if (selectedAnswer) {
                if (isCorrect) style = 'border-emerald-500 bg-emerald-100 text-emerald-900 font-bold';
                else if (isSelected) style = 'border-rose-500 bg-rose-100 text-rose-900 font-bold';
              }

              return (
                <button
                  key={w.id}
                  onClick={() => {
                    sounds.playClick();
                    setSelectedAnswer(w.word);
                    if (isCorrect) {
                      sounds.playSuccess();
                      setQuizScore((s) => s + 25);
                    } else {
                      sounds.playError();
                    }
                  }}
                  disabled={Boolean(selectedAnswer)}
                  className={`p-4 rounded-2xl border-2 font-bold text-sm transition-all ${style}`}
                >
                  {w.word}
                </button>
              );
            })}
          </div>

          {selectedAnswer && (
            <div className="pt-2">
              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  setSelectedAnswer(null);
                  handleNextCard();
                }}
              >
                Câu tiếp theo <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
            </div>
          )}
        </Card>
      )}

      {/* SRS QUEUE MODE */}
      {viewMode === 'srs' && (
        <Card className="p-6">
          <CardHeader className="pb-4">
            <CardTitle className="text-base font-bold flex items-center gap-2">
              <BrainCircuit className="h-5 w-5 text-primary-600" /> Sổ Theo Dõi Trạng Thái Từ Vựng SRS
            </CardTitle>
            <p className="text-xs text-slate-500">
              Thuật toán SM-2 tự động phân loại từ theo chu kỳ quên và đưa ra lịch ôn tập tối ưu
            </p>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400 uppercase text-[10px]">
                    <th className="py-2.5 px-3">Từ Vựng</th>
                    <th className="py-2.5 px-3">Phiên Âm</th>
                    <th className="py-2.5 px-3">Nghĩa Tiếng Việt</th>
                    <th className="py-2.5 px-3">Cấp Độ</th>
                    <th className="py-2.5 px-3">Trạng Thái SRS</th>
                    <th className="py-2.5 px-3 text-right">Phát Âm</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {currentWordsList.map((w) => (
                    <tr key={w.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                      <td className="py-3 px-3 font-bold text-slate-900 dark:text-white">{w.word}</td>
                      <td className="py-3 px-3 text-slate-500 font-mono">{w.phonetic}</td>
                      <td className="py-3 px-3 font-semibold text-slate-800 dark:text-slate-200">{w.meaningVi}</td>
                      <td className="py-3 px-3"><Badge variant="outline">{w.difficultyLevel}</Badge></td>
                      <td className="py-3 px-3">
                        <Badge
                          variant={
                            w.srsState === 'Mastered'
                              ? 'success'
                              : w.srsState === 'Review'
                              ? 'warning'
                              : 'primary'
                          }
                        >
                          {w.srsState}
                        </Badge>
                      </td>
                      <td className="py-3 px-3 text-right">
                        <button
                          onClick={() => handleSpeak(w.word)}
                          className="h-7 w-7 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 inline-flex items-center justify-center text-slate-600 dark:text-slate-300"
                        >
                          <Volume2 className="h-3.5 w-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
