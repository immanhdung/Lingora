import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Flame,
  Coins,
  Sparkles,
  Sun,
  Moon,
  Search,
  Menu,
  GraduationCap,
  ShieldCheck,
  UserCheck,
  LogOut,
  User,
  Settings,
  BarChart3,
  ChevronDown,
  Globe,
  Target,
  Award,
  Smile,
} from 'lucide-react';
import { useAuthStore } from '@/stores/useAuthStore';
import { useThemeStore } from '@/stores/useThemeStore';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { LearningProgramType, UserRole } from '@/types';
import { sounds } from '@/lib/utils';

interface HeaderProps {
  onToggleSidebar?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  const navigate = useNavigate();
  const { user, setProgram, setRole, logout } = useAuthStore();
  const { isDark, toggleTheme } = useThemeStore();
  const [showRoleMenu, setShowRoleMenu] = useState(false);
  const [showProgramMenu, setShowProgramMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const userMenuRef = useRef<HTMLDivElement>(null);
  const programMenuRef = useRef<HTMLDivElement>(null);
  const roleMenuRef = useRef<HTMLDivElement>(null);

  // Close menus on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setShowUserMenu(false);
      }
      if (programMenuRef.current && !programMenuRef.current.contains(e.target as Node)) {
        setShowProgramMenu(false);
      }
      if (roleMenuRef.current && !roleMenuRef.current.contains(e.target as Node)) {
        setShowRoleMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const programs: { type: LearningProgramType; label: string; icon: any; color: string }[] = [
    { type: 'Kids', label: 'Tiếng Anh Trẻ Em (5-12)', icon: Smile, color: 'text-amber-500' },
    { type: 'General', label: 'Giao Tiếp & Đời Sống', icon: Globe, color: 'text-blue-500' },
    { type: 'TOEIC', label: 'Luyện Thi TOEIC 800+', icon: Target, color: 'text-emerald-500' },
    { type: 'IELTS', label: 'Luyện Thi IELTS 7.5+', icon: Award, color: 'text-purple-500' },
  ];

  const roles: { role: UserRole; label: string; desc: string }[] = [
    { role: 'Student', label: 'Học Viên (Student)', desc: 'Học tập, làm bài thi, luyện AI' },
    { role: 'Parent', label: 'Phụ Huynh (Parent)', desc: 'Theo dõi tiến độ con, cấu hình an toàn' },
    { role: 'Admin', label: 'Quản Trị Viên (Admin)', desc: 'Quản lý khóa học, đề thi, AI config' },
  ];

  const currentProgramInfo = programs.find((p) => p.type === user?.targetProgram) || programs[1];
  const CurrentIcon = currentProgramInfo.icon;

  const handleLogout = () => {
    sounds.playClick();
    logout();
    navigate('/login');
  };

  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-slate-200/80 bg-white/90 px-4 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/90 sm:px-6">
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
        <div className="relative" ref={programMenuRef}>
          <button
            onClick={() => {
              setShowProgramMenu(!showProgramMenu);
              setShowRoleMenu(false);
              setShowUserMenu(false);
            }}
            className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50/90 px-3 py-1.5 text-xs sm:text-sm font-semibold transition-all hover:bg-slate-100 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-800/60 dark:hover:bg-slate-800"
          >
            <CurrentIcon className={`h-4 w-4 ${currentProgramInfo.color}`} />
            <span className="hidden sm:inline text-slate-800 dark:text-slate-200 font-bold">
              {currentProgramInfo.label}
            </span>
            <span className="sm:hidden text-slate-800 dark:text-slate-200 font-bold">
              {currentProgramInfo.type}
            </span>
            <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
          </button>

          {/* Program Switcher Dropdown */}
          {showProgramMenu && (
            <div className="absolute left-0 mt-2 w-64 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl dark:border-slate-800 dark:bg-slate-900 z-50 animate-in fade-in zoom-in-95">
              <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Chuyển lộ trình học tập
              </div>
              <div className="space-y-1">
                {programs.map((item) => {
                  const ItemIcon = item.icon;
                  const isSelected = user?.targetProgram === item.type;
                  return (
                    <button
                      key={item.type}
                      onClick={() => {
                        setProgram(item.type);
                        setShowProgramMenu(false);
                      }}
                      className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                        isSelected
                          ? 'bg-primary-50 text-primary-700 dark:bg-primary-950/60 dark:text-primary-300 font-bold'
                          : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <ItemIcon className={`h-4 w-4 ${item.color}`} />
                      <div>
                        <div>{item.label}</div>
                        <div className="text-[11px] text-slate-400 font-normal">
                          Bảo lưu tiến độ học tập
                        </div>
                      </div>
                    </button>
                  );
                })}
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
            placeholder="Tìm bài học, từ vựng, ngữ pháp, đề thi TOEIC/IELTS..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-1.5 pl-9 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary-500 focus:bg-white focus:outline-none dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-100 dark:focus:bg-slate-900"
          />
        </div>
      </div>

      {/* Right section: Gamification Stats + Theme toggle + Role previewer + User Menu */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Streak */}
        <div
          title={`${user?.streakDays || 14} ngày học liên tiếp`}
          className="flex items-center gap-1 rounded-xl bg-orange-50 px-2.5 py-1 text-xs sm:text-sm font-bold text-orange-600 dark:bg-orange-950/40 dark:text-orange-400 border border-orange-200/50"
        >
          <Flame className="h-4 w-4 fill-orange-500 text-orange-500" />
          <span>{user?.streakDays || 14}</span>
        </div>

        {/* Coins */}
        <div
          title={`Bạn có ${user?.coins || 450} xu`}
          className="hidden sm:flex items-center gap-1 rounded-xl bg-amber-50 px-2.5 py-1 text-xs sm:text-sm font-bold text-amber-600 dark:bg-amber-950/40 dark:text-amber-400 border border-amber-200/50"
        >
          <Coins className="h-4 w-4 text-amber-500 fill-amber-400" />
          <span>{user?.coins || 450}</span>
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

        {/* Role Switcher Pill */}
        <div className="relative" ref={roleMenuRef}>
          <button
            onClick={() => {
              setShowRoleMenu(!showRoleMenu);
              setShowProgramMenu(false);
              setShowUserMenu(false);
            }}
            className="hidden sm:flex items-center gap-1.5 rounded-xl border border-indigo-200 bg-indigo-50/70 px-2.5 py-1 text-xs font-semibold text-indigo-700 dark:border-indigo-800 dark:bg-indigo-950/50 dark:text-indigo-300"
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>{user?.role || 'Student'}</span>
          </button>

          {showRoleMenu && (
            <div className="absolute right-0 mt-2 w-60 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl dark:border-slate-800 dark:bg-slate-900 z-50">
              <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Chuyển đổi vai trò trải nghiệm
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

        {/* User Avatar & Dropdown Menu with LOGOUT */}
        <div className="relative" ref={userMenuRef}>
          <button
            onClick={() => {
              setShowUserMenu(!showUserMenu);
              setShowProgramMenu(false);
              setShowRoleMenu(false);
            }}
            className="flex items-center gap-2 rounded-xl p-1 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
          >
            <img
              src={
                user?.avatarUrl ||
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
              }
              alt={user?.fullName || 'User'}
              className="h-8 w-8 rounded-full object-cover ring-2 ring-primary-500/30"
            />
            <div className="hidden xl:block text-left text-xs">
              <div className="font-bold text-slate-800 dark:text-slate-200 leading-tight">
                {user?.fullName || 'Học Viên'}
              </div>
              <div className="text-[10px] text-slate-400">{user?.currentLevel || 'Intermediate'}</div>
            </div>
            <ChevronDown className="h-3.5 w-3.5 text-slate-400 hidden sm:block" />
          </button>

          {/* User Menu Dropdown */}
          {showUserMenu && (
            <div className="absolute right-0 mt-2 w-56 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl dark:border-slate-800 dark:bg-slate-900 z-50 animate-in fade-in zoom-in-95">
              <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-800">
                <div className="font-bold text-xs text-slate-900 dark:text-white truncate">
                  {user?.fullName || 'Học Viên Lingora'}
                </div>
                <div className="text-[11px] text-slate-400 truncate">{user?.email}</div>
                <div className="mt-1">
                  <span className="inline-block rounded-md bg-primary-50 px-1.5 py-0.5 text-[10px] font-bold text-primary-700 dark:bg-primary-950 dark:text-primary-300">
                    {user?.role} • {user?.targetProgram}
                  </span>
                </div>
              </div>

              <div className="space-y-1 py-1">
                <Link
                  to="/analytics"
                  onClick={() => setShowUserMenu(false)}
                  className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  <BarChart3 className="h-4 w-4 text-slate-400" />
                  <span>Tiến độ học tập</span>
                </Link>
                <Link
                  to="/settings"
                  onClick={() => setShowUserMenu(false)}
                  className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  <Settings className="h-4 w-4 text-slate-400" />
                  <span>Cài đặt tài khoản</span>
                </Link>
              </div>

              {/* Logout button */}
              <div className="border-t border-slate-100 pt-1 dark:border-slate-800">
                <button
                  onClick={handleLogout}
                  className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-bold text-rose-600 hover:bg-rose-50 transition-colors dark:text-rose-400 dark:hover:bg-rose-950/40"
                >
                  <LogOut className="h-4 w-4 text-rose-500" />
                  <span>Đăng xuất</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
