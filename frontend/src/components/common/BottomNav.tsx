import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Baby, BookOpen, Target, Award, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuthStore } from '@/stores/useAuthStore';

export const BottomNav: React.FC = () => {
  const { user } = useAuthStore();

  const getProgramRoute = () => {
    switch (user?.targetProgram) {
      case 'Kids':
        return { to: '/kids', label: 'Trẻ em', icon: Baby };
      case 'TOEIC':
        return { to: '/toeic', label: 'TOEIC', icon: Target };
      case 'IELTS':
        return { to: '/ielts', label: 'IELTS', icon: Award };
      default:
        return { to: '/adults', label: 'Giao tiếp', icon: BookOpen };
    }
  };

  const programNav = getProgramRoute();
  const ProgramIcon = programNav.icon;

  const items = [
    { to: '/dashboard', label: 'Tổng quan', icon: LayoutDashboard },
    { to: programNav.to, label: programNav.label, icon: ProgramIcon },
    { to: '/ai-tutor', label: 'AI Tutor', icon: Bot, isCenter: true },
    { to: '/test-center', label: 'Khảo thí', icon: Target },
    { to: '/unique-features', label: 'Tính năng', icon: BookOpen },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 flex h-16 items-center justify-around border-t border-slate-200/80 bg-white/95 px-2 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/95 md:hidden">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              cn(
                'flex flex-col items-center justify-center py-1 text-[11px] font-semibold transition-colors',
                isActive
                  ? 'text-primary-600 dark:text-primary-400 font-bold'
                  : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200',
                item.isCenter &&
                  'relative -top-3 rounded-full bg-gradient-to-tr from-primary-600 to-primary-electric p-3 text-white shadow-lg shadow-primary-500/30'
              )
            }
          >
            <Icon className={item.isCenter ? 'h-5 w-5 text-white' : 'h-5 w-5'} />
            {!item.isCenter && <span>{item.label}</span>}
          </NavLink>
        );
      })}
    </nav>
  );
};
