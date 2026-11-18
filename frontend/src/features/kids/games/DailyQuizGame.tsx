import React, { useState } from 'react';
import { RotateCcw, Sparkles, Check, Flame, Trophy } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { sounds, playCelebration } from '@/lib/utils';
import { useAuthStore } from '@/stores/useAuthStore';

interface Props {
  onComplete: () => void;
}

export const DailyQuizGame: React.FC<Props> = () => {
  const { updateStats } = useAuthStore();

  const questions = [
    {
      q: 'Which one is a fruit?',
      options: ['Carrot', 'Apple', 'Broccoli', 'Potato'],
      correct: 1,
      explanation: 'Apple (Quả táo) là một loại trái cây ngọt lành!',
    },
    {
      q: 'How many days are there in a week?',
      options: ['Five', 'Six', 'Seven', 'Eight'],
      correct: 2,
      explanation: 'Có 7 ngày trong một tuần (Seven days: Mon to Sun).',
    },
    {
      q: 'What color do you get when you mix Red and Yellow?',
      options: ['Green', 'Orange', 'Purple', 'Blue'],
      correct: 1,
      explanation: 'Màu Đỏ pha Màu Vàng sẽ tạo ra màu Cam (Orange).',
    },
    {
      q: 'Choose the word for "Chào buổi sáng":',
      options: ['Good afternoon', 'Good night', 'Good morning', 'Good bye'],
      correct: 2,
      explanation: 'Good morning là lời chào buổi sáng!',
    },
    {
      q: 'A baby cat is called a ______:',
      options: ['Puppy', 'Kitten', 'Cub', 'Duckling'],
      correct: 1,
      explanation: 'Mèo con trong tiếng Anh được gọi là Kitten.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = questions[currentIndex];

  const handleSelect = (idx: number) => {
    if (selectedOpt !== null) return;
    setSelectedOpt(idx);

    if (idx === currentQ.correct) {
      sounds.playSuccess();
      setScore((s) => s + 20);
    } else {
      sounds.playError();
    }

    setTimeout(() => {
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex((i) => i + 1);
        setSelectedOpt(null);
      } else {
        setIsFinished(true);
        playCelebration();
        updateStats(50, 4, 30);
      }
    }, 1200);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOpt(null);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <Card className="p-6 max-w-xl mx-auto border-2 border-teal-300 bg-teal-50/30 dark:bg-slate-900 text-center">
      <div className="flex items-center justify-between pb-4 border-b border-teal-200 dark:border-slate-800">
        <Badge variant="kids" className="bg-teal-400 text-slate-900">Game 10 • Daily Quiz</Badge>
        <div className="flex items-center gap-2 font-kids font-bold text-xs text-teal-700 dark:text-teal-400">
          <Flame className="h-4 w-4 text-orange-500 fill-orange-500" /> Giữ Streak • {score} Điểm
        </div>
      </div>

      {isFinished ? (
        <div className="py-10 space-y-4 animate-in fade-in zoom-in-95">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-teal-400 text-4xl shadow-lg">
            ⭐
          </div>
          <h4 className="font-kids font-black text-2xl text-slate-900 dark:text-white">
            Hoàn Thành Đố Vui Hàng Ngày!
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Bé đạt được <strong>{score} / 100 điểm</strong>, bảo vệ chuỗi ngày học liên tục và nhận <strong>+4 ⭐ & +30 Xu</strong>!
          </p>
          <Button variant="kids" onClick={handleRestart} className="mt-4">
            <RotateCcw className="mr-1.5 h-4 w-4" /> Làm Lại
          </Button>
        </div>
      ) : (
        <div className="py-6 space-y-6">
          <div className="rounded-2xl bg-white p-4 shadow-sm border border-teal-100 dark:bg-slate-800">
            <div className="text-xs font-bold text-teal-600 uppercase tracking-wider">
              CÂU {currentIndex + 1} / {questions.length}
            </div>
            <p className="font-kids font-bold text-lg text-slate-900 dark:text-white mt-1">
              {currentQ.q}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
            {currentQ.options.map((opt, idx) => {
              const isSelected = selectedOpt === idx;
              let style = 'border-slate-200 bg-white hover:border-teal-400';
              if (selectedOpt !== null) {
                if (idx === currentQ.correct) style = 'border-emerald-500 bg-emerald-100 font-bold';
                else if (isSelected) style = 'border-rose-500 bg-rose-100 font-bold';
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  disabled={selectedOpt !== null}
                  className={`p-4 rounded-2xl border-2 font-kids font-bold text-sm transition-all shadow-sm ${style}`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {selectedOpt !== null && (
            <p className="text-xs font-semibold text-teal-800 dark:text-teal-300 animate-in fade-in">
              💡 {currentQ.explanation}
            </p>
          )}
        </div>
      )}
    </Card>
  );
};
