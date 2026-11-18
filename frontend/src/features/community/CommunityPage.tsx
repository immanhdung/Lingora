import React, { useState } from 'react';
import { Users2, MessageSquare, Heart, Sparkles, Plus, Share2, Award } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { sounds, playCelebration } from '@/lib/utils';

export const CommunityPage: React.FC = () => {
  const [likes, setLikes] = useState<Record<string, number>>({ 'post-1': 24, 'post-2': 18 });

  const posts = [
    {
      id: 'post-1',
      author: 'Lê Hoàng Yến',
      avatar: '👩',
      badge: 'IELTS Target 8.0',
      time: '2 giờ trước',
      content:
        'Hôm nay mình vừa đạt Band 7.5 trong phòng AI Speaking Room với chủ đề "Environmental Problems"! Mẹo của mình là luôn chuẩn bị dàn ý 4 gạch đầu dòng trong 1 phút chuẩn bị và tập trung vào các từ nối (Furthermore, In light of this). Mọi người cùng cố gắng nhé!',
      tags: ['#IELTS', '#Speaking', '#Band75'],
    },
    {
      id: 'post-2',
      author: 'Trần Gia Hưng',
      avatar: '👦',
      badge: 'TOEIC 900+ Club',
      time: '5 giờ trước',
      content:
        'Bộ từ vựng chủ đề Business & Travel trên Lingora sát đề thi thật dã man. Mình ôn theo phương pháp lặp lại ngắt quãng SRS 3 tuần nay, làm đề Part 5 tăng vọt từ 65 lên 88 câu đúng. Ai cần tài liệu ôn chung kết bạn với mình nha!',
      tags: ['#TOEIC', '#SRS', '#Vocab'],
    },
  ];

  const handleLike = (id: string) => {
    sounds.playCoin();
    setLikes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Top Banner */}
      <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-8 shadow-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <Badge variant="primary" className="bg-primary-500/20 text-primary-300 border-primary-500/30 mb-2">
            CỘNG ĐỒNG HỌC VIÊN LINGORA
          </Badge>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Giao Lưu & Chia Sẻ Kinh Nghiệm Học Tập
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-slate-300">
            Hơn 500,000 học viên cùng nhau tiến bộ mỗi ngày. Học tiếng Anh không còn là hành trình cô độc!
          </p>
        </div>
      </div>

      {/* Community Feed */}
      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id} className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl">
                  {post.avatar}
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                    <span>{post.author}</span>
                    <Badge variant="outline" className="text-[10px]">{post.badge}</Badge>
                  </div>
                  <div className="text-[11px] text-slate-400">{post.time}</div>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {post.content}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs font-semibold text-primary-600 dark:text-primary-400">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
              <button
                onClick={() => handleLike(post.id)}
                className="flex items-center gap-1.5 text-slate-500 hover:text-rose-500 font-semibold transition-colors"
              >
                <Heart className="h-4 w-4 fill-rose-500 text-rose-500" />
                <span>{likes[post.id] || 0} Thích</span>
              </button>
              <button className="flex items-center gap-1.5 text-slate-500 hover:text-primary-600 font-semibold transition-colors">
                <MessageSquare className="h-4 w-4" />
                <span>Bình luận</span>
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
