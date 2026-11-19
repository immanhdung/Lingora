import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight, Shield, User, HeartHandshake, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { useAuthStore } from '@/stores/useAuthStore';
import { UserRole } from '@/types';
import { sounds } from '@/lib/utils';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login, loginWithGoogle } = useAuthStore();
  const [email, setEmail] = useState('hocvien@lingora.edu.vn');
  const [password, setPassword] = useState('Lingora2026!');
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Vui lòng điền đầy đủ email và mật khẩu');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      login(email, 'Student');
      sounds.playSuccess();
      navigate('/dashboard');
    }, 500);
  };

  const handleGoogleLogin = () => {
    setGoogleLoading(true);
    sounds.playClick();
    setTimeout(() => {
      loginWithGoogle();
      sounds.playSuccess();
      navigate('/dashboard');
    }, 600);
  };

  const handleQuickLogin = (quickEmail: string, role: UserRole) => {
    sounds.playClick();
    setEmail(quickEmail);
    login(quickEmail, role);
    sounds.playSuccess();
    navigate('/dashboard');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12 dark:bg-slate-950">
      <div className="w-full max-w-md">
        {/* Brand Header */}
        <div className="mb-8 text-center">
          <Link to="/" className="inline-flex items-center gap-2.5 mb-3 group">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-600 shadow-md shadow-primary-500/25 transition-transform group-hover:scale-105">
              <span className="text-2xl font-black text-white">L</span>
            </div>
            <span className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              LINGORA
            </span>
          </Link>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Chào mừng bạn trở lại</h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Đăng nhập để tiếp tục hành trình học tiếng Anh của bạn
          </p>
        </div>

        <Card className="p-7 sm:p-8 shadow-lg border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl">
          {error && (
            <div className="mb-5 flex items-center gap-2 rounded-xl bg-rose-50 p-3 text-xs font-semibold text-rose-600 dark:bg-rose-950/40 dark:text-rose-400 border border-rose-200 dark:border-rose-900">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Google Sign-in Button */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={googleLoading}
            className="w-full flex items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
          >
            {googleLoading ? (
              <span className="text-xs">Đang kết nối tài khoản Google...</span>
            ) : (
              <>
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
                <span>Đăng nhập với Google</span>
              </>
            )}
          </button>

          <div className="relative my-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200 dark:border-slate-800" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-white px-3 text-slate-400 dark:bg-slate-900">
                Hoặc bằng email đã xác thực
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
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
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Mật khẩu
                </label>
                <Link to="/forgot-password" className="text-xs font-semibold text-primary-600 hover:underline">
                  Quên mật khẩu?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                  required
                />
              </div>
            </div>

            <Button type="submit" variant="primary" size="lg" className="w-full font-bold mt-2" disabled={loading}>
              {loading ? 'Đang xác thực...' : 'Đăng nhập vào Lingora'}
              {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
          </form>

          {/* Quick Demo Access Buttons */}
          <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider text-center mb-3">
              Tài khoản trải nghiệm nhanh:
            </div>
            <div className="grid grid-cols-3 gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="flex flex-col items-center justify-center h-auto py-2 px-1 text-center"
                onClick={() => handleQuickLogin('student@lingora.edu.vn', 'Student')}
              >
                <User className="h-4 w-4 text-primary-600 mb-1" />
                <span className="text-[11px] font-semibold">Học Viên</span>
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="flex flex-col items-center justify-center h-auto py-2 px-1 text-center"
                onClick={() => handleQuickLogin('parent@lingora.edu.vn', 'Parent')}
              >
                <HeartHandshake className="h-4 w-4 text-sky-600 mb-1" />
                <span className="text-[11px] font-semibold">Phụ Huynh</span>
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="flex flex-col items-center justify-center h-auto py-2 px-1 text-center"
                onClick={() => handleQuickLogin('admin@lingora.edu.vn', 'Admin')}
              >
                <Shield className="h-4 w-4 text-purple-600 mb-1" />
                <span className="text-[11px] font-semibold">Quản Trị</span>
              </Button>
            </div>
          </div>
        </Card>

        <p className="mt-6 text-center text-xs text-slate-500">
          Chưa có tài khoản?{' '}
          <Link to="/register" className="font-bold text-primary-600 hover:underline">
            Đăng ký tài khoản ngay
          </Link>
        </p>
      </div>
    </div>
  );
};
