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

export const SentenceBuilderGame: React.FC<Props> = () => {
  const { updateStats } = useAuthStore();

  const sentences = [
    {
      vi: 'Tôi thích những chú mèo dễ thương.',
      correct: ['I', 'like', 'cute', 'cats'],
      scrambled: ['cats', 'I', 'cute', 'like'],
    },
    {
      vi: 'Mặt trời đang chiếu sáng trên bầu trời.',
      correct: ['The', 'sun', 'is', 'shining'],
      scrambled: ['shining', 'sun', 'is', 'The'],
    },
    {
      vi: 'Đây là cuốn sách tiếng Anh của tôi.',
      correct: ['This', 'is', 'my', 'book'],
      scrambled: ['book', 'my', 'This', 'is'],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [assembled, setAssembled] = useState<string[]>([]);
  const [pool, setPool] = useState<string[]>(sentences[0].scrambled);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentS = sentences[currentIndex];

  const handlePickWord = (word: string, index: number) => {
    sounds.playClick();
    const newAssembled = [...assembled, word];
    const newPool = pool.filter((_, i) => i !== index);
    setAssembled(newAssembled);
    setPool(newPool);

    // If assembled all words
    if (newAssembled.length === currentS.correct.length) {
      const isCorrect = newAssembled.every((w, i) => w === currentS.correct[i]);
      if (isCorrect) {
        sounds.playSuccess();
        speakEnglish(newAssembled.join(' '));
        setScore((s) => s + 35);

        setTimeout(() => {
          if (currentIndex + 1 < sentences.length) {
            const nextIdx = currentIndex + 1;
            setCurrentIndex(nextIdx);
            setAssembled([]);
            setPool(sentences[nextIdx].scrambled);
          } else {
            setIsFinished(true);
            playCelebration();
            updateStats(40, 3, 30);
          }
        }, 1300);
      } else {
        sounds.playError();
        setTimeout(() => {
          setAssembled([]);
          setPool(currentS.scrambled);
        }, 800);
      }
    }
  };

  const handleResetCurrent = () => {
    sounds.playClick();
    setAssembled([]);
    setPool(currentS.scrambled);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setAssembled([]);
    setPool(sentences[0].scrambled);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <Card className="p-6 max-w-xl mx-auto border-2 border-cyan-300 bg-cyan-50/30 dark:bg-slate-900 text-center">
      <div className="flex items-center justify-between pb-4 border-b border-cyan-200 dark:border-slate-800">
        <Badge variant="kids" className="bg-cyan-500 text-white">Game 7 • Sentence Builder</Badge>
        <span className="font-kids font-bold text-cyan-700 dark:text-cyan-400">
          Câu {currentIndex + 1} / {sentences.length} • Điểm: {score}
        </span>
      </div>

      {isFinished ? (
        <div className="py-10 space-y-4 animate-in fade-in zoom-in-95">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-cyan-500 text-white text-4xl shadow-lg">
            🏗️
          </div>
          <h4 className="font-kids font-black text-2xl text-slate-900 dark:text-white">
            Kiến Trúc Sư Câu Siêu Đẳng!
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Bé ghép đúng toàn bộ các câu hoàn chỉnh! (+3 ⭐ & +30 Xu)
          </p>
          <Button variant="kids" onClick={handleRestart} className="mt-4">
            <RotateCcw className="mr-1.5 h-4 w-4" /> Chơi Lại
          </Button>
        </div>
      ) : (
        <div className="py-6 space-y-6">
          <div className="rounded-2xl bg-white p-4 shadow-sm border border-cyan-100 dark:bg-slate-800">
            <div className="text-xs font-bold text-cyan-600 uppercase tracking-wider">NGHĨA TIẾNG VIỆT:</div>
            <div className="text-lg font-bold font-kids text-slate-900 dark:text-white mt-1">
              "{currentS.vi}"
            </div>
          </div>

          {/* Assembled sentence drop zone */}
          <div className="min-h-16 flex flex-wrap items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-cyan-400 bg-white/60 p-3 dark:bg-slate-800/60">
            {assembled.length === 0 ? (
              <span className="text-xs text-slate-400 font-kids">Chạm các từ bên dưới để ghép câu vào đây...</span>
            ) : (
              assembled.map((word, idx) => (
                <span
                  key={idx}
                  className="rounded-xl bg-cyan-500 px-4 py-2 font-kids font-bold text-white shadow-sm text-base animate-in zoom-in-90"
                >
                  {word}
                </span>
              ))
            )}
          </div>

          {/* Word tiles pool */}
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            {pool.map((word, idx) => (
              <button
                key={idx}
                onClick={() => handlePickWord(word, idx)}
                className="rounded-2xl border-2 border-cyan-300 bg-white px-5 py-3 font-kids font-bold text-slate-800 shadow hover:border-cyan-500 hover:scale-105 active:scale-95 transition-all text-base dark:bg-slate-800 dark:text-white"
              >
                {word}
              </button>
            ))}
          </div>

          <div className="pt-2">
            <Button variant="outline" size="sm" onClick={handleResetCurrent} className="text-xs font-bold">
              <Delete className="mr-1 h-3.5 w-3.5" /> Ghép Lại Câu Này
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
};
