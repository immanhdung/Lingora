import React, { useState, useEffect } from 'react';
import {
  Clock,
  Flag,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Volume2,
  Bookmark,
  Award,
  AlertTriangle,
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { formatTime, sounds, playCelebration } from '@/lib/utils';
import { speakEnglish } from '@/lib/speech';
import { useAuthStore } from '@/stores/useAuthStore';

interface Props {
  test: any;
  onExit: () => void;
}

export const MockTestRunner: React.FC<Props> = ({ test, onExit }) => {
  const { updateStats } = useAuthStore();
  const [timeLeft, setTimeLeft] = useState(test.durationMinutes * 60);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [flagged, setFlagged] = useState<Record<number, boolean>>({});
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  // Realistic mock questions for test runner
  const questions = [
    {
      id: 1,
      part: 'Listening Part 1',
      text: 'What is the man doing in the photograph?',
      options: [
        { label: 'A', text: 'He is adjusting his monitor on the desk.' },
        { label: 'B', text: 'He is signing a delivery contract.' },
        { label: 'C', text: 'He is carrying files to the storage.' },
        { label: 'D', text: 'He is replacing the projector bulb.' },
      ],
      correct: 'A',
      explanationVi: 'Trong hình ảnh, người đàn ông đang điều chỉnh lại màn hình máy tính để bàn (adjusting his monitor).',
    },
    {
      id: 2,
      part: 'Listening Part 2',
      text: '"Could you send me the revised invoice by 3 PM?"',
      options: [
        { label: 'A', text: 'Certainly, I will email it right after lunch.' },
        { label: 'B', text: 'No, I have not visited the headquarters.' },
        { label: 'C', text: 'The hotel was quite comfortable.' },
      ],
      correct: 'A',
      explanationVi: 'Câu hỏi yêu cầu gửi hóa đơn trước 3 giờ chiều. Lời hồi đáp A: "Chắc chắn rồi, tôi sẽ gửi ngay sau bữa trưa" là phù hợp nhất.',
    },
    {
      id: 3,
      part: 'Reading Part 5',
      text: 'The new regional hospital offers ______ medical care to patients in surrounding rural districts.',
      options: [
        { label: 'A', text: 'comprehensively' },
        { label: 'B', text: 'comprehensive' },
        { label: 'C', text: 'comprehend' },
        { label: 'D', text: 'comprehension' },
      ],
      correct: 'B',
      explanationVi: 'Trước cụm danh từ "medical care" (chăm sóc y tế), ta cần một tính từ bổ nghĩa: "comprehensive" (toàn diện).',
    },
    {
      id: 4,
      part: 'Reading Part 6',
      text: 'Please ensure that all client proposals are ______ reviewed by legal counsel before final dispatch.',
      options: [
        { label: 'A', text: 'thoroughly' },
        { label: 'B', text: 'thorough' },
        { label: 'C', text: 'thoroughness' },
        { label: 'D', text: 'more thorough' },
      ],
      correct: 'A',
      explanationVi: 'Bổ nghĩa cho động từ bị động "reviewed" cần một trạng từ: "thoroughly" (một cách cẩn trọng, kỹ lưỡng).',
    },
    {
      id: 5,
      part: 'Reading Part 7',
      text: 'According to the memo, what should participants bring to the annual leadership seminar?',
      options: [
        { label: 'A', text: 'Their valid identification badge' },
        { label: 'B', text: 'A signed copy of the non-disclosure agreement' },
        { label: 'C', text: 'A printed copy of the project milestone chart' },
        { label: 'D', text: 'Formal corporate clothing only' },
      ],
      correct: 'A',
      explanationVi: 'Trong văn bản có nêu rõ: "All attendees must present their company identification badge at the reception desk".',
    },
  ];

  // Countdown timer
  useEffect(() => {
    if (timeLeft <= 0 || isFinished) return;
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, isFinished]);

  const currentQ = questions[currentQIndex];

  const handleSelectAnswer = (label: string) => {
    sounds.playClick();
    setAnswers({ ...answers, [currentQIndex]: label });
  };

  const handleToggleFlag = () => {
    sounds.playClick();
    setFlagged({ ...flagged, [currentQIndex]: !flagged[currentQIndex] });
  };

  const handleSubmitTest = () => {
    setShowConfirmSubmit(false);
    setIsFinished(true);
    sounds.playSuccess();
    playCelebration();
    updateStats(100, 5, 50);
  };

  // Calculate score
  let correctCount = 0;
  questions.forEach((q, idx) => {
    if (answers[idx] === q.correct) correctCount++;
  });
  const percentScore = Math.round((correctCount / questions.length) * 100);

  return (
    <div className="space-y-4 max-w-6xl mx-auto">
      {/* Top Test Navigation Bar */}
      <div className="sticky top-16 z-30 flex items-center justify-between rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/95">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={onExit} className="text-xs">
            ← Rời khỏi phòng thi
          </Button>
          <span className="font-bold text-sm text-slate-900 dark:text-white hidden sm:inline">
            {test.title}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 rounded-xl bg-primary-50 px-3 py-1 text-xs font-bold text-primary-700 dark:bg-primary-950 dark:text-primary-300">
            <Clock className="h-4 w-4" />
            <span>{formatTime(timeLeft)}</span>
          </div>

          {!isFinished && (
            <Button
              variant="primary"
              size="sm"
              onClick={() => setShowConfirmSubmit(true)}
              className="font-bold text-xs"
            >
              Nộp Bài Thi
            </Button>
          )}
        </div>
      </div>

      {isFinished ? (
        /* Results Screen */
        <Card className="p-8 text-center space-y-6 animate-in zoom-in-95 max-w-2xl mx-auto">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-500 text-white text-4xl shadow-xl">
            🏆
          </div>

          <div>
            <Badge variant="success" className="mb-2">Đã Hoàn Thành Bài Thi</Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Báo Cáo Điểm Thi Khảo Thí
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Hệ thống đã tự động tính điểm theo chuẩn thang điểm ETS / Cambridge
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl">
            <div>
              <div className="text-xs text-slate-400">Số câu đúng</div>
              <div className="text-2xl font-black text-emerald-600 mt-0.5">
                {correctCount} / {questions.length}
              </div>
            </div>
            <div>
              <div className="text-xs text-slate-400">Tỷ lệ chính xác</div>
              <div className="text-2xl font-black text-primary-600 mt-0.5">{percentScore}%</div>
            </div>
            <div>
              <div className="text-xs text-slate-400">Điểm ước lượng</div>
              <div className="text-2xl font-black text-amber-500 mt-0.5">
                {test.type === 'TOEIC' ? `${percentScore * 9 + 90}/990` : `Band ${(percentScore / 100 * 2.5 + 6.5).toFixed(1)}`}
              </div>
            </div>
          </div>

          {/* Detailed Question Review */}
          <div className="text-left space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h4 className="font-bold text-sm">Chi Tiết Từng Câu Hỏi & Lỗi Sai:</h4>
            {questions.map((q, idx) => {
              const userAns = answers[idx];
              const isCorrect = userAns === q.correct;
              return (
                <div key={q.id} className="p-3.5 rounded-xl border text-xs space-y-1.5 bg-white dark:bg-slate-900">
                  <div className="flex items-center justify-between font-bold">
                    <span>Câu {idx + 1} ({q.part})</span>
                    <span className={isCorrect ? 'text-emerald-600' : 'text-rose-600'}>
                      {isCorrect ? '✓ Đúng' : `✗ Sai (Chọn: ${userAns || 'Chưa chọn'} • Đúng: ${q.correct})`}
                    </span>
                  </div>
                  <div className="text-slate-600 dark:text-slate-300">{q.text}</div>
                  <div className="text-[11px] text-slate-500 bg-slate-50 dark:bg-slate-800 p-2 rounded-lg">
                    💡 <strong>Giải thích:</strong> {q.explanationVi}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center gap-3 pt-4">
            <Button variant="outline" size="sm" onClick={onExit} className="font-bold">
              Quay Lại Thư Viện Đề
            </Button>
          </div>
        </Card>
      ) : (
        /* Examination Workspace: Question Display + Question Palette */
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Question Card (3 cols) */}
          <Card className="lg:col-span-3 p-6 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <Badge variant="primary">{currentQ.part} • Câu {currentQIndex + 1} / {questions.length}</Badge>
                <button
                  onClick={handleToggleFlag}
                  className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg border transition-colors ${
                    flagged[currentQIndex]
                      ? 'border-amber-400 bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300'
                      : 'border-slate-200 text-slate-500 hover:bg-slate-50'
                  }`}
                >
                  <Flag className="h-3.5 w-3.5" />
                  <span>{flagged[currentQIndex] ? 'Đã đánh dấu cờ' : 'Đánh dấu xem lại'}</span>
                </button>
              </div>

              <div className="text-base font-semibold text-slate-900 dark:text-white leading-relaxed">
                {currentQ.text}
              </div>

              {/* Options */}
              <div className="space-y-2.5 pt-2">
                {currentQ.options.map((opt) => {
                  const isSelected = answers[currentQIndex] === opt.label;
                  return (
                    <button
                      key={opt.label}
                      onClick={() => handleSelectAnswer(opt.label)}
                      className={`w-full flex items-center gap-3 p-4 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all ${
                        isSelected
                          ? 'border-primary-500 bg-primary-50/70 text-primary-900 dark:bg-primary-950 dark:text-primary-200 font-bold ring-2 ring-primary-500/30'
                          : 'border-slate-200 hover:border-slate-300 bg-white dark:bg-slate-900 dark:border-slate-800'
                      }`}
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-full border text-xs font-bold">
                        {opt.label}
                      </span>
                      <span>{opt.text}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Question Navigation Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  if (currentQIndex > 0) setCurrentQIndex(currentQIndex - 1);
                }}
                disabled={currentQIndex === 0}
                className="font-bold text-xs"
              >
                <ArrowLeft className="mr-1.5 h-3.5 w-3.5" /> Câu Trước
              </Button>

              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  if (currentQIndex + 1 < questions.length) setCurrentQIndex(currentQIndex + 1);
                }}
                disabled={currentQIndex + 1 === questions.length}
                className="font-bold text-xs"
              >
                Câu Sau <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </div>
          </Card>

          {/* Right Question Palette (1 col) */}
          <Card className="p-5 space-y-4">
            <div>
              <h4 className="font-bold text-xs text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                Bảng Câu Hỏi ({Object.keys(answers).length}/{questions.length} Đã Chọn)
              </h4>
            </div>

            <div className="grid grid-cols-5 gap-2">
              {questions.map((_, idx) => {
                const hasAnswer = answers[idx] !== undefined;
                const isFlag = flagged[idx];
                const isCurrent = currentQIndex === idx;

                let style = 'border-slate-200 bg-slate-50 text-slate-600 dark:bg-slate-800';
                if (hasAnswer) style = 'bg-primary-600 text-white font-bold border-primary-600';
                if (isFlag) style += ' ring-2 ring-amber-400';
                if (isCurrent) style += ' outline outline-2 outline-slate-900 dark:outline-white';

                return (
                  <button
                    key={idx}
                    onClick={() => {
                      sounds.playClick();
                      setCurrentQIndex(idx);
                    }}
                    className={`h-9 w-9 rounded-xl border text-xs flex items-center justify-center font-bold transition-transform hover:scale-105 ${style}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t text-[11px] text-slate-400 space-y-1">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-primary-600 inline-block" /> Đã làm
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-slate-200 border inline-block" /> Chưa làm
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full border-2 border-amber-400 inline-block" /> Đã gắn cờ
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Submit Confirmation Modal */}
      <Modal
        isOpen={showConfirmSubmit}
        onClose={() => setShowConfirmSubmit(false)}
        title="Xác Nhận Nộp Bài Thi"
      >
        <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
          <p>
            Bạn đã hoàn thành <strong>{Object.keys(answers).length} / {questions.length}</strong> câu hỏi. Thời gian làm bài còn <strong>{formatTime(timeLeft)}</strong>.
          </p>
          <p>
            Bạn có chắc chắn muốn nộp bài thi ngay bây giờ để hệ thống chấm điểm và xuất báo cáo không?
          </p>
          <div className="flex justify-end gap-2 pt-4">
            <Button variant="ghost" size="sm" onClick={() => setShowConfirmSubmit(false)}>
              Tiếp Tục Làm Bài
            </Button>
            <Button variant="primary" size="sm" onClick={handleSubmitTest} className="font-bold">
              Xác Nhận Nộp Bài
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
