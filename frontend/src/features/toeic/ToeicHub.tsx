import React, { useState } from 'react';
import {
  Target,
  Headphones,
  BookOpen,
  Volume2,
  CheckCircle2,
  XCircle,
  Play,
  RotateCcw,
  Sparkles,
  TrendingUp,
  Clock,
  Award,
  Filter,
  FileCheck2,
  ArrowRight,
  Check,
  ChevronRight,
  ListOrdered,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Progress } from '@/components/ui/Progress';
import { ToeicQuestion } from '@/types';
import { speakEnglish } from '@/lib/speech';
import { sounds, playCelebration } from '@/lib/utils';
import { useAuthStore } from '@/stores/useAuthStore';
import { MockTestRunner } from '../test-center/MockTestRunner';

interface ToeicTestSet {
  id: string;
  title: string;
  year: number;
  publisher: string;
  totalQuestions: number;
  durationMinutes: number;
  difficulty: 'Chuẩn ETS' | 'Nâng cao 850+' | 'Cơ bản 550+';
  attemptsCount: number;
  avgScore: number;
  description: string;
  parts: { part: number; name: string; questionsCount: number; type: 'Listening' | 'Reading' }[];
}

export const ToeicHub: React.FC = () => {
  const { user, updateStats } = useAuthStore();
  const [activeView, setActiveView] = useState<'catalog' | 'practice'>('catalog');
  const [selectedTestSet, setSelectedTestSet] = useState<ToeicTestSet | null>(null);
  const [activeRunnerTest, setActiveRunnerTest] = useState<any | null>(null);

  // Filter for test catalog
  const [filterYear, setFilterYear] = useState<string>('all');

  // Practice state
  const [activePart, setActivePart] = useState<number>(1);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);

  // Catalog of multiple TOEIC test sets
  const testSets: ToeicTestSet[] = [
    {
      id: 'ets-2026-test-1',
      title: 'ETS TOEIC Official Mock Test 2026 - Test 01',
      year: 2026,
      publisher: 'ETS Korea / YBM',
      totalQuestions: 200,
      durationMinutes: 120,
      difficulty: 'Chuẩn ETS',
      attemptsCount: 14200,
      avgScore: 685,
      description: 'Bộ đề thi bản quyền mới nhất cập nhật cấu trúc bẫy đề thi thật Listening & Reading năm 2026.',
      parts: [
        { part: 1, name: 'Photographs (Hình ảnh)', questionsCount: 6, type: 'Listening' },
        { part: 2, name: 'Question - Response (Hỏi đáp)', questionsCount: 25, type: 'Listening' },
        { part: 3, name: 'Conversations (Hội thoại ngắn)', questionsCount: 39, type: 'Listening' },
        { part: 4, name: 'Short Talks (Bài nói độc thoại)', questionsCount: 30, type: 'Listening' },
        { part: 5, name: 'Incomplete Sentences (Điền câu)', questionsCount: 30, type: 'Reading' },
        { part: 6, name: 'Text Completion (Điền đoạn văn)', questionsCount: 16, type: 'Reading' },
        { part: 7, name: 'Reading Comprehension (Đọc hiểu đơn & kép)', questionsCount: 54, type: 'Reading' },
      ],
    },
    {
      id: 'ets-2026-test-2',
      title: 'ETS TOEIC Official Mock Test 2026 - Test 02',
      year: 2026,
      publisher: 'ETS Korea / YBM',
      totalQuestions: 200,
      durationMinutes: 120,
      difficulty: 'Chuẩn ETS',
      attemptsCount: 9800,
      avgScore: 670,
      description: 'Bộ đề bám sát giọng đọc chuẩn đa quốc ngữ (Mỹ, Anh, Úc, Canada) với từ vựng thương mại công sở.',
      parts: [
        { part: 1, name: 'Photographs', questionsCount: 6, type: 'Listening' },
        { part: 2, name: 'Question - Response', questionsCount: 25, type: 'Listening' },
        { part: 3, name: 'Conversations', questionsCount: 39, type: 'Listening' },
        { part: 4, name: 'Short Talks', questionsCount: 30, type: 'Listening' },
        { part: 5, name: 'Incomplete Sentences', questionsCount: 30, type: 'Reading' },
        { part: 6, name: 'Text Completion', questionsCount: 16, type: 'Reading' },
        { part: 7, name: 'Reading Comprehension', questionsCount: 54, type: 'Reading' },
      ],
    },
    {
      id: 'ets-2024-test-1',
      title: 'ETS TOEIC Practice Test 2024 - Test 01',
      year: 2024,
      publisher: 'ETS Official',
      totalQuestions: 200,
      durationMinutes: 120,
      difficulty: 'Chuẩn ETS',
      attemptsCount: 28400,
      avgScore: 710,
      description: 'Bộ đề thi kinh điển được hàng triệu học viên ôn luyện trước khi thi thật.',
      parts: [
        { part: 1, name: 'Photographs', questionsCount: 6, type: 'Listening' },
        { part: 2, name: 'Question - Response', questionsCount: 25, type: 'Listening' },
        { part: 3, name: 'Conversations', questionsCount: 39, type: 'Listening' },
        { part: 4, name: 'Short Talks', questionsCount: 30, type: 'Listening' },
        { part: 5, name: 'Incomplete Sentences', questionsCount: 30, type: 'Reading' },
        { part: 6, name: 'Text Completion', questionsCount: 16, type: 'Reading' },
        { part: 7, name: 'Reading Comprehension', questionsCount: 54, type: 'Reading' },
      ],
    },
    {
      id: 'hacker-toeic-adv-1',
      title: 'Hacker TOEIC Advanced Vol. 3 - Test 01',
      year: 2025,
      publisher: 'David Cho / Hackers',
      totalQuestions: 200,
      durationMinutes: 120,
      difficulty: 'Nâng cao 850+',
      attemptsCount: 11200,
      avgScore: 615,
      description: 'Độ khó cao hơn 15% so với đề thi thật, thử thách phản xạ và bẫy ngữ pháp nâng cao.',
      parts: [
        { part: 1, name: 'Photographs', questionsCount: 6, type: 'Listening' },
        { part: 2, name: 'Question - Response', questionsCount: 25, type: 'Listening' },
        { part: 3, name: 'Conversations', questionsCount: 39, type: 'Listening' },
        { part: 4, name: 'Short Talks', questionsCount: 30, type: 'Listening' },
        { part: 5, name: 'Incomplete Sentences', questionsCount: 30, type: 'Reading' },
        { part: 6, name: 'Text Completion', questionsCount: 16, type: 'Reading' },
        { part: 7, name: 'Reading Comprehension', questionsCount: 54, type: 'Reading' },
      ],
    },
    {
      id: 'economy-toeic-1',
      title: 'Economy TOEIC RC 1000 - Focus Test 01',
      year: 2024,
      publisher: 'Economy Series',
      totalQuestions: 100,
      durationMinutes: 75,
      difficulty: 'Cơ bản 550+',
      attemptsCount: 16700,
      avgScore: 730,
      description: 'Chuyên đề bứt phá điểm số phần Đọc hiểu (Reading Part 5, 6, 7) với lời giải chi tiết.',
      parts: [
        { part: 5, name: 'Incomplete Sentences', questionsCount: 40, type: 'Reading' },
        { part: 6, name: 'Text Completion', questionsCount: 12, type: 'Reading' },
        { part: 7, name: 'Reading Comprehension', questionsCount: 48, type: 'Reading' },
      ],
    },
  ];

  // Sample realistic TOEIC questions for interactive practice
  const questions: ToeicQuestion[] = [
    {
      id: 'toeic-p1-1',
      partNumber: 1,
      questionNumber: 1,
      imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
      questionText: 'Look at the picture and listen to the statements. Select the statement that best describes what you see.',
      options: [
        { label: 'A', text: 'Some laptops are arranged on the conference table.' },
        { label: 'B', text: 'People are walking out of the presentation hall.' },
        { label: 'C', text: 'The curtains are being closed by the cleaner.' },
        { label: 'D', text: 'The chairs are stacked in the corner of the room.' },
      ],
      correctAnswer: 'A',
      explanationVi: 'Đáp án A chính xác vì trong bức ảnh có các máy tính xách tay (laptops) được đặt ngay ngắn trên bàn họp phòng hội nghị.',
      transcriptEn: '(A) Some laptops are arranged on the conference table. (B) People are walking out of the presentation hall. (C) The curtains are being closed by the cleaner. (D) The chairs are stacked in the corner of the room.',
      vocabularyList: [
        { word: 'Arrange', meaning: 'Sắp xếp, bố trí' },
        { word: 'Conference', meaning: 'Hội nghị, cuộc họp' },
      ],
    },
    {
      id: 'toeic-p2-1',
      partNumber: 2,
      questionNumber: 7,
      questionText: 'Listen to the question: "When will the quarterly financial report be published?"',
      options: [
        { label: 'A', text: 'By the end of this week, according to Mr. Henderson.' },
        { label: 'B', text: 'Yes, I read the article yesterday.' },
        { label: 'C', text: 'At the downtown convention center.' },
      ],
      correctAnswer: 'A',
      explanationVi: 'Câu hỏi hỏi về mốc thời gian "When" (Khi nào). Câu trả lời A "By the end of this week" (Trước cuối tuần này) trả lời chính xác.',
      transcriptEn: 'Question: "When will the quarterly financial report be published?" -> (A) By the end of this week, according to Mr. Henderson. (B) Yes, I read the article yesterday. (C) At the downtown convention center.',
      vocabularyList: [
        { word: 'Quarterly', meaning: 'Hàng quý (mỗi 3 tháng)' },
        { word: 'Publish', meaning: 'Xuất bản, công bố' },
      ],
    },
    {
      id: 'toeic-p5-1',
      partNumber: 5,
      questionNumber: 101,
      questionText: 'All departmental employees are required to submit ______ expense reports before the final Friday of the month.',
      options: [
        { label: 'A', text: 'they' },
        { label: 'B', text: 'their' },
        { label: 'C', text: 'theirs' },
        { label: 'D', text: 'them' },
      ],
      correctAnswer: 'B',
      explanationVi: 'Đứng trước cụm danh từ "expense reports" (báo cáo chi tiêu), ta cần tính từ sở hữu "their" (của họ).',
      vocabularyList: [
        { word: 'Expense report', meaning: 'Báo cáo chi tiêu/chi phí' },
        { word: 'Submit', meaning: 'Nộp, đệ trình' },
      ],
    },
    {
      id: 'toeic-p7-1',
      partNumber: 7,
      questionNumber: 147,
      passageText: 'MEMORANDUM\nTo: All Regional Marketing Personnel\nFrom: Sarah Jenkins, Director of Operations\nDate: October 14\nSubject: Office Relocation Schedule\n\nPlease be advised that our marketing branch will relocate to the 8th floor of the Pacific Tower beginning next Monday. All employees must pack their personal belongings and label their storage boxes by Friday at 5:00 PM. High-priority client files must be handed directly to team supervisors.',
      questionText: 'What are marketing employees instructed to do by Friday at 5:00 PM?',
      options: [
        { label: 'A', text: 'Sign their new employment contracts.' },
        { label: 'B', text: 'Pack and label their personal boxes.' },
        { label: 'C', text: 'Attend a conference at the Pacific Tower.' },
        { label: 'D', text: 'Email their weekly status reports.' },
      ],
      correctAnswer: 'B',
      explanationVi: 'Theo thông báo: "All employees must pack their personal belongings and label their storage boxes by Friday at 5:00 PM." Do đó đáp án B là hoàn toàn chính xác.',
      vocabularyList: [
        { word: 'Relocate', meaning: 'Di dời văn phòng / chỗ ở' },
        { word: 'Belongings', meaning: 'Đồ đạc tư trang cá nhân' },
      ],
    },
  ];

  const filteredTests = testSets.filter((t) => {
    if (filterYear === 'all') return true;
    return t.year.toString() === filterYear;
  });

  const handleStartFullTest = (test: ToeicTestSet) => {
    sounds.playClick();
    setActiveRunnerTest({
      id: test.id,
      title: test.title,
      type: 'TOEIC',
      durationMinutes: test.durationMinutes,
      totalQuestions: test.totalQuestions,
    });
  };

  const handleSelectAnswer = (qId: string, opt: 'A' | 'B' | 'C' | 'D') => {
    sounds.playClick();
    setSelectedAnswers({ ...selectedAnswers, [qId]: opt });
  };

  const handleSubmitPractice = () => {
    sounds.playCoin();
    playCelebration();
    setIsSubmitted(true);
    updateStats(30, 2, 15);
  };

  if (activeRunnerTest) {
    return <MockTestRunner test={activeRunnerTest} onExit={() => setActiveRunnerTest(null)} />;
  }

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-3xl bg-slate-900 p-6 sm:p-8 text-white shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="rounded-md bg-emerald-500/20 px-2.5 py-0.5 text-xs font-bold text-emerald-300 border border-emerald-500/30">
                LUYỆN THI TOEIC LISTENING & READING
              </span>
              <span className="text-xs text-slate-400">Target 800+ ETS Format</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Kho Bộ Đề Thi TOEIC Chuẩn ETS
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-slate-300 max-w-xl">
              Lựa chọn bộ đề thi thử full 200 câu hoặc luyện riêng từng Part trọng tâm với giải thích đáp án chi tiết tiếng Việt.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Button
              variant={activeView === 'catalog' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setActiveView('catalog')}
              className="text-xs font-bold"
            >
              <FileCheck2 className="mr-1.5 h-4 w-4" /> Danh sách Bộ Đề Thi
            </Button>
            <Button
              variant={activeView === 'practice' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setActiveView('practice')}
              className="text-xs font-bold"
            >
              <Target className="mr-1.5 h-4 w-4" /> Luyện Từng Part
            </Button>
          </div>
        </div>
      </div>

      {/* CATALOG VIEW: CHỌN BỘ ĐỀ ĐỂ LÀM */}
      {activeView === 'catalog' && (
        <div className="space-y-4">
          {/* Filter Bar */}
          <div className="flex items-center justify-between">
            <div className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
              Chọn bộ đề thi ({filteredTests.length} bộ đề sẵn sàng)
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-slate-400">Năm phát hành:</span>
              <select
                value={filterYear}
                onChange={(e) => setFilterYear(e.target.value)}
                className="rounded-xl border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-800 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
              >
                <option value="all">Tất cả năm</option>
                <option value="2026">2026 (Mới nhất)</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
              </select>
            </div>
          </div>

          {/* Test Sets Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredTests.map((test) => (
              <Card
                key={test.id}
                className="p-5 border-slate-200 hover:border-emerald-500/60 transition-all shadow-sm hover:shadow-md flex flex-col justify-between dark:border-slate-800"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <Badge variant="outline" className="text-[10px] font-bold">
                      {test.publisher} • {test.year}
                    </Badge>
                    <span className="rounded-full bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700 dark:text-emerald-300">
                      {test.difficulty}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {test.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                    {test.description}
                  </p>

                  <div className="mt-4 grid grid-cols-3 gap-2 rounded-xl bg-slate-50 p-2.5 dark:bg-slate-800/50 text-center">
                    <div>
                      <div className="text-[10px] text-slate-400">Thời gian</div>
                      <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                        {test.durationMinutes} phút
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400">Số câu</div>
                      <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                        {test.totalQuestions} câu
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400">Lượt thi</div>
                      <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                        {test.attemptsCount.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs font-bold"
                    onClick={() => {
                      sounds.playClick();
                      setSelectedTestSet(test);
                    }}
                  >
                    Xem cấu trúc Part
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    className="text-xs font-bold bg-emerald-600 hover:bg-emerald-700"
                    onClick={() => handleStartFullTest(test)}
                  >
                    Vào thi Full Test <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Modal / Panel for Part Structure when a test set is selected */}
          {selectedTestSet && (
            <Card className="p-6 border-emerald-300 dark:border-emerald-800 bg-emerald-50/30 dark:bg-emerald-950/20">
              <div className="flex items-center justify-between pb-3 border-b border-emerald-200 dark:border-emerald-900">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Chi tiết các phần thi của: {selectedTestSet.title}
                  </h4>
                  <p className="text-xs text-slate-500">
                    Bạn có thể chọn làm riêng từng Part hoặc bấm "Bắt đầu bài thi đầy đủ"
                  </p>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setSelectedTestSet(null)}>
                  Đóng
                </Button>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {selectedTestSet.parts.map((p) => (
                  <div
                    key={p.part}
                    className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">
                        Part {p.part}: {p.name}
                      </div>
                      <div className="text-[10px] text-slate-400">
                        {p.questionsCount} câu • {p.type}
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-[11px] font-bold h-7 px-2"
                      onClick={() => {
                        setActiveView('practice');
                        setActivePart(p.part);
                      }}
                    >
                      Luyện Part
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </div>
      )}

      {/* PRACTICE VIEW: LUYỆN TỪNG PART VỚI GIẢI THÍCH CHI TIẾT */}
      {activeView === 'practice' && (
        <div className="space-y-5">
          {/* Part Selection Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
              <button
                key={num}
                onClick={() => {
                  sounds.playClick();
                  setActivePart(num);
                  setIsSubmitted(false);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                  activePart === num
                    ? 'bg-primary-600 text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800'
                }`}
              >
                Part {num}
              </button>
            ))}
          </div>

          {/* Filter questions by active part */}
          {questions
            .filter((q) => q.partNumber === activePart || (activePart > 2 && q.partNumber >= 5))
            .slice(0, 2)
            .map((q) => (
              <Card key={q.id} className="p-6 border-slate-200 dark:border-slate-800 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                  <Badge variant="outline">
                    Part {q.partNumber} • Câu {q.questionNumber}
                  </Badge>
                  <button
                    onClick={() => speakEnglish(q.questionText)}
                    className="flex items-center gap-1 text-xs text-primary-600 hover:underline"
                  >
                    <Volume2 className="h-4 w-4" />
                    <span>Nghe audio câu hỏi</span>
                  </button>
                </div>

                {q.imageUrl && (
                  <div className="max-w-md mx-auto overflow-hidden rounded-2xl border">
                    <img src={q.imageUrl} alt="Part 1 Photograph" className="w-full h-56 object-cover" />
                  </div>
                )}

                {q.passageText && (
                  <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/60 p-4 border text-xs whitespace-pre-line leading-relaxed font-mono">
                    {q.passageText}
                  </div>
                )}

                <div className="text-sm font-semibold text-slate-900 dark:text-white">
                  {q.questionText}
                </div>

                {/* Options A, B, C, D */}
                <div className="space-y-2">
                  {q.options.map((opt) => {
                    const isSelected = selectedAnswers[q.id] === opt.label;
                    const isCorrect = q.correctAnswer === opt.label;

                    let btnClass = 'border-slate-200 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800';
                    if (isSelected) {
                      btnClass = 'border-primary-500 bg-primary-50 text-primary-900 dark:bg-primary-950/60 dark:text-primary-200';
                    }
                    if (isSubmitted) {
                      if (isCorrect) {
                        btnClass = 'border-emerald-500 bg-emerald-50 text-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-200 font-bold';
                      } else if (isSelected && !isCorrect) {
                        btnClass = 'border-rose-500 bg-rose-50 text-rose-900 dark:bg-rose-950/60 dark:text-rose-200';
                      }
                    }

                    return (
                      <button
                        key={opt.label}
                        onClick={() => handleSelectAnswer(q.id, opt.label as any)}
                        className={`flex w-full items-center gap-3 rounded-xl border p-3 text-left text-xs transition-all ${btnClass}`}
                      >
                        <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-slate-100 font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-200 shrink-0">
                          {opt.label}
                        </span>
                        <span className="flex-1">{opt.text}</span>
                        {isSubmitted && isCorrect && <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />}
                        {isSubmitted && isSelected && !isCorrect && <XCircle className="h-4 w-4 text-rose-600 shrink-0" />}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation after submit */}
                {isSubmitted && (
                  <div className="rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/40 p-4 border border-emerald-200 dark:border-emerald-900 space-y-2 text-xs">
                    <div className="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                      <Check className="h-4 w-4" />
                      <span>Giải thích chi tiết (Đáp án đúng: {q.correctAnswer}):</span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300">{q.explanationVi}</p>
                    {q.transcriptEn && (
                      <div className="pt-2 text-slate-500 italic border-t border-emerald-200/60">
                        Transcript: {q.transcriptEn}
                      </div>
                    )}
                  </div>
                )}
              </Card>
            ))}

          <div className="flex justify-end gap-2 pt-2">
            {!isSubmitted ? (
              <Button variant="primary" size="lg" onClick={handleSubmitPractice} className="font-bold">
                Nộp bài & Xem giải thích
              </Button>
            ) : (
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  setIsSubmitted(false);
                  setSelectedAnswers({});
                }}
                className="font-bold"
              >
                <RotateCcw className="mr-1.5 h-4 w-4" /> Làm lại câu hỏi
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
