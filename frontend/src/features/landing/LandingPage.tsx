import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  Flame,
  Bot,
  Award,
  Baby,
  BookOpen,
  Target,
  CheckCircle2,
  Play,
  Volume2,
  Star,
  Users,
  Compass,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { sounds } from '@/lib/utils';

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 selection:bg-primary-200">
      {/* Top Navbar */}
      <nav className="sticky top-0 z-50 flex h-20 items-center justify-between border-b border-slate-200/80 bg-white/80 px-6 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/80 lg:px-16">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-primary-600 via-primary-electric to-secondary shadow-lg shadow-primary-500/30">
            <span className="text-2xl font-black text-white">L</span>
          </div>
          <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-primary-600 via-primary-electric to-secondary bg-clip-text text-transparent">
            LINGORA
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600 dark:text-slate-300">
          <a href="#tracks" className="hover:text-primary-600 transition-colors">4 Lộ trình</a>
          <a href="#ai-features" className="hover:text-primary-600 transition-colors">Gia sư AI</a>
          <a href="#kids-game" className="hover:text-primary-600 transition-colors">Game Trẻ Em</a>
          <a href="#exam-center" className="hover:text-primary-600 transition-colors">Luyện Thi TOEIC/IELTS</a>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/login">
            <Button variant="ghost" size="sm" className="font-semibold">
              Đăng nhập
            </Button>
          </Link>
          <Link to="/onboarding">
            <Button variant="primary" size="sm" className="font-bold">
              Bắt đầu ngay <ArrowRight className="ml-1.5 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 pt-16 pb-20 lg:px-16 lg:pt-24 lg:pb-32 aurora-bg">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50/80 px-4 py-1.5 text-xs font-bold text-primary-700 shadow-sm dark:border-primary-800 dark:bg-primary-950/60 dark:text-primary-300 mb-6 animate-pulseGlow">
            <Sparkles className="h-4 w-4 text-primary-600" />
            Nền tảng EdTech AI Tiên Phong Thế Hệ 2026
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.15] text-slate-900 dark:text-white">
            Learn English. <span className="bg-gradient-to-r from-kids-orange via-kids-yellow to-amber-500 bg-clip-text text-transparent">Play.</span>{' '}
            <span className="bg-gradient-to-r from-primary-electric to-secondary bg-clip-text text-transparent">Practice.</span>{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">Evolve.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Học tiếng Anh chưa bao giờ thú vị và hiệu quả đến thế. Trải nghiệm kết hợp hoàn hảo giữa 
            <strong> Gamification Duolingo</strong>, <strong>Thẻ từ vựng SRS Quizlet</strong>, 
            <strong> Phòng thi ELSA & AI Speaking Room</strong> cùng <strong>Hệ thống khảo thí chuẩn TOEIC / IELTS</strong>.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link to="/onboarding">
              <Button variant="primary" size="lg" className="h-14 px-8 text-base font-bold shadow-xl shadow-primary-500/25">
                Tạo Lộ Trình Cá Nhân Hóa (Miễn phí) <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="outline" size="lg" className="h-14 px-8 text-base font-bold">
                Trải nghiệm ứng dụng ngay
              </Button>
            </Link>
          </div>

          {/* Social Proof Stats */}
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 pt-10 border-t border-slate-200/80 dark:border-slate-800/80">
            <div>
              <div className="text-3xl sm:text-4xl font-black text-primary-600 dark:text-primary-400">500.000+</div>
              <div className="text-xs sm:text-sm font-medium text-slate-500">Học viên hoạt động</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-amber-500">10 Game</div>
              <div className="text-xs sm:text-sm font-medium text-slate-500">Vừa học vừa chơi cho bé</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-emerald-500">98.4%</div>
              <div className="text-xs sm:text-sm font-medium text-slate-500">Tăng band điểm sau 60 ngày</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-purple-600">24/7</div>
              <div className="text-xs sm:text-sm font-medium text-slate-500">Gia sư AI Gemini đồng hành</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Tracks Overview Section */}
      <section id="tracks" className="py-20 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="primary" className="mb-3 px-3 py-1 font-bold">ĐA DẠNG ĐỐI TƯỢNG</Badge>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
            4 Lộ Trình Học Tập Chuyên Biệt
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 max-w-xl mx-auto">
            Không áp đặt chung một giao diện. Mỗi lứa tuổi và mục tiêu sở hữu thế giới học tập được thiết kế tối ưu riêng biệt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Track 1: Kids */}
          <Card className="border-amber-200/80 dark:border-amber-900/40 hover:-translate-y-1.5 transition-transform bg-gradient-to-b from-amber-50/50 to-white dark:from-amber-950/20 dark:to-slate-900">
            <div className="h-12 w-12 rounded-2xl bg-kids-yellow flex items-center justify-center text-2xl shadow-md mb-5">
              🧸
            </div>
            <h3 className="text-xl font-bold font-kids text-amber-900 dark:text-amber-300">Tiếng Anh Trẻ Em (5-12)</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
              10 Thế giới kỳ thú, 10 trò chơi tương tác thực tế, nuôi Thú cưng ảo tiến hóa, tích lũy Huy hiệu và Ngôi sao.
            </p>
            <div className="mt-4 pt-4 border-t border-amber-100 dark:border-amber-900/50 flex items-center justify-between">
              <span className="text-xs font-bold text-amber-600">10 Bản đồ kỳ ảo</span>
              <Link to="/kids" className="text-xs font-bold text-primary-600 hover:underline">Vào thế giới →</Link>
            </div>
          </Card>

          {/* Track 2: Adults */}
          <Card className="border-blue-200/80 dark:border-blue-900/40 hover:-translate-y-1.5 transition-transform bg-gradient-to-b from-blue-50/50 to-white dark:from-blue-950/20 dark:to-slate-900">
            <div className="h-12 w-12 rounded-2xl bg-secondary flex items-center justify-center text-white text-2xl shadow-md mb-5">
              🌍
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Giao Tiếp & Đời Sống</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
              Kho từ vựng 16 chủ đề thông dụng, phương pháp lặp lại ngắt quãng SRS SM-2, ngữ pháp theo cấp độ từ cơ bản đến nâng cao.
            </p>
            <div className="mt-4 pt-4 border-t border-blue-100 dark:border-blue-900/50 flex items-center justify-between">
              <span className="text-xs font-bold text-blue-600">SRS Flashcard thông minh</span>
              <Link to="/adults" className="text-xs font-bold text-primary-600 hover:underline">Khám phá →</Link>
            </div>
          </Card>

          {/* Track 3: TOEIC */}
          <Card className="border-emerald-200/80 dark:border-emerald-900/40 hover:-translate-y-1.5 transition-transform bg-gradient-to-b from-emerald-50/50 to-white dark:from-emerald-950/20 dark:to-slate-900">
            <div className="h-12 w-12 rounded-2xl bg-emerald-500 flex items-center justify-center text-white text-2xl shadow-md mb-5">
              🎯
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Luyện Thi TOEIC 800+</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
              Chuyên sâu Listening (Part 1-4) & Reading (Part 5-7), đề thi bám sát form ETS, dự đoán điểm số và giải thích chi tiết.
            </p>
            <div className="mt-4 pt-4 border-t border-emerald-100 dark:border-emerald-900/50 flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-600">Dự đoán điểm ETS</span>
              <Link to="/toeic" className="text-xs font-bold text-primary-600 hover:underline">Luyện ngay →</Link>
            </div>
          </Card>

          {/* Track 4: IELTS */}
          <Card className="border-purple-200/80 dark:border-purple-900/40 hover:-translate-y-1.5 transition-transform bg-gradient-to-b from-purple-50/50 to-white dark:from-purple-950/20 dark:to-slate-900">
            <div className="h-12 w-12 rounded-2xl bg-primary-electric flex items-center justify-center text-white text-2xl shadow-md mb-5">
              🏆
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Luyện Thi IELTS 7.5+</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
              Đầy đủ 4 kỹ năng. Phòng thi AI Speaking Room mô phỏng giám khảo IDP/BC và Chấm chữa Writing chi tiết theo 4 tiêu chí.
            </p>
            <div className="mt-4 pt-4 border-t border-purple-100 dark:border-purple-900/50 flex items-center justify-between">
              <span className="text-xs font-bold text-purple-600">AI Speaking & Writing</span>
              <Link to="/ielts" className="text-xs font-bold text-primary-600 hover:underline">Vào phòng thi →</Link>
            </div>
          </Card>
        </div>
      </section>

      {/* AI Features Highlight */}
      <section id="ai-features" className="py-20 bg-slate-900 text-white px-6 lg:px-16 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-primary-600/20 blur-3xl" />
        <div className="absolute -left-20 -bottom-20 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="primary" className="bg-primary-500/20 text-primary-300 border-primary-500/30 mb-4">
                SỨC MẠNH GEMINI AI TIÊN TIẾN
              </Badge>
              <h2 className="text-3xl sm:text-5xl font-black leading-tight">
                Gia Sư & Giám Khảo AI Đồng Hành 1-kèm-1
              </h2>
              <p className="text-slate-300 mt-4 leading-relaxed text-sm sm:text-base">
                Không còn nỗi sợ giao tiếp hay bế tắc khi viết luận. Lingora AI hiểu rõ điểm yếu, sửa lỗi ngữ pháp ngay lập tức và đề xuất cách diễn đạt chuẩn bản xứ.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">AI Speaking Room với hình tượng Giám khảo sống động</h4>
                    <p className="text-xs text-slate-400">Luyện Part 1, 2, 3 không giới hạn, đo độ trôi chảy (Fluency), phát âm và từ vựng.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">AI Writing Evaluator chấm theo chuẩn 4 tiêu chí IELTS</h4>
                    <p className="text-xs text-slate-400">Ước tính band điểm, viết lại bài mẫu Band 8.0+ và giải thích cặn kẽ lỗi sai.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">English Life Simulator mô phỏng tình huống thực tế</h4>
                    <p className="text-xs text-slate-400">Nhập vai tại Sân bay, Khách sạn, Phỏng vấn xin việc, Nhà hàng với AI đối thoại chân thực.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link to="/ai-tutor">
                  <Button variant="primary" size="lg" className="font-bold">
                    Trò chuyện cùng AI Tutor <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* AI Interactive Card Preview */}
            <div className="rounded-3xl border border-slate-700 bg-slate-800/90 p-6 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center text-lg">
                    🤖
                  </div>
                  <div>
                    <div className="font-bold text-sm">Sarah — AI IELTS Examiner</div>
                    <div className="text-[11px] text-emerald-400 flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Sẵn sàng lắng nghe
                    </div>
                  </div>
                </div>
                <Badge variant="outline" className="border-slate-600 text-slate-300">IELTS Speaking Part 2</Badge>
              </div>

              <div className="py-6 space-y-4">
                <div className="rounded-2xl bg-slate-700/60 p-4 border border-slate-600/50">
                  <div className="text-xs font-bold text-primary-400 uppercase tracking-wider mb-1">Giám khảo Sarah:</div>
                  <p className="text-sm text-slate-200">
                    "Describe an environmental problem in your hometown. You have 1 minute to prepare your notes."
                  </p>
                </div>

                <div className="rounded-2xl bg-primary-900/40 p-4 border border-primary-700/50 ml-6">
                  <div className="text-xs font-bold text-secondary uppercase tracking-wider mb-1">Câu trả lời học viên:</div>
                  <p className="text-sm text-slate-200 italic">
                    "I want to talk about air pollution because there are too many motorbikes..."
                  </p>
                </div>

                <div className="rounded-2xl bg-emerald-950/40 p-4 border border-emerald-700/50">
                  <div className="flex items-center justify-between text-xs font-bold text-emerald-400 mb-2">
                    <span>Đánh giá từ AI: Dự đoán Band 6.5</span>
                    <span>Fluency: 7.0 | Vocab: 6.5</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    💡 <strong>Gợi ý nâng cao:</strong> Thay vì dùng <em>"too many motorbikes"</em>, hãy thử dùng <em>"an overwhelming density of two-wheeled vehicular traffic"</em> để chạm mốc Band 7.5+ Lexical Resource.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-12 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-600 text-white font-bold text-xl">
              L
            </div>
            <div>
              <span className="font-extrabold text-lg text-slate-900 dark:text-white">LINGORA</span>
              <p className="text-xs text-slate-400">© 2026 LINGORA EdTech. All rights reserved.</p>
            </div>
          </div>

          <div className="text-xs text-slate-500 dark:text-slate-400 flex flex-wrap justify-center gap-6">
            <Link to="/onboarding" className="hover:text-primary-600">Đăng ký</Link>
            <Link to="/login" className="hover:text-primary-600">Đăng nhập</Link>
            <Link to="/dashboard" className="hover:text-primary-600">Bảng điều khiển</Link>
            <Link to="/kids" className="hover:text-primary-600">Thế giới Trẻ em</Link>
            <Link to="/toeic" className="hover:text-primary-600">Luyện thi TOEIC</Link>
            <Link to="/ielts" className="hover:text-primary-600">Luyện thi IELTS</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};
