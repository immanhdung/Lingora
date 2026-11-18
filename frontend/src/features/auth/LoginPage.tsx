import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight, Sparkles, Shield, User, HeartHandshake } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { useAuthStore } from '@/stores/useAuthStore';
import { UserRole } from '@/types';
import { sounds } from '@/lib/utils';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [email, setEmail] = useState('hocvien@lingora.edu.vn');
  const [password, setPassword] = useState('Lingora2026!');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Vui lòng điền đầy đủ email và mật khẩu');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      login(email, 'Student');
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
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12 dark:bg-slate-950 aurora-bg">
      <div className="w-full max-w-md">
        {/* Brand Header */}
        <div className="mb-8 text-center">
          <Link to="/" className="inline-flex items-center gap-2 mb-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-primary-600 to-secondary shadow-lg shadow-primary-500/30">
              <span className="text-2xl font-black text-white">L</span>
            </div>
            <span className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-primary-600 via-primary-electric to-secondary bg-clip-text text-transparent">
              LINGORA
            </span>
          </Link>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Chào mừng bạn trở lại!</h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Tiếp tục chuỗi ngày học tiếng Anh đầy hứng khởi hôm nay
          </p>
        </div>

        <Card className="p-8 shadow-xl border-slate-200/80 dark:border-slate-800">
          {error && (
            <div className="mb-4 rounded-xl bg-rose-50 p-3 text-xs font-semibold text-rose-600 dark:bg-rose-950/40 dark:text-rose-400 border border-rose-200 dark:border-rose-900">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
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
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
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
          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider text-center mb-3">
              Hoặc đăng nhập nhanh bằng tài khoản mẫu:
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
                <span className="text-[11px] font-bold">Học Viên</span>
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="flex flex-col items-center justify-center h-auto py-2 px-1 text-center"
                onClick={() => handleQuickLogin('parent@lingora.edu.vn', 'Parent')}
              >
                <HeartHandshake className="h-4 w-4 text-sky-600 mb-1" />
                <span className="text-[11px] font-bold">Phụ Huynh</span>
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="flex flex-col items-center justify-center h-auto py-2 px-1 text-center"
                onClick={() => handleQuickLogin('admin@lingora.edu.vn', 'Admin')}
              >
                <Shield className="h-4 w-4 text-purple-600 mb-1" />
                <span className="text-[11px] font-bold">Quản Trị</span>
              </Button>
            </div>
          </div>
        </Card>

        <p className="mt-6 text-center text-xs text-slate-500">
          Chưa có tài khoản?{' '}
          <Link to="/onboarding" className="font-bold text-primary-600 hover:underline">
            Tạo tài khoản & cá nhân hóa lộ trình ngay
          </Link>
        </p>
      </div>
    </div>
  );
};
