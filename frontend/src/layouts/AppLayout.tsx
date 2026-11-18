import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@/components/common/Header';
import { Sidebar } from '@/components/common/Sidebar';
import { BottomNav } from '@/components/common/BottomNav';

export const AppLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-50/50 font-sans text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      {/* Sidebar for Desktop & Mobile drawer */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        <main className="flex-1 overflow-y-auto p-4 pb-24 md:p-6 md:pb-12 aurora-bg">
          <div className="mx-auto max-w-7xl animate-in fade-in duration-300">
            <Outlet />
          </div>
        </main>

        <BottomNav />
      </div>
    </div>
  );
};
