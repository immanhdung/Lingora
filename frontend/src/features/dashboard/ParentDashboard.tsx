import React, { useState } from 'react';
import {
  HeartHandshake,
  Clock,
  Star,
  Award,
  ShieldCheck,
  Baby,
  Calendar,
  Lock,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Progress } from '@/components/ui/Progress';
import { sounds } from '@/lib/utils';

export const ParentDashboard: React.FC = () => {
  const [selectedChild, setSelectedChild] = useState('child-1');
  const [screenLimit, setScreenLimit] = useState(45);
  const [aiSafeFilter, setAiSafeFilter] = useState(true);

  const children = [
    {
      id: 'child-1',
      name: 'Bé Bảo Nam (7 tuổi)',
      avatar: '👦',
      currentWorld: 'Vương Quốc Động Vật (Animal Kingdom)',
      level: 4,
      stars: 84,
      todayMinutes: 32,
      targetMinutes: 45,
      streak: 12,
      recentGame: 'Ghép từ & Nghe chọn tranh',
      accuracy: 92,
    },
    {
      id: 'child-2',
      name: 'Bé Thảo Vy (10 tuổi)',
      avatar: '👧',
      currentWorld: 'Thành Phố Đời Sống (Daily Life City)',
      level: 8,
      stars: 142,
      todayMinutes: 40,
      targetMinutes: 45,
      streak: 19,
      recentGame: 'Thử thách Đánh vần & Xây câu',
      accuracy: 96,
    },
  ];

  const current = children.find((c) => c.id === selectedChild) || children[0];

  return (
    <div className="space-y-6">
      {/* Parent Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 rounded-3xl bg-gradient-to-r from-sky-600 to-indigo-600 text-white shadow-lg">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <HeartHandshake className="h-5 w-5 text-sky-200" />
            <span className="text-xs font-bold uppercase tracking-wider text-sky-100">
              Cổng Quản Lý Dành Cho Phụ Huynh
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold">Đồng Hành Cùng Con Khôn Lớn</h1>
          <p className="text-xs sm:text-sm text-sky-100 mt-1">
            Theo dõi thời gian học, mức độ tập trung và thiết lập giới hạn sử dụng an toàn cho trẻ.
          </p>
        </div>

        {/* Child Selector Switch */}
        <div className="flex gap-2 bg-white/20 p-1.5 rounded-2xl backdrop-blur-md">
          {children.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                sounds.playClick();
                setSelectedChild(c.id);
              }}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedChild === c.id
                  ? 'bg-white text-slate-900 shadow-md'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <span>{c.avatar}</span>
              <span>{c.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Progress & Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-5">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold">Thời gian học hôm nay</span>
            <Clock className="h-4 w-4 text-sky-600" />
          </div>
          <div className="text-2xl font-black text-slate-900 dark:text-white">
            {current.todayMinutes} / {current.targetMinutes} phút
          </div>
          <Progress
            value={(current.todayMinutes / current.targetMinutes) * 100}
            size="sm"
            indicatorColor="bg-sky-500"
            className="mt-3"
          />
        </Card>

        <Card className="p-5">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold">Tổng số Sao đạt được</span>
            <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
          </div>
          <div className="text-2xl font-black text-amber-500">{current.stars} ⭐</div>
          <p className="text-[11px] text-slate-400 mt-2">Đạt tỷ lệ chính xác {current.accuracy}%</p>
        </Card>

        <Card className="p-5">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold">Chuỗi ngày học liên tục</span>
            <Award className="h-4 w-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-black text-emerald-600">{current.streak} ngày 🔥</div>
          <p className="text-[11px] text-slate-400 mt-2">Bé rất có thói quen tự giác!</p>
        </Card>

        <Card className="p-5">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold">Cấp độ & Thế giới</span>
            <Baby className="h-4 w-4 text-primary-600" />
          </div>
          <div className="text-lg font-bold text-slate-900 dark:text-white truncate">
            {current.currentWorld}
          </div>
          <p className="text-[11px] text-slate-400 mt-2">Đang hoàn thành Level {current.level}</p>
        </Card>
      </div>

      {/* Parental Controls & Safe Settings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base font-bold flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-emerald-600" /> Thiết lập An toàn & Giới hạn Thời gian
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Giới hạn màn hình hàng ngày: {screenLimit} phút
                </span>
                <span className="text-xs text-slate-400 font-semibold">Khuyến nghị: 30-45 phút</span>
              </div>
              <input
                type="range"
                min={15}
                max={90}
                step={5}
                value={screenLimit}
                onChange={(e) => setScreenLimit(Number(e.target.value))}
                className="w-full accent-primary-600"
              />
            </div>

            <div className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 dark:border-slate-800">
              <div>
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  Bộ lọc nội dung AI thân thiện với trẻ em (Child-Safe Mode)
                </div>
                <div className="text-[11px] text-slate-400">
                  Ngăn chặn mọi nội dung không phù hợp lứa tuổi, chỉ cho phép từ vựng thiếu nhi
                </div>
              </div>
              <button
                onClick={() => setAiSafeFilter(!aiSafeFilter)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  aiSafeFilter ? 'bg-emerald-500' : 'bg-slate-300 dark:bg-slate-700'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    aiSafeFilter ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 dark:border-slate-800">
              <div>
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  Khóa tính năng Mua đồ bằng Tiền thật
                </div>
                <div className="text-[11px] text-slate-400">
                  Chỉ cho phép tiêu Xu ảo kiếm được từ việc làm bài tập
                </div>
              </div>
              <Badge variant="success">Đang bật khóa</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Weekly Activities Log */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base font-bold flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary-600" /> Hoạt động học tập gần đây của bé
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { game: 'Game 1: Ghép từ vựng Động vật', result: '10/10 câu đúng', stars: '+3 ⭐', time: '18:30 hôm nay' },
              { game: 'Game 4: Thử thách Đánh vần chữ cái', result: '8/10 từ hoàn thành', stars: '+2 ⭐', time: '18:15 hôm nay' },
              { game: 'Cho Thú cưng cáo ăn & Tăng cấp 4', result: 'Độ vui vẻ 100%', stars: '+20 XP', time: '17:50 hôm nay' },
              { game: 'Game 8: Luyện phát âm "Elephant & Giraffe"', result: 'Phát âm chuẩn 88%', stars: '+3 ⭐', time: 'Hôm qua' },
            ].map((log, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 text-xs">
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">{log.game}</div>
                  <div className="text-[11px] text-slate-400">{log.result} • {log.time}</div>
                </div>
                <Badge variant="warning">{log.stars}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
