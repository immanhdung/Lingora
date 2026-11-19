import React, { useState } from 'react';
import {
  Award,
  Mic,
  FileText,
  BookOpen,
  Headphones,
  ArrowRight,
  Target,
  Clock,
  Sparkles,
  FileCheck2,
  CheckCircle2,
  Layers,
  ChevronRight,
  Filter,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Progress } from '@/components/ui/Progress';
import { IeltsSpeakingRoom } from './IeltsSpeakingRoom';
import { IeltsWritingEvaluator } from './IeltsWritingEvaluator';
import { MockTestRunner } from '../test-center/MockTestRunner';
import { sounds } from '@/lib/utils';
import { useAuthStore } from '@/stores/useAuthStore';

interface IeltsTestSet {
  id: string;
  series: string;
  testNumber: number;
  type: 'Academic' | 'General Training';
  title: string;
  durationMinutes: number;
  totalQuestions: number;
  estimatedBand: string;
  attemptsCount: number;
  description: string;
  skills: {
    readingPassages: string[];
    listeningSections: string[];
    writingTasks: string[];
  };
}

export const IeltsHub: React.FC = () => {
  const { user } = useAuthStore();
  const [activeView, setActiveView] = useState<'catalog' | 'skills'>('catalog');
  const [activeSkillTab, setActiveSkillTab] = useState<'speaking' | 'writing' | 'reading' | 'listening'>('speaking');
  const [selectedSeries, setSelectedSeries] = useState<string>('all');
  const [activeRunnerTest, setActiveRunnerTest] = useState<any | null>(null);

  // IELTS Cambridge Multiple Test Sets
  const testSets: IeltsTestSet[] = [
    {
      id: 'cam-19-test-1',
      series: 'Cambridge 19',
      testNumber: 1,
      type: 'Academic',
      title: 'Cambridge IELTS 19 Academic - Practice Test 01',
      durationMinutes: 160,
      totalQuestions: 80,
      estimatedBand: 'Band 6.5 - 9.0',
      attemptsCount: 16400,
      description: 'Đề thi Cambridge mới nhất với các bài đọc về Khảo cổ học La Mã và Hệ sinh thái biển sâu.',
      skills: {
        readingPassages: [
          'Passage 1: Secrets of Ancient Roman Concrete Engineering',
          'Passage 2: Deep-Sea Hydrothermal Vents and Extremophiles',
          'Passage 3: Artificial Intelligence in Forensic Linguistics',
        ],
        listeningSections: [
          'Section 1: Travel Insurance & Lost Luggage Claim',
          'Section 2: Riverside Wildlife Sanctuary Tour Guide',
          'Section 3: Academic Consultation on Renewable Urban Architecture',
          'Section 4: Lecture on Global Climate Feedback Loops',
        ],
        writingTasks: [
          'Task 1: Line Graph on Clean Energy Generation in Europe (2000-2025)',
          'Task 2: Essay on Career-focused vs Broad Intellectual University Education',
        ],
      },
    },
    {
      id: 'cam-19-test-2',
      series: 'Cambridge 19',
      testNumber: 2,
      type: 'Academic',
      title: 'Cambridge IELTS 19 Academic - Practice Test 02',
      durationMinutes: 160,
      totalQuestions: 80,
      estimatedBand: 'Band 7.0 - 9.0',
      attemptsCount: 11200,
      description: 'Bộ đề thi chuẩn khảo thí quốc tế tập trung vào dạng bài Matching Information và T/F/NG.',
      skills: {
        readingPassages: [
          'Passage 1: The Evolution of Subsea Fiber Optic Telecommunication Cables',
          'Passage 2: The Psychology of Bilingual Cognitive Advantage',
          'Passage 3: Autonomous Agricultural Drones in Food Security',
        ],
        listeningSections: [
          'Section 1: International Student Housing Application',
          'Section 2: City Botanical Garden Historical Exhibition',
          'Section 3: Seminar on Consumer Psychology and Digital Marketing',
          'Section 4: Astrophysics and Exoplanet Atmosphere Spectroscopy',
        ],
        writingTasks: [
          'Task 1: Comparative Bar Charts on Household Spending Patterns',
          'Task 2: Essay on Artificial Intelligence Replacing Human Workforce',
        ],
      },
    },
    {
      id: 'cam-18-test-1',
      series: 'Cambridge 18',
      testNumber: 1,
      type: 'Academic',
      title: 'Cambridge IELTS 18 Academic - Practice Test 01',
      durationMinutes: 160,
      totalQuestions: 80,
      estimatedBand: 'Band 6.0 - 8.5',
      attemptsCount: 24500,
      description: 'Bộ đề kinh điển từ Cambridge University Press với độ phân hóa cao cho mục tiêu 7.5+.',
      skills: {
        readingPassages: [
          'Passage 1: Urban Green Roofs and Biodiversity Conservation',
          'Passage 2: The History of Glassmaking Technology',
          'Passage 3: Neuroplasticity and Adult Second Language Acquisition',
        ],
        listeningSections: [
          'Section 1: Local Sports Club Membership Inquiry',
          'Section 2: National Park Hiking Safety Briefing',
          'Section 3: Group Project Presentation on Marine Microplastics',
          'Section 4: Historical Analysis of the Silk Road Trade Network',
        ],
        writingTasks: [
          'Task 1: Process Diagram of Water Desalination Plant',
          'Task 2: Essay on Government Investment in Public Transport vs Roadways',
        ],
      },
    },
    {
      id: 'cam-18-test-2',
      series: 'Cambridge 18',
      testNumber: 2,
      type: 'Academic',
      title: 'Cambridge IELTS 18 Academic - Practice Test 02',
      durationMinutes: 160,
      totalQuestions: 80,
      estimatedBand: 'Band 6.5 - 8.5',
      attemptsCount: 19800,
      description: 'Đề thi thực chiến kiểm tra toàn diện 4 kỹ năng Listening, Reading, Writing, Speaking.',
      skills: {
        readingPassages: [
          'Passage 1: Ancient Irrigation Systems of Mesopotamia',
          'Passage 2: The Behavioral Biology of Honeybee Communication',
          'Passage 3: Cognitive Biases in Financial Decision Making',
        ],
        listeningSections: [
          'Section 1: Car Rental and Insurance Confirmation',
          'Section 2: Museum Audio Guide for Impressionist Art Gallery',
          'Section 3: Tutorial Discussion on Sustainable Urban Planning',
          'Section 4: Lecture on Deep-Earth Seismic Wave Anomalies',
        ],
        writingTasks: [
          'Task 1: Pie Charts of World Energy Consumption by Sector',
          'Task 2: Essay on Mandatory Physical Education in Schools',
        ],
      },
    },
    {
      id: 'cam-17-test-1',
      series: 'Cambridge 17',
      testNumber: 1,
      type: 'General Training',
      title: 'Cambridge IELTS 17 General Training - Test 01',
      durationMinutes: 160,
      totalQuestions: 80,
      estimatedBand: 'Band 6.0 - 8.0',
      attemptsCount: 15300,
      description: 'Dành cho đối tượng định cư và làm việc quốc tế với các văn bản đời sống thực tế.',
      skills: {
        readingPassages: [
          'Section 1: Workplace Safety Guidelines & Community College Courses',
          'Section 2: Employee Rights and Remote Working Policy',
          'Section 3: The Domestication History of Canines',
        ],
        listeningSections: [
          'Section 1: Booking a Holiday Rental Cottage',
          'Section 2: Public Library Facilities and Services Tour',
          'Section 3: Student Discussion on Wind Energy Feasibility',
          'Section 4: The Impact of Light Pollution on Bird Migration',
        ],
        writingTasks: [
          'Task 1: Formal Letter to Local Council regarding Road Maintenance',
          'Task 2: Essay on the Impact of Social Media on Community Ties',
        ],
      },
    },
  ];

  const filteredTests = testSets.filter((t) => {
    if (selectedSeries === 'all') return true;
    return t.series === selectedSeries;
  });

  const handleStartFullIeltsTest = (test: IeltsTestSet) => {
    sounds.playClick();
    setActiveRunnerTest({
      id: test.id,
      title: test.title,
      type: 'IELTS',
      durationMinutes: test.durationMinutes,
      totalQuestions: test.totalQuestions,
    });
  };

  if (activeRunnerTest) {
    return <MockTestRunner test={activeRunnerTest} onExit={() => setActiveRunnerTest(null)} />;
  }

  return (
    <div className="space-y-6">
      {/* Top Banner & IELTS Band Progress */}
      <div className="rounded-3xl bg-slate-900 p-6 sm:p-8 text-white shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="rounded-md bg-purple-500/20 px-2.5 py-0.5 text-xs font-bold text-purple-300 border border-purple-500/30">
                LỘ TRÌNH IELTS ACADEMIC & GENERAL
              </span>
              <span className="text-xs text-purple-200">Chuẩn Khảo Thí Cambridge & IDP</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Kho Đề Thi Cambridge IELTS Thực Chiến
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-slate-300 max-w-xl">
              Kho đề Cambridge IELTS 17, 18, 19 với đầy đủ đề thi 4 kỹ năng: Reading phân tích chuyên sâu, phòng Speaking 1-kèm-1 và Chấm chữa Writing AI 4 tiêu chí.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* Band Estimate Pill */}
            <div className="rounded-2xl bg-white/10 p-3.5 border border-white/15 text-left">
              <div className="text-[10px] font-bold text-purple-300 uppercase">Ước tính điểm:</div>
              <div className="text-2xl font-black text-white">Band 7.5</div>
              <div className="text-[10px] text-slate-300">L: 8.0 • R: 7.5 • W: 7.0 • S: 7.0</div>
            </div>
          </div>
        </div>

        {/* View Switcher buttons inside banner */}
        <div className="mt-6 pt-5 border-t border-slate-800 flex items-center gap-2">
          <Button
            variant={activeView === 'catalog' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setActiveView('catalog')}
            className="text-xs font-bold"
          >
            <FileCheck2 className="mr-1.5 h-4 w-4" /> Danh sách Bộ Đề Cambridge
          </Button>
          <Button
            variant={activeView === 'skills' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setActiveView('skills')}
            className="text-xs font-bold"
          >
            <Target className="mr-1.5 h-4 w-4" /> Rèn Luyện 4 Kỹ Năng (AI Coach)
          </Button>
        </div>
      </div>

      {/* CATALOG VIEW: CHỌN BỘ ĐỀ THI CAMBRIDGE */}
      {activeView === 'catalog' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
              Chọn bộ đề Cambridge để luyện tập ({filteredTests.length} đề thi)
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">Bộ sách:</span>
              <select
                value={selectedSeries}
                onChange={(e) => setSelectedSeries(e.target.value)}
                className="rounded-xl border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-800 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
              >
                <option value="all">Tất cả Cambridge (17-19)</option>
                <option value="Cambridge 19">Cambridge IELTS 19 (Mới nhất)</option>
                <option value="Cambridge 18">Cambridge IELTS 18</option>
                <option value="Cambridge 17">Cambridge IELTS 17</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredTests.map((test) => (
              <Card
                key={test.id}
                className="p-5 border-slate-200 hover:border-purple-500/60 transition-all shadow-sm hover:shadow-md flex flex-col justify-between dark:border-slate-800"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <Badge variant="outline" className="text-[10px] font-bold">
                      {test.series} • {test.type}
                    </Badge>
                    <span className="rounded-full bg-purple-50 dark:bg-purple-950/60 px-2.5 py-0.5 text-[10px] font-bold text-purple-700 dark:text-purple-300">
                      {test.estimatedBand}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {test.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                    {test.description}
                  </p>

                  {/* Skills overview pills */}
                  <div className="mt-3 space-y-1.5 text-[11px] text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                    <div className="font-semibold text-purple-700 dark:text-purple-400">
                      Bài đọc trọng tâm:
                    </div>
                    <div className="truncate text-slate-500">{test.skills.readingPassages[0]}</div>
                    <div className="truncate text-slate-500">{test.skills.readingPassages[1]}</div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                  <div className="text-[11px] text-slate-400">
                    {test.durationMinutes} phút • {test.totalQuestions} câu hỏi
                  </div>
                  <Button
                    variant="primary"
                    size="sm"
                    className="text-xs font-bold bg-purple-600 hover:bg-purple-700"
                    onClick={() => handleStartFullIeltsTest(test)}
                  >
                    Vào thi đề này <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* SKILLS VIEW: 4 SKILLS PRACTICE WITH AI COACH */}
      {activeView === 'skills' && (
        <div className="space-y-5">
          {/* 4 Skills Navigation Tabs */}
          <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
            <Button
              variant={activeSkillTab === 'speaking' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => {
                sounds.playClick();
                setActiveSkillTab('speaking');
              }}
              className="text-xs font-bold"
            >
              <Mic className="mr-1.5 h-4 w-4" /> AI Speaking Room
            </Button>
            <Button
              variant={activeSkillTab === 'writing' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => {
                sounds.playClick();
                setActiveSkillTab('writing');
              }}
              className="text-xs font-bold"
            >
              <FileText className="mr-1.5 h-4 w-4" /> AI Writing Evaluator
            </Button>
            <Button
              variant={activeSkillTab === 'reading' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => {
                sounds.playClick();
                setActiveSkillTab('reading');
              }}
              className="text-xs font-bold"
            >
              <BookOpen className="mr-1.5 h-4 w-4" /> Reading Practice
            </Button>
            <Button
              variant={activeSkillTab === 'listening' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => {
                sounds.playClick();
                setActiveSkillTab('listening');
              }}
              className="text-xs font-bold"
            >
              <Headphones className="mr-1.5 h-4 w-4" /> Listening Practice
            </Button>
          </div>

          {/* Skill Content Views */}
          {activeSkillTab === 'speaking' && <IeltsSpeakingRoom />}
          {activeSkillTab === 'writing' && <IeltsWritingEvaluator />}
          {activeSkillTab === 'reading' && (
            <Card className="p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b">
                <div>
                  <Badge variant="primary">Cambridge 19 Academic • Reading Passage 1</Badge>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white mt-1">
                    Secrets of Ancient Roman Concrete Engineering
                  </h3>
                </div>
                <span className="text-xs font-bold text-slate-400">Thời gian làm bài: 20 phút</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="rounded-2xl border p-4 bg-slate-50 dark:bg-slate-800 text-xs leading-relaxed max-h-96 overflow-y-auto space-y-3">
                  <p className="font-bold">Paragraph A</p>
                  <p>
                    The Roman Colosseum, the Pantheon, and ancient harbor breakwaters have endured millennia of earthquakes, corrosive seawater, and weathering without collapsing. Modern architectural scientists have long marveled at the resilience of ancient Roman concrete, known as opus caementicium. In contrast, modern Portland cement structures often begin degrading after a few decades of exposure to maritime conditions.
                  </p>
                  <p className="font-bold">Paragraph B</p>
                  <p>
                    Recent chemical analyses published in international engineering journals revealed that the key secret lies in small, millimeter-scale white mineral chunks ubiquitously found throughout Roman concrete, historically dismissed as sloppy mixing artifacts. Termed "lime clasts," these inclusions were formed by a hot-mixing process using quicklime, which creates a reactive calcium-rich reservoir capable of chemically self-healing microcracks when infiltrated by water.
                  </p>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="font-bold uppercase text-slate-400">Câu hỏi 1-3: True / False / Not Given</div>
                  <div className="p-3.5 rounded-xl border bg-white dark:bg-slate-900 space-y-2">
                    <p className="font-semibold text-slate-800 dark:text-slate-200">
                      1. Modern Portland cement structures generally survive longer in seawater than ancient Roman breakwaters.
                    </p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="text-xs">TRUE</Button>
                      <Button size="sm" variant="primary" className="text-xs">FALSE</Button>
                      <Button size="sm" variant="outline" className="text-xs">NOT GIVEN</Button>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl border bg-white dark:bg-slate-900 space-y-2">
                    <p className="font-semibold text-slate-800 dark:text-slate-200">
                      2. Lime clasts were deliberately included by Roman builders to allow the concrete to self-heal.
                    </p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="primary" className="text-xs">TRUE</Button>
                      <Button size="sm" variant="outline" className="text-xs">FALSE</Button>
                      <Button size="sm" variant="outline" className="text-xs">NOT GIVEN</Button>
                    </div>
                  </div>

                  <Button variant="primary" size="sm" className="w-full font-bold">
                    Nộp bài Reading & Xem giải thích
                  </Button>
                </div>
              </div>
            </Card>
          )}

          {activeSkillTab === 'listening' && (
            <Card className="p-6 space-y-4">
              <Badge variant="primary">Cambridge 19 Academic • Listening Section 1</Badge>
              <h3 className="font-bold text-base">Travel Insurance & Lost Luggage Claim Form</h3>
              <p className="text-xs text-slate-500">
                Nghe đoạn hội thoại giữa khách hàng và chuyên viên bảo hiểm hàng không. Điền KHÔNG QUÁ 2 TỪ hoặc SỐ.
              </p>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border space-y-3 text-xs">
                <div>• Passenger Full Name: Robert <strong>[1. MacIntyre]</strong></div>
                <div>• Flight number: BA <strong>[2. 482]</strong></div>
                <div>• Missing item: Leather suitcase with a red <strong>[3. ribbon]</strong> attached</div>
                <div>• Estimated value: £ <strong>[4. 450]</strong></div>
              </div>
              <Button variant="primary" size="sm" className="font-bold">
                Bắt đầu làm bài nghe Section 1
              </Button>
            </Card>
          )}
        </div>
      )}
    </div>
  );
};
