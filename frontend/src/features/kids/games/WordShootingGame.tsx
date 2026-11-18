import React, { useState, useEffect } from 'react';
import { Crosshair, Trophy, RotateCcw, Zap, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { sounds, playCelebration } from '@/lib/utils';
import { speakEnglish } from '@/lib/speech';
import { useAuthStore } from '@/stores/useAuthStore';

interface Props {
  onComplete: () => void;
}

export const WordShootingGame: React.FC<Props> = () => {
  const { updateStats } = useAuthStore();

  const targets = [
    { targetVi: 'Quả Chuối', correctWord: 'Banana', options: ['Banana', 'Apple', 'Orange', 'Lemon'] },
    { targetVi: 'Bút Mực', correctWord: 'Pen', options: ['Book', 'Pen', 'Eraser', 'Ruler'] },
    { targetVi: 'Màu Đỏ', correctWord: 'Red', options: ['Blue', 'Yellow', 'Red', 'Green'] },
    { targetVi: 'Mặt Trời', correctWord: 'Sun', options: ['Moon', 'Star', 'Cloud', 'Sun'] },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(1);
  const [poppedWord, setPoppedWord] = useState<string | null>(null);
  const [isGameOver, setIsGameOver] = useState(false);

  const currentT = targets[currentIndex];

  const handleShoot = (word: string) => {
    if (poppedWord) return;
    setPoppedWord(word);

    if (word === currentT.correctWord) {
      sounds.playCoin();
      speakEnglish(word);
      const points = 25 * combo;
      setScore((s) => s + points);
      setCombo((c) => c + 1);
    } else {
      sounds.playError();
      setCombo(1);
    }

    setTimeout(() => {
      if (currentIndex + 1 < targets.length) {
        setCurrentIndex((i) => i + 1);
        setPoppedWord(null);
      } else {
        setIsGameOver(true);
        playCelebration();
        updateStats(40, 3, 30);
      }
    }, 1100);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setCombo(1);
    setPoppedWord(null);
    setIsGameOver(false);
  };

  return (
    <Card className="p-6 max-w-xl mx-auto border-2 border-indigo-300 bg-indigo-50/30 dark:bg-slate-900 text-center">
      <div className="flex items-center justify-between pb-4 border-b border-indigo-200 dark:border-slate-800">
        <Badge variant="kids" className="bg-indigo-500 text-white">Game 6 • Word Shooting</Badge>
        <div className="flex items-center gap-3 font-kids font-bold text-xs">
          <span className="text-amber-500">Combo: x{combo} 🔥</span>
          <span className="text-indigo-600 dark:text-indigo-400">Điểm: {score}</span>
        </div>
      </div>

      {isGameOver ? (
        <div className="py-10 space-y-4 animate-in fade-in zoom-in-95">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-indigo-500 text-white text-4xl shadow-lg">
            🎯
          </div>
          <h4 className="font-kids font-black text-2xl text-slate-900 dark:text-white">
            Thiện Xạ Bắn Bóng Đỉnh Cao!
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Bé đạt được <strong>{score} điểm</strong> và nhận thưởng <strong>+3 ⭐ & +30 Xu</strong>!
          </p>
          <Button variant="kids" onClick={handleRestart} className="mt-4">
            <RotateCcw className="mr-1.5 h-4 w-4" /> Chơi Lại
          </Button>
        </div>
      ) : (
        <div className="py-6 space-y-6">
          {/* Target Requirement */}
          <div className="rounded-2xl bg-white p-4 shadow-sm border border-indigo-100 dark:bg-slate-800">
            <div className="text-xs font-bold text-indigo-500 uppercase tracking-wider">MỤC TIÊU CẦN BẮN:</div>
            <div className="text-2xl font-black font-kids text-slate-900 dark:text-white mt-1">
              "{currentT.targetVi}"
            </div>
          </div>

          {/* Floating Balloons */}
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto pt-2">
            {currentT.options.map((word, idx) => {
              const isPopped = poppedWord === word;
              const isCorrect = word === currentT.correctWord;

              let style = 'bg-gradient-to-tr from-indigo-500 to-purple-500 text-white border-b-4 border-indigo-800';
              if (poppedWord) {
                if (isCorrect) style = 'bg-emerald-500 text-white border-b-4 border-emerald-800 scale-105';
                else if (isPopped) style = 'bg-rose-500 text-white border-b-4 border-rose-800 opacity-60';
              }

              return (
                <button
                  key={word}
                  onClick={() => handleShoot(word)}
                  disabled={Boolean(poppedWord)}
                  className={`flex h-24 flex-col items-center justify-center rounded-3xl font-kids font-black text-xl shadow-lg transition-all animate-float ${style}`}
                  style={{ animationDelay: `${idx * 0.25}s` }}
                >
                  <span className="text-xs opacity-75 mb-1">🎈</span>
                  <span>{word}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </Card>
  );
};
