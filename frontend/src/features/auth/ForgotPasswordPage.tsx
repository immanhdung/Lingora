import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12 dark:bg-slate-950 aurora-bg">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link to="/login" className="inline-flex items-center text-xs font-semibold text-slate-500 hover:text-slate-900 mb-6">
            <ArrowLeft className="mr-1.5 h-3.5 w-3.5" /> Quay lại trang đăng nhập
          </Link>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Khôi phục mật khẩu</h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Nhập email của bạn để nhận liên kết đặt lại mật khẩu an toàn
          </p>
        </div>

        <Card className="p-8 shadow-xl border-slate-200/80 dark:border-slate-800">
          {submitted ? (
            <div className="text-center py-4 space-y-4">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold">Kiểm tra hộp thư của bạn</h3>
              <p className="text-xs text-slate-500">
                Chúng tôi đã gửi hướng dẫn đặt lại mật khẩu đến địa chỉ <strong>{email}</strong>. Vui lòng kiểm tra cả thư mục Spam.
              </p>
              <Link to="/login">
                <Button variant="outline" className="w-full mt-4">
                  Trở lại Đăng nhập
                </Button>
              </Link>
            </div>
          ) : (
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
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-10 pr-4 text-sm text-slate-900 focus:border-primary-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                    required
                  />
                </div>
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full font-bold">
                Gửi liên kết khôi phục
              </Button>
            </form>
          )}
        </Card>
      </div>
    </div>
  );
};
