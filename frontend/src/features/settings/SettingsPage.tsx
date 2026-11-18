import React, { useState } from 'react';
import { Settings, User, Bell, Shield, Volume2, Moon, Globe, Save } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { useAuthStore } from '@/stores/useAuthStore';
import { useThemeStore } from '@/stores/useThemeStore';
import { sounds, playCelebration } from '@/lib/utils';

export const SettingsPage: React.FC = () => {
  const { user, setUser, setRole, setProgram } = useAuthStore();
  const { isDark, toggleTheme } = useThemeStore();

  const [fullName, setFullName] = useState(user?.fullName || 'Minh Anh');
  const [dailyMinutes, setDailyMinutes] = useState(user?.dailyGoalMinutes || 30);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [notifications, setNotifications] = useState(true);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (user) {
      setUser({
        ...user,
        fullName,
        dailyGoalMinutes: dailyMinutes,
      });
    }
    sounds.playSuccess();
    playCelebration();
    alert('Đã cập nhật cài đặt tài khoản thành công!');
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <Settings className="h-6 w-6 text-primary-600" /> Cài Đặt Hệ Thống & Tài Khoản
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Tùy biến trải nghiệm học tập, giao diện và thông báo cá nhân
          </p>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Personal Profile Settings */}
        <Card className="p-6 space-y-4">
          <CardHeader className="p-0 pb-3">
            <CardTitle className="text-base font-bold flex items-center gap-2">
              <User className="h-5 w-5 text-primary-600" /> Thông Tin Hồ Sơ Cá Nhân
            </CardTitle>
          </CardHeader>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Họ và Tên</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full rounded-xl border p-2.5 text-xs sm:text-sm font-semibold dark:bg-slate-800"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Địa chỉ Email</label>
              <input
                type="email"
                value={user?.email || 'learner@lingora.edu.vn'}
                disabled
                className="w-full rounded-xl border p-2.5 text-xs sm:text-sm font-semibold bg-slate-100 dark:bg-slate-800/50 text-slate-500"
              />
            </div>
          </div>
        </Card>

        {/* Study Goals & Preferences */}
        <Card className="p-6 space-y-4">
          <CardHeader className="p-0 pb-3">
            <CardTitle className="text-base font-bold flex items-center gap-2">
              <Globe className="h-5 w-5 text-emerald-600" /> Lộ Trình & Mục Tiêu Học Tập
            </CardTitle>
          </CardHeader>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                Lộ Trình Học Hiện Tại
              </label>
              <select
                value={user?.targetProgram || 'IELTS'}
                onChange={(e) => setProgram(e.target.value as any)}
                className="w-full rounded-xl border p-2.5 text-xs sm:text-sm font-semibold dark:bg-slate-800"
              >
                <option value="Kids">Tiếng Anh Trẻ Em (5-12 tuổi)</option>
                <option value="General">Tiếng Anh Giao Tiếp & Công Sở</option>
                <option value="TOEIC">Luyện Thi TOEIC 800+</option>
                <option value="IELTS">Luyện Thi IELTS 7.5+</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                Mục Tiêu Thời Gian (phút/ngày)
              </label>
              <input
                type="number"
                min={10}
                max={120}
                step={5}
                value={dailyMinutes}
                onChange={(e) => setDailyMinutes(Number(e.target.value))}
                className="w-full rounded-xl border p-2.5 text-xs sm:text-sm font-semibold dark:bg-slate-800"
              />
            </div>
          </div>
        </Card>

        {/* System & Audio Preferences */}
        <Card className="p-6 space-y-4">
          <CardHeader className="p-0 pb-3">
            <CardTitle className="text-base font-bold flex items-center gap-2">
              <Volume2 className="h-5 w-5 text-amber-500" /> Âm Thanh & Giao Diện
            </CardTitle>
          </CardHeader>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-xl border bg-slate-50 dark:bg-slate-800/50">
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">Chế độ Tối (Dark Theme)</div>
                <div className="text-[11px] text-slate-400">Bảo vệ mắt khi học tập vào ban đêm</div>
              </div>
              <Button type="button" variant="outline" size="sm" onClick={toggleTheme} className="text-xs font-bold">
                {isDark ? 'Đang bật Tối 🌙' : 'Đang bật Sáng ☀️'}
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl border bg-slate-50 dark:bg-slate-800/50">
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">Hiệu Ứng Âm Thanh Thưởng (Sound Effects)</div>
                <div className="text-[11px] text-slate-400">Phát âm thanh khi làm đúng và chúc mừng hoàn thành</div>
              </div>
              <button
                type="button"
                onClick={() => setSoundEnabled(!soundEnabled)}
                className={`h-6 w-11 rounded-full p-0.5 transition-colors ${soundEnabled ? 'bg-emerald-500' : 'bg-slate-300'}`}
              >
                <div className={`h-5 w-5 rounded-full bg-white transition-transform ${soundEnabled ? 'translate-x-5' : 'translate-x-0'}`} />
              </button>
            </div>
          </div>
        </Card>

        <div className="flex justify-end gap-3 pt-2">
          <Button type="submit" variant="primary" size="lg" className="font-bold px-8 shadow-md">
            <Save className="mr-2 h-4 w-4" /> Lưu Tất Cả Cài Đặt
          </Button>
        </div>
      </form>
    </div>
  );
};
