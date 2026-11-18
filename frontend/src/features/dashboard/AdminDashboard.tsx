import React, { useState } from 'react';
import {
  Users,
  BookOpen,
  FileCheck,
  Cpu,
  TrendingUp,
  Search,
  Filter,
  Plus,
  ShieldAlert,
  CheckCircle,
  XCircle,
  Sparkles,
  Database,
  BarChart2,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { sounds } from '@/lib/utils';

export const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'users' | 'content' | 'ai'>('overview');
  const [searchUser, setSearchUser] = useState('');
  const [showAddCourseModal, setShowAddCourseModal] = useState(false);
  const [newCourseName, setNewCourseName] = useState('');

  const stats = [
    { title: 'Tổng Người Dùng', val: '524,120', change: '+12.5% tuần này', icon: Users, color: 'text-primary-600' },
    { title: 'Khóa Học Đang Mở', val: '1,420', change: '+18 bài mới', icon: BookOpen, color: 'text-emerald-600' },
    { title: 'Lượt Thi Khảo Thí', val: '89,450', change: '94.2% hoàn thành', icon: FileCheck, color: 'text-amber-500' },
    { title: 'Lượt Gọi Gemini AI', val: '2,840,110', change: 'Token tiêu thụ ổn định', icon: Cpu, color: 'text-purple-600' },
  ];

  const sampleUsers = [
    { id: '1', name: 'Nguyễn Văn Minh', email: 'minh.nguyen@gmail.com', role: 'Student', track: 'IELTS 7.5+', status: 'Active' },
    { id: '2', name: 'Lê Hoàng Yến', email: 'yen.le@gmail.com', role: 'Student', track: 'TOEIC 850+', status: 'Active' },
    { id: '3', name: 'Trần Gia Hưng', email: 'parent.hung@gmail.com', role: 'Parent', track: 'Kids English', status: 'Active' },
    { id: '4', name: 'Đoàn Thu Hà', email: 'ha.teacher@lingora.vn', role: 'Admin', track: 'Toàn hệ thống', status: 'Active' },
    { id: '5', name: 'Phạm Nhật Nam', email: 'nam.pham@outlook.com', role: 'Student', track: 'General English', status: 'Active' },
  ];

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 rounded-3xl bg-slate-900 text-white shadow-xl">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <ShieldAlert className="h-5 w-5 text-purple-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-purple-300">
              Cổng Quản Trị Hệ Thống Toàn Diện
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold">LINGORA Admin Center</h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Quản trị người dùng, ngân hàng câu hỏi đề thi, khóa học và giám sát tài nguyên AI.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex gap-2 bg-slate-800 p-1.5 rounded-2xl">
          {[
            { id: 'overview', label: 'Tổng quan' },
            { id: 'users', label: 'Người dùng' },
            { id: 'content', label: 'Khóa học & Đề thi' },
            { id: 'ai', label: 'Cấu hình AI' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                sounds.playClick();
                setActiveTab(tab.id as any);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* OVERVIEW TAB */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s, idx) => {
              const Icon = s.icon;
              return (
                <Card key={idx} className="p-5">
                  <div className="flex items-center justify-between text-slate-500 mb-2">
                    <span className="text-xs font-semibold">{s.title}</span>
                    <Icon className={`h-5 w-5 ${s.color}`} />
                  </div>
                  <div className="text-2xl font-black text-slate-900 dark:text-white">{s.val}</div>
                  <div className="text-[11px] font-medium text-emerald-600 mt-1">{s.change}</div>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base font-bold flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-purple-600" /> Trạng thái Hạ tầng AI & Dịch vụ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 text-xs">
                  <div className="flex items-center gap-2 font-bold">
                    <CheckCircle className="h-4 w-4 text-emerald-500" /> Google Gemini Pro 1.5 API
                  </div>
                  <Badge variant="success">Hoạt động 99.98%</Badge>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 text-xs">
                  <div className="flex items-center gap-2 font-bold">
                    <CheckCircle className="h-4 w-4 text-emerald-500" /> Supabase PostgreSQL Cluster
                  </div>
                  <Badge variant="success">Độ trễ 18ms</Badge>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 text-xs">
                  <div className="flex items-center gap-2 font-bold">
                    <CheckCircle className="h-4 w-4 text-emerald-500" /> Audio STT / TTS Web Speech Pipeline
                  </div>
                  <Badge variant="success">Khả dụng</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base font-bold flex items-center gap-2">
                  <Database className="h-5 w-5 text-primary-600" /> Thao tác quản trị nhanh
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start text-xs font-bold"
                  onClick={() => setShowAddCourseModal(true)}
                >
                  <Plus className="mr-2 h-4 w-4 text-primary-600" /> Thêm khóa học hoặc chủ đề từ vựng mới
                </Button>
                <Button variant="outline" className="w-full justify-start text-xs font-bold">
                  <Plus className="mr-2 h-4 w-4 text-amber-500" /> Nhập bộ đề thi TOEIC / IELTS (CSV / JSON)
                </Button>
                <Button variant="outline" className="w-full justify-start text-xs font-bold">
                  <Sparkles className="mr-2 h-4 w-4 text-purple-500" /> Hiệu chỉnh Prompt Persona cho Gia sư AI
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* USERS TAB */}
      {activeTab === 'users' && (
        <Card>
          <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle className="text-lg font-bold">Danh sách Người dùng</CardTitle>
              <p className="text-xs text-slate-500">Quản lý tài khoản, vai trò và trạng thái kích hoạt</p>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Tìm tên hoặc email..."
                value={searchUser}
                onChange={(e) => setSearchUser(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-1.5 pl-9 pr-3 text-xs focus:outline-none dark:border-slate-800 dark:bg-slate-800"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400 uppercase font-bold text-[10px]">
                    <th className="py-3 px-4">Họ và Tên</th>
                    <th className="py-3 px-4">Email</th>
                    <th className="py-3 px-4">Vai Trò</th>
                    <th className="py-3 px-4">Lộ Trình</th>
                    <th className="py-3 px-4">Trạng Thái</th>
                    <th className="py-3 px-4 text-right">Thao Tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {sampleUsers
                    .filter((u) => u.name.toLowerCase().includes(searchUser.toLowerCase()) || u.email.includes(searchUser))
                    .map((user) => (
                      <tr key={user.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                        <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">{user.name}</td>
                        <td className="py-3 px-4 text-slate-500">{user.email}</td>
                        <td className="py-3 px-4">
                          <Badge
                            variant={
                              user.role === 'Admin' ? 'destructive' : user.role === 'Parent' ? 'secondary' : 'primary'
                            }
                          >
                            {user.role}
                          </Badge>
                        </td>
                        <td className="py-3 px-4 font-medium">{user.track}</td>
                        <td className="py-3 px-4">
                          <span className="inline-flex items-center gap-1 text-emerald-600 font-semibold">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> {user.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <Button variant="ghost" size="sm" className="h-7 text-xs">
                            Chi tiết
                          </Button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {/* CONTENT TAB */}
      {activeTab === 'content' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="font-bold text-base mb-2">Khoá học Tổng quan</h3>
            <p className="text-xs text-slate-500 mb-4">4 Lộ trình (Kids, Adults, TOEIC, IELTS) với 1,420 bài học</p>
            <Button variant="primary" size="sm" className="w-full">
              Quản lý bài giảng
            </Button>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold text-base mb-2">Ngân Hàng Đề Thi</h3>
            <p className="text-xs text-slate-500 mb-4">120 đề TOEIC full tests & 85 đề IELTS 4 kỹ năng</p>
            <Button variant="primary" size="sm" className="w-full">
              Quản lý đề thi
            </Button>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold text-base mb-2">Bộ 10 Game Trẻ Em</h3>
            <p className="text-xs text-slate-500 mb-4">Cấu hình câu hỏi, hình ảnh, từ vựng và cấp độ sao thưởng</p>
            <Button variant="primary" size="sm" className="w-full">
              Quản lý nội dung game
            </Button>
          </Card>
        </div>
      )}

      {/* AI TAB */}
      {activeTab === 'ai' && (
        <Card className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-bold">Cấu hình Tích hợp Google Gemini AI</h3>
            <p className="text-xs text-slate-500 mt-1">
              Định tuyến các tính năng AI qua API backend ASP.NET Core, không để lộ API key tại frontend.
            </p>
          </div>

          <div className="space-y-4 max-w-xl">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-600 mb-1">Mô hình AI mặc định</label>
              <select className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-xs font-semibold dark:border-slate-800 dark:bg-slate-800">
                <option value="gemini-1.5-pro">Gemini 1.5 Pro (Khuyên dùng cho Writing & Speaking)</option>
                <option value="gemini-1.5-flash">Gemini 1.5 Flash (Tối ưu tốc độ hội thoại)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-600 mb-1">Giới hạn yêu cầu mỗi người dùng</label>
              <input
                type="number"
                defaultValue={100}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2 text-xs font-semibold dark:border-slate-800 dark:bg-slate-800"
              />
              <span className="text-[11px] text-slate-400">Yêu cầu/ngày đối với tài khoản tiêu chuẩn</span>
            </div>

            <Button variant="primary" className="font-bold text-xs">
              Lưu cấu hình AI
            </Button>
          </div>
        </Card>
      )}

      {/* Modal Add Course */}
      <Modal
        isOpen={showAddCourseModal}
        onClose={() => setShowAddCourseModal(false)}
        title="Thêm Khóa Học Mới"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Tên khóa học</label>
            <input
              type="text"
              value={newCourseName}
              onChange={(e) => setNewCourseName(e.target.value)}
              placeholder="Ví dụ: 500 Cụm từ Collocations Đột Phá IELTS"
              className="w-full rounded-xl border p-2.5 text-xs font-medium dark:bg-slate-800"
            />
          </div>
          <div className="flex justify-end gap-2 pt-4">
            <Button variant="ghost" size="sm" onClick={() => setShowAddCourseModal(false)}>
              Hủy
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                sounds.playSuccess();
                setShowAddCourseModal(false);
              }}
            >
              Lưu khóa học
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
