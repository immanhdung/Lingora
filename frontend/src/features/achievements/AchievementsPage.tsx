import React from 'react';
import { Trophy, Award, Star, Flame, Sparkles, CheckCircle2, Lock, BookOpen, Mic, Target, Briefcase, Crown, User } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Progress } from '@/components/ui/Progress';
import { useAuthStore } from '@/stores/useAuthStore';

export const AchievementsPage: React.FC = () => {
  const { user } = useAuthStore();

  const achievements = [
    { id: 'ach-1', title: 'Ngọn Lửa Bền Bỉ', desc: 'Duy trì chuỗi học tập 7 ngày liên tiếp', icon: Flame, color: 'text-orange-500 bg-orange-100 dark:bg-orange-950 dark:text-orange-400', unlocked: true, progress: 100, reward: '+50 XP' },
    { id: 'ach-2', title: 'Thợ Săn Từ Vựng', desc: 'Ghi nhớ 100 từ vựng vào bộ nhớ dài hạn SRS', icon: BookOpen, color: 'text-blue-500 bg-blue-100 dark:bg-blue-950 dark:text-blue-400', unlocked: true, progress: 100, reward: '+100 XP' },
    { id: 'ach-3', title: 'Giọng Đọc Vàng', desc: 'Đạt điểm phát âm trên 90% ở 10 bài luyện nói', icon: Mic, color: 'text-purple-500 bg-purple-100 dark:bg-purple-950 dark:text-purple-400', unlocked: true, progress: 100, reward: '+150 XP' },
    { id: 'ach-4', title: 'Chiến Binh Mock Test', desc: 'Hoàn thành bài thi Full Test TOEIC hoặc IELTS đầu tiên', icon: Target, color: 'text-emerald-500 bg-emerald-100 dark:bg-emerald-950 dark:text-emerald-400', unlocked: true, progress: 100, reward: '+200 XP' },
    { id: 'ach-5', title: 'Nhà Đàm Phán Doanh Nghiệp', desc: 'Trò chuyện 30 phút cùng Cố vấn AI Business', icon: Briefcase, color: 'text-indigo-500 bg-indigo-100 dark:bg-indigo-950 dark:text-indigo-400', unlocked: false, progress: 65, reward: '+250 XP' },
    { id: 'ach-6', title: 'Bậc Thầy Ngữ Pháp', desc: 'Làm đúng 100% tất cả bài tập ngữ pháp nâng cao', icon: Crown, color: 'text-amber-500 bg-amber-100 dark:bg-amber-950 dark:text-amber-400', unlocked: false, progress: 40, reward: '+300 XP' },
  ];

  const leaderboard = [
    { rank: 1, name: 'Nguyễn Thảo Linh', xp: 5820, badge: 'Hạng Kim Cương' },
    { rank: 2, name: 'Trần Gia Hưng', xp: 5140, badge: 'Hạng Bạch Kim' },
    { rank: 3, name: 'Minh Anh (Bạn)', xp: 3850, badge: 'Hạng Vàng', isCurrent: true },
    { rank: 4, name: 'Lê Hoàng Long', xp: 3620, badge: 'Hạng Bạc' },
    { rank: 5, name: 'Phạm Thu Trang', xp: 3100, badge: 'Hạng Đồng' },
  ];

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="rounded-3xl bg-slate-900 p-6 sm:p-8 text-white shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <span className="rounded-md bg-amber-500/20 px-2.5 py-0.5 text-xs font-bold text-amber-300 border border-amber-500/30 mb-2 inline-block">
              HỆ THỐNG DANH HIỆU & HUY CHƯƠNG
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Bộ Sưu Tập Thành Tích & Bảng Xếp Hạng
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-slate-300 max-w-xl">
              Tích lũy XP, thăng hạng giải đấu hàng tuần và mở khóa các huy hiệu vinh danh độc quyền của Lingora!
            </p>
          </div>

          <div className="flex items-center gap-3 bg-slate-800 p-3.5 rounded-2xl border border-slate-700 shrink-0">
            <Trophy className="h-7 w-7 text-amber-400" />
            <div>
              <div className="text-[11px] font-bold text-slate-400">Điểm XP Của Bạn:</div>
              <div className="text-2xl font-black text-amber-400">{user?.totalXp || 3850} XP</div>
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
            {achievements.map((ach) => {
              const Icon = ach.icon;
              return (
                <Card
                  key={ach.id}
                  className={`p-5 transition-all ${
                    ach.unlocked
                      ? 'border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900'
                      : 'opacity-70 border-dashed bg-slate-50 dark:bg-slate-800/40'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`h-12 w-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${
                      ach.unlocked ? ach.color : 'bg-slate-200 text-slate-400 dark:bg-slate-800'
                    }`}>
                      {ach.unlocked ? <Icon className="h-6 w-6" /> : <Lock className="h-5 w-5" />}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <h4 className="font-bold text-sm text-slate-900 dark:text-white truncate">{ach.title}</h4>
                        <Badge variant={ach.unlocked ? 'warning' : 'outline'} className="text-[10px] shrink-0">
                          {ach.reward}
                        </Badge>
                      </div>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2">{ach.desc}</p>
                      <Progress value={ach.progress} size="sm" indicatorColor="bg-amber-500" className="mt-3" />
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Right: Weekly Leaderboard */}
        <Card className="p-6 space-y-4 border-slate-200 dark:border-slate-800">
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
                  <div className="h-7 w-7 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 text-xs font-bold">
                    {lb.name.charAt(0)}
                  </div>
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
