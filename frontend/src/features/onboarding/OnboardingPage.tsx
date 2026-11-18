import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Check,
  CheckCircle2,
  Clock,
  Target,
  Brain,
  Baby,
  BookOpen,
  Award,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Progress } from '@/components/ui/Progress';
import { useAuthStore } from '@/stores/useAuthStore';
import { EnglishLevel, LearningProgramType } from '@/types';
import { sounds, playCelebration } from '@/lib/utils';

export const OnboardingPage: React.FC = () => {
  const navigate = useNavigate();
  const { user, setUser, setProgram } = useAuthStore();
  const [step, setStep] = useState(1);

  // Form State
  const [userName, setUserName] = useState(user?.fullName || 'Học Viên Mới');
  const [selectedProgram, setSelectedProgram] = useState<LearningProgramType>('IELTS');
  const [selectedLevel, setSelectedLevel] = useState<EnglishLevel>('Intermediate');
  const [targetScore, setTargetScore] = useState('7.5');
  const [dailyMinutes, setDailyMinutes] = useState(30);

  // Quick Diagnostic Quiz (Step 6)
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [isGeneratingPlan, setIsGeneratingPlan] = useState(false);

  const programs: { type: LearningProgramType; title: string; desc: string; icon: string; emoji: string }[] = [
    {
      type: 'Kids',
      title: 'Tiếng Anh Trẻ Em (5-12 tuổi)',
      desc: 'Học qua 10 Game tương tác vui nhộn, Nuôi thú ảo, Tích lũy sao & Bản đồ phiêu lưu.',
      icon: '🧸',
      emoji: '🎈',
    },
    {
      type: 'General',
      title: 'Tiếng Anh Giao Tiếp & Đi Làm',
      desc: 'Phát âm chuẩn IPA, 16 chủ đề đời sống, Hệ thống lặp lại ngắt quãng SRS SM-2.',
      icon: '🌍',
      emoji: '💼',
    },
    {
      type: 'TOEIC',
      title: 'Luyện Thi TOEIC 800+',
      desc: 'Chuyên sâu Listening & Reading, Đề thi chuẩn ETS, Giải thích đáp án & Mẹo làm bài.',
      icon: '🎯',
      emoji: '📈',
    },
    {
      type: 'IELTS',
      title: 'Luyện Thi IELTS 7.5+',
      desc: 'Toàn diện 4 kỹ năng: AI Speaking Room mô phỏng IDP/BC & AI chấm Writing theo 4 tiêu chí.',
      icon: '🏆',
      emoji: '🎓',
    },
  ];

  const levels: { level: EnglishLevel; nameVi: string; desc: string }[] = [
    { level: 'Beginner', nameVi: 'Mất gốc / Mới bắt đầu', desc: 'Chưa nhớ bảng chữ cái hoặc từ vựng cơ bản' },
    { level: 'Elementary', nameVi: 'Sơ cấp (A1 - A2)', desc: 'Nói được câu chào hỏi đơn giản, từ vựng hạn chế' },
    { level: 'Pre-Intermediate', nameVi: 'Tiền Trung cấp (A2+ - B1)', desc: 'Hiểu các ngữ cảnh quen thuộc hàng ngày' },
    { level: 'Intermediate', nameVi: 'Trung cấp (B1+ - B2)', desc: 'Giao tiếp tương đối ổn, ngữ pháp đôi lúc sai' },
    { level: 'Upper-Intermediate', nameVi: 'Trung cao cấp (B2+)', desc: 'Tự tin thảo luận chủ đề phức tạp, đọc hiểu tốt' },
    { level: 'Advanced', nameVi: 'Cao cấp (C1 - C2)', desc: 'Sử dụng tiếng Anh tự nhiên như người bản xứ' },
  ];

  const diagnosticQuestions = [
    {
      id: 1,
      q: 'Choose the correct form: "Neither of the candidates ______ qualified for the position."',
      options: ['are', 'is', 'were', 'have been'],
      correct: 1,
    },
    {
      id: 2,
      q: 'Which word is the CLOSEST in meaning to "PRAGMATIC"?',
      options: ['Theoretical', 'Practical', 'Careless', 'Idealistic'],
      correct: 1,
    },
    {
      id: 3,
      q: 'Identify the best response: "Could you tell me how long the flight will be delayed?"',
      options: [
        '"Yes, I am fine thank you."',
        '"Approximately forty-five minutes due to weather conditions."',
        '"At Gate 14B."',
        '"Flight LH402 is departing now."',
      ],
      correct: 1,
    },
  ];

  const handleNext = () => {
    sounds.playClick();
    if (step < 7) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    sounds.playClick();
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleFinishOnboarding = () => {
    sounds.playSuccess();
    playCelebration();
    setIsGeneratingPlan(true);

    if (user) {
      setUser({
        ...user,
        fullName: userName,
        targetProgram: selectedProgram,
        currentLevel: selectedLevel,
        targetScore,
        dailyGoalMinutes: dailyMinutes,
      });
    }

    setTimeout(() => {
      setIsGeneratingPlan(false);
      navigate('/dashboard');
    }, 1500);
  };

  const progressPercent = (step / 7) * 100;

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-950 aurora-bg selection:bg-primary-200">
      {/* Top Header */}
      <div className="flex h-16 items-center justify-between border-b border-slate-200/80 px-6 backdrop-blur-md dark:border-slate-800/80">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-600 font-black text-white">
            L
          </div>
          <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-primary-600 to-secondary bg-clip-text text-transparent">
            LINGORA ONBOARDING
          </span>
        </div>
        <div className="text-xs font-bold text-slate-500">
          Bước {step} / 7
        </div>
      </div>

      {/* Progress Bar */}
      <Progress value={progressPercent} size="sm" indicatorColor="bg-gradient-to-r from-primary-600 to-secondary" />

      {/* Step Content */}
      <div className="flex flex-1 items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-2xl">
          {/* STEP 1: WELCOME & NAME */}
          {step === 1 && (
            <Card className="p-8 sm:p-10 text-center animate-in fade-in zoom-in-95">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-primary-50 text-3xl shadow-inner mb-6">
                👋
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                Chào mừng bạn đến với Lingora!
              </h2>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                Hãy cho chúng tôi biết tên bạn để cá nhân hóa toàn bộ trải nghiệm học tập và xưng hô cùng gia sư AI nhé.
              </p>
              <div className="mt-8 max-w-sm mx-auto text-left">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Tên hoặc biệt danh của bạn
                </label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-base font-semibold focus:border-primary-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                  placeholder="Ví dụ: Minh Anh"
                />
              </div>
              <Button variant="primary" size="lg" onClick={handleNext} className="mt-8 font-bold px-8">
                Tiếp tục <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          )}

          {/* STEP 2: SELECT LEARNING PURPOSE */}
          {step === 2 && (
            <Card className="p-6 sm:p-8 animate-in fade-in">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                  Mục đích học tiếng Anh của bạn là gì?
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Lingora sẽ điều chỉnh giao diện và phương pháp phù hợp nhất với bạn
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {programs.map((p) => {
                  const isSelected = selectedProgram === p.type;
                  return (
                    <button
                      key={p.type}
                      type="button"
                      onClick={() => {
                        sounds.playClick();
                        setSelectedProgram(p.type);
                        setProgram(p.type);
                      }}
                      className={`flex flex-col text-left p-5 rounded-2xl border-2 transition-all duration-200 ${
                        isSelected
                          ? 'border-primary-500 bg-primary-50/60 shadow-md ring-2 ring-primary-500/20 dark:bg-primary-950/40 dark:border-primary-500'
                          : 'border-slate-200 hover:border-slate-300 bg-white dark:bg-slate-900 dark:border-slate-800'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-3xl">{p.icon}</span>
                        {isSelected && (
                          <div className="h-6 w-6 rounded-full bg-primary-600 text-white flex items-center justify-center">
                            <Check className="h-4 w-4" />
                          </div>
                        )}
                      </div>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white">{p.title}</h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">{p.desc}</p>
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 flex justify-between">
                <Button variant="ghost" onClick={handleBack}>
                  <ArrowLeft className="mr-1.5 h-4 w-4" /> Quay lại
                </Button>
                <Button variant="primary" onClick={handleNext} className="font-bold">
                  Tiếp tục <ArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
              </div>
            </Card>
          )}

          {/* STEP 3: CURRENT LEVEL */}
          {step === 3 && (
            <Card className="p-6 sm:p-8 animate-in fade-in">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                  Trình độ hiện tại của bạn?
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Đừng lo nếu bạn bắt đầu từ con số không, Lingora luôn có bài học vừa vặn
                </p>
              </div>

              <div className="space-y-2.5">
                {levels.map((lvl) => {
                  const isSelected = selectedLevel === lvl.level;
                  return (
                    <button
                      key={lvl.level}
                      type="button"
                      onClick={() => {
                        sounds.playClick();
                        setSelectedLevel(lvl.level);
                      }}
                      className={`flex w-full items-center justify-between p-4 rounded-xl border-2 transition-all ${
                        isSelected
                          ? 'border-primary-500 bg-primary-50/70 shadow-sm dark:bg-primary-950/40'
                          : 'border-slate-200 hover:border-slate-300 bg-white dark:bg-slate-900 dark:border-slate-800'
                      }`}
                    >
                      <div className="text-left">
                        <div className="font-bold text-sm text-slate-900 dark:text-white">
                          {lvl.level} — <span className="font-semibold text-primary-600 dark:text-primary-400">{lvl.nameVi}</span>
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">{lvl.desc}</div>
                      </div>
                      {isSelected && <Check className="h-5 w-5 text-primary-600" />}
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 flex justify-between">
                <Button variant="ghost" onClick={handleBack}>
                  <ArrowLeft className="mr-1.5 h-4 w-4" /> Quay lại
                </Button>
                <Button variant="primary" onClick={handleNext} className="font-bold">
                  Tiếp tục <ArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
              </div>
            </Card>
          )}

          {/* STEP 4: TARGET GOAL */}
          {step === 4 && (
            <Card className="p-6 sm:p-8 animate-in fade-in">
              <div className="text-center mb-6">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-100 text-primary-600 dark:bg-primary-950 mb-3 text-2xl">
                  🎯
                </div>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                  Mục tiêu kỳ vọng của bạn
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Đích đến rõ ràng giúp bạn duy trì động lực và đo lường sự tiến bộ mỗi ngày
                </p>
              </div>

              <div className="max-w-md mx-auto space-y-4">
                {selectedProgram === 'IELTS' && (
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-2">Target Band IELTS</label>
                    <div className="grid grid-cols-4 gap-2">
                      {['6.5', '7.0', '7.5', '8.0+'].map((score) => (
                        <Button
                          key={score}
                          type="button"
                          variant={targetScore === score ? 'primary' : 'outline'}
                          onClick={() => setTargetScore(score)}
                          className="font-bold py-3"
                        >
                          Band {score}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}

                {selectedProgram === 'TOEIC' && (
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-2">Target Điểm TOEIC</label>
                    <div className="grid grid-cols-4 gap-2">
                      {['650+', '750+', '850+', '950+'].map((score) => (
                        <Button
                          key={score}
                          type="button"
                          variant={targetScore === score ? 'primary' : 'outline'}
                          onClick={() => setTargetScore(score)}
                          className="font-bold py-3"
                        >
                          {score}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}

                {(selectedProgram === 'General' || selectedProgram === 'Kids') && (
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-2">Mục tiêu ưu tiên</label>
                    <div className="space-y-2">
                      {[
                        'Giao tiếp trôi chảy tự nhiên với người nước ngoài',
                        'Tự tin thuyết trình, đàm phán trong công việc',
                        'Nắm vững 3000 từ vựng cốt lõi & Ngữ pháp nền tảng',
                        'Bé nói tiếng Anh tự nhiên & phản xạ nhanh',
                      ].map((goal) => (
                        <button
                          key={goal}
                          type="button"
                          onClick={() => setTargetScore(goal)}
                          className={`w-full p-3 rounded-xl border text-left text-xs sm:text-sm font-semibold transition-all ${
                            targetScore === goal
                              ? 'border-primary-500 bg-primary-50 dark:bg-primary-950/50 text-primary-700 dark:text-primary-300'
                              : 'border-slate-200 dark:border-slate-800'
                          }`}
                        >
                          {goal}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8 flex justify-between">
                <Button variant="ghost" onClick={handleBack}>
                  <ArrowLeft className="mr-1.5 h-4 w-4" /> Quay lại
                </Button>
                <Button variant="primary" onClick={handleNext} className="font-bold">
                  Tiếp tục <ArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
              </div>
            </Card>
          )}

          {/* STEP 5: DAILY LEARNING TIME */}
          {step === 5 && (
            <Card className="p-6 sm:p-8 animate-in fade-in">
              <div className="text-center mb-6">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 dark:bg-amber-950 mb-3 text-2xl">
                  ⏱️
                </div>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                  Bạn muốn dành bao nhiêu thời gian mỗi ngày?
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Chỉ cần 15 - 30 phút kiên trì mỗi ngày là đủ để tạo nên đột phá vượt trội
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto">
                {[
                  { mins: 10, label: 'Thư thả (10 phút/ngày)', desc: '1 bài từ vựng + 1 game phản xạ' },
                  { mins: 15, label: 'Tiêu chuẩn (15 phút/ngày)', desc: 'Phù hợp người bận rộn' },
                  { mins: 30, label: 'Hiệu quả cao (30 phút/ngày)', desc: 'Khuyên dùng để tăng tốc', recommend: true },
                  { mins: 45, label: 'Cường độ cao (45 phút/ngày)', desc: 'Luyện thi cấp tốc' },
                  { mins: 60, label: 'Chiến binh (60 phút/ngày)', desc: 'Đắm chìm hoàn toàn' },
                ].map((item) => {
                  const isSelected = dailyMinutes === item.mins;
                  return (
                    <button
                      key={item.mins}
                      type="button"
                      onClick={() => {
                        sounds.playClick();
                        setDailyMinutes(item.mins);
                      }}
                      className={`relative p-4 rounded-2xl border-2 text-left transition-all ${
                        isSelected
                          ? 'border-primary-500 bg-primary-50/70 shadow-sm dark:bg-primary-950/40'
                          : 'border-slate-200 dark:border-slate-800 hover:border-slate-300'
                      }`}
                    >
                      {item.recommend && (
                        <span className="absolute -top-2.5 right-3 rounded-full bg-emerald-500 px-2 py-0.5 text-[9px] font-bold text-white uppercase tracking-wider">
                          Khuyên Dùng
                        </span>
                      )}
                      <div className="font-bold text-sm text-slate-900 dark:text-white">{item.label}</div>
                      <div className="text-[11px] text-slate-500 mt-1">{item.desc}</div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 flex justify-between">
                <Button variant="ghost" onClick={handleBack}>
                  <ArrowLeft className="mr-1.5 h-4 w-4" /> Quay lại
                </Button>
                <Button variant="primary" onClick={handleNext} className="font-bold">
                  Tiếp tục <ArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
              </div>
            </Card>
          )}

          {/* STEP 6: PLACEMENT TEST (OPTIONAL) */}
          {step === 6 && (
            <Card className="p-6 sm:p-8 animate-in fade-in">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                    Kiểm tra nhanh 3 câu phân loại (Tùy chọn)
                  </h3>
                  <p className="text-xs text-slate-500">Giúp AI hiệu chỉnh bài tập mở đầu chính xác 100%</p>
                </div>
                <Button variant="ghost" size="sm" onClick={handleNext} className="text-xs text-slate-400">
                  Bỏ qua bước này →
                </Button>
              </div>

              <div className="space-y-6">
                {diagnosticQuestions.map((q, idx) => (
                  <div key={q.id} className="rounded-xl border border-slate-200 p-4 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                    <div className="font-bold text-xs text-primary-600 mb-1">CÂU HỎI {idx + 1}</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white mb-3">{q.q}</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {q.options.map((opt, optIdx) => {
                        const isChosen = quizAnswers[q.id] === optIdx;
                        return (
                          <button
                            key={optIdx}
                            type="button"
                            onClick={() => {
                              sounds.playClick();
                              setQuizAnswers({ ...quizAnswers, [q.id]: optIdx });
                            }}
                            className={`p-2.5 rounded-lg border text-left text-xs font-medium transition-colors ${
                              isChosen
                                ? 'border-primary-500 bg-primary-100/70 text-primary-900 font-bold dark:bg-primary-950 dark:text-primary-200'
                                : 'border-slate-200 hover:bg-white dark:border-slate-700'
                            }`}
                          >
                            <span className="inline-block w-5 font-bold text-slate-400">
                              {String.fromCharCode(65 + optIdx)}.
                            </span>
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-between">
                <Button variant="ghost" onClick={handleBack}>
                  <ArrowLeft className="mr-1.5 h-4 w-4" /> Quay lại
                </Button>
                <Button variant="primary" onClick={handleNext} className="font-bold">
                  Hoàn tất & Khởi tạo lộ trình <ArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
              </div>
            </Card>
          )}

          {/* STEP 7: AI LEARNING PLAN GENERATION */}
          {step === 7 && (
            <Card className="p-8 sm:p-10 text-center animate-in fade-in zoom-in-95">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-tr from-primary-600 to-secondary text-white text-3xl shadow-xl shadow-primary-500/30 mb-6 animate-pulseGlow">
                🤖
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                Lộ Trình AI Cá Nhân Hóa Đã Sẵn Sàng!
              </h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                Chào <strong>{userName}</strong>! AI đã phân tích hồ sơ và thiết kế chu trình học tập tối ưu cho mục tiêu{' '}
                <strong>{selectedProgram} (Target: {targetScore})</strong> với thời lượng <strong>{dailyMinutes} phút/ngày</strong>.
              </p>

              {/* Today's Routine Preview */}
              <div className="my-6 rounded-2xl border border-primary-200/80 bg-primary-50/50 p-5 text-left dark:border-primary-900/40 dark:bg-primary-950/30">
                <div className="text-xs font-bold text-primary-700 dark:text-primary-300 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Zap className="h-4 w-4 fill-primary-600 text-primary-600" />
                  Kế hoạch học tập 30 phút hôm nay của bạn:
                </div>
                <div className="space-y-2 text-xs sm:text-sm font-medium">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-white/80 dark:bg-slate-900/80">
                    <span>1. Ôn tập 10 từ vựng SRS thông minh</span>
                    <span className="font-bold text-primary-600">5 phút</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-white/80 dark:bg-slate-900/80">
                    <span>2. Ngữ pháp trọng điểm & Bài tập phản xạ</span>
                    <span className="font-bold text-primary-600">10 phút</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-white/80 dark:bg-slate-900/80">
                    <span>3. Luyện nghe & Trả lời câu hỏi ngữ cảnh</span>
                    <span className="font-bold text-primary-600">10 phút</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-white/80 dark:bg-slate-900/80">
                    <span>4. Hội thoại tương tác cùng Gia sư AI Gemini</span>
                    <span className="font-bold text-primary-600">5 phút</span>
                  </div>
                </div>
              </div>

              <Button
                variant="primary"
                size="xl"
                onClick={handleFinishOnboarding}
                disabled={isGeneratingPlan}
                className="w-full sm:w-auto font-black px-10 shadow-xl shadow-primary-500/30"
              >
                {isGeneratingPlan ? 'Đang kích hoạt tài khoản...' : 'Bắt đầu học ngay hôm nay 🚀'}
              </Button>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};
