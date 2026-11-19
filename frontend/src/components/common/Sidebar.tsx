import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Smile,
  BookOpen,
  Target,
  Award,
  FileCheck2,
  Bot,
  BrainCircuit,
  BarChart3,
  Trophy,
  Users2,
  Settings,
  Sparkles,
  ShieldAlert,
  HeartHandshake,
  Zap,
  LogOut,
} from 'lucide-react';
import { useAuthStore } from '@/stores/useAuthStore';
import { cn, sounds } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  onClose?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { user, logout } = useAuthStore();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    sounds.playClick();
    logout();
    if (onClose) onClose();
    navigate('/login');
  };

  const navItems = [
    {
      to: '/dashboard',
      label: 'Tổng quan',
      icon: LayoutDashboard,
      highlight: false,
    },
    {
      to: '/kids',
      label: 'Tiếng Anh Trẻ Em',
      icon: Smile,
      badge: '10 Game',
      badgeColor: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400',
      highlight: user?.targetProgram === 'Kids',
    },
    {
      to: '/adults',
      label: 'Tiếng Anh Giao Tiếp',
      icon: BookOpen,
      highlight: user?.targetProgram === 'General',
    },
    {
      to: '/toeic',
      label: 'Luyện thi TOEIC',
      icon: Target,
      badge: 'Kho Đề 2026',
      badgeColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400',
      highlight: user?.targetProgram === 'TOEIC',
    },
    {
      to: '/ielts',
      label: 'Luyện thi IELTS',
      icon: Award,
      badge: 'Cam 17-19',
      badgeColor: 'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-400',
      highlight: user?.targetProgram === 'IELTS',
    },
    {
      to: '/test-center',
      label: 'Trung tâm Khảo thí',
      icon: FileCheck2,
    },
    {
      to: '/ai-tutor',
      label: 'Gia sư AI 24/7',
      icon: Bot,
      badge: 'Gemini Pro',
      badgeColor: 'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-400',
    },
    {
      to: '/vocabulary',
      label: 'Sổ từ vựng SRS',
      icon: BrainCircuit,
    },
    {
      to: '/unique-features',
      label: 'Đột phá AI & Studio',
      icon: Sparkles,
      badge: 'Mới',
      badgeColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400',
    },
    {
      to: '/analytics',
      label: 'Phân tích học tập',
      icon: BarChart3,
    },
    {
      to: '/achievements',
      label: 'Thành tích & BXH',
      icon: Trophy,
    },
    {
      to: '/community',
      label: 'Cộng đồng',
      icon: Users2,
    },
    {
      to: '/settings',
      label: 'Cài đặt',
      icon: Settings,
    },
  ];

  // Specific role links
  const roleItems = [];
  if (user?.role === 'Admin') {
    roleItems.push({
      to: '/admin',
      label: 'Quản trị Hệ thống',
      icon: ShieldAlert,
      badge: 'Admin',
      badgeColor: 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-400',
    });
  }
  if (user?.role === 'Parent' || user?.role === 'Admin') {
    roleItems.push({
      to: '/parent',
      label: 'Góc Phụ Huynh',
      icon: HeartHandshake,
      badge: 'Giám sát',
      badgeColor: 'bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-400',
    });
  }

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar container */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-slate-200/80 bg-white px-4 pb-4 pt-5 transition-transform duration-300 ease-in-out dark:border-slate-800/80 dark:bg-slate-900 md:static md:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3 px-2 pb-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-600 shadow-md shadow-primary-500/25">
            <span className="text-xl font-black text-white">L</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-black tracking-tight text-slate-900 dark:text-white">
                LINGORA
              </span>
              <span className="rounded-md bg-primary-100 dark:bg-primary-950 px-1.5 py-0.2 text-[9px] font-black text-primary-700 dark:text-primary-300">
                PRO
              </span>
            </div>
            <p className="text-[11px] font-medium text-slate-400">
              English Learning Platform
            </p>
          </div>
        </div>

        {/* Navigation list */}
        <div className="flex-1 space-y-1 overflow-y-auto pr-1">
          <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Menu Học Tập
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              location.pathname === item.to ||
              (item.to !== '/dashboard' && location.pathname.startsWith(item.to));

            return (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={onClose}
                className={cn(
                  'group flex items-center justify-between rounded-xl px-3 py-2 text-xs sm:text-sm font-semibold transition-all duration-150',
                  isActive
                    ? 'bg-primary-600 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100',
                  item.highlight && !isActive && 'border-l-4 border-primary-500 bg-primary-50/50 dark:bg-primary-950/20'
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={cn(
                      'h-4 w-4 transition-transform group-hover:scale-105',
                      isActive
                        ? 'text-white'
                        : 'text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200'
                    )}
                  />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={cn(
                      'rounded-md px-1.5 py-0.5 text-[10px] font-bold',
                      isActive
                        ? 'bg-white/20 text-white'
                        : item.badgeColor ||
                            'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
                    )}
                  >
                    {item.badge}
                  </span>
                )}
              </NavLink>
            );
          })}

          {/* Role specific links */}
          {roleItems.length > 0 && (
            <div className="pt-3">
              <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Khu vực chuyên biệt
              </div>
              {roleItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname.startsWith(item.to);
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={onClose}
                    className={cn(
                      'group flex items-center justify-between rounded-xl px-3 py-2 text-xs sm:text-sm font-semibold transition-all duration-150',
                      isActive
                        ? 'bg-primary-600 text-white shadow-sm'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100'
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className={cn('rounded-md px-1.5 py-0.5 text-[10px] font-bold', item.badgeColor)}>
                        {item.badge}
                      </span>
                    )}
                  </NavLink>
                );
              })}
            </div>
          )}
        </div>

        {/* Daily Goal card */}
        <div className="mt-3 rounded-xl bg-slate-50 p-3 border border-slate-200/80 dark:bg-slate-800/60 dark:border-slate-800">
          <div className="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
            <span className="flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
              Mục tiêu ngày
            </span>
            <span className="text-primary-600 dark:text-primary-400 font-bold">20 / 30p</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
            <div className="h-full rounded-full bg-primary-600" style={{ width: '66%' }} />
          </div>
        </div>

        {/* Bottom User info & LOGOUT BUTTON */}
        <div className="mt-3 pt-3 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden">
            <img
              src={
                user?.avatarUrl ||
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
              }
              alt={user?.fullName || 'User'}
              className="h-8 w-8 rounded-full object-cover shrink-0"
            />
            <div className="overflow-hidden text-left">
              <div className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
                {user?.fullName || 'Học Viên'}
              </div>
              <div className="text-[10px] text-slate-400 truncate">{user?.email}</div>
            </div>
          </div>

          {/* Prominent Logout Button */}
          <button
            onClick={handleLogout}
            title="Đăng xuất khỏi Lingora"
            className="flex h-8 w-8 items-center justify-center rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </aside>
    </>
  );
};
