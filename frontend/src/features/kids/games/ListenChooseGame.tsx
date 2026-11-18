import React, { useState } from 'react';
import { Volume2, RotateCcw, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { sounds, playCelebration } from '@/lib/utils';
import { speakEnglish } from '@/lib/speech';
import { useAuthStore } from '@/stores/useAuthStore';

interface Props {
  onComplete: () => void;
}

export const ListenChooseGame: React.FC<Props> = () => {
  const { updateStats } = useAuthStore();

  const questions = [
    {
      word: 'Butterfly',
      options: [
        { img: '🦋', label: 'Bướm', isCorrect: true },
        { img: '🐝', label: 'Ong', isCorrect: false },
        { img: '🐞', label: 'Bọ rùa', isCorrect: false },
        { img: '🦗', label: 'Châu chấu', isCorrect: false },
      ],
    },
    {
      word: 'Guitar',
      options: [
        { img: '🥁', label: 'Trống', isCorrect: false },
        { img: '🎸', label: 'Đàn Guitar', isCorrect: true },
        { img: '🎹', label: 'Piano', isCorrect: false },
        { img: '🎺', label: 'Kèn', isCorrect: false },
      ],
    },
    {
      word: 'Rainbow',
      options: [
        { img: '☀️', label: 'Mặt trời', isCorrect: false },
        { img: '🌧️', label: 'Cơn mưa', isCorrect: false },
        { img: '🌈', label: 'Cầu vồng', isCorrect: true },
        { img: '⚡', label: 'Sấm sét', isCorrect: false },
      ],
    },
    {
      word: 'Ice cream',
      options: [
        { img: '🍦', label: 'Kem ốc quế', isCorrect: true },
        { img: '🍕', label: 'Pizza', isCorrect: false },
        { img: '🍔', label: 'Burger', isCorrect: false },
        { img: '🍩', label: 'Bánh donut', isCorrect: false },
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = questions[currentIndex];

  const playSound = () => {
    speakEnglish(currentQ.word);
  };

  const handleSelect = (idx: number, isCorrect: boolean) => {
    if (selectedIdx !== null) return;
    setSelectedIdx(idx);

    if (isCorrect) {
      sounds.playSuccess();
      setScore((s) => s + 25);
    } else {
      sounds.playError();
    }

    setTimeout(() => {
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex((i) => i + 1);
        setSelectedIdx(null);
      } else {
        setIsFinished(true);
        playCelebration();
        updateStats(30, 3, 20);
      }
    }, 1300);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedIdx(null);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <Card className="p-6 max-w-xl mx-auto border-2 border-emerald-300 bg-emerald-50/30 dark:bg-slate-900 text-center">
      <div className="flex items-center justify-between pb-4 border-b border-emerald-200 dark:border-slate-800">
        <Badge variant="kids" className="bg-emerald-400 text-slate-900">Game 3 • Listen & Choose</Badge>
        <span className="font-kids font-bold text-emerald-700 dark:text-emerald-400">
          Câu {currentIndex + 1} / {questions.length} • Điểm: {score}
        </span>
      </div>

      {isFinished ? (
        <div className="py-10 space-y-4 animate-in fade-in zoom-in-95">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-400 text-4xl shadow-lg">
            🎉
          </div>
          <h4 className="font-kids font-black text-2xl text-slate-900 dark:text-white">
            Tuyệt Vời! Đôi Tai Vàng Của Bé!
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Bé đạt được <strong>{score} / 100 điểm</strong> và nhận <strong>+3 ⭐ & +20 Xu</strong>!
          </p>
          <Button variant="kids" onClick={handleRestart} className="mt-4">
            <RotateCcw className="mr-1.5 h-4 w-4" /> Chơi Lại
          </Button>
        </div>
      ) : (
        <div className="py-6 space-y-6">
          <p className="font-kids text-sm text-slate-600 dark:text-slate-300">
            Bấm vào chiếc loa bên dưới để nghe, sau đó chọn bức tranh tương ứng nhé!
          </p>

          {/* Big Audio Player Button */}
          <div className="flex justify-center">
            <button
              onClick={playSound}
              className="flex items-center gap-3 rounded-3xl bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-5 text-white shadow-xl shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-transform"
            >
              <Volume2 className="h-8 w-8 animate-bounce" />
              <span className="font-kids font-black text-xl">Nghe Phát Âm</span>
            </button>
          </div>

          {/* 4 Picture Options */}
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto pt-2">
            {currentQ.options.map((opt, idx) => {
              const isSelected = selectedIdx === idx;
              let style = 'border-slate-200 bg-white hover:border-emerald-400';
              if (selectedIdx !== null) {
                if (opt.isCorrect) style = 'border-emerald-500 bg-emerald-100 ring-2 ring-emerald-500/40';
                else if (isSelected) style = 'border-rose-500 bg-rose-100 ring-2 ring-rose-500/40';
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx, opt.isCorrect)}
                  disabled={selectedIdx !== null}
                  className={`flex flex-col items-center justify-center p-5 rounded-3xl border-2 transition-all shadow-sm ${style}`}
                >
                  <span className="text-5xl mb-2">{opt.img}</span>
                  <span className="font-kids font-bold text-sm text-slate-700 dark:text-slate-200">{opt.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </Card>
  );
};
