import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Baby,
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
  Headphones,
  Compass,
  Zap,
} from 'lucide-react';
import { useAuthStore } from '@/stores/useAuthStore';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  onClose?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { user } = useAuthStore();
  const location = useLocation();

  const navItems = [
    {
      to: '/dashboard',
      label: 'Tổng quan',
      icon: LayoutDashboard,
      highlight: false,
    },
    {
      to: '/kids',
      label: 'Học tiếng Anh Trẻ Em',
      icon: Baby,
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
      badge: 'Listening & Reading',
      highlight: user?.targetProgram === 'TOEIC',
    },
    {
      to: '/ielts',
      label: 'Luyện thi IELTS',
      icon: Award,
      badge: '4 Kỹ năng',
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
          'fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-slate-200/80 bg-white/95 px-4 pb-6 pt-5 transition-transform duration-300 ease-in-out dark:border-slate-800/80 dark:bg-slate-900/95 md:static md:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3 px-2 pb-6">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-primary-600 via-primary-electric to-secondary shadow-lg shadow-primary-500/30">
            <span className="text-2xl font-black text-white tracking-wider">L</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-primary-600 via-primary-electric to-secondary bg-clip-text text-transparent">
                LINGORA
              </span>
              <span className="rounded-full bg-primary-100 dark:bg-primary-950 px-1.5 py-0.2 text-[9px] font-black text-primary-700 dark:text-primary-300">
                AI
              </span>
            </div>
            <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
              Learn English. Play. Evolve.
            </p>
          </div>
        </div>

        {/* Navigation list */}
        <div className="flex-1 space-y-1 overflow-y-auto pr-1">
          <div className="px-3 pb-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Học tập & Rèn luyện
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.to || (item.to !== '/dashboard' && location.pathname.startsWith(item.to));

            return (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={onClose}
                className={cn(
                  'group flex items-center justify-between rounded-xl px-3 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-150',
                  isActive
                    ? 'bg-primary-500 text-white shadow-md shadow-primary-500/25'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100',
                  item.highlight && !isActive && 'border-l-4 border-primary-500 bg-primary-50/40 dark:bg-primary-950/20'
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={cn(
                      'h-4 w-4 transition-transform group-hover:scale-110',
                      isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200'
                    )}
                  />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={cn(
                      'rounded-md px-1.5 py-0.5 text-[10px] font-bold',
                      isActive ? 'bg-white/20 text-white' : item.badgeColor || 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
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
            <div className="pt-4">
              <div className="px-3 pb-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
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
                      'group flex items-center justify-between rounded-xl px-3 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-150',
                      isActive
                        ? 'bg-primary-500 text-white shadow-md shadow-primary-500/25'
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

        {/* Bottom Banner: Quick Daily Goal */}
        <div className="mt-4 rounded-2xl bg-gradient-to-br from-primary-50 to-indigo-50/50 p-3.5 border border-primary-100/80 dark:from-slate-800/80 dark:to-primary-950/40 dark:border-primary-900/40">
          <div className="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
            <span className="flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
              Mục tiêu hôm nay
            </span>
            <span className="text-primary-600 dark:text-primary-400 font-extrabold">20 / 30 phút</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
            <div className="h-full rounded-full bg-gradient-to-r from-primary-500 to-primary-electric" style={{ width: '66%' }} />
          </div>
          <p className="mt-2 text-[10px] text-slate-500 dark:text-slate-400">
            Còn 10 phút nữa để hoàn thành mục tiêu ngày và nhận 50 XP thưởng!
          </p>
        </div>
      </aside>
    </>
  );
};
