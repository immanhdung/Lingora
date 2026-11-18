import React from 'react';
import {
  Flame,
  Coins,
  Sparkles,
  Sun,
  Moon,
  Search,
  Bell,
  Menu,
  GraduationCap,
  ShieldCheck,
  UserCheck,
} from 'lucide-react';
import { useAuthStore } from '@/stores/useAuthStore';
import { useThemeStore } from '@/stores/useThemeStore';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { LearningProgramType, UserRole } from '@/types';

interface HeaderProps {
  onToggleSidebar?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  const { user, setProgram, setRole } = useAuthStore();
  const { isDark, toggleTheme } = useThemeStore();
  const [showRoleMenu, setShowRoleMenu] = React.useState(false);
  const [showProgramMenu, setShowProgramMenu] = React.useState(false);

  const programs: { type: LearningProgramType; label: string; icon: string; color: string }[] = [
    { type: 'Kids', label: 'Tiếng Anh Trẻ Em (5-12)', icon: '🧸', color: 'from-amber-400 to-orange-500' },
    { type: 'General', label: 'Giao Tiếp & Đời Sống', icon: '🌍', color: 'from-blue-500 to-indigo-600' },
    { type: 'TOEIC', label: 'Luyện Thi TOEIC 800+', icon: '🎯', color: 'from-emerald-500 to-teal-600' },
    { type: 'IELTS', label: 'Luyện Thi IELTS 7.5+', icon: '🏆', color: 'from-purple-500 to-indigo-600' },
  ];

  const roles: { role: UserRole; label: string; desc: string }[] = [
    { role: 'Student', label: 'Học Viên (Student)', desc: 'Học tập, làm bài thi, luyện AI' },
    { role: 'Parent', label: 'Phụ Huynh (Parent)', desc: 'Theo dõi tiến độ con, cấu hình an toàn' },
    { role: 'Admin', label: 'Quản Trị Viên (Admin)', desc: 'Quản lý khóa học, đề thi, AI config' },
  ];

  const currentProgramInfo = programs.find((p) => p.type === user?.targetProgram) || programs[1];

  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-slate-200/80 bg-white/80 px-4 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/80 sm:px-6">
      {/* Left section: Hamburger for mobile + Program Selector */}
      <div className="flex items-center gap-3">
        {onToggleSidebar && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleSidebar}
            className="md:hidden text-slate-600 dark:text-slate-300"
          >
            <Menu className="h-5 w-5" />
          </Button>
        )}

        {/* Learning Track Switcher Button */}
        <div className="relative">
          <button
            onClick={() => {
              setShowProgramMenu(!showProgramMenu);
              setShowRoleMenu(false);
            }}
            className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50/80 px-3 py-1.5 text-xs sm:text-sm font-semibold transition-all hover:bg-slate-100 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-800/60 dark:hover:bg-slate-800"
          >
            <span className="text-base sm:text-lg">{currentProgramInfo.icon}</span>
            <span className="hidden sm:inline text-slate-800 dark:text-slate-200 font-bold">
              {currentProgramInfo.label}
            </span>
            <span className="sm:hidden text-slate-800 dark:text-slate-200 font-bold">
              {currentProgramInfo.type}
            </span>
            <span className="text-[10px] text-primary-600 dark:text-primary-400 font-bold bg-primary-50 dark:bg-primary-950/70 px-1.5 py-0.5 rounded">
              Đổi
            </span>
          </button>

          {/* Program Switcher Dropdown */}
          {showProgramMenu && (
            <div className="absolute left-0 mt-2 w-64 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl dark:border-slate-800 dark:bg-slate-900 z-50 animate-in fade-in zoom-in-95">
              <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                Chuyển lộ trình học tập
              </div>
              <div className="space-y-1">
                {programs.map((item) => (
                  <button
                    key={item.type}
                    onClick={() => {
                      setProgram(item.type);
                      setShowProgramMenu(false);
                    }}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                      user?.targetProgram === item.type
                        ? 'bg-primary-50 text-primary-700 dark:bg-primary-950/60 dark:text-primary-300 font-bold'
                        : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <div>{item.label}</div>
                      <div className="text-[11px] text-slate-400 font-normal">
                        Bảo lưu toàn bộ tiến độ cũ
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Middle section: Global search */}
      <div className="hidden lg:flex items-center flex-1 max-w-md mx-6">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Tìm kiếm bài học, từ vựng, ngữ pháp, đề thi TOEIC/IELTS..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-1.5 pl-9 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary-500 focus:bg-white focus:outline-none dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-100 dark:focus:bg-slate-900"
          />
        </div>
      </div>

      {/* Right section: Gamification Stats + Theme toggle + Role previewer + User */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Streak */}
        <div
          title={`${user?.streakDays || 14} ngày học liên tiếp! Đừng làm tắt chuỗi nhé.`}
          className="flex items-center gap-1 rounded-xl bg-orange-50 px-2.5 py-1 text-xs sm:text-sm font-bold text-orange-600 dark:bg-orange-950/40 dark:text-orange-400 border border-orange-200/50"
        >
          <Flame className="h-4 w-4 fill-orange-500 text-orange-500 animate-bounce" />
          <span>{user?.streakDays || 14}</span>
        </div>

        {/* Coins */}
        <div
          title={`Bạn có ${user?.coins || 450} xu để mua vật phẩm & phụ kiện cho thú cưng!`}
          className="hidden sm:flex items-center gap-1 rounded-xl bg-amber-50 px-2.5 py-1 text-xs sm:text-sm font-bold text-amber-600 dark:bg-amber-950/40 dark:text-amber-400 border border-amber-200/50"
        >
          <Coins className="h-4 w-4 text-amber-500 fill-amber-400" />
          <span>{user?.coins || 450}</span>
        </div>

        {/* Stars (Kids / General) */}
        <div
          title={`Tổng số sao đạt được: ${user?.stars || 128} ⭐`}
          className="hidden md:flex items-center gap-1 rounded-xl bg-yellow-50 px-2.5 py-1 text-xs sm:text-sm font-bold text-yellow-600 dark:bg-yellow-950/40 dark:text-yellow-400 border border-yellow-200/50"
        >
          <Sparkles className="h-4 w-4 text-yellow-500" />
          <span>{user?.stars || 128}</span>
        </div>

        {/* Dark Mode Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="h-9 w-9 text-slate-600 dark:text-slate-300 rounded-xl"
          title={isDark ? 'Chuyển sang chế độ Sáng' : 'Chuyển sang chế độ Tối'}
        >
          {isDark ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4" />}
        </Button>

        {/* Role Switcher Pill for Testing / Demonstration */}
        <div className="relative">
          <button
            onClick={() => {
              setShowRoleMenu(!showRoleMenu);
              setShowProgramMenu(false);
            }}
            className="hidden sm:flex items-center gap-1.5 rounded-xl border border-indigo-200 bg-indigo-50/70 px-2.5 py-1 text-xs font-semibold text-indigo-700 dark:border-indigo-800 dark:bg-indigo-950/50 dark:text-indigo-300"
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Vai trò: {user?.role}</span>
          </button>

          {showRoleMenu && (
            <div className="absolute right-0 mt-2 w-64 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl dark:border-slate-800 dark:bg-slate-900 z-50">
              <div className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
                Chuyển đổi góc nhìn vai trò
              </div>
              <div className="space-y-1">
                {roles.map((r) => (
                  <button
                    key={r.role}
                    onClick={() => {
                      setRole(r.role);
                      setShowRoleMenu(false);
                    }}
                    className={`flex w-full flex-col items-start rounded-xl px-3 py-2 text-left text-xs transition-colors ${
                      user?.role === r.role
                        ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 font-bold'
                        : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <span className="font-semibold">{r.label}</span>
                    <span className="text-[10px] text-slate-400 font-normal">{r.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* User avatar */}
        <div className="flex items-center gap-2 pl-1 sm:pl-2">
          <img
            src={user?.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'}
            alt={user?.fullName || 'User'}
            className="h-8 w-8 rounded-full object-cover ring-2 ring-primary-500/30"
          />
          <div className="hidden xl:block text-left text-xs">
            <div className="font-bold text-slate-800 dark:text-slate-200">{user?.fullName}</div>
            <div className="text-[10px] text-slate-400">Cấp độ: {user?.currentLevel}</div>
          </div>
        </div>
      </div>
    </header>
  );
};
