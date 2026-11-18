import React from 'react';
import { Link } from 'react-router-dom';
import {
  Flame,
  Zap,
  Target,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Play,
  Heart,
  Baby,
  BrainCircuit,
  Award,
  Bot,
  TrendingUp,
  Clock,
  BookOpen,
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Progress } from '@/components/ui/Progress';
import { useAuthStore } from '@/stores/useAuthStore';
import { useLearningStore } from '@/stores/useLearningStore';
import { sounds, playCelebration } from '@/lib/utils';

export const StudentDashboard: React.FC = () => {
  const { user } = useAuthStore();
  const { pet, feedPet } = useLearningStore();

  const studyData = [
    { day: 'T2', minutes: 25 },
    { day: 'T3', minutes: 40 },
    { day: 'T4', minutes: 30 },
    { day: 'T5', minutes: 45 },
    { day: 'T6', minutes: 20 },
    { day: 'T7', minutes: 55 },
    { day: 'CN', minutes: 35 },
  ];

  const skillData = [
    { skill: 'Nghe (Listening)', score: 82 },
    { skill: 'Đọc (Reading)', score: 78 },
    { skill: 'Nói (Speaking)', score: 70 },
    { skill: 'Viết (Writing)', score: 68 },
    { skill: 'Từ vựng (Vocab)', score: 88 },
    { skill: 'Ngữ pháp (Grammar)', score: 80 },
  ];

  const handleFeed = () => {
    const success = feedPet();
    if (success) {
      sounds.playCoin();
      playCelebration();
    }
  };

  const getTrackLink = () => {
    switch (user?.targetProgram) {
      case 'Kids':
        return '/kids';
      case 'TOEIC':
        return '/toeic';
      case 'IELTS':
        return '/ielts';
      default:
        return '/adults';
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner: Greeting & Daily Target */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-700 via-primary-600 to-primary-electric p-6 text-white shadow-xl lg:p-8">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary" className="bg-white/20 text-white border-none font-bold">
                LỘ TRÌNH: {user?.targetProgram?.toUpperCase()}
              </Badge>
              <div className="flex items-center gap-1 rounded-full bg-orange-500/30 px-2.5 py-0.5 text-xs font-bold text-orange-200">
                <Flame className="h-3.5 w-3.5 fill-orange-400 text-orange-400" /> Chuỗi {user?.streakDays || 14} ngày
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Xin chào, {user?.fullName || 'Học viên'}! 👋
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-indigo-100 max-w-xl">
              Hôm nay bạn đã học được <strong>20 / {user?.dailyGoalMinutes || 30} phút</strong>. Tiếp tục hoàn thành 10 phút để nhận 50 XP và giữ vững ngọn lửa học tập!
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link to={getTrackLink()}>
              <Button
                variant="kids"
                size="lg"
                className="bg-amber-400 hover:bg-yellow-400 text-amber-950 font-black shadow-lg"
              >
                <Play className="mr-2 h-4 w-4 fill-amber-950" /> Tiếp tục bài học
              </Button>
            </Link>
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute -right-10 -bottom-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
      </div>

      {/* Bento Grid: Today's Missions + Pet + Analytics + AI Advice */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Column 1 & 2: Daily Missions + Analytics */}
        <div className="lg:col-span-2 space-y-6">
          {/* Daily Missions */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <div>
                <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                  <Zap className="h-5 w-5 text-amber-500 fill-amber-500" /> Nhiệm vụ hôm nay
                </CardTitle>
                <p className="text-xs text-slate-500">Hoàn thành để nhận Huy hiệu & điểm XP thưởng</p>
              </div>
              <Badge variant="primary">3/4 Hoàn thành</Badge>
            </CardHeader>

            <CardContent className="space-y-3">
              <div className="flex items-center justify-between p-3.5 rounded-xl border border-emerald-200 bg-emerald-50/50 dark:border-emerald-900/50 dark:bg-emerald-950/20">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white line-through text-slate-400">
                      Ôn tập 10 từ vựng SRS đến hạn
                    </div>
                    <div className="text-[11px] text-slate-400">Đã ôn 10/10 từ (+30 XP)</div>
                  </div>
                </div>
                <Badge variant="success">Xong</Badge>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-xl border border-emerald-200 bg-emerald-50/50 dark:border-emerald-900/50 dark:bg-emerald-950/20">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white line-through text-slate-400">
                      Luyện 1 bài nghe ngắn ngữ cảnh
                    </div>
                    <div className="text-[11px] text-slate-400">Đúng 4/5 câu (+25 XP)</div>
                  </div>
                </div>
                <Badge variant="success">Xong</Badge>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-900/50">
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full border-2 border-slate-300 dark:border-slate-600" />
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                      Trò chuyện 5 phút cùng AI Tutor
                    </div>
                    <div className="text-[11px] text-slate-500">Chủ đề: "Plans for the weekend" (+40 XP)</div>
                  </div>
                </div>
                <Link to="/ai-tutor">
                  <Button size="sm" variant="primary">Luyện ngay</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Study Time Chart */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary-600" /> Thời gian học tuần này
                </CardTitle>
                <p className="text-xs text-slate-500">Tổng cộng: 250 phút (Trung bình 35.7 phút/ngày)</p>
              </div>
              <Badge variant="outline" className="text-xs font-semibold">Mục tiêu: Đạt chuẩn</Badge>
            </CardHeader>
            <CardContent>
              <div className="h-52 w-full pt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={studyData}>
                    <XAxis dataKey="day" stroke="#94a3b8" fontSize={12} tickLine={false} />
                    <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} unit="p" />
                    <Tooltip
                      formatter={(val: number) => [`${val} phút`, 'Thời gian học']}
                      contentStyle={{ borderRadius: '12px', border: '1px solid #cbd5e1' }}
                    />
                    <Bar dataKey="minutes" fill="#6366F1" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Column 3: Pet Companion + AI Diagnostic Advice */}
        <div className="space-y-6">
          {/* Pet Companion Widget */}
          <Card className="border-amber-200/80 bg-gradient-to-b from-amber-50/40 to-white dark:border-amber-900/40 dark:from-amber-950/20 dark:to-slate-900 text-center">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <Badge variant="kids" className="text-[10px]">Thú Cưng Đồng Hành</Badge>
                <span className="text-xs font-bold text-amber-600">Cấp {pet.level} ({pet.stage})</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative mx-auto flex h-28 w-28 items-center justify-center rounded-3xl bg-amber-100 shadow-inner dark:bg-amber-950/50 text-5xl animate-float">
                🦊
                <span className="absolute -top-2 -right-2 text-xl" title={pet.accessory}>
                  👑
                </span>
              </div>

              <div>
                <h4 className="font-kids text-lg font-bold text-amber-950 dark:text-amber-200">{pet.name}</h4>
                <p className="text-xs text-slate-500">Độ vui vẻ: {pet.happiness}%</p>
                <Progress value={pet.happiness} size="sm" indicatorColor="bg-amber-500" className="mt-1.5" />
              </div>

              <div className="flex items-center justify-center gap-3 pt-2">
                <Button
                  variant="kids"
                  size="sm"
                  onClick={handleFeed}
                  className="bg-amber-400 hover:bg-yellow-400 text-amber-950 font-bold"
                >
                  <Heart className="mr-1.5 h-4 w-4 fill-rose-500 text-rose-500" /> Cho ăn (+15 vui)
                </Button>
                <Link to="/kids">
                  <Button variant="outline" size="sm" className="font-semibold text-xs">
                    Vào phòng thú
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* AI Advisor Card */}
          <Card className="border-purple-200/80 bg-gradient-to-b from-purple-50/40 to-white dark:border-purple-900/40 dark:from-purple-950/20 dark:to-slate-900">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-lg bg-primary-electric flex items-center justify-center text-white text-xs">
                  🤖
                </div>
                <div>
                  <CardTitle className="text-sm font-bold text-slate-900 dark:text-white">
                    Gợi ý thông minh từ AI
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
              <p>
                📊 <strong>Điểm mạnh:</strong> Khả năng nhớ từ vựng (Vocab) và Ngữ pháp thời quá khứ của bạn đạt độ chính xác <strong>88%</strong>.
              </p>
              <p>
                ⚠️ <strong>Cần chú ý:</strong> Ở phần Speaking, tốc độ phản xạ và nối âm (Connected Speech) còn ngập ngừng. Hãy thử luyện thêm <strong>1 bài Shadowing Studio</strong> hôm nay!
              </p>
              <Link to="/unique-features" className="inline-flex items-center font-bold text-primary-600 dark:text-primary-400 hover:underline pt-1">
                Vào Shadowing Studio ngay <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            </CardContent>
          </Card>

          {/* Skill Radar */}
          <Card>
            <CardHeader className="pb-1">
              <CardTitle className="text-sm font-bold">Biểu đồ Radar Năng Lực</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-44 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skillData}>
                    <PolarGrid stroke="#e2e8f0" />
                    <PolarAngleAxis dataKey="skill" tick={{ fontSize: 9, fill: '#64748b' }} />
                    <Radar name="Học viên" dataKey="score" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.4} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
