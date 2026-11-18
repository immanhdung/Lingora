import React, { useState } from 'react';
import { BookOpen, BrainCircuit, GraduationCap, Calendar, Headphones } from 'lucide-react';
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
      <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-primary-electric p-6 sm:p-8 text-white shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <Badge variant="secondary" className="bg-white/20 text-white border-none font-bold mb-2">
              LỘ TRÌNH NGƯỜI ĐI LÀM & SINH VIÊN
            </Badge>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Tiếng Anh Giao Tiếp & Công Sở Toàn Diện
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-blue-100 max-w-xl">
              Nắm vững 3,000 từ vựng cốt lõi qua hệ thống SRS SM-2, làm chủ ngữ pháp từ cơ bản đến nâng cao và rèn luyện phản xạ mỗi ngày.
            </p>
          </div>

          <div className="flex gap-2 bg-white/20 p-1.5 rounded-2xl backdrop-blur-md">
            <Button
              variant={activeTab === 'vocabulary' ? 'kids' : 'ghost'}
              size="sm"
              onClick={() => {
                sounds.playClick();
                setActiveTab('vocabulary');
              }}
              className="text-xs font-bold"
            >
              📚 Từ Vựng SRS
            </Button>
            <Button
              variant={activeTab === 'grammar' ? 'kids' : 'ghost'}
              size="sm"
              onClick={() => {
                sounds.playClick();
                setActiveTab('grammar');
              }}
              className="text-xs font-bold"
            >
              🎓 Ngữ Pháp
            </Button>
            <Button
              variant={activeTab === 'daily' ? 'kids' : 'ghost'}
              size="sm"
              onClick={() => {
                sounds.playClick();
                setActiveTab('daily');
              }}
              className="text-xs font-bold"
            >
              🎯 Luyện Tập Ngày
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
              <div className="h-12 w-12 rounded-2xl bg-primary-100 text-primary-600 flex items-center justify-center text-xl">
                🎧
              </div>
              <div>
                <h3 className="font-bold text-base">Bài Nghe Ngữ Cảnh Hôm Nay</h3>
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
              <div className="h-12 w-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center text-xl">
                📰
              </div>
              <div>
                <h3 className="font-bold text-base">Thử Thách Đọc Báo Song Ngữ</h3>
                <p className="text-xs text-slate-500">Bài báo: "How Artificial Intelligence is Changing Workplaces"</p>
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Đọc đoạn trích ngắn 200 từ, tra cứu từ mới trực tiếp bằng cách nhấp chuột và trả lời câu hỏi đọc hiểu.
            </p>
            <Button variant="outline" size="sm" className="font-bold">
              Đọc bài báo ngay
            </Button>
          </Card>
        </div>
      )}
    </div>
  );
};
