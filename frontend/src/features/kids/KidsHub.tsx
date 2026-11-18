import React, { useState } from 'react';
import {
  Sparkles,
  Star,
  Coins,
  Lock,
  Play,
  Award,
  ChevronRight,
  Heart,
  Zap,
  Volume2,
  Trophy,
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Progress } from '@/components/ui/Progress';
import { useLearningStore } from '@/stores/useLearningStore';
import { useAuthStore } from '@/stores/useAuthStore';
import { KidsWorld } from '@/types';
import { sounds, playCelebration } from '@/lib/utils';
import { speakEnglish } from '@/lib/speech';

// Import All 10 Games
import { WordMatchGame } from './games/WordMatchGame';
import { PictureGuessGame } from './games/PictureGuessGame';
import { ListenChooseGame } from './games/ListenChooseGame';
import { SpellingChallengeGame } from './games/SpellingChallengeGame';
import { MemoryCardsGame } from './games/MemoryCardsGame';
import { WordShootingGame } from './games/WordShootingGame';
import { SentenceBuilderGame } from './games/SentenceBuilderGame';
import { PronunciationGame } from './games/PronunciationGame';
import { TreasureHuntGame } from './games/TreasureHuntGame';
import { DailyQuizGame } from './games/DailyQuizGame';
import { KidsPetRoom } from './games/KidsPetRoom';

export const KidsHub: React.FC = () => {
  const { user } = useAuthStore();
  const { pet, unlockedWorlds, unlockWorld } = useLearningStore();
  const [activeGame, setActiveGame] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'worlds' | 'games' | 'pet'>('worlds');

  const worlds: KidsWorld[] = [
    {
      id: 'world-alphabet',
      name: 'Alphabet Kingdom',
      vietnameseName: 'Vương Quốc Chữ Cái',
      slug: 'alphabet',
      icon: '🔤',
      description: 'Khám phá 26 chữ cái kỳ diệu cùng âm ngữ phonics vui nhộn',
      orderIndex: 1,
      requiredStars: 0,
      themeColor: '#F59E0B',
      bgGradient: 'from-amber-400 to-orange-500',
      levelsCount: 5,
      unlocked: true,
    },
    {
      id: 'world-animals',
      name: 'Animal Kingdom',
      vietnameseName: 'Vương Quốc Động Vật',
      slug: 'animals',
      icon: '🦁',
      description: 'Làm quen các loài thú cưng, động vật rừng xanh và đại dương',
      orderIndex: 2,
      requiredStars: 5,
      themeColor: '#10B981',
      bgGradient: 'from-emerald-400 to-teal-600',
      levelsCount: 6,
      unlocked: true,
    },
    {
      id: 'world-food',
      name: 'Food Paradise',
      vietnameseName: 'Thiên Đường Ẩm Thực',
      slug: 'food',
      icon: '🍎',
      description: 'Trái cây ngọt ngào, bánh ngọt, rau củ và các món ăn ngon',
      orderIndex: 3,
      requiredStars: 15,
      themeColor: '#EF4444',
      bgGradient: 'from-rose-400 to-pink-600',
      levelsCount: 6,
      unlocked: true,
    },
    {
      id: 'world-colors',
      name: 'Color Island',
      vietnameseName: 'Hòn Đảo Sắc Màu',
      slug: 'colors',
      icon: '🎨',
      description: 'Cầu vồng rực rỡ và những gam màu cuộc sống diệu kỳ',
      orderIndex: 4,
      requiredStars: 25,
      themeColor: '#8B5CF6',
      bgGradient: 'from-purple-400 to-indigo-600',
      levelsCount: 5,
      unlocked: true,
    },
    {
      id: 'world-numbers',
      name: 'Number Galaxy',
      vietnameseName: 'Dải Ngân Hà Con Số',
      slug: 'numbers',
      icon: '🔢',
      description: 'Đếm sao, giải toán bằng tiếng Anh và thu thập ngọc quý',
      orderIndex: 5,
      requiredStars: 40,
      themeColor: '#3B82F6',
      bgGradient: 'from-blue-400 to-sky-600',
      levelsCount: 6,
      unlocked: false,
    },
    {
      id: 'world-family',
      name: 'Family Village',
      vietnameseName: 'Ngôi Làng Gia Đình',
      slug: 'family',
      icon: '🏡',
      description: 'Ông bà, cha mẹ, anh chị em và ngôi nhà ấm cúng',
      orderIndex: 6,
      requiredStars: 55,
      themeColor: '#F97316',
      bgGradient: 'from-orange-400 to-amber-600',
      levelsCount: 5,
      unlocked: false,
    },
    {
      id: 'world-school',
      name: 'School Adventure',
      vietnameseName: 'Chuyến Phiêu Lưu Trường Học',
      slug: 'school',
      icon: '🎒',
      description: 'Lớp học, đồ dùng học tập, bạn bè và thầy cô thân yêu',
      orderIndex: 7,
      requiredStars: 70,
      themeColor: '#06B6D4',
      bgGradient: 'from-cyan-400 to-blue-600',
      levelsCount: 6,
      unlocked: false,
    },
    {
      id: 'world-daily-life',
      name: 'Daily Life City',
      vietnameseName: 'Thành Phố Đời Sống',
      slug: 'daily-life',
      icon: '🏙️',
      description: 'Giao tiếp hàng ngày, công viên, siêu thị và đường phố',
      orderIndex: 8,
      requiredStars: 90,
      themeColor: '#14B8A6',
      bgGradient: 'from-teal-400 to-emerald-600',
      levelsCount: 6,
      unlocked: false,
    },
    {
      id: 'world-nature',
      name: 'Nature World',
      vietnameseName: 'Thế Giới Thiên Nhiên',
      slug: 'nature',
      icon: '🌲',
      description: 'Thời tiết bốn mùa, cây cỏ hoa lá và hành tinh xanh',
      orderIndex: 9,
      requiredStars: 110,
      themeColor: '#84CC16',
      bgGradient: 'from-lime-400 to-green-600',
      levelsCount: 5,
      unlocked: false,
    },
    {
      id: 'world-space',
      name: 'Space Explorer',
      vietnameseName: 'Nhà Thám Hiểm Vũ Trụ',
      slug: 'space',
      icon: '🚀',
      description: 'Hành tinh, mặt trời, mặt trăng và phi thuyền tương lai',
      orderIndex: 10,
      requiredStars: 135,
      themeColor: '#6366F1',
      bgGradient: 'from-indigo-500 to-purple-800',
      levelsCount: 8,
      unlocked: false,
    },
  ];

  const gamesList = [
    { id: 'game-1', name: 'Word Matching', vi: 'Game 1: Ghép Từ & Nghĩa', icon: '🧩', color: 'bg-emerald-500', desc: 'Nối từ tiếng Anh với hình ảnh/nghĩa chuẩn' },
    { id: 'game-2', name: 'Picture Guessing', vi: 'Game 2: Đoán Hình Ảnh', icon: '🖼️', color: 'bg-sky-500', desc: 'Nhìn tranh đoán chữ và nghe phát âm mẫu' },
    { id: 'game-3', name: 'Listen & Choose', vi: 'Game 3: Nghe & Chọn Tranh', icon: '🎧', color: 'bg-amber-500', desc: 'Rèn luyện phản xạ nghe tiếng Anh chuẩn bản xứ' },
    { id: 'game-4', name: 'Spelling Challenge', vi: 'Game 4: Thử Thách Đánh Vần', icon: '🔤', color: 'bg-purple-500', desc: 'Sắp xếp các chữ cái tạo thành từ vựng đúng' },
    { id: 'game-5', name: 'Memory Cards', vi: 'Game 5: Lật Thẻ Trí Nhớ', icon: '🃏', color: 'bg-rose-500', desc: 'Lật tìm các cặp thẻ tương ứng ghi điểm cao' },
    { id: 'game-6', name: 'Word Shooting', vi: 'Game 6: Bắn Bóng Từ Vựng', icon: '🎯', color: 'bg-indigo-500', desc: 'Chọn nhanh từ mục tiêu đang bay để ghi điểm' },
    { id: 'game-7', name: 'Sentence Builder', vi: 'Game 7: Xây Dựng Câu', icon: '🏗️', color: 'bg-cyan-500', desc: 'Ghép khối từ thành câu hoàn chỉnh đúng ngữ pháp' },
    { id: 'game-8', name: 'Pronunciation Challenge', vi: 'Game 8: Luyện Phát Âm', icon: '🎙️', color: 'bg-orange-500', desc: 'Nói vào micro và nhận điểm chấm chuẩn xác' },
    { id: 'game-9', name: 'Treasure Hunt', vi: 'Game 9: Thám Hiểm Kho Báu', icon: '🗺️', color: 'bg-yellow-500', desc: 'Giải câu đố tìm rương báu bí mật' },
    { id: 'game-10', name: 'Daily Quiz', vi: 'Game 10: Đố Vui Hàng Ngày', icon: '⭐', color: 'bg-teal-500', desc: 'Thử thách 5 câu mỗi ngày để giữ streak' },
  ];

  const handleStartGame = (gameId: string) => {
    sounds.playClick();
    setActiveGame(gameId);
  };

  const handleWorldClick = (w: KidsWorld) => {
    const isUnlocked = unlockedWorlds.includes(w.id) || (user?.stars || 0) >= w.requiredStars;
    if (isUnlocked) {
      sounds.playSuccess();
      speakEnglish(`Welcome to ${w.name}!`);
      // Start Game 1 of that world by default
      setActiveGame('game-1');
    } else {
      sounds.playError();
      alert(`Bé cần thêm ${w.requiredStars - (user?.stars || 0)} ⭐ để mở khóa ${w.vietnameseName}! Hãy chơi thêm game để nhận sao nhé.`);
    }
  };

  return (
    <div className="space-y-6">
      {/* If a game is active, render that playable game screen */}
      {activeGame && (
        <div className="animate-in fade-in zoom-in-95">
          <div className="mb-4 flex items-center justify-between">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setActiveGame(null)}
              className="font-bold text-xs"
            >
              ← Quay lại Bản Đồ Thế Giới
            </Button>
            <div className="flex items-center gap-2">
              <Badge variant="kids" className="text-xs">
                ⭐ {user?.stars || 128} Sao
              </Badge>
              <Badge variant="warning" className="text-xs">
                🪙 {user?.coins || 450} Xu
              </Badge>
            </div>
          </div>

          {activeGame === 'game-1' && <WordMatchGame onComplete={() => {}} />}
          {activeGame === 'game-2' && <PictureGuessGame onComplete={() => {}} />}
          {activeGame === 'game-3' && <ListenChooseGame onComplete={() => {}} />}
          {activeGame === 'game-4' && <SpellingChallengeGame onComplete={() => {}} />}
          {activeGame === 'game-5' && <MemoryCardsGame onComplete={() => {}} />}
          {activeGame === 'game-6' && <WordShootingGame onComplete={() => {}} />}
          {activeGame === 'game-7' && <SentenceBuilderGame onComplete={() => {}} />}
          {activeGame === 'game-8' && <PronunciationGame onComplete={() => {}} />}
          {activeGame === 'game-9' && <TreasureHuntGame onComplete={() => {}} />}
          {activeGame === 'game-10' && <DailyQuizGame onComplete={() => {}} />}
        </div>
      )}

      {/* Main Kids Universe (When not in game) */}
      {!activeGame && (
        <>
          {/* Header Banner with Mascot Guide */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-400 via-orange-400 to-pink-500 p-6 sm:p-8 text-amber-950 shadow-xl">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-white shadow-lg text-5xl animate-bounce">
                  🦊
                </div>
                <div>
                  <div className="inline-flex items-center gap-1 rounded-full bg-white/40 px-3 py-0.5 text-xs font-black tracking-wide uppercase mb-1">
                    <Sparkles className="h-3.5 w-3.5" /> Linh vật Lingokid
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-black font-kids tracking-wide">
                    Thế Giới Tiếng Anh Kỳ Diệu Của Bé! 🌟
                  </h1>
                  <p className="text-xs sm:text-sm font-semibold text-amber-900 mt-1 max-w-lg">
                    Chào bé! Hãy chọn một Thế giới hoặc mở danh sách 10 trò chơi bên dưới để vừa chơi vừa thu thập thật nhiều Ngôi sao may mắn nhé!
                  </p>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="flex gap-2 bg-white/40 p-1.5 rounded-2xl backdrop-blur-md">
                <Button
                  variant={activeTab === 'worlds' ? 'kids' : 'ghost'}
                  size="sm"
                  onClick={() => {
                    sounds.playClick();
                    setActiveTab('worlds');
                  }}
                  className="font-kids font-bold text-xs"
                >
                  🗺️ Bản Đồ (10 Thế Giới)
                </Button>
                <Button
                  variant={activeTab === 'games' ? 'kids' : 'ghost'}
                  size="sm"
                  onClick={() => {
                    sounds.playClick();
                    setActiveTab('games');
                  }}
                  className="font-kids font-bold text-xs"
                >
                  🎮 10 Trò Chơi
                </Button>
                <Button
                  variant={activeTab === 'pet' ? 'kids' : 'ghost'}
                  size="sm"
                  onClick={() => {
                    sounds.playClick();
                    setActiveTab('pet');
                  }}
                  className="font-kids font-bold text-xs"
                >
                  🏡 Phòng Thú Cưng
                </Button>
              </div>
            </div>
          </div>

          {/* TAB 1: 10 WORLDS MAP */}
          {activeTab === 'worlds' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-black font-kids text-slate-900 dark:text-white">
                    Bản Đồ 10 Vương Quốc Kỳ Diệu
                  </h2>
                  <p className="text-xs text-slate-500">Mỗi vương quốc chứa các bài học và game thú vị</p>
                </div>
                <Badge variant="kids">Đã mở: {unlockedWorlds.length}/10 Vương Quốc</Badge>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {worlds.map((w) => {
                  const isUnlocked = unlockedWorlds.includes(w.id) || (user?.stars || 0) >= w.requiredStars;
                  return (
                    <Card
                      key={w.id}
                      onClick={() => handleWorldClick(w)}
                      className={`relative overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl p-5 text-center ${
                        isUnlocked
                          ? 'border-2 border-amber-300/80 bg-white dark:bg-slate-900'
                          : 'opacity-70 grayscale border-dashed border-slate-300 bg-slate-50 dark:bg-slate-800/40'
                      }`}
                    >
                      {/* Top Star Requirement Pill */}
                      {!isUnlocked && (
                        <div className="absolute top-2 right-2 flex items-center gap-1 rounded-full bg-slate-800/80 px-2 py-0.5 text-[10px] font-bold text-white">
                          <Lock className="h-3 w-3" /> Cần {w.requiredStars} ⭐
                        </div>
                      )}

                      {/* Icon */}
                      <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-tr ${w.bgGradient} text-3xl shadow-lg mb-3 ${isUnlocked ? 'animate-float' : ''}`}>
                        {w.icon}
                      </div>

                      <h3 className="font-kids font-bold text-sm text-slate-900 dark:text-white truncate">
                        {w.vietnameseName}
                      </h3>
                      <p className="text-[11px] font-semibold text-slate-400 mt-0.5">{w.name}</p>

                      <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                        <span className="font-bold text-amber-600">{w.levelsCount} Cấp độ</span>
                        <span className="font-bold text-primary-600">
                          {isUnlocked ? 'Khám phá →' : 'Khóa'}
                        </span>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: 10 PLAYABLE GAMES DIRECT ACCESS */}
          {activeTab === 'games' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-black font-kids text-slate-900 dark:text-white">
                    Bộ 10 Trò Chơi Tương Tác Có Thể Chơi Ngay
                  </h2>
                  <p className="text-xs text-slate-500">Mỗi trò chơi rèn luyện một kỹ năng: Từ vựng, Phản xạ, Nghe, Đánh vần, Phát âm</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {gamesList.map((g) => (
                  <Card
                    key={g.id}
                    onClick={() => handleStartGame(g.id)}
                    className="p-5 cursor-pointer hover:-translate-y-1 transition-transform border-slate-200 hover:border-primary-400 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`h-14 w-14 rounded-2xl ${g.color} flex items-center justify-center text-3xl text-white shadow-md shrink-0`}>
                        {g.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-kids font-bold text-sm text-slate-900 dark:text-white">{g.vi}</h4>
                        <div className="text-[11px] font-semibold text-primary-600">{g.name}</div>
                        <p className="text-xs text-slate-500 mt-1">{g.desc}</p>
                        <div className="mt-3 flex items-center justify-between">
                          <span className="text-[10px] font-bold text-amber-500">+3 ⭐ | +20 XP</span>
                          <Button variant="kids" size="sm" className="h-7 text-xs font-bold px-3">
                            Chơi ngay
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: PET COMPANION ROOM */}
          {activeTab === 'pet' && <KidsPetRoom />}
        </>
      )}
    </div>
  );
};
