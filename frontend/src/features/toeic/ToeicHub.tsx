import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Target,
  Headphones,
  BookOpen,
  Volume2,
  CheckCircle2,
  XCircle,
  Play,
  RotateCcw,
  Sparkles,
  TrendingUp,
  Clock,
  Award,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Progress } from '@/components/ui/Progress';
import { ToeicQuestion } from '@/types';
import { speakEnglish } from '@/lib/speech';
import { sounds, playCelebration } from '@/lib/utils';
import { useAuthStore } from '@/stores/useAuthStore';

export const ToeicHub: React.FC = () => {
  const { user, updateStats } = useAuthStore();
  const [activeTab, setActiveTab] = useState<'listening' | 'reading' | 'vocab'>('listening');
  const [activePart, setActivePart] = useState<number>(1);

  // Practice state
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);

  // Sample realistic TOEIC questions
  const questions: ToeicQuestion[] = [
    {
      id: 'toeic-p1-1',
      partNumber: 1,
      questionNumber: 1,
      imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
      questionText: 'Look at the picture and listen to the four statements. Select the statement that best describes what you see in the picture.',
      options: [
        { label: 'A', text: 'Some laptops are arranged on the conference table.' },
        { label: 'B', text: 'People are walking out of the presentation hall.' },
        { label: 'C', text: 'The curtains are being closed by the cleaner.' },
        { label: 'D', text: 'The chairs are stacked in the corner of the room.' },
      ],
      correctAnswer: 'A',
      explanationVi: 'Đáp án A đúng vì trong bức ảnh có một số máy tính xách tay (laptops) được đặt ngay ngắn trên bàn họp trong phòng hội nghị.',
      transcriptEn: '(A) Some laptops are arranged on the conference table. (B) People are walking out of the presentation hall. (C) The curtains are being closed by the cleaner. (D) The chairs are stacked in the corner of the room.',
      vocabularyList: [
        { word: 'Arrange', meaning: 'Sắp xếp, bố trí' },
        { word: 'Conference', meaning: 'Hội nghị, cuộc họp' },
      ],
    },
    {
      id: 'toeic-p2-1',
      partNumber: 2,
      questionNumber: 7,
      questionText: 'Listen to the question: "When will the quarterly financial report be published?"',
      options: [
        { label: 'A', text: 'By the end of this week, according to Mr. Henderson.' },
        { label: 'B', text: 'Yes, I read the article yesterday.' },
        { label: 'C', text: 'At the downtown convention center.' },
      ],
      correctAnswer: 'A',
      explanationVi: 'Câu hỏi bắt đầu bằng từ để hỏi thời gian "When" (Khi nào). Đáp án A "By the end of this week" (Vào cuối tuần này) trả lời trực tiếp cho thời gian.',
      transcriptEn: 'Question: "When will the quarterly financial report be published?" -> (A) By the end of this week, according to Mr. Henderson. (B) Yes, I read the article yesterday. (C) At the downtown convention center.',
      vocabularyList: [
        { word: 'Quarterly', meaning: 'Hàng quý (3 tháng một lần)' },
        { word: 'Publish', meaning: 'Xuất bản, công bố' },
      ],
    },
    {
      id: 'toeic-p5-1',
      partNumber: 5,
      questionNumber: 101,
      questionText: 'All employees are required to submit ______ expense reports before the final Friday of the month.',
      options: [
        { label: 'A', text: 'they' },
        { label: 'B', text: 'their' },
        { label: 'C', text: 'theirs' },
        { label: 'D', text: 'them' },
      ],
      correctAnswer: 'B',
      explanationVi: 'Trước cụm danh từ "expense reports" (báo cáo chi tiêu), ta cần một tính từ sở hữu. Do đó "their" (của họ) là đáp án chính xác.',
      vocabularyList: [
        { word: 'Expense report', meaning: 'Báo cáo chi phí/chi tiêu' },
        { word: 'Submit', meaning: 'Nộp, đệ trình' },
      ],
    },
    {
      id: 'toeic-p7-1',
      partNumber: 7,
      questionNumber: 147,
      passageText: 'MEMORANDUM\nTo: All Marketing Personnel\nFrom: Sarah Jenkins, Director of Operations\nDate: October 14\nSubject: Office Relocation Schedule\n\nPlease be advised that our regional marketing branch will relocate to the 8th floor of the Pacific Tower beginning next Monday. All employees must pack their personal belongings and label their storage boxes by Friday at 5:00 PM. High-priority client files must be handed directly to team supervisors.',
      questionText: 'What are marketing employees instructed to do by Friday at 5:00 PM?',
      options: [
        { label: 'A', text: 'Sign the new lease contract' },
        { label: 'B', text: 'Pack their personal items and label boxes' },
        { label: 'C', text: 'Meet with foreign clients at Pacific Tower' },
        { label: 'D', text: 'Submit budget revisions to the Director' },
      ],
      correctAnswer: 'B',
      explanationVi: 'Căn cứ vào câu: "All employees must pack their personal belongings and label their storage boxes by Friday at 5:00 PM", đáp án B là hoàn toàn chính xác.',
      vocabularyList: [
        { word: 'Relocate', meaning: 'Di dời địa điểm văn phòng' },
        { word: 'Belongings', meaning: 'Đồ dùng cá nhân' },
      ],
    },
  ];

  const filteredQuestions = questions.filter((q) => {
    if (activeTab === 'listening') return q.partNumber <= 4;
    return q.partNumber >= 5;
  });

  const handleSelectAnswer = (qId: string, label: 'A' | 'B' | 'C' | 'D') => {
    if (isSubmitted) return;
    sounds.playClick();
    setSelectedAnswers({ ...selectedAnswers, [qId]: label });
  };

  const handleSubmit = () => {
    sounds.playSuccess();
    playCelebration();
    setIsSubmitted(true);
    setShowTranscript(true);
    updateStats(50, 3, 30);
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setShowTranscript(false);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner & TOEIC Score Projection */}
      <div className="rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-700 p-6 sm:p-8 text-white shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary" className="bg-white/20 text-white border-none font-bold">
                LỘ TRÌNH TOEIC ETS CHUYÊN SÂU
              </Badge>
              <span className="text-xs font-semibold text-emerald-200">Chuẩn format 2026</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Trung Tâm Luyện Thi TOEIC 850+
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-emerald-100 max-w-xl">
              Luyện từng Part chuyên sâu (Listening Part 1-4 & Reading Part 5-7), tra từ vựng trực tiếp và làm đề thi bấm giờ thực tế.
            </p>
          </div>

          {/* Predicted Score Card */}
          <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-md border border-white/20 shrink-0">
            <div>
              <div className="text-[11px] font-bold text-emerald-200 uppercase tracking-wider">
                Ước tính điểm hiện tại:
              </div>
              <div className="text-3xl font-black tracking-tight">
                785 <span className="text-sm font-semibold text-emerald-200">/ 990</span>
              </div>
              <div className="text-[10px] text-emerald-100 mt-0.5">
                Listening: 410 • Reading: 375
              </div>
            </div>
            <Link to="/test-center">
              <Button variant="kids" size="sm" className="bg-amber-400 text-amber-950 font-bold text-xs">
                Thi thử Full Test
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Part Navigation Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-2 border-b border-slate-200 dark:border-slate-800">
        <div className="flex gap-2">
          <Button
            variant={activeTab === 'listening' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => {
              sounds.playClick();
              setActiveTab('listening');
              handleReset();
            }}
            className="text-xs font-bold"
          >
            <Headphones className="mr-1.5 h-4 w-4" /> Listening (Part 1 - 4)
          </Button>
          <Button
            variant={activeTab === 'reading' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => {
              sounds.playClick();
              setActiveTab('reading');
              handleReset();
            }}
            className="text-xs font-bold"
          >
            <BookOpen className="mr-1.5 h-4 w-4" /> Reading (Part 5 - 7)
          </Button>
        </div>

        <div className="text-xs text-slate-500 font-semibold">
          {filteredQuestions.length} câu hỏi luyện tập tiêu biểu
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-6">
        {filteredQuestions.map((q) => {
          const userChoice = selectedAnswers[q.id];
          return (
            <Card key={q.id} className="p-6 space-y-4 border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                <Badge variant="primary">
                  Part {q.partNumber} • Câu {q.questionNumber}
                </Badge>
                {isSubmitted && (
                  <Badge variant={userChoice === q.correctAnswer ? 'success' : 'destructive'}>
                    {userChoice === q.correctAnswer ? 'Chính xác ✓' : `Sai (Đáp án: ${q.correctAnswer})`}
                  </Badge>
                )}
              </div>

              {/* Part 1 Photo */}
              {q.imageUrl && (
                <div className="max-w-md mx-auto">
                  <img
                    src={q.imageUrl}
                    alt="TOEIC Part 1"
                    className="w-full h-56 object-cover rounded-2xl shadow-md border"
                  />
                </div>
              )}

              {/* Part 7 Passage */}
              {q.passageText && (
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 font-mono text-xs whitespace-pre-wrap leading-relaxed dark:bg-slate-800 dark:border-slate-700">
                  {q.passageText}
                </div>
              )}

              {/* Question Text & Audio Button */}
              <div className="flex items-start gap-3">
                <button
                  onClick={() => speakEnglish(q.transcriptEn || q.questionText)}
                  className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 transition-colors"
                  title="Nghe audio đề bài"
                >
                  <Volume2 className="h-4 w-4" />
                </button>
                <div className="font-semibold text-sm text-slate-900 dark:text-white pt-1">
                  {q.questionText}
                </div>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                {q.options.map((opt) => {
                  const isChosen = userChoice === opt.label;
                  const isCorrect = opt.label === q.correctAnswer;

                  let style = 'border-slate-200 bg-white hover:border-slate-300 dark:bg-slate-900 dark:border-slate-700';
                  if (isSubmitted) {
                    if (isCorrect) style = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold dark:bg-emerald-950/60 dark:text-emerald-200';
                    else if (isChosen) style = 'border-rose-500 bg-rose-50 text-rose-900 font-bold dark:bg-rose-950/60 dark:text-rose-200';
                  } else if (isChosen) {
                    style = 'border-primary-500 bg-primary-50 text-primary-900 font-bold dark:bg-primary-950/60 dark:text-primary-200';
                  }

                  return (
                    <button
                      key={opt.label}
                      disabled={isSubmitted}
                      onClick={() => handleSelectAnswer(q.id, opt.label)}
                      className={`p-3.5 rounded-xl border text-left text-xs transition-all flex items-start gap-2.5 ${style}`}
                    >
                      <span className="font-bold text-slate-400">({opt.label})</span>
                      <span className="flex-1">{opt.text}</span>
                    </button>
                  );
                })}
              </div>

              {/* Explanations & Transcripts after submit */}
              {isSubmitted && (
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3 animate-in fade-in text-xs">
                  {q.transcriptEn && (
                    <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-800/60">
                      <div className="font-bold text-primary-600 mb-1">Transcript (Nội dung bài nghe):</div>
                      <div className="text-slate-700 dark:text-slate-300 italic">{q.transcriptEn}</div>
                    </div>
                  )}

                  <div className="rounded-xl bg-emerald-50/70 p-3 border border-emerald-200 dark:bg-emerald-950/30 dark:border-emerald-900 text-emerald-950 dark:text-emerald-200">
                    <div className="font-bold mb-1">💡 Giải thích chi tiết:</div>
                    <div>{q.explanationVi}</div>
                  </div>

                  {q.vocabularyList && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      <span className="text-[11px] font-bold text-slate-400">Từ vựng quan trọng:</span>
                      {q.vocabularyList.map((v, i) => (
                        <span key={i} className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                          <strong>{v.word}:</strong> {v.meaning}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </Card>
          );
        })}

        {/* Submit Actions */}
        <div className="flex justify-end gap-3 pt-2">
          {isSubmitted ? (
            <Button variant="outline" size="sm" onClick={handleReset} className="font-bold">
              <RotateCcw className="mr-1.5 h-3.5 w-3.5" /> Làm Lại Bộ Câu Này
            </Button>
          ) : (
            <Button
              variant="primary"
              size="md"
              onClick={handleSubmit}
              disabled={Object.keys(selectedAnswers).length === 0}
              className="font-bold px-6"
            >
              Nộp Bài & Xem Giải Thích Chi Tiết
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
