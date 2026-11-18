import React, { useState } from 'react';
import { Heart, Sparkles, ShoppingBag, ArrowUpCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Progress } from '@/components/ui/Progress';
import { useLearningStore } from '@/stores/useLearningStore';
import { useAuthStore } from '@/stores/useAuthStore';
import { sounds, playCelebration } from '@/lib/utils';

export const KidsPetRoom: React.FC = () => {
  const { pet, feedPet, levelUpPet } = useLearningStore();
  const { user, updateStats } = useAuthStore();
  const [selectedAccessory, setSelectedAccessory] = useState(pet.accessory || 'Vương Miện Vàng 👑');

  const accessories = [
    { name: 'Vương Miện Vàng 👑', cost: 50, icon: '👑' },
    { name: 'Mũ Phù Thủy 🧙‍♂️', cost: 70, icon: '🧙‍♂️' },
    { name: 'Kính Râm Thời Thượng 🕶️', cost: 40, icon: '🕶️' },
    { name: 'Áo Choàng Siêu Nhân 🦸', cost: 90, icon: '🦸' },
  ];

  const handleFeed = () => {
    if ((user?.coins || 0) < 10) {
      sounds.playError();
      alert('Bé cần 10 Xu để mua đồ ăn ngon cho thú cưng! Hãy làm thêm bài tập nhé.');
      return;
    }
    const success = feedPet();
    if (success) {
      updateStats(10, 0, -10);
      sounds.playCoin();
      playCelebration();
    }
  };

  const handleBuyAccessory = (acc: typeof accessories[0]) => {
    if ((user?.coins || 0) < acc.cost) {
      sounds.playError();
      alert(`Bé chưa đủ Xu để mua ${acc.name}! Cần thêm ${acc.cost - (user?.coins || 0)} Xu.`);
      return;
    }
    updateStats(0, 0, -acc.cost);
    setSelectedAccessory(acc.name);
    sounds.playCoin();
    playCelebration();
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {/* Pet Interactive Showcase */}
      <Card className="lg:col-span-2 border-2 border-amber-300 bg-amber-50/40 dark:bg-slate-900 p-8 text-center flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-amber-200 dark:border-slate-800">
            <Badge variant="kids">Phòng Thú Cưng • Pet Room</Badge>
            <span className="font-kids font-bold text-amber-700 dark:text-amber-400">
              Giai đoạn: {pet.stage.toUpperCase()} (Cấp {pet.level})
            </span>
          </div>

          <div className="py-8">
            <div className="relative mx-auto flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-tr from-amber-200 to-yellow-300 shadow-2xl text-8xl animate-float dark:from-amber-950 dark:to-yellow-900">
              🦊
              <div className="absolute top-2 right-4 text-4xl">
                {selectedAccessory.includes('👑') ? '👑' : selectedAccessory.includes('🧙‍♂️') ? '🧙‍♂️' : selectedAccessory.includes('🕶️') ? '🕶️' : '🦸'}
              </div>
            </div>
            <h3 className="font-kids font-black text-2xl text-amber-950 dark:text-amber-300 mt-4">
              {pet.name}
            </h3>
            <p className="text-xs text-slate-500 font-semibold">
              Đang diện: {selectedAccessory}
            </p>
          </div>
        </div>

        {/* Pet Stats & Feed Button */}
        <div className="space-y-4 pt-4 border-t border-amber-200 dark:border-slate-800">
          <div className="space-y-2 max-w-sm mx-auto">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
              <span>Độ vui vẻ (Happiness):</span>
              <span className="text-amber-600">{pet.happiness} / 100%</span>
            </div>
            <Progress value={pet.happiness} size="md" indicatorColor="bg-amber-500" />
          </div>

          <div className="flex justify-center gap-3">
            <Button
              variant="kids"
              size="lg"
              onClick={handleFeed}
              className="bg-amber-400 hover:bg-yellow-400 text-amber-950 font-black px-6 shadow-md"
            >
              <Heart className="mr-2 h-5 w-5 fill-rose-500 text-rose-500" /> Cho Ăn (Tốn 10 Xu)
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                sounds.playSuccess();
                levelUpPet();
                playCelebration();
              }}
              className="font-bold text-xs"
            >
              <ArrowUpCircle className="mr-1.5 h-4 w-4 text-primary-600" /> Tiến Hóa Thú
            </Button>
          </div>
        </div>
      </Card>

      {/* Accessories Shop */}
      <Card className="p-6">
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-bold flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-amber-500" /> Cửa Hàng Phụ Kiện
          </CardTitle>
          <p className="text-xs text-slate-500">Dùng Xu để mua đồ trang trí cho {pet.name}</p>
        </CardHeader>
        <CardContent className="space-y-3">
          {accessories.map((acc) => (
            <div
              key={acc.name}
              className="flex items-center justify-between p-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{acc.icon}</span>
                <div>
                  <div className="font-kids font-bold text-xs text-slate-900 dark:text-white">{acc.name}</div>
                  <div className="text-[11px] font-bold text-amber-600">{acc.cost} Xu 🪙</div>
                </div>
              </div>
              <Button
                variant={selectedAccessory === acc.name ? 'primary' : 'outline'}
                size="sm"
                onClick={() => handleBuyAccessory(acc)}
                className="text-xs font-bold"
              >
                {selectedAccessory === acc.name ? 'Đang Đeo' : 'Mua Ngay'}
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
