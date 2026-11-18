import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import {
  BarChart3,
  TrendingUp,
  Clock,
  BookOpen,
  Award,
  Sparkles,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { useAuthStore } from '@/stores/useAuthStore';

export const AnalyticsPage: React.FC = () => {
  const { user } = useAuthStore();

  const weeklyActivity = [
    { day: 'T2', minutes: 25, words: 12 },
    { day: 'T3', minutes: 40, words: 18 },
    { day: 'T4', minutes: 30, words: 15 },
    { day: 'T5', minutes: 45, words: 22 },
    { day: 'T6', minutes: 20, words: 10 },
    { day: 'T7', minutes: 55, words: 30 },
    { day: 'CN', minutes: 35, words: 16 },
  ];

  const scoreProgression = [
    { month: 'Thg 9', toeic: 620, ielts: 6.0 },
    { month: 'Thg 10', toeic: 680, ielts: 6.5 },
    { month: 'Thg 11', toeic: 740, ielts: 7.0 },
    { month: 'Thg 12', toeic: 785, ielts: 7.5 },
  ];

  const vocabMasteryData = [
    { name: 'Mastered (Đã Nhớ)', value: 450, color: '#10B981' },
    { name: 'Review (Cần Ôn)', value: 180, color: '#F59E0B' },
    { name: 'Learning (Đang Học)', value: 240, color: '#6366F1' },
    { name: 'New (Mới)', value: 120, color: '#94A3B8' },
  ];

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-8 shadow-xl">
        <Badge variant="primary" className="bg-primary-500/20 text-primary-300 border-primary-500/30 mb-2">
          BẢNG PHÂN TÍCH TIẾN ĐỘ HỌC TẬP
        </Badge>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          Hành Trình Chinh Phục Tiếng Anh Của Bạn
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-slate-300 max-w-xl">
          Phân tích chi tiết thời gian học, mức độ nhớ từ vựng, xu hướng tăng điểm và các khuyến nghị tối ưu hóa từ AI.
        </p>
      </div>

      {/* Summary KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="text-xs text-slate-500">Tổng giờ học tích lũy</div>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">42.5 giờ</div>
          <div className="text-[11px] text-emerald-600 mt-0.5">Top 10% học viên chăm chỉ</div>
        </Card>
        <Card className="p-4">
          <div className="text-xs text-slate-500">Từ vựng đã nắm vững</div>
          <div className="text-2xl font-black text-primary-600 mt-1">450 / 990 từ</div>
          <div className="text-[11px] text-slate-400 mt-0.5">Hệ thống SRS SM-2</div>
        </Card>
        <Card className="p-4">
          <div className="text-xs text-slate-500">Chuỗi ngày học liên tục</div>
          <div className="text-2xl font-black text-orange-500 mt-1">{user?.streakDays || 14} ngày 🔥</div>
          <div className="text-[11px] text-slate-400 mt-0.5">Chưa từng tắt ngọn lửa</div>
        </Card>
        <Card className="p-4">
          <div className="text-xs text-slate-500">Band điểm dự đoán</div>
          <div className="text-2xl font-black text-purple-600 mt-1">Band 7.5</div>
          <div className="text-[11px] text-emerald-600 mt-0.5">+1.5 band sau 3 tháng</div>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Activity Bar Chart */}
        <Card className="p-6">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-base font-bold flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary-600" /> Thời Gian & Số Từ Vựng Tuần Này
            </CardTitle>
          </CardHeader>
          <div className="h-60 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyActivity}>
                <XAxis dataKey="day" stroke="#94a3b8" fontSize={12} tickLine={false} />
                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} unit="p" />
                <Tooltip
                  formatter={(val: number) => [`${val} phút`, 'Thời gian học']}
                  contentStyle={{ borderRadius: '12px' }}
                />
                <Bar dataKey="minutes" fill="#6366F1" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Score Progression Line Chart */}
        <Card className="p-6">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-base font-bold flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-emerald-600" /> Xu Hướng Tăng Điểm 4 Tháng Qua
            </CardTitle>
          </CardHeader>
          <div className="h-60 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={scoreProgression}>
                <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} tickLine={false} />
                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} />
                <Tooltip contentStyle={{ borderRadius: '12px' }} />
                <Line type="monotone" dataKey="toeic" stroke="#10B981" strokeWidth={3} dot={{ r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Actionable AI Recommendations */}
      <Card className="p-6 border-purple-200 bg-purple-50/40 dark:border-purple-900/40 dark:bg-purple-950/20">
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-2xl bg-primary-electric flex items-center justify-center text-white text-xl shrink-0 mt-0.5">
            🤖
          </div>
          <div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              Đề Xuất Hành Động Trọng Tâm Tuần Này Từ AI
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
              "Kỹ năng Nghe (Listening) của bạn đã có bước nhảy vọt từ 6.5 lên 7.5. Tuy nhiên, phần Đọc hiểu (Reading Passage 3) và Ngữ pháp mệnh đề quan hệ rút gọn vẫn đang là nút thắt khiến bạn đánh mất 15-20% điểm số tiềm năng. 
              <strong> Khuyến nghị:</strong> Hãy dành 2 buổi (thứ 4 và thứ 6) để hoàn thành 2 bài đọc chuyên đề Khoa học tự nhiên và ôn 10 câu bài tập Ngữ pháp Inversion."
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};
