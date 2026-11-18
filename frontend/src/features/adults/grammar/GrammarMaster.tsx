import React, { useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  XCircle,
  Sparkles,
  AlertTriangle,
  ArrowRight,
  RotateCcw,
  GraduationCap,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { GrammarLesson } from '@/types';
import { sounds, playCelebration } from '@/lib/utils';
import { useAuthStore } from '@/stores/useAuthStore';

export const GrammarMaster: React.FC = () => {
  const { updateStats } = useAuthStore();
  const [selectedLevel, setSelectedLevel] = useState<'Beginner' | 'Intermediate' | 'Advanced'>('Intermediate');
  const [selectedLessonId, setSelectedLessonId] = useState<string>('g-present-perfect');

  // Exercise quiz state
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const lessons: GrammarLesson[] = [
    {
      id: 'g-present-simple',
      level: 'Beginner',
      title: 'Present Simple Tense',
      vietnameseTitle: 'Thì Hiện Tại Đơn',
      formula: 'S + V(s/es) + O | S + do/does + not + V_inf',
      explanationVi:
        'Thì hiện tại đơn được dùng để diễn tả một chân lý hiển nhiên, một thói quen hoặc hành động lặp đi lặp lại trong cuộc sống thường nhật.',
      examples: [
        { en: 'The sun rises in the east.', vi: 'Mặt trời mọc ở hướng đông (chân lý).' },
        { en: 'She usually drinks coffee every morning.', vi: 'Cô ấy thường uống cà phê vào mỗi buổi sáng (thói quen).' },
      ],
      commonMistakes: [
        {
          incorrect: 'He go to work by bus.',
          correct: 'He goes to work by bus.',
          explanation: 'Chủ ngữ ngôi thứ 3 số ít (He/She/It) thì động từ phải thêm -s hoặc -es.',
        },
      ],
      exercises: [
        {
          id: 'ex-1',
          question: 'My brother ______ English every evening.',
          options: ['study', 'studies', 'is studying', 'studied'],
          correctIndex: 1,
          explanationVi: 'My brother là ngôi thứ 3 số ít, động từ "study" đổi y thành i rồi thêm -es: "studies".',
        },
        {
          id: 'ex-2',
          question: 'They ______ coffee in the afternoon.',
          options: ["doesn't drink", "don't drink", 'not drink', "aren't drinking"],
          correctIndex: 1,
          explanationVi: 'Chủ ngữ "They" dùng trợ động từ "do not" (don\'t) ở thể phủ định.',
        },
      ],
    },
    {
      id: 'g-present-perfect',
      level: 'Intermediate',
      title: 'Present Perfect Tense',
      vietnameseTitle: 'Thì Hiện Tại Hoàn Thành',
      formula: 'S + have/has + V3/ed + O',
      explanationVi:
        'Diễn tả hành động đã xảy ra trong quá khứ nhưng không nêu rõ thời điểm, hoặc hành động bắt đầu từ quá khứ và vẫn còn tiếp diễn / để lại kết quả ở hiện tại.',
      examples: [
        { en: 'I have lived in Hanoi for five years.', vi: 'Tôi đã sống ở Hà Nội được 5 năm (và hiện tại vẫn đang sống).' },
        { en: 'She has just finished her master thesis.', vi: 'Cô ấy vừa mới hoàn thành luận văn thạc sĩ (hành động vừa mới xảy ra).' },
      ],
      commonMistakes: [
        {
          incorrect: 'I have visited Paris yesterday.',
          correct: 'I visited Paris yesterday.',
          explanation: 'Có mốc thời gian quá khứ xác định ("yesterday") thì PHẢI dùng Quá khứ đơn (Past Simple), không dùng Hiện tại hoàn thành.',
        },
      ],
      exercises: [
        {
          id: 'ex-3',
          question: 'We ______ in this technology company since 2021.',
          options: ['worked', 'have worked', 'work', 'are working'],
          correctIndex: 1,
          explanationVi: 'Có dấu hiệu "since 2021" biểu thị mốc thời gian bắt đầu trong quá khứ kéo dài đến nay, dùng Hiện tại hoàn thành.',
        },
        {
          id: 'ex-4',
          question: 'Have you ever ______ sushi before?',
          options: ['eat', 'ate', 'eaten', 'eating'],
          correctIndex: 2,
          explanationVi: 'Sau trợ động từ Have ở thì hoàn thành cần dạng quá khứ phân từ V3 của eat: "eaten".',
        },
      ],
    },
    {
      id: 'g-inversion',
      level: 'Advanced',
      title: 'Grammar Inversion',
      vietnameseTitle: 'Hiện Tượng Đảo Ngữ Nâng Cao (C1-C2)',
      formula: 'Negative Adverb + Auxiliary Verb + S + Main Verb',
      explanationVi:
        'Đảo ngữ là việc đưa trợ động từ lên trước chủ ngữ nhằm mục đích nhấn mạnh. Thường xuất hiện sau các trạng từ phủ định như Seldom, Rarely, Hardly, Not only,...',
      examples: [
        { en: 'Rarely have I witnessed such profound resilience.', vi: 'Hiếm khi nào tôi được chứng kiến sự kiên cường sâu sắc đến vậy.' },
        { en: 'Not only did she pass the exam, but she also scored top rank.', vi: 'Cô ấy không những vượt qua kỳ thi mà còn đạt thủ khoa.' },
      ],
      commonMistakes: [
        {
          incorrect: 'Hardly I had arrived when it began to rain.',
          correct: 'Hardly had I arrived when it began to rain.',
          explanation: 'Khi "Hardly" đứng đầu câu nhấn mạnh, trợ động từ "had" phải đảo lên trước chủ ngữ "I".',
        },
      ],
      exercises: [
        {
          id: 'ex-5',
          question: 'Seldom ______ such an eloquent presentation.',
          options: ['I have heard', 'have I heard', 'I heard', 'had I hear'],
          correctIndex: 1,
          explanationVi: 'Đảo ngữ với trạng từ Seldom đứng đầu câu: Seldom + have + I + heard.',
        },
      ],
    },
  ];

  const currentLesson = lessons.find((l) => l.id === selectedLessonId) || lessons[1];

  const handleSelectOption = (exerciseId: string, optionIdx: number) => {
    if (submitted) return;
    sounds.playClick();
    setUserAnswers({ ...userAnswers, [exerciseId]: optionIdx });
  };

  const handleSubmitExercises = () => {
    let correctCount = 0;
    currentLesson.exercises.forEach((ex) => {
      if (userAnswers[ex.id] === ex.correctIndex) {
        correctCount++;
      }
    });

    setScore(correctCount);
    setSubmitted(true);

    if (correctCount === currentLesson.exercises.length) {
      sounds.playSuccess();
      playCelebration();
      updateStats(40, 2, 20);
    } else {
      sounds.playError();
    }
  };

  const handleResetExercises = () => {
    setUserAnswers({});
    setSubmitted(false);
    setScore(0);
  };

  return (
    <div className="space-y-6">
      {/* Header & Level Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary-600" /> Ngữ Pháp Tiếng Anh Toàn Diện
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Giải thích bằng tiếng Việt dễ hiểu, công thức chuẩn, ví dụ minh họa & chữa lỗi sai phổ biến
          </p>
        </div>

        {/* Level Selector */}
        <div className="flex gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
          {(['Beginner', 'Intermediate', 'Advanced'] as const).map((lvl) => (
            <Button
              key={lvl}
              variant={selectedLevel === lvl ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => {
                sounds.playClick();
                setSelectedLevel(lvl);
                const firstMatching = lessons.find((l) => l.level === lvl);
                if (firstMatching) {
                  setSelectedLessonId(firstMatching.id);
                  handleResetExercises();
                }
              }}
              className="text-xs font-bold"
            >
              {lvl === 'Beginner' ? 'Cơ Bản' : lvl === 'Intermediate' ? 'Trung Cấp' : 'Nâng Cao'}
            </Button>
          ))}
        </div>
      </div>

      {/* Main Content Layout: Sidebar Lessons List + Active Lesson View */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left: Lessons List */}
        <div className="space-y-2">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1 mb-2">
            Bài Học ({selectedLevel})
          </div>
          {lessons
            .filter((l) => l.level === selectedLevel)
            .map((lesson) => {
              const isSelected = selectedLessonId === lesson.id;
              return (
                <button
                  key={lesson.id}
                  onClick={() => {
                    sounds.playClick();
                    setSelectedLessonId(lesson.id);
                    handleResetExercises();
                  }}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all ${
                    isSelected
                      ? 'border-primary-500 bg-primary-50 text-primary-900 font-bold dark:bg-primary-950/60 dark:text-primary-200'
                      : 'border-slate-200 hover:border-slate-300 bg-white dark:border-slate-800 dark:bg-slate-900'
                  }`}
                >
                  <div className="text-xs text-primary-600 font-semibold">{lesson.title}</div>
                  <div className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-0.5">
                    {lesson.vietnameseTitle}
                  </div>
                </button>
              );
            })}
        </div>

        {/* Right: Active Lesson Explanation + Interactive Exercises */}
        <div className="lg:col-span-3 space-y-6">
          <Card className="p-6 space-y-6">
            {/* Title & Formula */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="primary">{currentLesson.level}</Badge>
                <span className="text-xs text-slate-400">{currentLesson.title}</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {currentLesson.vietnameseTitle}
              </h3>

              {currentLesson.formula && (
                <div className="mt-3 inline-block rounded-xl border border-primary-200 bg-primary-50/70 px-4 py-2 text-xs font-mono font-bold text-primary-800 dark:border-primary-900 dark:bg-primary-950 dark:text-primary-300">
                  ⚡ Công thức: {currentLesson.formula}
                </div>
              )}
            </div>

            {/* Vietnamese Explanation */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Bản Chất & Cách Dùng:
              </h4>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {currentLesson.explanationVi}
              </p>
            </div>

            {/* Examples */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Ví Dụ Minh Họa Song Ngữ:
              </h4>
              <div className="space-y-2">
                {currentLesson.examples.map((ex, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs">
                    <div className="font-bold text-slate-900 dark:text-white">{ex.en}</div>
                    <div className="text-slate-500 mt-0.5">{ex.vi}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Common Mistakes */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-500 mb-2 flex items-center gap-1.5">
                <AlertTriangle className="h-4 w-4" /> Lỗi Sai Thường Gặp Cần Tránh:
              </h4>
              <div className="space-y-2">
                {currentLesson.commonMistakes.map((m, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl border border-rose-200 bg-rose-50/40 text-xs dark:border-rose-900/50 dark:bg-rose-950/20">
                    <div className="flex items-center gap-2 text-rose-600 font-semibold line-through">
                      <XCircle className="h-3.5 w-3.5 shrink-0" /> {m.incorrect}
                    </div>
                    <div className="flex items-center gap-2 text-emerald-600 font-bold mt-1">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0" /> {m.correct}
                    </div>
                    <div className="text-slate-600 dark:text-slate-400 mt-1 pl-5">
                      💡 <strong>Giải thích:</strong> {m.explanation}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Interactive Exercise Section */}
          <Card className="p-6">
            <CardHeader className="px-0 pt-0 pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-base font-bold flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-amber-500" /> Bài Tập Thực Hành Tương Tác
                  </CardTitle>
                  <p className="text-xs text-slate-500">Áp dụng ngay kiến thức vừa học để khắc sâu phản xạ</p>
                </div>
                {submitted && (
                  <Badge variant={score === currentLesson.exercises.length ? 'success' : 'warning'}>
                    Đúng {score} / {currentLesson.exercises.length} câu
                  </Badge>
                )}
              </div>
            </CardHeader>

            <CardContent className="px-0 pb-0 space-y-6">
              {currentLesson.exercises.map((ex, exIdx) => {
                const userChoice = userAnswers[ex.id];
                return (
                  <div key={ex.id} className="space-y-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                    <div className="text-xs font-bold text-primary-600">CÂU {exIdx + 1}:</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">{ex.question}</div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {ex.options.map((opt, optIdx) => {
                        const isChosen = userChoice === optIdx;
                        const isCorrect = optIdx === ex.correctIndex;

                        let style = 'border-slate-200 bg-white hover:border-slate-300 dark:bg-slate-800 dark:border-slate-700';
                        if (submitted) {
                          if (isCorrect) style = 'border-emerald-500 bg-emerald-100 text-emerald-900 font-bold';
                          else if (isChosen) style = 'border-rose-500 bg-rose-100 text-rose-900 font-bold';
                        } else if (isChosen) {
                          style = 'border-primary-500 bg-primary-50 text-primary-900 font-bold';
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={submitted}
                            onClick={() => handleSelectOption(ex.id, optIdx)}
                            className={`p-3 rounded-xl border text-left text-xs font-medium transition-all ${style}`}
                          >
                            <span className="inline-block w-5 font-bold text-slate-400">
                              {String.fromCharCode(65 + optIdx)}.
                            </span>
                            {opt}
                          </button>
                        );
                      })}
                    </div>

                    {submitted && (
                      <div className="mt-2 text-xs text-slate-600 dark:text-slate-300 bg-white/70 dark:bg-slate-900/70 p-2.5 rounded-lg border border-slate-200 dark:border-slate-700">
                        💡 <strong>Giải thích chi tiết:</strong> {ex.explanationVi}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="flex justify-end gap-3 pt-2">
                {submitted ? (
                  <Button variant="outline" size="sm" onClick={handleResetExercises}>
                    <RotateCcw className="mr-1.5 h-3.5 w-3.5" /> Làm Lại Bài Tập
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={handleSubmitExercises}
                    disabled={Object.keys(userAnswers).length === 0}
                  >
                    Kiểm Tra Kết Quả
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
