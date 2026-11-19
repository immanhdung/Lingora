import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight, CheckCircle2, RotateCw, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { useAuthStore } from '@/stores/useAuthStore';
import { sounds } from '@/lib/utils';

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const { login, loginWithGoogle, verifyEmail } = useAuthStore();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [step, setStep] = useState<'form' | 'verify'>('form');
  const [otpCode, setOtpCode] = useState(['', '', '', '', '', '']);
  const [countdown, setCountdown] = useState(60);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState('');

  // Countdown timer for resend OTP
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (step === 'verify' && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [step, countdown]);

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!fullName || !email || !password) {
      setError('Vui lòng điền đầy đủ các trường thông tin');
      return;
    }
    if (password.length < 8) {
      setError('Mật khẩu cần tối thiểu 8 ký tự');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      sounds.playSuccess();
      setStep('verify');
    }, 600);
  };

  const handleGoogleRegister = () => {
    setGoogleLoading(true);
    sounds.playClick();
    setTimeout(() => {
      loginWithGoogle();
      sounds.playSuccess();
      navigate('/onboarding');
    }, 600);
  };

  const handleOtpChange = (index: number, val: string) => {
    if (val.length > 1) val = val.slice(-1);
    const newOtp = [...otpCode];
    newOtp[index] = val;
    setOtpCode(newOtp);

    // Auto focus next input
    if (val && index < 5) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleVerifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullCode = otpCode.join('');
    if (fullCode.length < 6) {
      setError('Vui lòng nhập đủ 6 chữ số mã xác thực');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const isOk = verifyEmail(fullCode);
      setLoading(false);
      if (isOk) {
        sounds.playSuccess();
        login(email, 'Student');
        navigate('/onboarding');
      } else {
        setError('Mã xác thực không hợp lệ. Vui lòng thử lại (hoặc nhập 123456).');
      }
    }, 600);
  };

  const handleResendOtp = () => {
    if (countdown > 0) return;
    setCountdown(60);
    setError('');
    sounds.playClick();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12 dark:bg-slate-950">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link to="/" className="inline-flex items-center gap-2.5 mb-3 group">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-600 shadow-md shadow-primary-500/25 transition-transform group-hover:scale-105">
              <span className="text-2xl font-black text-white">L</span>
            </div>
            <span className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              LINGORA
            </span>
          </Link>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            {step === 'form' ? 'Tạo tài khoản học tập' : 'Xác thực địa chỉ Email'}
          </h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {step === 'form'
              ? 'Khởi đầu hành trình học tiếng Anh thông minh và hiệu quả'
              : `Mã xác thực 6 số đã được gửi đến ${email}`}
          </p>
        </div>

        <Card className="p-7 sm:p-8 shadow-lg border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl">
          {error && (
            <div className="mb-5 flex items-center gap-2 rounded-xl bg-rose-50 p-3 text-xs font-semibold text-rose-600 dark:bg-rose-950/40 dark:text-rose-400 border border-rose-200 dark:border-rose-900">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {step === 'form' ? (
            <>
              {/* Google Sign-in */}
              <button
                type="button"
                onClick={handleGoogleRegister}
                disabled={googleLoading}
                className="w-full flex items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.16 0 9.97 0 12s.45 3.84 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
                <span>Đăng ký nhanh với Google</span>
              </button>

              <div className="relative my-5">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200 dark:border-slate-800" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-white px-3 text-slate-400 dark:bg-slate-900">
                    Hoặc đăng ký bằng email
                  </span>
                </div>
              </div>

              <form onSubmit={handleRegisterSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Họ và Tên
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Nguyễn Văn A"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-10 pr-4 text-sm text-slate-900 focus:border-primary-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Địa chỉ Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-10 pr-4 text-sm text-slate-900 focus:border-primary-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                      required
                    />
                  </div>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Email này sẽ nhận mã xác thực OTP kích hoạt tài khoản
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Mật khẩu (tối thiểu 8 ký tự)
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-10 pr-4 text-sm text-slate-900 focus:border-primary-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                      required
                      minLength={8}
                    />
                  </div>
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full font-bold mt-2" disabled={loading}>
                  {loading ? 'Đang gửi mã xác thực...' : 'Tiếp tục xác thực Email'}
                  {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
              </form>
            </>
          ) : (
            /* Email Verification Screen */
            <form onSubmit={handleVerifySubmit} className="space-y-6">
              <div className="rounded-xl bg-primary-50 dark:bg-primary-950/40 p-4 border border-primary-100 dark:border-primary-900/50 text-center">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/60 dark:text-primary-300">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="text-xs font-bold text-primary-900 dark:text-primary-200">
                  Vui lòng kiểm tra hộp thư đến (và thư rác)
                </div>
                <div className="text-xs text-primary-700 dark:text-primary-400 mt-0.5">
                  Nhập mã 6 chữ số gửi tới <strong className="font-semibold">{email}</strong>
                </div>
              </div>

              {/* 6-digit OTP Inputs */}
              <div>
                <label className="block text-center text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                  Nhập mã xác thực (Demo: 123456)
                </label>
                <div className="flex justify-center gap-2">
                  {otpCode.map((digit, idx) => (
                    <input
                      key={idx}
                      id={`otp-input-${idx}`}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(idx, e.target.value)}
                      className="h-12 w-11 rounded-xl border border-slate-300 text-center text-lg font-bold text-slate-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                      autoFocus={idx === 0}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500">
                <button
                  type="button"
                  onClick={() => setStep('form')}
                  className="font-medium hover:text-slate-800 dark:hover:text-slate-200"
                >
                  ← Đổi email
                </button>
                <button
                  type="button"
                  disabled={countdown > 0}
                  onClick={handleResendOtp}
                  className={`font-semibold ${
                    countdown > 0
                      ? 'text-slate-400 cursor-not-allowed'
                      : 'text-primary-600 hover:underline cursor-pointer'
                  }`}
                >
                  {countdown > 0 ? `Gửi lại sau ${countdown}s` : 'Gửi lại mã xác thực'}
                </button>
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full font-bold" disabled={loading}>
                {loading ? 'Đang kích hoạt tài khoản...' : 'Kích hoạt tài khoản & Bắt đầu'}
                {!loading && <CheckCircle2 className="ml-2 h-4 w-4" />}
              </Button>
            </form>
          )}
        </Card>

        <p className="mt-6 text-center text-xs text-slate-500">
          Đã có tài khoản?{' '}
          <Link to="/login" className="font-bold text-primary-600 hover:underline">
            Đăng nhập tại đây
          </Link>
        </p>
      </div>
    </div>
  );
};
