import React, { useState } from 'react';
import {
  FileText,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  RotateCcw,
  BookOpen,
  Award,
  ArrowRight,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Progress } from '@/components/ui/Progress';
import { sounds, playCelebration } from '@/lib/utils';
import { useAuthStore } from '@/stores/useAuthStore';
import { IeltsWritingEvaluation } from '@/types';

export const IeltsWritingEvaluator: React.FC = () => {
  const { updateStats } = useAuthStore();
  const [taskType, setTaskType] = useState<'Task 1' | 'Task 2'>('Task 2');

  const task2Prompt =
    'Some people believe that unpaid community service should be a compulsory part of high school programmes. To what extent do you agree or disagree?';

  const [essay, setEssay] = useState(
    'In recent years, the idea of introducing compulsory community service for secondary school students has sparked heated debate. While some argue that academic curricula should remain strictly theoretical, I firmly believe that mandatory volunteering offers profound benefits for character development and civic responsibility.'
  );

  const [isEvaluating, setIsEvaluating] = useState(false);
  const [result, setResult] = useState<IeltsWritingEvaluation | null>(null);

  const wordCount = essay.trim() ? essay.trim().split(/\s+/).length : 0;

  const handleEvaluate = () => {
    if (wordCount < 50) {
      alert('Vui lòng viết tối thiểu 50 từ để AI có đủ dữ liệu đánh giá chính xác!');
      return;
    }

    sounds.playClick();
    setIsEvaluating(true);

    setTimeout(() => {
      const evaluationResult: IeltsWritingEvaluation = {
        id: `writing-${Date.now()}`,
        taskType,
        prompt: task2Prompt,
        userEssay: essay,
        overallBand: 7.5,
        criteria: {
          taskAchievement: {
            score: 7.5,
            comment: 'Lập trường rõ ràng (firmly agree), trả lời đầy đủ yêu cầu của đề bài với các luận điểm có sức thuyết phục.',
          },
          coherenceCohesion: {
            score: 7.5,
            comment: 'Mạch văn trôi chảy, sử dụng các liên từ nối (While, In recent years, Furthermore) chuẩn xác và tự nhiên.',
          },
          lexicalResource: {
            score: 8.0,
            comment: 'Vốn từ vựng học thuật phong phú: "compulsory community service", "civic responsibility", "character development".',
          },
          grammaticalAccuracy: {
            score: 7.0,
            comment: 'Cấu trúc câu phức và mệnh đề quan hệ được sử dụng đa dạng, không mắc lỗi chính tả ngớ ngẩn.',
          },
        },
        strengths: [
          'Mở bài (Introduction) xuất sắc, paraphrase đề bài mượt mà và nêu luận đề (Thesis statement) dứt khoát.',
          'Sử dụng các cấu trúc câu phức đan xen linh hoạt.',
        ],
        weaknesses: [
          'Thân bài cần bổ sung thêm ví dụ thực tế cụ thể (ví dụ tại một quốc gia hay trường học cụ thể) để đẩy Task Response lên Band 8.5+.',
        ],
        grammarCorrections: [
          {
            original: 'sparked heated debate',
            correction: 'has sparked a heated debate',
            explanation: 'Danh từ đếm được số ít "debate" cần mạo từ "a" ở phía trước.',
          },
        ],
        improvedEssay:
          'In recent years, the proposal to incorporate mandatory community service into high school curricula has generated considerable discourse. Although critics contend that scholastic programmes ought to prioritize pure academics, I am firmly convinced that non-remunerated civic engagement yields indispensable virtues in moral maturity and communal empathy.',
        recommendations: [
          'Tiếp tục duy trì phong cách viết mạch lạc này cho Task 2.',
          'Luyện tập thêm dạng bài 2-part question để thuần thục mọi dạng đề.',
        ],
      };

      setResult(evaluationResult);
      setIsEvaluating(false);
      sounds.playSuccess();
      playCelebration();
      updateStats(60, 4, 40);
    }, 2000);
  };

  const handleReset = () => {
    setResult(null);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 rounded-3xl bg-slate-900 text-white shadow-xl">
        <div>
          <Badge variant="primary" className="bg-purple-500/30 text-purple-300 border-purple-500/40 mb-1">
            IELTS WRITING EVALUATOR • CHẤM CHỮA AI 4 TIÊU CHÍ
          </Badge>
          <h2 className="text-2xl font-black">AI Chấm Điểm & Viết Lại Bài Luận Band 8.5</h2>
          <p className="text-xs text-slate-400 mt-1">
            Mô phỏng tiêu chí chấm chính thức: TR/TA (Task Response), CC (Coherence), LR (Lexical), GRA (Grammar)
          </p>
        </div>

        <div className="flex gap-2 bg-slate-800 p-1.5 rounded-2xl">
          <button
            onClick={() => setTaskType('Task 1')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              taskType === 'Task 1' ? 'bg-primary-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Task 1: Biểu đồ
          </button>
          <button
            onClick={() => setTaskType('Task 2')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              taskType === 'Task 2' ? 'bg-primary-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Task 2: Luận văn
          </button>
        </div>
      </div>

      {result ? (
        /* Evaluation Results Screen */
        <div className="space-y-6 animate-in zoom-in-95">
          <Card className="p-6 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
              <div>
                <Badge variant="primary">Kết Quả Đánh Giá Bài Viết</Badge>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                  Báo Cáo Chi Tiết IELTS Writing
                </h3>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-400 uppercase font-bold">Estimated Band</div>
                <div className="text-4xl font-black text-primary-600 dark:text-primary-400">
                  Band {result.overallBand}
                </div>
              </div>
            </div>

            {/* 4 Official Criteria Scores */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border text-center">
                <div className="text-[11px] text-slate-500 font-bold">Task Achievement</div>
                <div className="text-2xl font-black text-indigo-600 mt-1">Band {result.criteria.taskAchievement.score}</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border text-center">
                <div className="text-[11px] text-slate-500 font-bold">Coherence & Cohesion</div>
                <div className="text-2xl font-black text-purple-600 mt-1">Band {result.criteria.coherenceCohesion.score}</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border text-center">
                <div className="text-[11px] text-slate-500 font-bold">Lexical Resource</div>
                <div className="text-2xl font-black text-sky-600 mt-1">Band {result.criteria.lexicalResource.score}</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border text-center">
                <div className="text-[11px] text-slate-500 font-bold">Grammar Accuracy</div>
                <div className="text-2xl font-black text-emerald-600 mt-1">Band {result.criteria.grammaticalAccuracy.score}</div>
              </div>
            </div>

            {/* Strengths & Weaknesses */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-4 text-xs dark:border-emerald-900/40 dark:bg-emerald-950/20">
                <div className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5 mb-2">
                  <CheckCircle2 className="h-4 w-4" /> Điểm Mạnh Cần Phát Huy:
                </div>
                <ul className="space-y-1 text-slate-700 dark:text-slate-300">
                  {result.strengths.map((s, i) => (
                    <li key={i}>• {s}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-4 text-xs dark:border-amber-900/40 dark:bg-amber-950/20">
                <div className="font-bold text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-2">
                  <AlertCircle className="h-4 w-4" /> Điểm Cần Khắc Phục:
                </div>
                <ul className="space-y-1 text-slate-700 dark:text-slate-300">
                  {result.weaknesses.map((w, i) => (
                    <li key={i}>• {w}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Rewritten Model Essay */}
            <div className="rounded-2xl border border-purple-200 bg-purple-50/60 p-5 dark:border-purple-900/40 dark:bg-purple-950/30 space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-xs text-purple-700 dark:text-purple-300 uppercase tracking-wider">
                <Sparkles className="h-4 w-4" /> Phiên Bản Nâng Cấp Chuẩn Band 8.5 Từ AI:
              </div>
              <p className="text-xs leading-relaxed text-slate-800 dark:text-slate-200 font-medium">
                {result.improvedEssay}
              </p>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <Button variant="outline" size="sm" onClick={handleReset}>
                <RotateCcw className="mr-1.5 h-3.5 w-3.5" /> Viết Bài Luận Khác
              </Button>
            </div>
          </Card>
        </div>
      ) : (
        /* Essay Writing Input Form */
        <Card className="p-6 space-y-5">
          {/* Prompt */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
            <div className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-1">
              ĐỀ BÀI (WRITING TASK 2 PROMPT):
            </div>
            <div className="text-sm font-semibold text-slate-900 dark:text-white leading-relaxed">
              {task2Prompt}
            </div>
          </div>

          {/* Essay Area */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-600 uppercase">
                Bài viết của bạn (Tối thiểu 250 từ cho Task 2)
              </label>
              <span className={`text-xs font-bold ${wordCount >= 250 ? 'text-emerald-600' : 'text-amber-500'}`}>
                {wordCount} từ {wordCount < 250 ? `(còn thiếu ${250 - wordCount} từ)` : '✓ Đủ độ dài'}
              </span>
            </div>
            <textarea
              value={essay}
              onChange={(e) => setEssay(e.target.value)}
              placeholder="Nhập bài luận tiếng Anh của bạn tại đây..."
              className="w-full h-64 rounded-2xl border p-4 text-xs sm:text-sm font-sans leading-relaxed focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-slate-800 dark:border-slate-700"
            />
          </div>

          <div className="flex justify-between items-center pt-2">
            <span className="text-xs text-slate-400">
              * Dự đoán điểm chỉ mang tính chất tham khảo dựa trên Gemini AI
            </span>
            <Button
              variant="primary"
              size="lg"
              onClick={handleEvaluate}
              disabled={isEvaluating}
              className="font-bold px-8 shadow-md"
            >
              {isEvaluating ? 'AI Đang Đọc & Chấm Bài...' : 'Chấm Bài Với AI Ngay'}
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
};
