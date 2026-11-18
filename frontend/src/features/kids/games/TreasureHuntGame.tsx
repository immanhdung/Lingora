import React, { useState } from 'react';
import { Key, RotateCcw, Trophy, Sparkles, Check, Lock } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { sounds, playCelebration } from '@/lib/utils';
import { useAuthStore } from '@/stores/useAuthStore';

interface Props {
  onComplete: () => void;
}

export const TreasureHuntGame: React.FC<Props> = () => {
  const { updateStats } = useAuthStore();

  const quests = [
    {
      id: 1,
      location: 'Hòn Đảo Hải Tặc 🏝️',
      riddle: 'I am yellow, sweet, and monkeys love to eat me. What am I?',
      options: ['Banana', 'Carrot', 'Coconut', 'Stone'],
      answer: 'Banana',
    },
    {
      id: 2,
      location: 'Hang Động Pha Lê 💎',
      riddle: 'I have four legs and say "Woof Woof". Who am I?',
      options: ['Dog', 'Cat', 'Lion', 'Duck'],
      answer: 'Dog',
    },
    {
      id: 3,
      location: 'Đền Thờ Cổ Đại 🏛️',
      riddle: 'What is the color of the clear sky and deep ocean?',
      options: ['Red', 'Green', 'Blue', 'Pink'],
      answer: 'Blue',
    },
  ];

  const [currentQuest, setCurrentQuest] = useState(0);
  const [keysCollected, setKeysCollected] = useState(0);
  const [chestOpened, setChestOpened] = useState(false);

  const quest = quests[currentQuest];

  const handleAnswer = (opt: string) => {
    if (opt === quest.answer) {
      sounds.playCoin();
      const nextKeys = keysCollected + 1;
      setKeysCollected(nextKeys);

      if (currentQuest + 1 < quests.length) {
        setCurrentQuest((q) => q + 1);
      } else {
        setChestOpened(true);
        sounds.playSuccess();
        playCelebration();
        updateStats(50, 4, 50);
      }
    } else {
      sounds.playError();
      alert('Chưa đúng rồi! Hãy đọc kỹ gợi ý câu đố nhé bé.');
    }
  };

  const handleRestart = () => {
    setCurrentQuest(0);
    setKeysCollected(0);
    setChestOpened(false);
  };

  return (
    <Card className="p-6 max-w-xl mx-auto border-2 border-yellow-400 bg-yellow-50/30 dark:bg-slate-900 text-center">
      <div className="flex items-center justify-between pb-4 border-b border-yellow-200 dark:border-slate-800">
        <Badge variant="kids" className="bg-yellow-400 text-slate-900">Game 9 • Treasure Hunt</Badge>
        <div className="flex items-center gap-1 font-kids font-bold text-amber-700 dark:text-amber-400">
          <Key className="h-4 w-4 text-amber-500 fill-amber-500" /> {keysCollected} / 3 Chìa Khóa Vàng
        </div>
      </div>

      {chestOpened ? (
        <div className="py-10 space-y-4 animate-in fade-in zoom-in-95">
          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-3xl bg-yellow-400 text-6xl shadow-2xl animate-bounce">
            🎁
          </div>
          <h4 className="font-kids font-black text-3xl text-amber-900 dark:text-amber-300">
            Rương Báu Đã Mở Ra!
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
            Chúc mừng nhà thám hiểm nhí! Bé đã thu thập đủ 3 Chìa Khóa Vàng và mở thành công Rương Kho Báu Đại Dương!
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <Badge variant="kids" className="text-sm">
              +4 ⭐ Siêu Cấp & +50 Xu Khủng
            </Badge>
          </div>
          <Button variant="kids" onClick={handleRestart} className="mt-4">
            <RotateCcw className="mr-1.5 h-4 w-4" /> Thám Hiểm Lại
          </Button>
        </div>
      ) : (
        <div className="py-6 space-y-6">
          <div className="rounded-2xl bg-white p-5 shadow-sm border border-yellow-200 dark:bg-slate-800">
            <div className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">
              CHẶNG {currentQuest + 1}: {quest.location}
            </div>
            <p className="font-kids font-bold text-lg text-slate-900 dark:text-white mt-2">
              "{quest.riddle}"
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
            {quest.options.map((opt) => (
              <button
                key={opt}
                onClick={() => handleAnswer(opt)}
                className="p-4 rounded-2xl border-2 border-yellow-200 bg-white font-kids font-bold text-base hover:border-yellow-400 hover:bg-yellow-50 shadow-sm transition-all"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
};
