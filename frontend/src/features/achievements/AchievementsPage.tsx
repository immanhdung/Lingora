import React from 'react';
import { Trophy, Award, Star, Flame, Sparkles, CheckCircle2, Lock } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Progress } from '@/components/ui/Progress';
import { useAuthStore } from '@/stores/useAuthStore';

export const AchievementsPage: React.FC = () => {
  const { user } = useAuthStore();

  const achievements = [
    { id: 'ach-1', title: 'Ngọn Lửa Bền Bỉ', desc: 'Duy trì chuỗi học tập 7 ngày liên tiếp', icon: '🔥', unlocked: true, progress: 100, reward: '+50 XP' },
    { id: 'ach-2', title: 'Thợ Săn Từ Vựng', desc: 'Ghi nhớ 100 từ vựng vào bộ nhớ dài hạn SRS', icon: '📚', unlocked: true, progress: 100, reward: '+100 XP' },
    { id: 'ach-3', title: 'Giọng Đọc Vàng', desc: 'Đạt điểm phát âm trên 90% ở 10 bài luyện nói', icon: '🎙️', unlocked: true, progress: 100, reward: '+150 XP' },
    { id: 'ach-4', title: 'Chiến Binh Mock Test', desc: 'Hoàn thành bài thi Full Test TOEIC hoặc IELTS đầu tiên', icon: '🎯', unlocked: true, progress: 100, reward: '+200 XP' },
    { id: 'ach-5', title: 'Nhà Đàm Phán Doanh Nghiệp', desc: 'Trò chuyện 30 phút cùng Cố vấn AI Business', icon: '💼', unlocked: false, progress: 65, reward: '+250 XP' },
    { id: 'ach-6', title: 'Bậc Thầy Ngữ Pháp', desc: 'Làm đúng 100% tất cả bài tập ngữ pháp nâng cao', icon: '👑', unlocked: false, progress: 40, reward: '+300 XP' },
  ];

  const leaderboard = [
    { rank: 1, name: 'Nguyễn Thảo Linh', xp: 5820, avatar: '👩', badge: 'Diamond 💎' },
    { rank: 2, name: 'Trần Gia Hưng', xp: 5140, avatar: '👦', badge: 'Platinum 🏆' },
    { rank: 3, name: 'Minh Anh (Bạn)', xp: 3850, avatar: '👩‍🎓', badge: 'Gold 🥇', isCurrent: true },
    { rank: 4, name: 'Lê Hoàng Long', xp: 3620, avatar: '👨', badge: 'Silver 🥈' },
    { rank: 5, name: 'Phạm Thu Trang', xp: 3100, avatar: '👧', badge: 'Bronze 🥉' },
  ];

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 p-6 sm:p-8 text-amber-950 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <Badge variant="kids" className="bg-white/40 text-amber-950 border-none font-bold mb-2">
              HỆ THỐNG DANH HIỆU & HUY CHƯƠNG
            </Badge>
            <h1 className="text-2xl sm:text-3xl font-black font-kids tracking-wide">
              Bộ Sưu Tập Thành Tích & Bảng Xếp Hạng 🏆
            </h1>
            <p className="mt-1 text-xs sm:text-sm font-semibold text-amber-900 max-w-xl">
              Tích lũy XP, thăng hạng giải đấu hàng tuần và mở khóa các huy hiệu độc quyền của Lingora!
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white/40 p-3 rounded-2xl backdrop-blur-md">
            <span className="text-3xl">⭐</span>
            <div>
              <div className="text-[11px] font-bold text-amber-900">Điểm XP Của Bạn:</div>
              <div className="text-2xl font-black text-amber-950">{user?.totalXp || 3850} XP</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Achievements Badges (2 cols) */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="font-bold text-base text-slate-900 dark:text-white">
            Huy Hiệu & Danh Hiệu Đã Đạt Được ({achievements.filter((a) => a.unlocked).length}/{achievements.length})
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {achievements.map((ach) => (
              <Card
                key={ach.id}
                className={`p-5 transition-all ${
                  ach.unlocked
                    ? 'border-amber-200 bg-white dark:bg-slate-900'
                    : 'opacity-70 border-dashed bg-slate-50 dark:bg-slate-800/40'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`h-14 w-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm ${
                    ach.unlocked ? 'bg-amber-100 text-amber-700' : 'bg-slate-200 text-slate-400'
                  }`}>
                    {ach.unlocked ? ach.icon : <Lock className="h-6 w-6" />}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white">{ach.title}</h4>
                      <Badge variant={ach.unlocked ? 'warning' : 'outline'} className="text-[10px]">
                        {ach.reward}
                      </Badge>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">{ach.desc}</p>
                    <Progress value={ach.progress} size="sm" indicatorColor="bg-amber-500" className="mt-3" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Right: Weekly Leaderboard */}
        <Card className="p-6 space-y-4">
          <CardHeader className="p-0 pb-2">
            <CardTitle className="text-base font-bold flex items-center gap-2">
              <Trophy className="h-5 w-5 text-amber-500" /> Bảng Xếp Hạng Tuần Này
            </CardTitle>
            <p className="text-xs text-slate-500">Giải đấu Kim Cương • Còn 2 ngày kết thúc</p>
          </CardHeader>
          <CardContent className="p-0 space-y-2">
            {leaderboard.map((lb) => (
              <div
                key={lb.rank}
                className={`flex items-center justify-between p-3 rounded-2xl transition-all ${
                  lb.isCurrent
                    ? 'bg-primary-50 border-2 border-primary-500 dark:bg-primary-950/60'
                    : 'bg-slate-50 dark:bg-slate-800/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`flex h-6 w-6 items-center justify-center rounded-full font-black text-xs ${
                    lb.rank === 1 ? 'bg-amber-400 text-amber-950' : lb.rank === 2 ? 'bg-slate-300 text-slate-800' : lb.rank === 3 ? 'bg-amber-600 text-white' : 'text-slate-400'
                  }`}>
                    {lb.rank}
                  </span>
                  <span className="text-xl">{lb.avatar}</span>
                  <div>
                    <div className="font-bold text-xs text-slate-900 dark:text-white">{lb.name}</div>
                    <div className="text-[10px] text-slate-400">{lb.badge}</div>
                  </div>
                </div>
                <div className="font-black text-xs text-primary-600 dark:text-primary-400">
                  {lb.xp.toLocaleString()} XP
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
