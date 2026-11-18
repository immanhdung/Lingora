import React, { useState } from 'react';
import { Volume2, Trophy, RotateCcw, Check, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { sounds, playCelebration } from '@/lib/utils';
import { speakEnglish } from '@/lib/speech';
import { useAuthStore } from '@/stores/useAuthStore';

interface Props {
  onComplete: () => void;
}

export const PictureGuessGame: React.FC<Props> = () => {
  const { updateStats } = useAuthStore();

  const questions = [
    {
      img: '🍓',
      word: 'Strawberry',
      phonetic: '/ˈstrɔː.bər.i/',
      options: ['Strawberry', 'Banana', 'Watermelon', 'Grape'],
      meaning: 'Quả dâu tây đỏ mọng',
    },
    {
      img: '✈️',
      word: 'Airplane',
      phonetic: '/ˈer.pleɪn/',
      options: ['Bicycle', 'Helicopter', 'Airplane', 'Train'],
      meaning: 'Máy bay chở khách trên bầu trời',
    },
    {
      img: '🦒',
      word: 'Giraffe',
      phonetic: '/dʒɪˈrɑːf/',
      options: ['Zebra', 'Giraffe', 'Elephant', 'Kangaroo'],
      meaning: 'Hươu cao cổ có chiếc cổ rất dài',
    },
    {
      img: '🚀',
      word: 'Rocket',
      phonetic: '/ˈrɑː.kɪt/',
      options: ['Ship', 'Submarine', 'Rocket', 'Car'],
      meaning: 'Tên lửa bay vào vũ trụ',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = questions[currentIndex];

  const handleChoose = (opt: string) => {
    if (selectedOption) return; // already picked
    setSelectedOption(opt);
    speakEnglish(opt);

    if (opt === currentQ.word) {
      sounds.playSuccess();
      setScore((s) => s + 25);
    } else {
      sounds.playError();
    }

    setTimeout(() => {
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex((i) => i + 1);
        setSelectedOption(null);
      } else {
        setIsFinished(true);
        playCelebration();
        updateStats(30, 3, 25);
      }
    }, 1400);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <Card className="p-6 max-w-xl mx-auto border-2 border-sky-300 bg-sky-50/30 dark:bg-slate-900 text-center">
      <div className="flex items-center justify-between pb-4 border-b border-sky-200 dark:border-slate-800">
        <Badge variant="kids" className="bg-sky-400 text-slate-900">Game 2 • Picture Guessing</Badge>
        <span className="font-kids font-bold text-sky-700 dark:text-sky-400">
          Câu {currentIndex + 1} / {questions.length} • Điểm: {score}
        </span>
      </div>

      {isFinished ? (
        <div className="py-10 space-y-4 animate-in fade-in zoom-in-95">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-sky-400 text-4xl shadow-lg">
            🎉
          </div>
          <h4 className="font-kids font-black text-2xl text-slate-900 dark:text-white">
            Hoàn Thành Xuất Sắc!
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Bé đạt được <strong>{score} / 100 điểm</strong> và nhận <strong>+3 ⭐ & +25 Xu</strong>!
          </p>
          <Button variant="kids" onClick={handleRestart} className="mt-4">
            <RotateCcw className="mr-1.5 h-4 w-4" /> Chơi Lại
          </Button>
        </div>
      ) : (
        <div className="py-6 space-y-6">
          {/* Big Picture Display */}
          <div className="relative mx-auto flex h-36 w-36 items-center justify-center rounded-3xl bg-white shadow-md text-7xl animate-float border-2 border-sky-200">
            {currentQ.img}
          </div>

          <p className="font-kids text-xs text-slate-500">
            Hình ảnh trên là từ tiếng Anh nào dưới đây?
          </p>

          {/* 4 Options Grid */}
          <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
            {currentQ.options.map((opt) => {
              const isSelected = selectedOption === opt;
              const isCorrect = opt === currentQ.word;

              let btnStyle = 'border-slate-200 bg-white hover:border-sky-400';
              if (selectedOption) {
                if (isCorrect) btnStyle = 'border-emerald-500 bg-emerald-100 text-emerald-800 font-bold';
                else if (isSelected) btnStyle = 'border-rose-500 bg-rose-100 text-rose-800 font-bold';
              }

              return (
                <button
                  key={opt}
                  onClick={() => handleChoose(opt)}
                  disabled={Boolean(selectedOption)}
                  className={`p-4 rounded-2xl border-2 font-kids font-bold text-base transition-all shadow-sm ${btnStyle}`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {selectedOption && (
            <div className="rounded-xl bg-sky-100 p-3 text-xs font-semibold text-sky-900 animate-in fade-in">
              💡 <strong>{currentQ.word}</strong>: {currentQ.meaning}
            </div>
          )}
        </div>
      )}
    </Card>
  );
};
