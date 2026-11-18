import React, { useState, useEffect } from 'react';
import { RotateCcw, Trophy, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { sounds, playCelebration } from '@/lib/utils';
import { speakEnglish } from '@/lib/speech';
import { useAuthStore } from '@/stores/useAuthStore';

interface Props {
  onComplete: () => void;
}

interface CardItem {
  id: number;
  word: string;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export const MemoryCardsGame: React.FC<Props> = () => {
  const { updateStats } = useAuthStore();

  const initialItems = [
    { word: 'Dog', emoji: '🐶' },
    { word: 'Cat', emoji: '🐱' },
    { word: 'Car', emoji: '🚗' },
    { word: 'Sun', emoji: '☀️' },
  ];

  const generateDeck = (): CardItem[] => {
    const deck: CardItem[] = [];
    initialItems.forEach((item, index) => {
      deck.push({ id: index * 2, word: item.word, emoji: item.emoji, isFlipped: false, isMatched: false });
      deck.push({ id: index * 2 + 1, word: item.word, emoji: item.emoji, isFlipped: false, isMatched: false });
    });
    return deck.sort(() => Math.random() - 0.5);
  };

  const [deck, setDeck] = useState<CardItem[]>(generateDeck);
  const [selectedCards, setSelectedCards] = useState<CardItem[]>([]);
  const [moves, setMoves] = useState(0);
  const [isWon, setIsWon] = useState(false);

  useEffect(() => {
    if (deck.length > 0 && deck.every((c) => c.isMatched)) {
      setIsWon(true);
      sounds.playSuccess();
      playCelebration();
      updateStats(40, 3, 25);
    }
  }, [deck]);

  const handleCardClick = (card: CardItem) => {
    if (card.isFlipped || card.isMatched || selectedCards.length === 2) return;

    sounds.playClick();
    const updated = deck.map((c) => (c.id === card.id ? { ...c, isFlipped: true } : c));
    setDeck(updated);

    const newSelected = [...selectedCards, card];
    setSelectedCards(newSelected);

    if (newSelected.length === 2) {
      setMoves((m) => m + 1);
      const [first, second] = newSelected;
      if (first.word === second.word) {
        sounds.playCoin();
        speakEnglish(first.word);
        setTimeout(() => {
          setDeck((prev) =>
            prev.map((c) => (c.word === first.word ? { ...c, isMatched: true } : c))
          );
          setSelectedCards([]);
        }, 500);
      } else {
        sounds.playError();
        setTimeout(() => {
          setDeck((prev) =>
            prev.map((c) =>
              c.id === first.id || c.id === second.id ? { ...c, isFlipped: false } : c
            )
          );
          setSelectedCards([]);
        }, 900);
      }
    }
  };

  const handleRestart = () => {
    setDeck(generateDeck());
    setSelectedCards([]);
    setMoves(0);
    setIsWon(false);
  };

  return (
    <Card className="p-6 max-w-xl mx-auto border-2 border-rose-300 bg-rose-50/30 dark:bg-slate-900 text-center">
      <div className="flex items-center justify-between pb-4 border-b border-rose-200 dark:border-slate-800">
        <Badge variant="kids" className="bg-rose-400 text-slate-900">Game 5 • Memory Cards</Badge>
        <span className="font-kids font-bold text-rose-700 dark:text-rose-400">
          Lượt lật: {moves}
        </span>
      </div>

      {isWon ? (
        <div className="py-10 space-y-4 animate-in fade-in zoom-in-95">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-rose-400 text-4xl shadow-lg">
            🃏
          </div>
          <h4 className="font-kids font-black text-2xl text-slate-900 dark:text-white">
            Trí Nhớ Siêu Phàm!
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Bé tìm thấy tất cả các cặp thẻ chỉ với <strong>{moves} lượt</strong>! (+3 ⭐ & +25 Xu)
          </p>
          <Button variant="kids" onClick={handleRestart} className="mt-4">
            <RotateCcw className="mr-1.5 h-4 w-4" /> Chơi Lại
          </Button>
        </div>
      ) : (
        <div className="py-6 space-y-4">
          <p className="font-kids text-xs text-slate-500">
            Lật 2 thẻ giống nhau để ghép cặp thành công!
          </p>

          <div className="grid grid-cols-4 gap-3 max-w-md mx-auto">
            {deck.map((card) => {
              const show = card.isFlipped || card.isMatched;
              return (
                <button
                  key={card.id}
                  onClick={() => handleCardClick(card)}
                  disabled={card.isMatched}
                  className={`flex h-24 flex-col items-center justify-center rounded-2xl border-2 font-kids font-bold transition-all duration-300 ${
                    show
                      ? 'border-rose-400 bg-white shadow-md rotate-y-180'
                      : 'border-rose-300 bg-gradient-to-tr from-rose-400 to-pink-500 text-white shadow'
                  }`}
                >
                  {show ? (
                    <>
                      <span className="text-3xl mb-1">{card.emoji}</span>
                      <span className="text-[11px] text-rose-900 font-bold">{card.word}</span>
                    </>
                  ) : (
                    <span className="text-2xl font-black">?</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </Card>
  );
};
