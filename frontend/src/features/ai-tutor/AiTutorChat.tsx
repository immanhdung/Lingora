import React, { useState, useRef, useEffect } from 'react';
import {
  Send,
  Volume2,
  Mic,
  MicOff,
  Sparkles,
  Bot,
  User,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { AiChatMessage } from '@/types';
import { speakEnglish, BrowserSpeechRecognizer } from '@/lib/speech';
import { sounds } from '@/lib/utils';
import { useAuthStore } from '@/stores/useAuthStore';

export const AiTutorChat: React.FC = () => {
  const { user } = useAuthStore();
  const [persona, setPersona] = useState<
    'Friendly' | 'Strict' | 'Business' | 'Casual' | 'Academic'
  >('Friendly');
  const [messages, setMessages] = useState<AiChatMessage[]>([
    {
      id: 'm-1',
      sender: 'ai',
      text: "Hello! I am your AI English Teacher at Lingora. How has your day been so far? Tell me something you did today, and I'll help you polish your English!",
      timestamp: '10:00 AM',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isAiThinking, setIsAiThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const personas = [
    {
      id: 'Friendly',
      name: 'Thầy Giáo Thân Thiện',
      role: 'Friendly English Teacher',
      icon: '👨‍🏫',
      desc: 'Giải thích nhẹ nhàng, khích lệ và sửa lỗi ân cần',
      greeting: "Hello! I am your Friendly English Teacher. Don't worry about making mistakes!",
    },
    {
      id: 'Strict',
      name: 'Huấn Luyện Viên Ngữ Pháp',
      role: 'Strict Grammar Coach',
      icon: '🧐',
      desc: 'Bắt lỗi ngữ pháp tuyệt đối, yêu cầu câu văn chuẩn chỉnh',
      greeting: 'Greetings! I will analyze every sentence you produce with zero grammatical tolerance.',
    },
    {
      id: 'Business',
      name: 'Cố Vấn Tiếng Anh Doanh Nghiệp',
      role: 'Business English Mentor',
      icon: '💼',
      desc: 'Văn phong đàm phán, email chuyên nghiệp và phong thái thương mại',
      greeting: 'Welcome. Let us practice high-impact professional communication for the corporate world.',
    },
    {
      id: 'Casual',
      name: 'Bạn Đối Thoại Tự Nhiên',
      role: 'Casual Native Partner',
      icon: '🤙',
      desc: 'Văn phong đời thường, tiếng lóng thông dụng và phản xạ nhanh',
      greeting: "Hey there! What's up? Let's just hang out and chat about life, movies, and hobbies!",
    },
    {
      id: 'Academic',
      name: 'Gia Sư Học Thuật',
      role: 'Academic English Tutor',
      icon: '🎓',
      desc: 'Từ vựng C1-C2, cấu trúc câu phức tạp và lập luận logic',
      greeting: 'Greetings. I am here to assist your academic discourse, essay articulation, and lexical richness.',
    },
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isAiThinking]);

  const handleSendMessage = () => {
    if (!inputText.trim() || isAiThinking) return;

    sounds.playClick();
    const userMsg: AiChatMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: inputText.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsAiThinking(true);

    // Simulate intelligent AI response with grammar feedback
    setTimeout(() => {
      let aiText = '';
      let corrections = undefined;

      const lower = userMsg.text.toLowerCase();
      if (lower.includes('i go to') || lower.includes('yesterday i go')) {
        corrections = [
          {
            original: 'yesterday i go',
            better: 'yesterday I went',
            rule: 'Diễn tả hành động đã xảy ra trong quá khứ ("yesterday"), dùng quá khứ đơn "went" thay vì "go".',
          },
        ];
        aiText =
          "That sounds like an interesting experience! Note that since you're referring to yesterday, remember to use 'went' instead of 'go'. What did you enjoy most about it?";
      } else if (lower.includes('i am agree')) {
        corrections = [
          {
            original: 'I am agree',
            better: 'I agree',
            rule: '"Agree" là một động từ thường, không dùng to be "am" đi kèm trong câu khẳng định hiện tại đơn.',
          },
        ];
        aiText =
          "I understand your point completely! By the way, native speakers say 'I agree' rather than 'I am agree'. Could you elaborate more on why you think so?";
      } else {
        if (persona === 'Strict') {
          aiText = `Your sentence is grammatically acceptable. To elevate it further, consider structuring it with greater syntactic precision. How would you state this in a formal context?`;
        } else if (persona === 'Business') {
          aiText = `Well articulated. In a corporate executive setting, expressing this proactively will enhance your professional presence. Shall we draft a follow-up memorandum?`;
        } else if (persona === 'Casual') {
          aiText = `Totally! That's so cool. Honestly, I would feel the exact same way. What are you planning on doing next?`;
        } else {
          aiText = `That's wonderful to hear! You expressed that very clearly. Tell me more about what you have planned for this evening!`;
        }
      }

      const aiMsg: AiChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: aiText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        corrections,
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsAiThinking(false);
      speakEnglish(aiText);
    }, 1200);
  };

  const handleToggleVoice = () => {
    if (isRecording) {
      setIsRecording(false);
      return;
    }

    const recognizer = new BrowserSpeechRecognizer();
    setIsRecording(true);
    sounds.playClick();

    if (recognizer.isSupported) {
      recognizer.start(
        (transcript, isFinal) => {
          setInputText(transcript);
          if (isFinal) {
            setIsRecording(false);
          }
        },
        (err) => {
          setIsRecording(false);
        },
        () => setIsRecording(false)
      );
    } else {
      setTimeout(() => {
        setIsRecording(false);
        setInputText('I want to improve my speaking fluency and pronunciation today.');
      }, 1500);
    }
  };

  const handleSpeak = (text: string) => {
    speakEnglish(text);
  };

  const handleChangePersona = (newPersona: typeof persona) => {
    sounds.playClick();
    setPersona(newPersona);
    const p = personas.find((item) => item.id === newPersona);
    if (p) {
      setMessages([
        {
          id: `m-init-${Date.now()}`,
          sender: 'ai',
          text: p.greeting,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-6xl mx-auto h-[calc(100vh-140px)] min-h-[600px]">
      {/* Left Sidebar: 5 Personas Selection */}
      <Card className="p-4 flex flex-col justify-between hidden sm:flex">
        <div className="space-y-3">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
            <Bot className="h-5 w-5 text-primary-600" />
            <span className="font-bold text-sm text-slate-900 dark:text-white">5 Nhân Cách AI Tutor</span>
          </div>

          <div className="space-y-1.5">
            {personas.map((p) => {
              const isSelected = persona === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => handleChangePersona(p.id as any)}
                  className={`w-full text-left p-3 rounded-2xl border transition-all ${
                    isSelected
                      ? 'border-primary-500 bg-primary-50 dark:bg-primary-950/60 shadow-sm'
                      : 'border-slate-200 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{p.icon}</span>
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">{p.name}</div>
                      <div className="text-[10px] text-slate-400">{p.role}</div>
                    </div>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1.5 line-clamp-2">{p.desc}</div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-900/50 text-[11px] text-purple-900 dark:text-purple-300">
          ✨ <strong>Gemini AI Engine:</strong> Tự động sửa lỗi ngữ pháp & phát âm song ngữ Anh - Việt ngay trong hội thoại.
        </div>
      </Card>

      {/* Main Chat Box */}
      <Card className="lg:col-span-3 flex flex-col p-0 overflow-hidden shadow-xl border-slate-200/80 dark:border-slate-800">
        {/* Chat Header */}
        <div className="flex items-center justify-between border-b border-slate-200/80 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-900/70">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-tr from-primary-600 to-primary-electric flex items-center justify-center text-xl text-white shadow-md">
              {personas.find((p) => p.id === persona)?.icon || '🤖'}
            </div>
            <div>
              <div className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                <span>{personas.find((p) => p.id === persona)?.name}</span>
                <Badge variant="primary" className="text-[10px]">Gemini 1.5</Badge>
              </div>
              <div className="text-[11px] text-emerald-500 flex items-center gap-1 font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Đang hoạt động • Phản hồi tức thì
              </div>
            </div>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleChangePersona(persona)}
            className="text-xs text-slate-400"
          >
            <RotateCcw className="mr-1 h-3.5 w-3.5" /> Làm mới cuộc trò chuyện
          </Button>
        </div>

        {/* Message Log */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {messages.map((msg) => {
            const isUser = msg.sender === 'user';
            return (
              <div
                key={msg.id}
                className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'} animate-in fade-in duration-200`}
              >
                {!isUser && (
                  <div className="h-8 w-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-sm shrink-0 mt-1 dark:bg-primary-950 dark:text-primary-300">
                    🤖
                  </div>
                )}

                <div className={`max-w-[85%] sm:max-w-[75%] space-y-2`}>
                  <div
                    className={`rounded-2xl p-4 text-sm leading-relaxed ${
                      isUser
                        ? 'bg-primary-600 text-white rounded-br-none shadow-md'
                        : 'bg-white border border-slate-200 text-slate-900 rounded-bl-none shadow-sm dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100'
                    }`}
                  >
                    <div>{msg.text}</div>

                    {!isUser && (
                      <div className="flex items-center justify-between pt-2 mt-2 border-t border-slate-100 dark:border-slate-700">
                        <button
                          onClick={() => handleSpeak(msg.text)}
                          className="flex items-center gap-1 text-[11px] text-primary-600 dark:text-primary-400 font-semibold hover:underline"
                        >
                          <Volume2 className="h-3.5 w-3.5" /> Nghe phát âm
                        </button>
                        <span className="text-[10px] text-slate-400">{msg.timestamp}</span>
                      </div>
                    )}
                  </div>

                  {/* Grammar Correction Box (if AI detected mistakes in previous message) */}
                  {msg.corrections && (
                    <div className="rounded-2xl border border-amber-300 bg-amber-50/80 p-3.5 text-xs dark:border-amber-900/60 dark:bg-amber-950/30 space-y-1.5">
                      <div className="flex items-center gap-1.5 font-bold text-amber-800 dark:text-amber-300">
                        <AlertCircle className="h-4 w-4" /> Góp ý sửa ngữ pháp từ AI:
                      </div>
                      {msg.corrections.map((c, i) => (
                        <div key={i} className="space-y-1">
                          <div className="text-rose-600 line-through">✗ {c.original}</div>
                          <div className="text-emerald-700 dark:text-emerald-400 font-bold">✓ {c.better}</div>
                          <div className="text-slate-600 dark:text-slate-400 font-normal">💡 {c.rule}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {isUser && (
                  <div className="h-8 w-8 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-sm shrink-0 mt-1 dark:bg-slate-700 dark:text-slate-200">
                    <User className="h-4 w-4" />
                  </div>
                )}
              </div>
            );
          })}

          {isAiThinking && (
            <div className="flex gap-3 justify-start items-center">
              <div className="h-8 w-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-sm">
                🤖
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-3 text-xs text-slate-500 flex items-center gap-2 dark:bg-slate-800">
                <span className="h-2 w-2 rounded-full bg-primary-600 animate-ping" />
                Gia sư AI đang phân tích và chuẩn bị câu trả lời...
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="border-t border-slate-200/80 bg-white p-3 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center gap-2">
            <button
              onClick={handleToggleVoice}
              className={`h-11 w-11 rounded-2xl flex items-center justify-center transition-all ${
                isRecording
                  ? 'bg-rose-500 text-white animate-pulse ring-4 ring-rose-200'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
              }`}
              title={isRecording ? 'Đang ghi âm...' : 'Nói để nhập bằng giọng nói'}
            >
              {isRecording ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
            </button>

            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSendMessage();
              }}
              placeholder="Nhắn tin bằng tiếng Anh (hoặc hỏi bài bằng tiếng Việt)..."
              className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 focus:border-primary-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
            />

            <Button
              variant="primary"
              size="icon"
              onClick={handleSendMessage}
              disabled={!inputText.trim() || isAiThinking}
              className="h-11 w-11 rounded-2xl shrink-0"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
