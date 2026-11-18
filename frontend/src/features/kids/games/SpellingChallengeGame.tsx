import React, { useState } from 'react';
import { RotateCcw, Delete, Sparkles, Check, Volume2 } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { sounds, playCelebration } from '@/lib/utils';
import { speakEnglish } from '@/lib/speech';
import { useAuthStore } from '@/stores/useAuthStore';

interface Props {
  onComplete: () => void;
}

export const SpellingChallengeGame: React.FC<Props> = () => {
  const { updateStats } = useAuthStore();

  const words = [
    { word: 'TIGER', emoji: '🐯', vi: 'Con Hổ Dũng Mãnh' },
    { word: 'APPLE', emoji: '🍎', vi: 'Quả Táo Đỏ' },
    { word: 'ROBOT', emoji: '🤖', vi: 'Người Máy Thông Minh' },
    { word: 'PENCIL', emoji: '✏️', vi: 'Bút Chì Học Tập' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [assembled, setAssembled] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentW = words[currentIndex];
  // Scramble letters
  const scrambled = React.useMemo(() => {
    return currentW.word
      .split('')
      .map((letter, i) => ({ id: `${letter}-${i}`, letter }))
      .sort(() => Math.random() - 0.5);
  }, [currentIndex]);

  const [availableLetters, setAvailableLetters] = useState(scrambled);

  React.useEffect(() => {
    setAvailableLetters(scrambled);
    setAssembled([]);
  }, [scrambled]);

  const handlePickLetter = (item: { id: string; letter: string }) => {
    sounds.playClick();
    setAssembled([...assembled, item.letter]);
    setAvailableLetters(availableLetters.filter((l) => l.id !== item.id));

    // Check if finished word
    const nextWord = assembled.join('') + item.letter;
    if (nextWord.length === currentW.word.length) {
      if (nextWord === currentW.word) {
        sounds.playSuccess();
        speakEnglish(currentW.word);
        setScore((s) => s + 25);

        setTimeout(() => {
          if (currentIndex + 1 < words.length) {
            setCurrentIndex((i) => i + 1);
          } else {
            setIsFinished(true);
            playCelebration();
            updateStats(35, 3, 30);
          }
        }, 1200);
      } else {
        sounds.playError();
        // Reset assembled letters
        setTimeout(() => {
          setAvailableLetters(scrambled);
          setAssembled([]);
        }, 700);
      }
    }
  };

  const handleUndo = () => {
    sounds.playClick();
    setAvailableLetters(scrambled);
    setAssembled([]);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <Card className="p-6 max-w-xl mx-auto border-2 border-purple-300 bg-purple-50/30 dark:bg-slate-900 text-center">
      <div className="flex items-center justify-between pb-4 border-b border-purple-200 dark:border-slate-800">
        <Badge variant="kids" className="bg-purple-400 text-slate-900">Game 4 • Spelling Challenge</Badge>
        <span className="font-kids font-bold text-purple-700 dark:text-purple-400">
          Từ {currentIndex + 1} / {words.length} • Điểm: {score}
        </span>
      </div>

      {isFinished ? (
        <div className="py-10 space-y-4 animate-in fade-in zoom-in-95">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-purple-400 text-4xl shadow-lg">
            🌟
          </div>
          <h4 className="font-kids font-black text-2xl text-slate-900 dark:text-white">
            Nhà Đánh Vần Đại Tài!
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Bé đạt được <strong>{score} / 100 điểm</strong> và nhận <strong>+3 ⭐ & +30 Xu</strong>!
          </p>
          <Button variant="kids" onClick={handleRestart} className="mt-4">
            <RotateCcw className="mr-1.5 h-4 w-4" /> Chơi Lại
          </Button>
        </div>
      ) : (
        <div className="py-6 space-y-6">
          <div className="relative mx-auto flex h-32 w-32 items-center justify-center rounded-3xl bg-white shadow-md text-6xl animate-float border-2 border-purple-200">
            {currentW.emoji}
          </div>
          <p className="font-kids text-xs font-bold text-purple-800 dark:text-purple-300">
            {currentW.vi}
          </p>

          {/* Target Word Slots */}
          <div className="flex justify-center gap-2">
            {Array.from({ length: currentW.word.length }).map((_, idx) => (
              <div
                key={idx}
                className="flex h-14 w-12 items-center justify-center rounded-2xl border-2 border-purple-400 bg-white font-kids font-black text-2xl text-purple-900 shadow-inner dark:bg-slate-800 dark:text-white"
              >
                {assembled[idx] || ''}
              </div>
            ))}
          </div>

          {/* Letter Pick Pool */}
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            {availableLetters.map((item) => (
              <button
                key={item.id}
                onClick={() => handlePickLetter(item)}
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-kids-yellow border-b-4 border-amber-600 font-kids font-black text-2xl text-amber-950 shadow-md active:translate-y-1 active:border-b-0 hover:scale-105 transition-transform"
              >
                {item.letter}
              </button>
            ))}
          </div>

          <div className="pt-2">
            <Button variant="outline" size="sm" onClick={handleUndo} className="text-xs font-bold">
              <Delete className="mr-1 h-3.5 w-3.5" /> Xóa Chọn Lại
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
};
