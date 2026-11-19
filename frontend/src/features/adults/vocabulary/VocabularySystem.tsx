import React, { useState, useEffect, useCallback } from 'react';
import {
  Volume2,
  ChevronLeft,
  ChevronRight,
  RotateCw,
  RotateCcw,
  BookOpen,
  Check,
  Plane,
  Briefcase,
  Cpu,
  Coffee,
  Coins,
  GraduationCap,
  Leaf,
  Layers,
  Sparkles,
  HelpCircle,
  Shuffle,
  VolumeX,
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { speakEnglish } from '@/lib/speech';
import { sounds, playCelebration } from '@/lib/utils';
import { useAuthStore } from '@/stores/useAuthStore';

interface WordItem {
  id: string;
  word: string;
  phonetic: string;
  partOfSpeech: string;
  difficultyLevel: 'B1' | 'B2' | 'C1';
  meaningVi: string;
  definitionEn: string;
  exampleEn: string;
  exampleVi: string;
  synonyms: string[];
}

interface TopicData {
  id: string;
  title: string;
  icon: any;
  color: string;
  description: string;
  words: WordItem[];
}

export const VocabularySystem: React.FC = () => {
  const { updateStats } = useAuthStore();
  const [selectedTopicId, setSelectedTopicId] = useState<string>('travel');
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [viewMode, setViewMode] = useState<'flashcard' | 'list' | 'quiz'>('flashcard');

  // Quiz state
  const [quizAnswer, setQuizAnswer] = useState<string | null>(null);
  const [quizScore, setQuizScore] = useState(0);

  const topics: TopicData[] = [
    {
      id: 'travel',
      title: 'Du Lịch & Lưu Trú',
      icon: Plane,
      color: 'text-sky-500',
      description: 'Sân bay, thủ tục visa, lưu trú và khám phá văn hóa',
      words: [
        {
          id: 't-1',
          word: 'Itinerary',
          phonetic: '/aɪˈtɪn.ə.rer.i/',
          partOfSpeech: 'Noun',
          difficultyLevel: 'B2',
          meaningVi: 'Lịch trình chuyến đi chi tiết theo từng ngày',
          definitionEn: 'A detailed plan or route of a journey.',
          exampleEn: 'We must finalize our travel itinerary before booking the return flight.',
          exampleVi: 'Chúng ta phải chốt lịch trình du lịch trước khi đặt chuyến bay khứ hồi.',
          synonyms: ['Schedule', 'Travel plan', 'Agenda'],
        },
        {
          id: 't-2',
          word: 'Embark',
          phonetic: '/ɪmˈbɑːrk/',
          partOfSpeech: 'Verb',
          difficultyLevel: 'C1',
          meaningVi: 'Lên tàu / bắt đầu chuyến hành trình',
          definitionEn: 'To go on board a ship, aircraft, or vehicle; to start a new adventure.',
          exampleEn: 'Passengers are requested to embark immediately at Gate 14.',
          exampleVi: 'Hành khách được yêu cầu lên máy bay ngay lập tức tại Cửa số 14.',
          synonyms: ['Board', 'Set out', 'Commence'],
        },
        {
          id: 't-3',
          word: 'Accommodation',
          phonetic: '/əˌkɑː.məˈdeɪ.ʃən/',
          partOfSpeech: 'Noun',
          difficultyLevel: 'B1',
          meaningVi: 'Chỗ ở, phòng nghỉ lưu trú',
          definitionEn: 'A room or building in which someone may live or stay.',
          exampleEn: 'The resort provides luxurious accommodation overlooking the ocean.',
          exampleVi: 'Khu nghỉ dưỡng cung cấp chỗ ở sang trọng nhìn ra biển lớn.',
          synonyms: ['Lodging', 'Housing', 'Quarters'],
        },
        {
          id: 't-4',
          word: 'Customs',
          phonetic: '/ˈkʌs.təmz/',
          partOfSpeech: 'Noun',
          difficultyLevel: 'B1',
          meaningVi: 'Cơ quan hải quan, cửa khẩu kiểm soát hàng hóa',
          definitionEn: 'The government agency that monitors goods entering or leaving a country.',
          exampleEn: 'You must declare expensive electronics when passing through customs.',
          exampleVi: 'Bạn phải khai báo đồ điện tử đắt tiền khi đi qua hải quan.',
          synonyms: ['Border control', 'Immigration checkpoint'],
        },
        {
          id: 't-5',
          word: 'Breathtaking',
          phonetic: '/ˈbreθˌteɪ.kɪŋ/',
          partOfSpeech: 'Adj',
          difficultyLevel: 'B2',
          meaningVi: 'Đẹp ngỡ ngàng, ngoạn mục',
          definitionEn: 'Astonishing or awe-inspiring in quality, beauty, or grandeur.',
          exampleEn: 'The view from the top of the mountain was absolutely breathtaking.',
          exampleVi: 'Khung cảnh nhìn từ đỉnh núi thực sự đẹp ngỡ ngàng.',
          synonyms: ['Spectacular', 'Magnificent', 'Stunning'],
        },
        {
          id: 't-6',
          word: 'Hospitality',
          phonetic: '/ˌhɑː.spɪˈtæl.ə.t̬i/',
          partOfSpeech: 'Noun',
          difficultyLevel: 'B2',
          meaningVi: 'Sự hiếu khách, lòng mến khách',
          definitionEn: 'The friendly and generous reception and entertainment of guests or visitors.',
          exampleEn: 'We were deeply touched by the warm hospitality of the local villagers.',
          exampleVi: 'Chúng tôi vô cùng xúc động trước lòng hiếu khách nồng hậu của người dân địa phương.',
          synonyms: ['Welcoming nature', 'Friendliness', 'Generosity'],
        },
        {
          id: 't-7',
          word: 'Excursion',
          phonetic: '/ɪkˈskɝː.ʒən/',
          partOfSpeech: 'Noun',
          difficultyLevel: 'B2',
          meaningVi: 'Chuyến dã ngoại, chuyến tham quan ngắn ngày',
          definitionEn: 'A short journey or trip, especially one taken as a leisure activity.',
          exampleEn: 'The travel package includes a guided excursion to ancient historical temples.',
          exampleVi: 'Gói du lịch bao gồm một chuyến tham quan có hướng dẫn tới các ngôi đền cổ xưa.',
          synonyms: ['Outing', 'Jaunt', 'Day trip'],
        },
        {
          id: 't-8',
          word: 'Layover',
          phonetic: '/ˈleɪˌoʊ.vɚ/',
          partOfSpeech: 'Noun',
          difficultyLevel: 'B1',
          meaningVi: 'Thời gian quá cảnh / chờ nối chuyến bay',
          definitionEn: 'A period of rest or waiting before continuing a trip.',
          exampleEn: 'We had a four-hour layover in Tokyo before our flight to Vancouver.',
          exampleVi: 'Chúng tôi có 4 tiếng quá cảnh tại Tokyo trước khi bay tiếp đến Vancouver.',
          synonyms: ['Stopover', 'Transit pause'],
        },
      ],
    },
    {
      id: 'business',
      title: 'Công Sở & Kinh Doanh',
      icon: Briefcase,
      color: 'text-indigo-500',
      description: 'Họp hành, đàm phán, chiến lược và quản trị doanh nghiệp',
      words: [
        {
          id: 'b-1',
          word: 'Consensus',
          phonetic: '/kənˈsen.səs/',
          partOfSpeech: 'Noun',
          difficultyLevel: 'C1',
          meaningVi: 'Sự đồng thuận chung, sự nhất trí của tập thể',
          definitionEn: 'A generally accepted opinion or decision among a group of people.',
          exampleEn: 'The executive committee reached a unanimous consensus on the new budget.',
          exampleVi: 'Ban điều hành đã đạt được sự nhất trí tuyệt đối về ngân sách mới.',
          synonyms: ['Agreement', 'Concurrence', 'Harmony'],
        },
        {
          id: 'b-2',
          word: 'Feasibility',
          phonetic: '/ˌfiː.zəˈbɪl.ə.t̬i/',
          partOfSpeech: 'Noun',
          difficultyLevel: 'B2',
          meaningVi: 'Tính khả thi của một kế hoạch hay dự án',
          definitionEn: 'The state or degree of being easily or conveniently done.',
          exampleEn: 'We conducted a study to assess the feasibility of launching the app in Asia.',
          exampleVi: 'Chúng tôi tiến hành một nghiên cứu nhằm đánh giá tính khả thi khi ra mắt ứng dụng tại châu Á.',
          synonyms: ['Viability', 'Practicability', 'Workability'],
        },
        {
          id: 'b-3',
          word: 'Stakeholder',
          phonetic: '/ˈsteɪkˌhoʊl.dɚ/',
          partOfSpeech: 'Noun',
          difficultyLevel: 'B2',
          meaningVi: 'Bên liên quan (cổ đông, khách hàng, nhân viên, đối tác)',
          definitionEn: 'A person or party who has an interest or concern in an organization.',
          exampleEn: 'Clear communication with key stakeholders is essential for project success.',
          exampleVi: 'Giao tiếp rõ ràng với các bên liên quan trọng yếu là yếu tố sống còn cho sự thành công của dự án.',
          synonyms: ['Shareholder', 'Interested party', 'Collaborator'],
        },
        {
          id: 'b-4',
          word: 'Leverage',
          phonetic: '/ˈlev.ɚ.ɪdʒ/',
          partOfSpeech: 'Verb',
          difficultyLevel: 'C1',
          meaningVi: 'Tận dụng tối đa đòn bẩy nguồn lực để đạt lợi thế',
          definitionEn: 'Use something to maximum advantage.',
          exampleEn: 'The company plans to leverage artificial intelligence to automate customer service.',
          exampleVi: 'Công ty lên kế hoạch tận dụng trí tuệ nhân tạo để tự động hóa dịch vụ khách hàng.',
          synonyms: ['Utilize', 'Capitalize on', 'Exploit positively'],
        },
        {
          id: 'b-5',
          word: 'Benchmark',
          phonetic: '/ˈbentʃ.mɑːrk/',
          partOfSpeech: 'Noun',
          difficultyLevel: 'B2',
          meaningVi: 'Tiêu chuẩn đối sánh, chuẩn mực đo lường',
          definitionEn: 'A standard or point of reference against which things may be compared.',
          exampleEn: 'Our product set a new quality benchmark across the entire SaaS industry.',
          exampleVi: 'Sản phẩm của chúng tôi đã thiết lập chuẩn mực chất lượng mới cho toàn bộ ngành SaaS.',
          synonyms: ['Standard', 'Criterion', 'Touchstone'],
        },
        {
          id: 'b-6',
          word: 'Milestone',
          phonetic: '/ˈmaɪl.stoʊn/',
          partOfSpeech: 'Noun',
          difficultyLevel: 'B1',
          meaningVi: 'Cột mốc quan trọng trong quá trình phát triển',
          definitionEn: 'A significant stage or event in the development of something.',
          exampleEn: 'Securing our first 10,000 paid subscribers was an incredible milestone.',
          exampleVi: 'Đạt được 10.000 người dùng trả phí đầu tiên là một cột mốc phi thường.',
          synonyms: ['Landmark', 'Breakthrough', 'Turning point'],
        },
        {
          id: 'b-7',
          word: 'Negotiation',
          phonetic: '/nəˌɡoʊ.ʃiˈeɪ.ʃən/',
          partOfSpeech: 'Noun',
          difficultyLevel: 'B2',
          meaningVi: 'Cuộc đàm phán, thương lượng hợp đồng',
          definitionEn: 'Discussion aimed at reaching an agreement.',
          exampleEn: 'After months of intense negotiation, both parties finally signed the contract.',
          exampleVi: 'Sau nhiều tháng đàm phán căng thẳng, hai bên cuối cùng đã ký kết hợp đồng.',
          synonyms: ['Bargaining', 'Discussions', 'Dialogue'],
        },
        {
          id: 'b-8',
          word: 'Paradigm',
          phonetic: '/ˈper.ə.daɪm/',
          partOfSpeech: 'Noun',
          difficultyLevel: 'C1',
          meaningVi: 'Mô hình tư duy kiểu mẫu, hệ hình',
          definitionEn: 'A typical example or pattern of something; a distinct set of concepts.',
          exampleEn: 'Remote working has created a major paradigm shift in global corporate culture.',
          exampleVi: 'Làm việc từ xa đã tạo ra một sự chuyển dịch hệ hình lớn trong văn hóa doanh nghiệp toàn cầu.',
          synonyms: ['Model', 'Archetype', 'Framework'],
        },
      ],
    },
    {
      id: 'tech',
      title: 'Công Nghệ & AI',
      icon: Cpu,
      color: 'text-purple-500',
      description: 'Lập trình, trí tuệ nhân tạo, an ninh mạng và dữ liệu lớn',
      words: [
        {
          id: 'tc-1',
          word: 'Algorithm',
          phonetic: '/ˈæl.ɡə.rɪ.ðəm/',
          partOfSpeech: 'Noun',
          difficultyLevel: 'B2',
          meaningVi: 'Thuật toán xử lý và giải quyết bài toán',
          definitionEn: 'A process or set of rules to be followed in calculations or problem-solving operations.',
          exampleEn: 'The recommendation algorithm optimizes content based on user interactions.',
          exampleVi: 'Thuật toán gợi ý tối ưu hóa nội dung dựa trên các tương tác của người dùng.',
          synonyms: ['Methodology', 'Formula', 'Protocol'],
        },
        {
          id: 'tc-2',
          word: 'Automation',
          phonetic: '/ˌɑː.t̬əˈmeɪ.ʃən/',
          partOfSpeech: 'Noun',
          difficultyLevel: 'B2',
          meaningVi: 'Tự động hóa quy trình công việc',
          definitionEn: 'The use of largely automatic equipment in a system of operation.',
          exampleEn: 'Workflow automation allows engineers to focus on creative problem solving.',
          exampleVi: 'Tự động hóa quy trình làm việc cho phép kỹ sư tập trung vào việc giải quyết vấn đề sáng tạo.',
          synonyms: ['Mechanization', 'Computerization'],
        },
        {
          id: 'tc-3',
          word: 'Cybersecurity',
          phonetic: '/ˌsaɪ.bɚ.səˈkjʊr.ə.t̬i/',
          partOfSpeech: 'Noun',
          difficultyLevel: 'B2',
          meaningVi: 'An toàn thông tin mạng, bảo mật số',
          definitionEn: 'The practice of protecting systems, networks, and programs from digital attacks.',
          exampleEn: 'Investing in robust cybersecurity is non-negotiable for cloud banking platforms.',
          exampleVi: 'Đầu tư vào an ninh mạng mạnh mẽ là điều bắt buộc đối với các nền tảng ngân hàng đám mây.',
          synonyms: ['Information security', 'Data protection'],
        },
        {
          id: 'tc-4',
          word: 'Scalability',
          phonetic: '/ˌskeɪ.ləˈbɪl.ə.t̬i/',
          partOfSpeech: 'Noun',
          difficultyLevel: 'C1',
          meaningVi: 'Khả năng mở rộng quy mô khi lượng người dùng tăng cao',
          definitionEn: 'The capacity to be changed in size or scale to handle growing demands.',
          exampleEn: 'PostgreSQL provides exceptional reliability and scalability for modern applications.',
          exampleVi: 'PostgreSQL mang lại độ tin cậy và khả năng mở rộng vượt trội cho các ứng dụng hiện đại.',
          synonyms: ['Extensibility', 'Expandability'],
        },
        {
          id: 'tc-5',
          word: 'Encryption',
          phonetic: '/ɪnˈkrɪp.ʃən/',
          partOfSpeech: 'Noun',
          difficultyLevel: 'B2',
          meaningVi: 'Sự mã hóa dữ liệu bảo mật',
          definitionEn: 'The process of converting information or data into a code to prevent unauthorized access.',
          exampleEn: 'End-to-end encryption ensures that only sender and recipient can read the messages.',
          exampleVi: 'Mã hóa đầu cuối đảm bảo rằng chỉ người gửi và người nhận mới có thể đọc tin nhắn.',
          synonyms: ['Encoding', 'Cryptography'],
        },
        {
          id: 'tc-6',
          word: 'Deployment',
          phonetic: '/dɪˈplɔɪ.mənt/',
          partOfSpeech: 'Noun',
          difficultyLevel: 'B2',
          meaningVi: 'Sự triển khai phần mềm lên máy chủ trực tiếp',
          definitionEn: 'The action of bringing resources or software into effective action.',
          exampleEn: 'Continuous deployment allows our development team to release updates daily.',
          exampleVi: 'Triển khai liên tục cho phép đội ngũ phát triển phát hành bản cập nhật mỗi ngày.',
          synonyms: ['Implementation', 'Rollout', 'Release'],
        },
        {
          id: 'tc-7',
          word: 'Bandwidth',
          phonetic: '/ˈbænd.wɪtθ/',
          partOfSpeech: 'Noun',
          difficultyLevel: 'B2',
          meaningVi: 'Băng thông truyền tải dữ liệu',
          definitionEn: 'The maximum rate of data transfer across a given path.',
          exampleEn: 'Video streaming platforms require substantial network bandwidth.',
          exampleVi: 'Các nền tảng phát video trực tuyến đòi hỏi lượng băng thông mạng rất lớn.',
          synonyms: ['Data capacity', 'Throughput'],
        },
      ],
    },
    {
      id: 'academic',
      title: 'Học Thuật IELTS 7.5+',
      icon: GraduationCap,
      color: 'text-amber-500',
      description: 'Từ vựng C1-C2 ăn điểm trong Writing Task 2 và Reading IELTS',
      words: [
        {
          id: 'a-1',
          word: 'Ubiquitous',
          phonetic: '/juːˈbɪk.wə.t̬əs/',
          partOfSpeech: 'Adj',
          difficultyLevel: 'C1',
          meaningVi: 'Có mặt ở khắp mọi nơi, phổ biến rộng rãi',
          definitionEn: 'Present, appearing, or found everywhere.',
          exampleEn: 'Smartphones have become ubiquitous in almost every modern household.',
          exampleVi: 'Điện thoại thông minh đã trở nên phổ biến ở khắp mọi nơi trong hầu hết các gia đình hiện đại.',
          synonyms: ['Omnipresent', 'Pervasive', 'Prevalent'],
        },
        {
          id: 'a-2',
          word: 'Substantiate',
          phonetic: '/səbˈstæn.ʃi.eɪt/',
          partOfSpeech: 'Verb',
          difficultyLevel: 'C1',
          meaningVi: 'Chứng minh bằng chứng thực tế, làm sáng tỏ',
          definitionEn: 'Provide evidence to support or prove the truth of something.',
          exampleEn: 'The researcher was able to substantiate her hypothesis with empirical data.',
          exampleVi: 'Nhà nghiên cứu đã có thể chứng minh giả thuyết của mình bằng dữ liệu thực nghiệm.',
          synonyms: ['Validate', 'Corroborate', 'Authenticate'],
        },
        {
          id: 'a-3',
          word: 'Dichotomy',
          phonetic: '/daɪˈkɑː.t̬ə.mi/',
          partOfSpeech: 'Noun',
          difficultyLevel: 'C1',
          meaningVi: 'Sự phân đôi, hai mặt đối lập hoàn toàn',
          definitionEn: 'A division or contrast between two things that are represented as being opposed.',
          exampleEn: 'There is a rigid dichotomy between theoretical research and practical application.',
          exampleVi: 'Tồn tại một sự phân đôi rạch ròi giữa nghiên cứu lý thuyết và ứng dụng thực tiễn.',
          synonyms: ['Division', 'Separation', 'Polarity'],
        },
        {
          id: 'a-4',
          word: 'Mitigate',
          phonetic: '/ˈmɪt̬.ə.ɡeɪt/',
          partOfSpeech: 'Verb',
          difficultyLevel: 'B2',
          meaningVi: 'Giảm thiểu mức độ nghiêm trọng, xoa dịu',
          definitionEn: 'Make less severe, serious, or painful.',
          exampleEn: 'Governments must implement urgent policies to mitigate the effects of global warming.',
          exampleVi: 'Các chính phủ phải thực thi chính sách khẩn cấp để giảm thiểu tác động của sự nóng lên toàn cầu.',
          synonyms: ['Alleviate', 'Lessen', 'Diminish'],
        },
        {
          id: 'a-5',
          word: 'Disparity',
          phonetic: '/dɪˈsper.ə.t̬i/',
          partOfSpeech: 'Noun',
          difficultyLevel: 'C1',
          meaningVi: 'Sự chênh lệch lớn, bất bình đẳng sâu sắc',
          definitionEn: 'A great difference or inequality between two or more things.',
          exampleEn: 'The economic disparity between rural and urban populations continues to widen.',
          exampleVi: 'Sự chênh lệch kinh tế giữa cư dân nông thôn và thành thị tiếp tục gia tăng.',
          synonyms: ['Inequality', 'Imbalance', 'Discrepancy'],
        },
        {
          id: 'a-6',
          word: 'Proliferate',
          phonetic: '/prəˈlɪf.ə.reɪt/',
          partOfSpeech: 'Verb',
          difficultyLevel: 'C1',
          meaningVi: 'Tăng nhanh chóng về số lượng, sinh sôi nảy nở',
          definitionEn: 'Increase rapidly in numbers; multiply.',
          exampleEn: 'Online education platforms have proliferated dramatically over the last decade.',
          exampleVi: 'Các nền tảng giáo dục trực tuyến đã tăng lên nhanh chóng và mạnh mẽ trong thập kỷ qua.',
          synonyms: ['Burgeon', 'Multiply', 'Escalate'],
        },
        {
          id: 'a-7',
          word: 'Inherent',
          phonetic: '/ɪnˈhɪr.ənt/',
          partOfSpeech: 'Adj',
          difficultyLevel: 'C1',
          meaningVi: 'Vốn có, gắn liền bẩm sinh',
          definitionEn: 'Existing in something as a permanent, essential, or characteristic attribute.',
          exampleEn: 'There are inherent risks in any major scientific endeavor.',
          exampleVi: 'Luôn tồn tại những rủi ro vốn có trong bất kỳ nỗ lực khoa học lớn nào.',
          synonyms: ['Intrinsic', 'Innate', 'Essential'],
        },
      ],
    },
    {
      id: 'finance',
      title: 'Tài Chính & Kinh Tế',
      icon: Coins,
      color: 'text-emerald-500',
      description: 'Đầu tư, lạm phát, dòng tiền, thị trường chứng khoán',
      words: [
        {
          id: 'f-1',
          word: 'Inflation',
          phonetic: '/ɪnˈfleɪ.ʃən/',
          partOfSpeech: 'Noun',
          difficultyLevel: 'B2',
          meaningVi: 'Lạm phát (sự tăng giá cả hàng hóa làm giảm sức mua)',
          definitionEn: 'A general increase in prices and fall in the purchasing value of money.',
          exampleEn: 'Central banks raise interest rates to control runaway inflation.',
          exampleVi: 'Các ngân hàng trung ương tăng lãi suất để kiểm soát lạm phát phi mã.',
          synonyms: ['Price increase', 'Monetary depreciation'],
        },
        {
          id: 'f-2',
          word: 'Portfolio',
          phonetic: '/pɔːrtˈfoʊ.li.oʊ/',
          partOfSpeech: 'Noun',
          difficultyLevel: 'B2',
          meaningVi: 'Danh mục đầu tư tài chính',
          definitionEn: 'A range of investments held by an individual or organization.',
          exampleEn: 'Financial advisors recommend diversifying your investment portfolio.',
          exampleVi: 'Các cố vấn tài chính khuyên bạn nên đa dạng hóa danh mục đầu tư.',
          synonyms: ['Holdings', 'Investment bundle'],
        },
        {
          id: 'f-3',
          word: 'Liability',
          phonetic: '/ˌlaɪ.əˈbɪl.ə.t̬i/',
          partOfSpeech: 'Noun',
          difficultyLevel: 'B2',
          meaningVi: 'Khoản nợ phải trả, nghĩa vụ tài chính',
          definitionEn: 'A thing for which someone is responsible, especially a debt or financial obligation.',
          exampleEn: 'The firm has managed to significantly reduce its long-term liabilities.',
          exampleVi: 'Doanh nghiệp đã thành công trong việc giảm thiểu đáng kể các khoản nợ dài hạn.',
          synonyms: ['Debt', 'Financial obligation', 'Arrears'],
        },
        {
          id: 'f-4',
          word: 'Dividend',
          phonetic: '/ˈdɪv.ə.dend/',
          partOfSpeech: 'Noun',
          difficultyLevel: 'B2',
          meaningVi: 'Cổ tức (khoản lợi nhuận chia cho cổ đông)',
          definitionEn: 'A sum of money paid regularly by a company to its shareholders out of its profits.',
          exampleEn: 'The corporation paid an annual dividend of three dollars per share.',
          exampleVi: 'Tập đoàn đã chi trả mức cổ tức hàng năm là 3 đô la cho mỗi cổ phiếu.',
          synonyms: ['Share payout', 'Yield'],
        },
      ],
    },
    {
      id: 'daily',
      title: 'Đời Sống & Cảm Xúc',
      icon: Coffee,
      color: 'text-rose-500',
      description: 'Giao tiếp tinh tế, tính cách, tâm lý và phong cách sống',
      words: [
        {
          id: 'd-1',
          word: 'Spontaneous',
          phonetic: '/spɑːnˈteɪ.ni.əs/',
          partOfSpeech: 'Adj',
          difficultyLevel: 'B2',
          meaningVi: 'Ngẫu hứng, tự phát, không cần lên kế hoạch trước',
          definitionEn: 'Performed or occurring as a result of a sudden impulse without premeditation.',
          exampleEn: 'We took a spontaneous weekend road trip to the coast.',
          exampleVi: 'Chúng tôi đã có một chuyến phượt ngẫu hứng vào cuối tuần tới bờ biển.',
          synonyms: ['Impulsive', 'Unplanned', 'Impromptu'],
        },
        {
          id: 'd-2',
          word: 'Empathy',
          phonetic: '/ˈem.pə.θi/',
          partOfSpeech: 'Noun',
          difficultyLevel: 'B2',
          meaningVi: 'Sự thấu cảm, khả năng đặt mình vào vị trí người khác',
          definitionEn: 'The ability to understand and share the feelings of another.',
          exampleEn: 'Practicing genuine empathy is the foundation of deep human relationships.',
          exampleVi: 'Thực hành sự thấu cảm chân thành là nền tảng của các mối quan hệ con người sâu sắc.',
          synonyms: ['Compassion', 'Understanding', 'Sensitivity'],
        },
        {
          id: 'd-3',
          word: 'Ambience',
          phonetic: '/ˈæm.bi.əns/',
          partOfSpeech: 'Noun',
          difficultyLevel: 'B2',
          meaningVi: 'Bầu không khí, cảm giác không gian xung quanh',
          definitionEn: 'The character and atmosphere of a place.',
          exampleEn: 'The soft jazz music and warm lighting gave the café a cozy ambience.',
          exampleVi: 'Tiếng nhạc jazz êm dịu cùng ánh đèn vàng ấm áp mang lại cho quán cà phê bầu không khí ấm cúng.',
          synonyms: ['Atmosphere', 'Aura', 'Mood'],
        },
        {
          id: 'd-4',
          word: 'Mindset',
          phonetic: '/ˈmaɪnd.set/',
          partOfSpeech: 'Noun',
          difficultyLevel: 'B1',
          meaningVi: 'Tư duy, thế giới quan định hình cách nghĩ',
          definitionEn: 'The established set of attitudes held by someone.',
          exampleEn: 'Developing a growth mindset helps you embrace mistakes as learning opportunities.',
          exampleVi: 'Phát triển tư duy cầu tiến giúp bạn đón nhận sai sót như cơ hội học tập.',
          synonyms: ['Attitude', 'Outlook', 'Mentality'],
        },
      ],
    },
  ];

  const currentTopic = topics.find((t) => t.id === selectedTopicId) || topics[0];
  const currentWordsList = currentTopic.words;
  const currentCard = currentWordsList[cardIndex] || currentWordsList[0];

  const handleNextCard = useCallback(() => {
    sounds.playClick();
    setIsFlipped(false);
    setCardIndex((prev) => (prev + 1 < currentWordsList.length ? prev + 1 : 0));
  }, [currentWordsList.length]);

  const handlePrevCard = useCallback(() => {
    sounds.playClick();
    setIsFlipped(false);
    setCardIndex((prev) => (prev > 0 ? prev - 1 : currentWordsList.length - 1));
  }, [currentWordsList.length]);

  // Keyboard navigation: Left/Right arrows to switch, Space to flip
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNextCard();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrevCard();
      } else if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        sounds.playClick();
        setIsFlipped((f) => !f);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNextCard, handlePrevCard]);

  const handleSpeak = (text: string) => {
    speakEnglish(text);
  };

  const handleSrsRating = (grade: 'Again' | 'Hard' | 'Good' | 'Easy') => {
    sounds.playCoin();
    updateStats(10, 1, 5);
    handleNextCard();
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Title & View Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
            <BookOpen className="h-6 w-6 text-primary-600" />
            <span>Kho Từ Vựng Chuyên Sâu Lingora</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            Phát âm chuẩn bản xứ, câu ví dụ song ngữ và cơ chế chuyển từ nhanh bằng phím mũi tên ← →
          </p>
        </div>

        {/* View mode toggle */}
        <div className="flex items-center gap-1.5 rounded-xl bg-slate-100 p-1 dark:bg-slate-800 shrink-0">
          <button
            onClick={() => setViewMode('flashcard')}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-colors ${
              viewMode === 'flashcard'
                ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-900 dark:text-white'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-400'
            }`}
          >
            Thẻ Flashcard
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-colors ${
              viewMode === 'list'
                ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-900 dark:text-white'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-400'
            }`}
          >
            Danh sách từ
          </button>
        </div>
      </div>

      {/* Topics Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {topics.map((t) => {
          const Icon = t.icon;
          const isSelected = selectedTopicId === t.id;
          return (
            <button
              key={t.id}
              onClick={() => {
                sounds.playClick();
                setSelectedTopicId(t.id);
                setCardIndex(0);
                setIsFlipped(false);
              }}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                isSelected
                  ? 'bg-primary-600 text-white border-primary-600 shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800 dark:hover:bg-slate-800'
              }`}
            >
              <Icon className={`h-4 w-4 ${isSelected ? 'text-white' : t.color}`} />
              <span>{t.title}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-white/25 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                {t.words.length}
              </span>
            </button>
          );
        })}
      </div>

      {/* FLASHCARD VIEW */}
      {viewMode === 'flashcard' && (
        <div className="space-y-4">
          {/* Progress & Counter Bar */}
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-800 dark:text-slate-200">
                Từ số {cardIndex + 1} / {currentWordsList.length}
              </span>
              <Badge variant="outline" className="text-[10px] font-bold">
                {currentCard.difficultyLevel} • {currentCard.partOfSpeech}
              </Badge>
            </div>
            <div className="text-[11px] text-slate-400 hidden sm:block">
              Mẹo: Dùng phím <strong>←</strong> và <strong>→</strong> để chuyển từ, <strong>Phím cách</strong> để lật mặt
            </div>
          </div>

          {/* Progress Line */}
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
            <div
              className="h-full bg-primary-600 transition-all duration-300 rounded-full"
              style={{ width: `${((cardIndex + 1) / currentWordsList.length) * 100}%` }}
            />
          </div>

          {/* FLASHCARD WITH BIG PREV / NEXT BUTTONS */}
          <div className="relative flex items-center justify-between gap-3 sm:gap-4">
            {/* Left Prev Arrow Button */}
            <button
              onClick={handlePrevCard}
              title="Từ trước đó (Phím ←)"
              className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-md transition-all hover:bg-slate-50 hover:scale-105 active:scale-95 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Flashcard Main Box */}
            <div
              onClick={() => {
                sounds.playClick();
                setIsFlipped(!isFlipped);
              }}
              className="relative flex-1 min-h-[340px] sm:min-h-[380px] cursor-pointer rounded-3xl border-2 border-slate-200/90 bg-white p-6 sm:p-8 text-center shadow-md transition-all hover:border-primary-400 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 flex flex-col justify-between select-none"
            >
              {!isFlipped ? (
                /* Mặt trước (Tiếng Anh + Phát âm) */
                <div className="my-auto space-y-4">
                  <div className="inline-block rounded-full bg-primary-50 px-3 py-1 text-[11px] font-semibold text-primary-700 dark:bg-primary-950/60 dark:text-primary-300">
                    Chạm hoặc nhấn phím cách để xem nghĩa
                  </div>

                  <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
                    {currentCard.word}
                  </h2>

                  <div className="flex items-center justify-center gap-3">
                    <span className="font-mono text-base text-slate-500 dark:text-slate-400">
                      {currentCard.phonetic}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSpeak(currentCard.word);
                      }}
                      title="Nghe phát âm chuẩn"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-100 text-primary-700 hover:bg-primary-200 dark:bg-primary-950 dark:text-primary-300 transition-colors"
                    >
                      <Volume2 className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="pt-2 text-xs text-slate-400">
                    Từ loại: <span className="font-semibold text-slate-600 dark:text-slate-300">{currentCard.partOfSpeech}</span>
                  </div>
                </div>
              ) : (
                /* Mặt sau (Nghĩa tiếng Việt + Định nghĩa Anh-Anh + Câu ví dụ) */
                <div className="my-auto space-y-4 animate-in fade-in">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">
                      Nghĩa Tiếng Việt
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                      {currentCard.meaningVi}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-500 italic max-w-md mx-auto">
                    "{currentCard.definitionEn}"
                  </p>

                  {/* Example Box */}
                  <div className="rounded-2xl bg-slate-50 p-4 text-left border border-slate-100 dark:bg-slate-800/60 dark:border-slate-800 space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-bold text-primary-700 dark:text-primary-400">
                      <span>Ví dụ thực tế:</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSpeak(currentCard.exampleEn);
                        }}
                        className="text-slate-400 hover:text-primary-600 flex items-center gap-1"
                      >
                        <Volume2 className="h-3.5 w-3.5" />
                        <span className="text-[10px]">Đọc câu</span>
                      </button>
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                      {currentCard.exampleEn}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {currentCard.exampleVi}
                    </div>
                  </div>

                  {/* Synonyms */}
                  {currentCard.synonyms.length > 0 && (
                    <div className="flex items-center justify-center gap-1.5 flex-wrap pt-1">
                      <span className="text-[11px] font-medium text-slate-400">Từ đồng nghĩa:</span>
                      {currentCard.synonyms.map((syn, idx) => (
                        <span
                          key={idx}
                          className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                        >
                          {syn}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Bottom footer bar inside card */}
              <div className="text-[11px] text-slate-400 font-medium pt-3 border-t border-slate-100 dark:border-slate-800/80">
                Lộ trình học theo chuẩn CEFR & Thuật toán lặp lại ngắt quãng SRS
              </div>
            </div>

            {/* Right Next Arrow Button */}
            <button
              onClick={handleNextCard}
              title="Từ tiếp theo (Phím →)"
              className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-md transition-all hover:bg-slate-50 hover:scale-105 active:scale-95 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Quick Action Navigation & SRS Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Quick Prev / Next Text Buttons */}
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={handlePrevCard} className="text-xs font-semibold">
                <ChevronLeft className="mr-1 h-4 w-4" /> Từ trước
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  sounds.playClick();
                  setIsFlipped(!isFlipped);
                }}
                className="text-xs font-semibold"
              >
                <RotateCw className="mr-1 h-4 w-4" /> Lật thẻ
              </Button>
              <Button variant="primary" size="sm" onClick={handleNextCard} className="text-xs font-semibold">
                Từ tiếp <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>

            {/* SRS Recall Grade */}
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-medium text-slate-400 mr-1">Đánh giá mức nhớ:</span>
              <button
                onClick={() => handleSrsRating('Again')}
                className="rounded-lg border border-rose-200 px-2.5 py-1 text-xs font-bold text-rose-600 hover:bg-rose-50 dark:border-rose-900 dark:hover:bg-rose-950"
              >
                Chưa nhớ
              </button>
              <button
                onClick={() => handleSrsRating('Good')}
                className="rounded-lg border border-emerald-200 px-2.5 py-1 text-xs font-bold text-emerald-600 hover:bg-emerald-50 dark:border-emerald-900 dark:hover:bg-emerald-950"
              >
                Đã thuộc (+10 XP)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* LIST VIEW */}
      {viewMode === 'list' && (
        <div className="space-y-3">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Toàn bộ {currentWordsList.length} từ vựng thuộc chủ đề: {currentTopic.title}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {currentWordsList.map((item, index) => (
              <Card
                key={item.id}
                className="p-4 border-slate-200 hover:border-primary-300 transition-all dark:border-slate-800"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">{item.word}</h4>
                      <Badge variant="outline" className="text-[10px]">{item.difficultyLevel}</Badge>
                      <span className="text-xs text-slate-400 font-mono">{item.phonetic}</span>
                    </div>
                    <div className="text-xs font-semibold text-primary-700 dark:text-primary-400 mt-1">
                      {item.meaningVi}
                    </div>
                  </div>
                  <button
                    onClick={() => handleSpeak(item.word)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                  >
                    <Volume2 className="h-4 w-4" />
                  </button>
                </div>
                <div className="mt-2 text-xs text-slate-500 italic bg-slate-50 dark:bg-slate-800/50 p-2 rounded-lg">
                  "{item.exampleEn}"
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
