import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Compass,
  Headphones,
  Globe2,
  Dna,
  BookMarked,
  Clock,
  Play,
  RotateCcw,
  Volume2,
  Mic,
  MicOff,
  Send,
  CheckCircle2,
  AlertCircle,
  Flame,
  VolumeX,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Progress } from '@/components/ui/Progress';
import { speakEnglish } from '@/lib/speech';
import { sounds, playCelebration, formatTime } from '@/lib/utils';
import { useAuthStore } from '@/stores/useAuthStore';

export const UniqueFeaturesHub: React.FC = () => {
  const { updateStats } = useAuthStore();
  const [activeModule, setActiveModule] = useState<
    'simulator' | 'shadowing' | 'universe' | 'mistake-dna' | 'diary' | 'focus'
  >('simulator');

  // --- MODULE 1: LIFE SIMULATOR STATE ---
  const [simulatorScenario, setSimulatorScenario] = useState<'restaurant' | 'airport' | 'interview'>('restaurant');
  const [simulatorChat, setSimulatorChat] = useState([
    {
      sender: 'ai',
      text: "Good evening! Welcome to The Olive Garden. A table for two, or are you dining alone tonight?",
      vi: "Chào buổi tối! Chào mừng quý khách. Bạn đi hai người hay dùng bữa một mình?",
    },
  ]);
  const [simulatorInput, setSimulatorInput] = useState('');

  const handleSimulatorSend = () => {
    if (!simulatorInput.trim()) return;
    const userText = simulatorInput.trim();
    sounds.playClick();
    setSimulatorChat((prev) => [...prev, { sender: 'user', text: userText, vi: '' }]);
    setSimulatorInput('');

    setTimeout(() => {
      let aiReply = "Certainly! Right this way, please. Here is our menu. Would you like to start with some drinks or sparkling water?";
      let aiVi = "Dạ vâng! Mời quý khách đi theo lối này. Đây là thực đơn. Bạn có muốn bắt đầu bằng đồ uống hoặc nước có ga không?";
      setSimulatorChat((prev) => [...prev, { sender: 'ai', text: aiReply, vi: aiVi }]);
      speakEnglish(aiReply);
      sounds.playSuccess();
    }, 1000);
  };

  // --- MODULE 2: SHADOWING STUDIO STATE ---
  const [shadowSentenceIndex, setShadowSentenceIndex] = useState(0);
  const [isRecordingShadow, setIsRecordingShadow] = useState(false);
  const [shadowScore, setShadowScore] = useState<number | null>(null);

  const shadowSentences = [
    {
      en: 'The secret to mastering English is consistent daily immersion.',
      vi: 'Bí quyết để làm chủ tiếng Anh chính là đắm chìm kiên trì mỗi ngày.',
      phonetic: '/ðə ˈsiː.krət tuː ˈmæs.tɚ.ɪŋ ˈɪŋ.ɡlɪʃ ɪz kənˈsɪs.tənt ˈdeɪ.li ɪˈmɝː.ʃən/',
    },
    {
      en: 'Effective communication builds bridges across diverse cultural boundaries.',
      vi: 'Giao tiếp hiệu quả xây dựng những nhịp cầu vượt qua ranh giới văn hóa.',
      phonetic: '/ɪˈfek.tɪv kəˌmjuː.nəˈkeɪ.ʃən bɪldz ˈbrɪdʒ.ɪz əˈkrɑːs daɪˈvɝːs ˈkʌl.tʃɚ.əl ˈbaʊn.dər.iz/',
    },
  ];
  const currentShadow = shadowSentences[shadowSentenceIndex];

  const handleShadowRecord = () => {
    if (isRecordingShadow) {
      setIsRecordingShadow(false);
      setShadowScore(92);
      sounds.playSuccess();
      playCelebration();
      updateStats(20, 1, 15);
    } else {
      setIsRecordingShadow(true);
      sounds.playClick();
      setShadowScore(null);
    }
  };

  // --- MODULE 3: WORD UNIVERSE STATE ---
  const [activeWordNode, setActiveWordNode] = useState('Travel');
  const universeNodes = [
    { name: 'Travel', parent: null, x: 50, y: 50, icon: '✈️' },
    { name: 'Airport', parent: 'Travel', x: 25, y: 30, icon: '🛫' },
    { name: 'Passport', parent: 'Travel', x: 75, y: 30, icon: '🛂' },
    { name: 'Boarding Pass', parent: 'Airport', x: 20, y: 70, icon: '🎫' },
    { name: 'Luggage', parent: 'Travel', x: 50, y: 80, icon: '🧳' },
    { name: 'Immigration', parent: 'Airport', x: 80, y: 70, icon: '🏢' },
  ];

  // --- MODULE 4: FOCUS MODE (POMODORO) STATE ---
  const [focusTime, setFocusTime] = useState(25 * 60);
  const [isFocusActive, setIsFocusActive] = useState(false);
  const [ambientSound, setAmbientSound] = useState<'rain' | 'cafe' | 'off'>('rain');

  useEffect(() => {
    let timer: any = null;
    if (isFocusActive && focusTime > 0) {
      timer = setInterval(() => setFocusTime((t) => t - 1), 1000);
    } else if (focusTime === 0) {
      sounds.playSuccess();
      playCelebration();
      setIsFocusActive(false);
    }
    return () => clearInterval(timer);
  }, [isFocusActive, focusTime]);

  // --- MODULE 5: ENGLISH DIARY STATE ---
  const [diaryEntry, setDiaryEntry] = useState('');
  const [diaryCorrection, setDiaryCorrection] = useState<string | null>(null);

  const handleReviewDiary = () => {
    if (!diaryEntry.trim()) return;
    sounds.playClick();
    setTimeout(() => {
      setDiaryCorrection(
        "AI Rewrite (Band 8.0+): Today was exceptionally productive. I dedicated two hours to studying English vocabulary and felt a tangible surge of confidence in articulating complex ideas."
      );
      sounds.playSuccess();
      playCelebration();
      updateStats(30, 2, 20);
    }, 1200);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 p-6 sm:p-8 text-white shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <Badge variant="secondary" className="bg-white/20 text-white border-none font-bold mb-2">
              BỘ TÍNH NĂNG ĐỘT PHÁ LINGORA AI 2026
            </Badge>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Đột Phá Khả Năng Ngôn Ngữ Cùng AI Studio
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-purple-100 max-w-xl">
              Nhập vai thực tế, Shadowing so sánh ngữ điệu, Vũ trụ từ vựng 2D và Phân tích Mistake DNA độc quyền.
            </p>
          </div>

          {/* Module Selector */}
          <div className="flex flex-wrap gap-2 bg-white/20 p-1.5 rounded-2xl backdrop-blur-md">
            {[
              { id: 'simulator', label: 'Life Simulator' },
              { id: 'shadowing', label: 'Shadowing Studio' },
              { id: 'universe', label: 'Word Universe' },
              { id: 'mistake-dna', label: 'Mistake DNA' },
              { id: 'diary', label: 'English Diary' },
              { id: 'focus', label: 'Focus Mode' },
            ].map((m) => (
              <button
                key={m.id}
                onClick={() => {
                  sounds.playClick();
                  setActiveModule(m.id as any);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeModule === m.id ? 'bg-white text-slate-900 shadow' : 'text-white hover:bg-white/10'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* MODULE 1: LIFE SIMULATOR */}
      {activeModule === 'simulator' && (
        <Card className="p-6 space-y-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
            <div>
              <Badge variant="primary" className="mb-1">English Life Simulator</Badge>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                Mô Phỏng Tình Huống Giao Tiếp: Nhà Hàng Ý (Restaurant Scenario)
              </h3>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant={simulatorScenario === 'restaurant' ? 'primary' : 'outline'} onClick={() => setSimulatorScenario('restaurant')} className="text-xs">
                Nhà Hàng 🍽️
              </Button>
              <Button size="sm" variant={simulatorScenario === 'airport' ? 'primary' : 'outline'} onClick={() => setSimulatorScenario('airport')} className="text-xs">
                Sân Bay ✈️
              </Button>
              <Button size="sm" variant={simulatorScenario === 'interview' ? 'primary' : 'outline'} onClick={() => setSimulatorScenario('interview')} className="text-xs">
                Phỏng Vấn 💼
              </Button>
            </div>
          </div>

          {/* Chat history */}
          <div className="space-y-4 max-h-80 overflow-y-auto p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border">
            {simulatorChat.map((msg, i) => (
              <div key={i} className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.sender === 'ai' && <div className="text-2xl">🤵</div>}
                <div className={`p-4 rounded-2xl text-xs sm:text-sm max-w-[80%] ${msg.sender === 'user' ? 'bg-primary-600 text-white' : 'bg-white border text-slate-900 dark:bg-slate-800 dark:text-slate-100'}`}>
                  <div className="font-medium">{msg.text}</div>
                  {msg.vi && <div className="text-[11px] text-slate-400 mt-1 italic">{msg.vi}</div>}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex gap-2">
            <input
              type="text"
              value={simulatorInput}
              onChange={(e) => setSimulatorInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') handleSimulatorSend(); }}
              placeholder="Nhập câu trả lời bằng tiếng Anh (ví dụ: 'Yes, a table for two near the window please')..."
              className="flex-1 rounded-xl border p-2.5 text-xs sm:text-sm dark:bg-slate-800"
            />
            <Button variant="primary" size="sm" onClick={handleSimulatorSend} className="font-bold px-6">
              <Send className="h-4 w-4 mr-1.5" /> Trả Lời
            </Button>
          </div>
        </Card>
      )}

      {/* MODULE 2: SHADOWING STUDIO */}
      {activeModule === 'shadowing' && (
        <Card className="p-6 space-y-6 max-w-2xl mx-auto text-center">
          <Badge variant="primary">Shadowing Studio • Luyện Ngữ Điệu & Nối Âm</Badge>
          <div className="rounded-2xl border p-6 bg-slate-50 dark:bg-slate-800/60 space-y-3">
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
              "{currentShadow.en}"
            </h3>
            <p className="text-xs text-primary-600 font-mono">{currentShadow.phonetic}</p>
            <p className="text-xs text-slate-500">{currentShadow.vi}</p>
          </div>

          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              size="md"
              onClick={() => speakEnglish(currentShadow.en, 0.8)}
              className="font-bold"
            >
              <Volume2 className="h-4 w-4 mr-2 text-primary-600" /> Nghe Mẫu Bản Xứ
            </Button>

            <Button
              variant={isRecordingShadow ? 'danger' : 'primary'}
              size="md"
              onClick={handleShadowRecord}
              className="font-bold"
            >
              {isRecordingShadow ? <MicOff className="h-4 w-4 mr-2" /> : <Mic className="h-4 w-4 mr-2" />}
              {isRecordingShadow ? 'Dừng Ghi Âm & Chấm Điểm' : 'Bắt Đầu Shadowing'}
            </Button>
          </div>

          {shadowScore && (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300 animate-in zoom-in-95">
              <div className="text-2xl font-black text-emerald-600">{shadowScore}% Tương Đồng Bản Xứ</div>
              <p className="text-xs mt-1">Độ nối âm (Connected Speech) và nhấn trọng âm câu rất ấn tượng!</p>
            </div>
          )}
        </Card>
      )}

      {/* MODULE 3: WORD UNIVERSE (2D GRAPH) */}
      {activeModule === 'universe' && (
        <Card className="p-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b">
            <div>
              <Badge variant="primary">Word Universe • Bản Đồ Mạng Lưới Từ Vựng</Badge>
              <p className="text-xs text-slate-500 mt-1">
                Xem sự liên kết ngữ nghĩa giữa các từ vựng đã học. Bấm vào nút từ để kích hoạt phát âm.
              </p>
            </div>
          </div>

          <div className="relative h-80 rounded-2xl bg-slate-900 border border-slate-800 p-6 overflow-hidden flex items-center justify-center">
            {universeNodes.map((node) => (
              <button
                key={node.name}
                onClick={() => {
                  sounds.playClick();
                  speakEnglish(node.name);
                  setActiveWordNode(node.name);
                }}
                className={`absolute p-3 rounded-2xl flex items-center gap-2 font-bold text-xs shadow-lg transition-transform hover:scale-110 ${
                  activeWordNode === node.name
                    ? 'bg-gradient-to-r from-primary-600 to-secondary text-white ring-4 ring-primary-400/40 scale-105'
                    : 'bg-slate-800 text-slate-200 border border-slate-700'
                }`}
                style={{ left: `${node.x}%`, top: `${node.y}%`, transform: 'translate(-50%, -50%)' }}
              >
                <span>{node.icon}</span>
                <span>{node.name}</span>
              </button>
            ))}
          </div>
        </Card>
      )}

      {/* MODULE 4: MISTAKE DNA */}
      {activeModule === 'mistake-dna' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="p-6 space-y-4">
            <Badge variant="primary">Bản Đồ Điểm Yếu (Mistake DNA Map)</Badge>
            <h3 className="font-bold text-base">Phân Bổ Lỗi Sai Thường Gặp</h3>
            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between font-semibold mb-1">
                  <span>Giới từ chỉ thời gian & nơi chốn (Prepositions)</span>
                  <span className="text-rose-500 font-bold">42% lỗi</span>
                </div>
                <Progress value={42} size="sm" indicatorColor="bg-rose-500" />
              </div>
              <div>
                <div className="flex justify-between font-semibold mb-1">
                  <span>Mạo từ A / An / The (Articles)</span>
                  <span className="text-amber-500 font-bold">28% lỗi</span>
                </div>
                <Progress value={28} size="sm" indicatorColor="bg-amber-500" />
              </div>
              <div>
                <div className="flex justify-between font-semibold mb-1">
                  <span>Sự hòa hợp chủ vị (Subject-Verb Agreement)</span>
                  <span className="text-primary-600 font-bold">18% lỗi</span>
                </div>
                <Progress value={18} size="sm" indicatorColor="bg-primary-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6 space-y-4">
            <Badge variant="warning">Bài Tập Khắc Phục Trực Diện</Badge>
            <h3 className="font-bold text-base">Luyện Ngay 5 Câu Giới Từ Trọng Điểm</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              AI đã tổng hợp những câu hỏi giới từ bạn từng làm sai trong các bài kiểm tra trước để ôn tập lại dứt điểm.
            </p>
            <Button variant="primary" size="sm" className="w-full font-bold">
              Bắt đầu bài sửa lỗi DNA
            </Button>
          </Card>
        </div>
      )}

      {/* MODULE 5: ENGLISH DIARY */}
      {activeModule === 'diary' && (
        <Card className="p-6 space-y-4 max-w-2xl mx-auto">
          <Badge variant="primary">English Diary with AI • Viết Nhật Ký Tiếng Anh</Badge>
          <textarea
            value={diaryEntry}
            onChange={(e) => setDiaryEntry(e.target.value)}
            placeholder="Write a few sentences about your day in English (e.g., 'Today I woke up early and drank coffee...')..."
            className="w-full h-32 rounded-2xl border p-4 text-xs sm:text-sm font-sans dark:bg-slate-800"
          />

          <Button variant="primary" size="sm" onClick={handleReviewDiary} className="font-bold">
            <Sparkles className="mr-1.5 h-4 w-4" /> AI Chấm & Viết Lại Văn Phong Bản Xứ
          </Button>

          {diaryCorrection && (
            <div className="rounded-2xl border border-emerald-300 bg-emerald-50/70 p-4 text-xs text-emerald-950 dark:bg-emerald-950/40 dark:text-emerald-200">
              {diaryCorrection}
            </div>
          )}
        </Card>
      )}

      {/* MODULE 6: FOCUS MODE */}
      {activeModule === 'focus' && (
        <Card className="p-8 max-w-md mx-auto text-center space-y-6">
          <Badge variant="primary">Focus Mode • Đồng Hồ Pomodoro & Âm Thanh Tập Trung</Badge>
          <div className="text-6xl font-black font-mono tracking-wider text-primary-600">
            {formatTime(focusTime)}
          </div>

          <div className="flex justify-center gap-3">
            <Button
              variant="primary"
              size="lg"
              onClick={() => setIsFocusActive(!isFocusActive)}
              className="font-bold px-8"
            >
              {isFocusActive ? 'Tạm Dừng' : 'Bắt Đầu Tập Trung'}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                setIsFocusActive(false);
                setFocusTime(25 * 60);
              }}
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>

          <div className="pt-4 border-t flex items-center justify-between text-xs">
            <span className="text-slate-400">Âm thanh nền Ambient:</span>
            <div className="flex gap-1">
              <Button size="sm" variant={ambientSound === 'rain' ? 'primary' : 'ghost'} onClick={() => setAmbientSound('rain')} className="text-xs">
                🌧️ Mưa
              </Button>
              <Button size="sm" variant={ambientSound === 'cafe' ? 'primary' : 'ghost'} onClick={() => setAmbientSound('cafe')} className="text-xs">
                ☕ Quán Cafe
              </Button>
              <Button size="sm" variant={ambientSound === 'off' ? 'primary' : 'ghost'} onClick={() => setAmbientSound('off')} className="text-xs">
                Tắt
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};
