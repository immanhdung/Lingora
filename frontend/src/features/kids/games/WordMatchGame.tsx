import React, { useState, useEffect } from 'react';
import { Sparkles, Trophy, RotateCcw, Check, X, Timer } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { sounds, playCelebration } from '@/lib/utils';
import { speakEnglish } from '@/lib/speech';
import { useAuthStore } from '@/stores/useAuthStore';

interface Props {
  onComplete: () => void;
}

export const WordMatchGame: React.FC<Props> = ({ onComplete }) => {
  const { updateStats } = useAuthStore();

  const pairs = [
    { en: 'Lion', vi: 'Con Sư Tử', emoji: '🦁' },
    { en: 'Elephant', vi: 'Con Voi', emoji: '🐘' },
    { en: 'Monkey', vi: 'Con Khỉ', emoji: '🐵' },
    { en: 'Dolphin', vi: 'Cá Heo', emoji: '🐬' },
    { en: 'Panda', vi: 'Gấu Trúc', emoji: '🐼' },
  ];

  const [selectedEn, setSelectedEn] = useState<string | null>(null);
  const [selectedVi, setSelectedVi] = useState<string | null>(null);
  const [matched, setMatched] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isGameOver, setIsGameOver] = useState(false);

  // Timer
  useEffect(() => {
    if (timeLeft <= 0 || matched.length === pairs.length) {
      setIsGameOver(true);
      if (matched.length === pairs.length) {
        sounds.playSuccess();
        playCelebration();
        updateStats(30, 3, 20);
      }
      return;
    }
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, matched.length]);

  const handleEnClick = (word: string) => {
    sounds.playClick();
    speakEnglish(word);
    setSelectedEn(word);
    if (selectedVi) {
      checkMatch(word, selectedVi);
    }
  };

  const handleViClick = (vi: string) => {
    sounds.playClick();
    setSelectedVi(vi);
    if (selectedEn) {
      checkMatch(selectedEn, vi);
    }
  };

  const checkMatch = (en: string, vi: string) => {
    const pair = pairs.find((p) => p.en === en && p.vi === vi);
    if (pair) {
      sounds.playCoin();
      setMatched([...matched, en]);
      setScore((s) => s + 20);
      setSelectedEn(null);
      setSelectedVi(null);
    } else {
      sounds.playError();
      setSelectedEn(null);
      setSelectedVi(null);
    }
  };

  const handleRestart = () => {
    setMatched([]);
    setSelectedEn(null);
    setSelectedVi(null);
    setScore(0);
    setTimeLeft(60);
    setIsGameOver(false);
  };

  return (
    <Card className="p-6 max-w-3xl mx-auto border-2 border-amber-300 bg-amber-50/30 dark:bg-slate-900">
      {/* Header Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-amber-200 dark:border-slate-800">
        <div>
          <Badge variant="kids" className="mb-1">Game 1 • Word Matching</Badge>
          <h3 className="font-kids font-bold text-xl text-amber-950 dark:text-amber-300">
            Ghép Từ Tiếng Anh Với Nghĩa Tiếng Việt
          </h3>
        </div>
        <div className="flex items-center gap-4 text-sm font-bold">
          <div className="flex items-center gap-1 text-slate-600 dark:text-slate-300">
            <Timer className="h-4 w-4 text-amber-500" /> {timeLeft}s
          </div>
          <div className="text-amber-600 font-kids text-lg">Điểm: {score}</div>
        </div>
      </div>

      {/* Game Complete Modal / State */}
      {isGameOver ? (
        <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-amber-400 text-amber-950 text-4xl shadow-lg">
            🏆
          </div>
          <h4 className="font-kids font-black text-2xl text-slate-900 dark:text-white">
            {matched.length === pairs.length ? 'Xuất Sắc! Bé Đã Hoàn Thành!' : 'Hết Giờ Rồi!'}
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Bé đạt được <strong>{score} điểm</strong> và nhận thưởng <strong>+3 ⭐ & +20 Xu</strong>!
          </p>
          <div className="flex justify-center gap-3 pt-4">
            <Button variant="kids" onClick={handleRestart}>
              <RotateCcw className="mr-1.5 h-4 w-4" /> Chơi Lại
            </Button>
          </div>
        </div>
      ) : (
        /* Game Grid: English Column vs Vietnamese Column */
        <div className="py-6 grid grid-cols-2 gap-6">
          {/* Column EN */}
          <div className="space-y-3">
            <div className="text-center font-kids font-bold text-xs uppercase tracking-wider text-slate-400">
              Từ Tiếng Anh
            </div>
            {pairs.map((p) => {
              const isMatched = matched.includes(p.en);
              const isSelected = selectedEn === p.en;
              return (
                <button
                  key={p.en}
                  disabled={isMatched}
                  onClick={() => handleEnClick(p.en)}
                  className={`w-full flex items-center justify-between p-4 rounded-2xl border-2 font-kids font-bold text-base transition-all ${
                    isMatched
                      ? 'border-emerald-400 bg-emerald-100 text-emerald-800 opacity-60'
                      : isSelected
                      ? 'border-primary-500 bg-primary-100 ring-2 ring-primary-500/30'
                      : 'border-amber-200 bg-white hover:border-amber-400 shadow-sm'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-2xl">{p.emoji}</span>
                    <span>{p.en}</span>
                  </span>
                  {isMatched && <Check className="h-5 w-5 text-emerald-600" />}
                </button>
              );
            })}
          </div>

          {/* Column VI */}
          <div className="space-y-3">
            <div className="text-center font-kids font-bold text-xs uppercase tracking-wider text-slate-400">
              Nghĩa Tiếng Việt
            </div>
            {pairs.map((p) => {
              const isMatched = matched.includes(p.en);
              const isSelected = selectedVi === p.vi;
              return (
                <button
                  key={p.vi}
                  disabled={isMatched}
                  onClick={() => handleViClick(p.vi)}
                  className={`w-full flex items-center justify-between p-4 rounded-2xl border-2 font-kids font-bold text-base transition-all ${
                    isMatched
                      ? 'border-emerald-400 bg-emerald-100 text-emerald-800 opacity-60'
                      : isSelected
                      ? 'border-secondary bg-sky-100 ring-2 ring-sky-500/30'
                      : 'border-amber-200 bg-white hover:border-amber-400 shadow-sm'
                  }`}
                >
                  <span>{p.vi}</span>
                  {isMatched && <Check className="h-5 w-5 text-emerald-600" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </Card>
  );
};
