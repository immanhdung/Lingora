import React, { useState } from 'react';
import { Award, Mic, FileText, BookOpen, Headphones, ArrowRight, Target, Sparkles } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Progress } from '@/components/ui/Progress';
import { IeltsSpeakingRoom } from './IeltsSpeakingRoom';
import { IeltsWritingEvaluator } from './IeltsWritingEvaluator';
import { sounds } from '@/lib/utils';
import { useAuthStore } from '@/stores/useAuthStore';

export const IeltsHub: React.FC = () => {
  const { user } = useAuthStore();
  const [activeTab, setActiveTab] = useState<'speaking' | 'writing' | 'reading' | 'listening'>('speaking');

  return (
    <div className="space-y-6">
      {/* Top Banner & IELTS Band Progress */}
      <div className="rounded-3xl bg-gradient-to-r from-purple-700 via-indigo-700 to-primary-600 p-6 sm:p-8 text-white shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary" className="bg-white/20 text-white border-none font-bold">
                LỘ TRÌNH IELTS ACADEMIC & GENERAL
              </Badge>
              <span className="text-xs font-semibold text-purple-200">Cam kết Band 7.5+</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Luyện Thi IELTS Chuẩn IDP & British Council
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-purple-100 max-w-xl">
              Phòng thi Speaking 1-kèm-1 cùng Giám khảo AI và Chấm chữa Writing chi tiết theo 4 tiêu chí chính thức.
            </p>
          </div>

          {/* Current Estimated Band Card */}
          <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-md border border-white/20 shrink-0">
            <div>
              <div className="text-[11px] font-bold text-purple-200 uppercase tracking-wider">
                Ước tính Band hiện tại:
              </div>
              <div className="text-3xl font-black tracking-tight">
                Band 7.0 <span className="text-sm font-semibold text-purple-200">/ 9.0</span>
              </div>
              <div className="text-[10px] text-purple-100 mt-0.5">
                L: 7.5 | R: 7.0 | W: 6.5 | S: 7.0
              </div>
            </div>
            <Badge variant="kids" className="bg-amber-400 text-amber-950 font-bold text-xs">
              Mục tiêu: {user?.targetScore || '7.5'}
            </Badge>
          </div>
        </div>
      </div>

      {/* 4 Skills Navigation Tabs */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
        <div className="flex gap-2">
          <Button
            variant={activeTab === 'speaking' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => {
              sounds.playClick();
              setActiveTab('speaking');
            }}
            className="text-xs font-bold"
          >
            <Mic className="mr-1.5 h-4 w-4" /> AI Speaking Room
          </Button>
          <Button
            variant={activeTab === 'writing' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => {
              sounds.playClick();
              setActiveTab('writing');
            }}
            className="text-xs font-bold"
          >
            <FileText className="mr-1.5 h-4 w-4" /> AI Writing Evaluator
          </Button>
          <Button
            variant={activeTab === 'reading' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => {
              sounds.playClick();
              setActiveTab('reading');
            }}
            className="text-xs font-bold"
          >
            <BookOpen className="mr-1.5 h-4 w-4" /> Reading Practice
          </Button>
          <Button
            variant={activeTab === 'listening' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => {
              sounds.playClick();
              setActiveTab('listening');
            }}
            className="text-xs font-bold"
          >
            <Headphones className="mr-1.5 h-4 w-4" /> Listening Practice
          </Button>
        </div>
      </div>

      {/* Tab Render */}
      {activeTab === 'speaking' && <IeltsSpeakingRoom />}
      {activeTab === 'writing' && <IeltsWritingEvaluator />}
      {activeTab === 'reading' && (
        <Card className="p-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b">
            <div>
              <Badge variant="primary">IELTS Reading Passage 1</Badge>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mt-1">
                The History and Evolution of Subsea Fiber Optic Cables
              </h3>
            </div>
            <span className="text-xs font-bold text-slate-400">Thời gian làm bài: 20 phút</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-2xl border p-4 bg-slate-50 dark:bg-slate-800 text-xs leading-relaxed max-h-96 overflow-y-auto">
              <p className="font-bold mb-2">Paragraph A</p>
              Undersea communications cables are lines laid on the sea bed between land-based stations to carry telecommunication signals across stretches of ocean and sea. The first submarine communications cables laid beginning in the 1850s carried telegraphy traffic, establishing the first instantaneous telecommunications links between continents...
              <p className="font-bold mt-4 mb-2">Paragraph B</p>
              Modern cables typically use optical fiber technology to carry digital data, which includes telephone, internet, and private data traffic. Modern cables are typically about 25 mm (1 in) in diameter and weigh around 1.4 tonnes per kilometre for the deep-sea sections...
            </div>

            <div className="space-y-4 text-xs">
              <div className="font-bold uppercase text-slate-400">Câu hỏi 1-3: True / False / Not Given</div>
              <div className="p-3 rounded-xl border bg-white dark:bg-slate-900 space-y-2">
                <p className="font-semibold text-slate-800 dark:text-slate-200">
                  1. The earliest subsea cables carried digital internet traffic.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="text-xs">TRUE</Button>
                  <Button size="sm" variant="primary" className="text-xs">FALSE</Button>
                  <Button size="sm" variant="outline" className="text-xs">NOT GIVEN</Button>
                </div>
              </div>

              <Button variant="primary" size="sm" className="w-full font-bold">
                Nộp bài Reading
              </Button>
            </div>
          </div>
        </Card>
      )}

      {activeTab === 'listening' && (
        <Card className="p-6 space-y-4">
          <Badge variant="primary">IELTS Listening Section 1</Badge>
          <h3 className="font-bold text-base">Form Completion: Hotel Reservation Form</h3>
          <p className="text-xs text-slate-500">
            Nghe đoạn hội thoại đặt phòng khách sạn và điền không quá 2 từ / số vào mỗi chỗ trống.
          </p>
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border space-y-3 text-xs">
            <div>• Guest Name: Mark <strong>[1. Anderson]</strong></div>
            <div>• Room type: Double room with ocean <strong>[2. view]</strong></div>
            <div>• Contact phone: <strong>[3. 0918 234 567]</strong></div>
          </div>
          <Button variant="primary" size="sm" className="font-bold">
            Bắt đầu bài nghe Section 1
          </Button>
        </Card>
      )}
    </div>
  );
};
