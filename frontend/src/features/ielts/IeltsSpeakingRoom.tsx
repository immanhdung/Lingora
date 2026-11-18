import React, { useState, useEffect } from 'react';
import {
  Mic,
  MicOff,
  Volume2,
  Clock,
  Sparkles,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  Award,
  Play,
  Square,
  HelpCircle,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Progress } from '@/components/ui/Progress';
import { speakEnglish, BrowserSpeechRecognizer } from '@/lib/speech';
import { sounds, playCelebration, formatTime } from '@/lib/utils';
import { useAuthStore } from '@/stores/useAuthStore';
import { IeltsSpeakingEvaluation } from '@/types';

export const IeltsSpeakingRoom: React.FC = () => {
  const { updateStats } = useAuthStore();
  const [currentPart, setCurrentPart] = useState<1 | 2 | 3>(2);
  const [sessionState, setSessionState] = useState<'idle' | 'prep' | 'speaking' | 'evaluating' | 'result'>('idle');

  // Timers
  const [prepTimeLeft, setPrepTimeLeft] = useState(60); // 1 min prep
  const [speakTimeLeft, setSpeakTimeLeft] = useState(120); // 2 mins speaking
  const [notes, setNotes] = useState('');
  const [transcript, setTranscript] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [evaluation, setEvaluation] = useState<IeltsSpeakingEvaluation | null>(null);

  // Cue card content for Part 2
  const cueCard = {
    topic: 'Describe an environmental problem that your hometown or country is facing.',
    cues: [
      'What the problem is',
      'What the primary causes are',
      'How it impacts the daily lives of citizens',
      'And explain what steps should be taken to mitigate this issue.',
    ],
  };

  // Preparation Countdown Timer
  useEffect(() => {
    let interval: any = null;
    if (sessionState === 'prep' && prepTimeLeft > 0) {
      interval = setInterval(() => setPrepTimeLeft((t) => t - 1), 1000);
    } else if (sessionState === 'prep' && prepTimeLeft === 0) {
      sounds.playSuccess();
      startSpeaking();
    }
    return () => clearInterval(interval);
  }, [sessionState, prepTimeLeft]);

  // Speaking Countdown Timer
  useEffect(() => {
    let interval: any = null;
    if (sessionState === 'speaking' && speakTimeLeft > 0) {
      interval = setInterval(() => setSpeakTimeLeft((t) => t - 1), 1000);
    } else if (sessionState === 'speaking' && speakTimeLeft === 0) {
      finishSpeaking();
    }
    return () => clearInterval(interval);
  }, [sessionState, speakTimeLeft]);

  const startPreparation = () => {
    sounds.playClick();
    setSessionState('prep');
    setPrepTimeLeft(60);
    speakEnglish("You now have one minute to prepare your notes on the cue card. You may begin.");
  };

  const startSpeaking = () => {
    sounds.playClick();
    setSessionState('speaking');
    setSpeakTimeLeft(120);
    setIsRecording(true);

    const recognizer = new BrowserSpeechRecognizer();
    if (recognizer.isSupported) {
      recognizer.start(
        (text) => setTranscript(text),
        () => {},
        () => {}
      );
    } else {
      // Audio simulation fallback
      setTranscript(
        "I would like to talk about the severe air pollution in Hanoi. Over the past decade, rapid urbanization combined with a staggering volume of vehicular emissions has degraded the ambient air quality significantly..."
      );
    }
  };

  const finishSpeaking = () => {
    sounds.playClick();
    setIsRecording(false);
    setSessionState('evaluating');

    // AI Evaluation simulation across 4 criteria
    setTimeout(() => {
      const mockResult: IeltsSpeakingEvaluation = {
        id: `eval-${Date.now()}`,
        part: currentPart,
        topic: cueCard.topic,
        transcript:
          transcript ||
          "I would like to talk about air pollution in Hanoi. Rapid urbanization has degraded the air quality significantly...",
        overallBand: 7.0,
        fluencyCoherence: {
          score: 7.0,
          comment: 'Nhịp nói tự nhiên, duy trì được bài nói liên tục trong 2 phút mà không bị ngắt quãng kéo dài.',
        },
        lexicalResource: {
          score: 7.5,
          comment: 'Sử dụng tốt các từ vựng học thuật theo chủ đề môi trường: "rapid urbanization", "ambient air quality", "vehicular emissions".',
        },
        grammaticalAccuracy: {
          score: 6.5,
          comment: 'Cấu trúc câu phong phú nhưng đôi lúc còn nhầm lẫn giữa thì hiện tại hoàn thành và quá khứ đơn.',
        },
        pronunciation: {
          score: 7.0,
          comment: 'Ngữ điệu rõ ràng, phát âm chuẩn các âm đuôi /s/, /t/, /d/. Cần chú ý nhấn đúng trọng âm của từ 3-4 âm tiết.',
        },
        strengths: [
          'Ý tứ phát triển mạch lạc theo sát 4 gợi ý trên Cue Card.',
          'Sử dụng các từ nối hiệu quả (Furthermore, Consequently, In terms of).',
        ],
        weaknesses: [
          'Cần mở rộng thêm các cấu trúc điều kiện (Conditionals) ở giải pháp để đạt Band 8.0 GRA.',
        ],
        betterExpressions: [
          { original: 'many motorbikes on the street', better: 'a dense influx of motorized two-wheelers' },
          { original: 'government should do something', better: 'authorities ought to enact stringent environmental regulations' },
        ],
      };

      setEvaluation(mockResult);
      setSessionState('result');
      sounds.playSuccess();
      playCelebration();
      updateStats(60, 4, 40);
    }, 2000);
  };

  const handleReset = () => {
    setSessionState('idle');
    setPrepTimeLeft(60);
    setSpeakTimeLeft(120);
    setNotes('');
    setTranscript('');
    setEvaluation(null);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 rounded-3xl bg-slate-900 text-white shadow-xl">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="primary" className="bg-purple-500/30 text-purple-300 border-purple-500/40">
              IELTS SPEAKING ROOM • PHÒNG THI AI 1-KÈM-1
            </Badge>
          </div>
          <h2 className="text-2xl font-black">Mô Phỏng Phòng Phỏng Vấn Giám Khảo IDP / BC</h2>
          <p className="text-xs text-slate-400 mt-1">
            Đánh giá tự động theo chuẩn 4 tiêu chí chấm thi chính thức của Cambridge ESOL
          </p>
        </div>

        {/* Part Selection */}
        <div className="flex gap-2 bg-slate-800 p-1.5 rounded-2xl">
          {[
            { p: 1, label: 'Part 1: Phỏng vấn' },
            { p: 2, label: 'Part 2: Cue Card' },
            { p: 3, label: 'Part 3: Thảo luận' },
          ].map((item) => (
            <button
              key={item.p}
              disabled={sessionState !== 'idle'}
              onClick={() => setCurrentPart(item.p as any)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                currentPart === item.p ? 'bg-primary-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: AI Examiner Simulation Avatar */}
        <Card className="text-center p-6 flex flex-col items-center justify-between border-slate-200 dark:border-slate-800">
          <div className="space-y-4 w-full">
            <div className="relative mx-auto flex h-36 w-36 items-center justify-center rounded-3xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-sky-500 text-6xl shadow-xl text-white">
              👩‍🏫
              {sessionState === 'speaking' && (
                <div className="absolute -bottom-2 flex items-center gap-1 rounded-full bg-rose-500 px-3 py-0.5 text-[10px] font-bold text-white shadow-md animate-pulse">
                  <span className="h-2 w-2 rounded-full bg-white animate-ping" /> Đang lắng nghe
                </div>
              )}
            </div>

            <div>
              <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">Examiner Sarah</h3>
              <p className="text-xs text-slate-400">Giám khảo AI IELTS Cambridge</p>
            </div>

            {/* Voice Audio Wave Visualization */}
            <div className="flex items-center justify-center gap-1 h-12 pt-2">
              {[40, 70, 30, 90, 60, 80, 50, 95, 45, 65].map((h, i) => (
                <div
                  key={i}
                  className={`w-1 rounded-full transition-all duration-200 ${
                    sessionState === 'speaking'
                      ? 'bg-gradient-to-t from-primary-600 to-secondary animate-pulse'
                      : 'bg-slate-200 dark:bg-slate-700'
                  }`}
                  style={{ height: sessionState === 'speaking' ? `${h}%` : '20%' }}
                />
              ))}
            </div>
          </div>

          <div className="w-full pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500">
            {sessionState === 'idle' && 'Bấm "Bắt Đầu Bài Thi" để nhận đề'}
            {sessionState === 'prep' && `Chuẩn bị ghi chú: ${prepTimeLeft}s`}
            {sessionState === 'speaking' && `Đang ghi âm bài nói: ${formatTime(speakTimeLeft)}`}
            {sessionState === 'evaluating' && 'AI đang phân tích 4 tiêu chí...'}
            {sessionState === 'result' && 'Đã có kết quả chấm thi!'}
          </div>
        </Card>

        {/* Right: Cue Card, Notes & Speaking Interface */}
        <div className="lg:col-span-2 space-y-6">
          {sessionState === 'result' && evaluation ? (
            /* Results Screen */
            <Card className="p-6 space-y-6 animate-in zoom-in-95">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <Badge variant="primary" className="mb-1">Kết Quả Chấm Thi AI Speaking</Badge>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Báo Cáo Phân Tích Điểm Số</h3>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400 font-bold uppercase">Estimated Overall Band</div>
                  <div className="text-3xl font-black text-primary-600 dark:text-primary-400">
                    Band {evaluation.overallBand}
                  </div>
                </div>
              </div>

              {/* 4 Criteria Scores */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border text-center">
                  <div className="text-[11px] text-slate-500 font-bold">Fluency & Coherence</div>
                  <div className="text-xl font-black text-indigo-600 mt-1">Band {evaluation.fluencyCoherence.score}</div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border text-center">
                  <div className="text-[11px] text-slate-500 font-bold">Lexical Resource</div>
                  <div className="text-xl font-black text-purple-600 mt-1">Band {evaluation.lexicalResource.score}</div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border text-center">
                  <div className="text-[11px] text-slate-500 font-bold">Grammar Accuracy</div>
                  <div className="text-xl font-black text-sky-600 mt-1">Band {evaluation.grammaticalAccuracy.score}</div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border text-center">
                  <div className="text-[11px] text-slate-500 font-bold">Pronunciation</div>
                  <div className="text-xl font-black text-emerald-600 mt-1">Band {evaluation.pronunciation.score}</div>
                </div>
              </div>

              {/* Better Expressions */}
              <div>
                <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Nâng Cấp Diễn Đạt Chuẩn Band 8.0+:
                </h4>
                <div className="space-y-2">
                  {evaluation.betterExpressions.map((exp, i) => (
                    <div key={i} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-xs">
                      <span className="text-rose-500 line-through mr-2">{exp.original}</span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">→ {exp.better}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <Button variant="outline" size="sm" onClick={handleReset}>
                  <RotateCcw className="mr-1.5 h-3.5 w-3.5" /> Luyện Lại Lần Nữa
                </Button>
              </div>
            </Card>
          ) : (
            /* Active Cue Card and Interactive Controls */
            <Card className="p-6 space-y-6">
              {/* Cue Card */}
              <div className="rounded-2xl border-2 border-indigo-200 bg-indigo-50/40 p-5 dark:border-indigo-900/50 dark:bg-indigo-950/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
                    IELTS Speaking Part 2 Cue Card
                  </span>
                  <button
                    onClick={() => speakEnglish(`${cueCard.topic}. You should say: ${cueCard.cues.join('. ')}`)}
                    className="text-indigo-600 hover:text-indigo-800 flex items-center gap-1 text-xs font-bold"
                  >
                    <Volume2 className="h-4 w-4" /> Nghe đề
                  </button>
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">{cueCard.topic}</h3>
                <div className="mt-3 text-xs text-slate-600 dark:text-slate-300 space-y-1">
                  <div className="font-semibold text-slate-500">You should say:</div>
                  {cueCard.cues.map((cue, idx) => (
                    <div key={idx} className="pl-3">• {cue}</div>
                  ))}
                </div>
              </div>

              {/* Notes Scratchpad */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-slate-600 uppercase">
                    Ghi Chú Nhanh (Notes during 1-min preparation)
                  </label>
                  {sessionState === 'prep' && (
                    <span className="text-xs font-bold text-amber-600">
                      ⏱️ Còn {prepTimeLeft}s chuẩn bị
                    </span>
                  )}
                </div>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="- Point 1: Air pollution in big cities...&#10;- Point 2: Motorbike emissions, dust...&#10;- Point 3: Respiratory health issues..."
                  className="w-full h-24 rounded-xl border p-3 text-xs font-mono dark:bg-slate-800 dark:border-slate-700 focus:outline-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-2">
                {sessionState === 'idle' && (
                  <Button variant="primary" size="lg" onClick={startPreparation} className="font-bold px-8">
                    <Play className="mr-2 h-4 w-4 fill-white" /> Bắt Đầu 1 Phút Chuẩn Bị
                  </Button>
                )}

                {sessionState === 'prep' && (
                  <Button variant="primary" size="lg" onClick={startSpeaking} className="font-bold px-8">
                    Sẵn Sàng Nói Ngay ({prepTimeLeft}s)
                  </Button>
                )}

                {sessionState === 'speaking' && (
                  <Button variant="danger" size="lg" onClick={finishSpeaking} className="font-bold px-8">
                    <Square className="mr-2 h-4 w-4 fill-white" /> Hoàn Thành & Nộp Bài Nói ({formatTime(speakTimeLeft)})
                  </Button>
                )}

                {sessionState === 'evaluating' && (
                  <div className="text-xs text-slate-500 font-semibold flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary-600 animate-ping" />
                    AI đang phân tích bài nói của bạn...
                  </div>
                )}
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};
