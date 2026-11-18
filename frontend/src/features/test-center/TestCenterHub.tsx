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
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ToeicTest, IeltsTest } from '@/types';
import { sounds } from '@/lib/utils';
import { MockTestRunner } from './MockTestRunner';

export const TestCenterHub: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'toeic' | 'ielts'>('all');
  const [activeTest, setActiveTest] = useState<any | null>(null);

  const mockTests = [
    {
      id: 'test-toeic-2026-1',
      type: 'TOEIC',
      title: 'TOEIC ETS Full Mock Test 2026 - Test 01',
      durationMinutes: 120,
      totalQuestions: 200,
      difficulty: 'Chuẩn ETS',
      attempts: 12450,
      listeningCount: 100,
      readingCount: 100,
      badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300',
    },
    {
      id: 'test-toeic-2026-2',
      type: 'TOEIC',
      title: 'TOEIC ETS Full Mock Test 2026 - Test 02',
      durationMinutes: 120,
      totalQuestions: 200,
      difficulty: 'Chuẩn ETS (Khó)',
      attempts: 8920,
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
      difficulty: 'Band 6.5 - 8.5',
      attempts: 15300,
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
      attempts: 9810,
      listeningCount: 40,
      readingCount: 40,
      badgeColor: 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300',
    },
  ];

  const filteredTests = mockTests.filter((t) => {
    if (selectedFilter === 'all') return true;
    return t.type.toLowerCase() === selectedFilter;
  });

  if (activeTest) {
    return <MockTestRunner test={activeTest} onExit={() => setActiveTest(null)} />;
  }

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-8 shadow-xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="primary" className="bg-primary-500/20 text-primary-300 border-primary-500/30">
              TRUNG TÂM KHẢO THÍ CHUẨN QUỐC TẾ
            </Badge>
            <span className="text-xs text-slate-400">ETS & Cambridge ESOL</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Thư Viện Đề Thi Full Mock Test
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-slate-300 max-w-xl">
            Phòng thi trực tuyến với đồng hồ đếm ngược, lưu bài làm tự động, bảng câu hỏi thông minh và báo cáo phân tích lỗi sai tức thì.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2 bg-slate-800 p-1.5 rounded-2xl">
          {[
            { id: 'all', label: 'Tất cả đề' },
            { id: 'toeic', label: 'Đề TOEIC' },
            { id: 'ielts', label: 'Đề IELTS' },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => {
                sounds.playClick();
                setSelectedFilter(f.id as any);
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedFilter === f.id
                  ? 'bg-primary-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tests Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTests.map((test) => (
          <Card key={test.id} className="p-6 flex flex-col justify-between border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${test.badgeColor}`}>
                  {test.type}
                </span>
                <span className="text-xs text-slate-400 font-semibold">{test.difficulty}</span>
              </div>

              <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white mt-3">
                {test.title}
              </h3>

              <div className="grid grid-cols-3 gap-3 my-4 py-3 bg-slate-50 dark:bg-slate-800/50 rounded-2xl text-center text-xs">
                <div>
                  <div className="text-slate-400">Thời gian</div>
                  <div className="font-bold text-slate-900 dark:text-white mt-0.5">{test.durationMinutes} phút</div>
                </div>
                <div>
                  <div className="text-slate-400">Số câu hỏi</div>
                  <div className="font-bold text-slate-900 dark:text-white mt-0.5">{test.totalQuestions} câu</div>
                </div>
                <div>
                  <div className="text-slate-400">Lượt làm</div>
                  <div className="font-bold text-slate-900 dark:text-white mt-0.5">{test.attempts.toLocaleString()}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-[11px] text-slate-400 font-medium">Bảo lưu kết quả thi tự động</span>
              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  sounds.playClick();
                  setActiveTest(test);
                }}
                className="font-bold"
              >
                <Play className="mr-1.5 h-3.5 w-3.5 fill-white" /> Vào Thi Thử
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
