import React, { useState } from 'react';
import { BookOpen, BrainCircuit, GraduationCap, Calendar, Headphones, FileText } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { VocabularySystem } from './vocabulary/VocabularySystem';
import { GrammarMaster } from './grammar/GrammarMaster';
import { sounds } from '@/lib/utils';

export const AdultsHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vocabulary' | 'grammar' | 'daily'>('vocabulary');

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="rounded-3xl bg-slate-900 p-6 sm:p-8 text-white shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <span className="rounded-md bg-blue-500/20 px-2.5 py-0.5 text-xs font-bold text-blue-300 border border-blue-500/30 mb-2 inline-block">
              LỘ TRÌNH NGƯỜI ĐI LÀM & SINH VIÊN
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Tiếng Anh Giao Tiếp & Công Sở Toàn Diện
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-slate-300 max-w-xl">
              Nắm vững từ vựng cốt lõi qua hệ thống SRS, làm chủ ngữ pháp từ cơ bản đến nâng cao và rèn luyện phản xạ mỗi ngày.
            </p>
          </div>

          <div className="flex gap-2 bg-slate-800 p-1.5 rounded-2xl border border-slate-700">
            <Button
              variant={activeTab === 'vocabulary' ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => {
                sounds.playClick();
                setActiveTab('vocabulary');
              }}
              className="text-xs font-bold"
            >
              <BookOpen className="mr-1.5 h-3.5 w-3.5" /> Từ Vựng SRS
            </Button>
            <Button
              variant={activeTab === 'grammar' ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => {
                sounds.playClick();
                setActiveTab('grammar');
              }}
              className="text-xs font-bold"
            >
              <GraduationCap className="mr-1.5 h-3.5 w-3.5" /> Ngữ Pháp
            </Button>
            <Button
              variant={activeTab === 'daily' ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => {
                sounds.playClick();
                setActiveTab('daily');
              }}
              className="text-xs font-bold"
            >
              <Calendar className="mr-1.5 h-3.5 w-3.5" /> Luyện Tập Ngày
            </Button>
          </div>
        </div>
      </div>

      {/* Render Active Module */}
      {activeTab === 'vocabulary' && <VocabularySystem />}
      {activeTab === 'grammar' && <GrammarMaster />}
      {activeTab === 'daily' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-primary-100 text-primary-600 dark:bg-primary-950 dark:text-primary-300 flex items-center justify-center">
                <Headphones className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">Bài Nghe Ngữ Cảnh Hôm Nay</h3>
                <p className="text-xs text-slate-500">Chủ đề: "A quick phone call with a supplier"</p>
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Nghe đoạn hội thoại 1.5 phút và trả lời 3 câu hỏi trắc nghiệm để kiểm tra khả năng nắm bắt chi tiết thông tin cuộc gọi.
            </p>
            <Button variant="primary" size="sm" className="font-bold">
              Bắt đầu bài nghe
            </Button>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300 flex items-center justify-center">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">Thử Thách Đọc Báo Song Ngữ</h3>
                <p className="text-xs text-slate-500">Bài báo: "How Artificial Intelligence is Changing Workplaces"</p>
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Đọc bài báo công nghệ ngắn với từ điển tra nhanh 1 chạm, highlight cụm từ vựng hay (collocations) và làm quiz củng cố.
            </p>
            <Button variant="primary" size="sm" className="font-bold">
              Đọc bài báo song ngữ
            </Button>
          </Card>
        </div>
      )}
    </div>
  );
};
