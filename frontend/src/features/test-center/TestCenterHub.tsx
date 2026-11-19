import React, { useState } from 'react';
import {
  FileCheck2,
  Clock,
  Award,
  Target,
  Sparkles,
  ArrowRight,
  TrendingUp,
  CheckCircle,
  Play,
  RotateCcw,
  Filter,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { MockTestRunner } from './MockTestRunner';
import { sounds } from '@/lib/utils';

export const TestCenterHub: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'toeic' | 'ielts'>('all');
  const [activeTest, setActiveTest] = useState<any | null>(null);

  const mockTests = [
    {
      id: 'test-toeic-2026-1',
      type: 'TOEIC',
      title: 'TOEIC ETS Official Mock Exam 2026 - Test 01',
      durationMinutes: 120,
      totalQuestions: 200,
      difficulty: 'Chuẩn ETS 2026',
      attempts: 14200,
      listeningCount: 100,
      readingCount: 100,
      badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300',
    },
    {
      id: 'test-toeic-2026-2',
      type: 'TOEIC',
      title: 'TOEIC ETS Official Mock Exam 2026 - Test 02',
      durationMinutes: 120,
      totalQuestions: 200,
      difficulty: 'Chuẩn ETS 2026 (Khó)',
      attempts: 9800,
      listeningCount: 100,
      readingCount: 100,
      badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300',
    },
    {
      id: 'test-toeic-2024-1',
      type: 'TOEIC',
      title: 'TOEIC ETS Practice Exam 2024 - Test 01',
      durationMinutes: 120,
      totalQuestions: 200,
      difficulty: 'Chuẩn ETS',
      attempts: 28400,
      listeningCount: 100,
      readingCount: 100,
      badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300',
    },
    {
      id: 'test-ielts-acad-1',
      type: 'IELTS',
      title: 'IELTS Academic Cambridge 19 - Full Mock Exam 01',
      durationMinutes: 160,
      totalQuestions: 80,
      difficulty: 'Band 6.5 - 9.0',
      attempts: 16400,
      listeningCount: 40,
      readingCount: 40,
      badgeColor: 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300',
    },
    {
      id: 'test-ielts-acad-2',
      type: 'IELTS',
      title: 'IELTS Academic Cambridge 19 - Full Mock Exam 02',
      durationMinutes: 160,
      totalQuestions: 80,
      difficulty: 'Band 7.0 - 9.0',
      attempts: 11200,
      listeningCount: 40,
      readingCount: 40,
      badgeColor: 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300',
    },
    {
      id: 'test-ielts-acad-18',
      type: 'IELTS',
      title: 'IELTS Academic Cambridge 18 - Full Mock Exam 01',
      durationMinutes: 160,
      totalQuestions: 80,
      difficulty: 'Band 6.5 - 8.5',
      attempts: 24500,
      listeningCount: 40,
      readingCount: 40,
      badgeColor: 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300',
    },
  ];

  const filteredTests = mockTests.filter((t) => {
    if (selectedFilter === 'all') return true;
    return t.type.toLowerCase() === selectedFilter;
  });

  const handleStartTest = (test: any) => {
    sounds.playClick();
    setActiveTest(test);
  };

  if (activeTest) {
    return <MockTestRunner test={activeTest} onExit={() => setActiveTest(null)} />;
  }

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-8 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="rounded-md bg-primary-500/20 px-2.5 py-0.5 text-xs font-bold text-primary-300 border border-primary-500/30">
                TRUNG TÂM KHẢO THÍ CHUẨN QUỐC TẾ
              </span>
              <span className="text-xs text-slate-400">ETS TOEIC & Cambridge IELTS</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Thư Viện Đề Thi Full Mock Exam
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-slate-300 max-w-xl">
              Phòng thi trực tuyến với đồng hồ đếm ngược, lưu bài làm tự động, bảng câu hỏi thông minh và báo cáo phân tích lỗi sai tức thì.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-800 p-1.5 rounded-2xl border border-slate-700 shrink-0">
            <button
              onClick={() => {
                sounds.playClick();
                setSelectedFilter('all');
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedFilter === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Tất cả đề ({mockTests.length})
            </button>
            <button
              onClick={() => {
                sounds.playClick();
                setSelectedFilter('toeic');
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedFilter === 'toeic'
                  ? 'bg-emerald-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              TOEIC ETS
            </button>
            <button
              onClick={() => {
                sounds.playClick();
                setSelectedFilter('ielts');
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedFilter === 'ielts'
                  ? 'bg-purple-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Cambridge IELTS
            </button>
          </div>
        </div>
      </div>

      {/* Test Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTests.map((test) => (
          <Card
            key={test.id}
            className="p-5 border-slate-200 hover:border-primary-400 transition-all shadow-sm hover:shadow-md flex flex-col justify-between dark:border-slate-800"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className={`rounded-md px-2 py-0.5 text-[10px] font-bold ${test.badgeColor}`}>
                  {test.type} • {test.difficulty}
                </span>
                <span className="text-[10px] text-slate-400 font-medium">
                  {test.attempts.toLocaleString()} lượt thi
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                {test.title}
              </h3>

              <div className="mt-4 flex items-center justify-between text-xs text-slate-500 bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-xl">
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-slate-400" />
                  {test.durationMinutes} phút
                </span>
                <span>
                  {test.totalQuestions} câu hỏi ({test.listeningCount} L / {test.readingCount} R)
                </span>
              </div>
            </div>

            <Button
              variant="primary"
              size="sm"
              onClick={() => handleStartTest(test)}
              className="w-full mt-4 font-bold text-xs"
            >
              <Play className="mr-1.5 h-3.5 w-3.5 fill-current" /> Bắt đầu làm bài thi
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};
