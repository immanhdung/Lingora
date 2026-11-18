# LINGORA — AI-Powered English Learning Platform
> **"Learn English. Play. Practice. Evolve."**  
> Nền tảng học tiếng Anh thông minh thế hệ mới kết hợp Gamification Duolingo, Thẻ từ vựng SRS Quizlet, Phòng thi AI Speaking & Khảo thí chuẩn TOEIC / IELTS.

---

## 🌟 Tổng Quan Hệ Thống

LINGORA là một nền tảng EdTech SaaS toàn diện, đáp ứng nhu cầu học tiếng Anh từ Trẻ em (5–12 tuổi), Người đi làm / Giao tiếp đời sống, Luyện thi TOEIC 800+ đến Luyện thi IELTS 7.5+.

- **Giao diện người dùng**: 100% Tiếng Việt thân thiện, hiện đại, hỗ trợ Dark / Light mode và Aurora gradients.
- **Nội dung giáo trình**: Tiếng Anh chuẩn quốc tế kèm phiên âm IPA, audio phát âm và giải thích song ngữ Anh - Việt.

---

## 🏗️ Kiến Trúc Công Nghệ

### 1. Frontend
- **Framework**: React 18 / TypeScript / Vite
- **Styling**: Tailwind CSS + Custom Design System tokens + Aurora gradients
- **Icons & Animation**: Lucide React + Canvas Confetti + Web Audio Sound Engine
- **State Management**: Zustand (Auth, Theme, Learning) + TanStack Query
- **Routing**: React Router DOM (Hỗ trợ phân quyền Student, Parent, Admin)
- **Charts**: Recharts (Phân tích giờ học, Radar năng lực 4 kỹ năng)
- **Speech Engine**: Web Speech Synthesis (TTS) & WebkitSpeechRecognition (STT)

### 2. Backend (Clean Architecture)
- **Language & Framework**: C# / ASP.NET Core Web API (.NET 8.0 / 10.0)
- **Structure**:
  - `Lingora.Domain`: Entities, Enums, Value Objects
  - `Lingora.Application`: DTOs, Service Interfaces, Validation
  - `Lingora.Infrastructure`: EF Core, Npgsql PostgreSQL Provider, JWT & Refresh Token Rotation, Gemini AI Client
  - `Lingora.API`: Thin Controllers, Middleware, Swagger Bearer Auth, Serilog
- **Authentication**: JWT Access Token + Salted PBKDF2/SHA256 Password Hashing + Refresh Token Rotation

### 3. Cơ Sở Dữ Liệu
- **Database**: Supabase PostgreSQL (hoặc PostgreSQL thông qua Npgsql / EF Core Migrations)
- **Schema**: Xem chi tiết tại [supabase_schema.sql](file:///d:/PROJECT%20VIBE%20CODE/LINGORA/docs/supabase_schema.sql)

---

## 🚀 Các Tính Năng Đã Triển Khai Hoàn Chỉnh

### 1. English for Kids (Module A)
- **10 Vương Quốc Kỳ Thú**: Chữ cái, Động vật, Ẩm thực, Màu sắc, Con số, Gia đình, Trường học, Đời sống, Thiên nhiên, Vũ trụ.
- **Bộ 10 Trò Chơi Tương Tác Có Thể Chơi Thực Tế**:
  1. *Word Matching*: Kéo/chọn cặp từ tiếng Anh và nghĩa tiếng Việt.
  2. *Picture Guessing*: Đoán hình ảnh và nghe phát âm chuẩn.
  3. *Listen & Choose*: Nghe âm thanh từ vựng và chọn bức tranh đúng.
  4. *Spelling Challenge*: Sắp xếp các khối chữ cái thành từ vựng hoàn chỉnh.
  5. *Memory Cards*: Lật thẻ tìm cặp từ - tranh tương ứng.
  6. *Word Shooting*: Bắn bong bóng từ vựng mục tiêu với hệ số combo điểm.
  7. *Sentence Builder*: Ghép các khối từ thành câu hoàn chỉnh đúng ngữ pháp.
  8. *Pronunciation Challenge*: Thu âm giọng nói của bé và chấm điểm phát âm.
  9. *Treasure Hunt*: Giải câu đố tại 3 chặng để mở Rương kho báu bí mật.
  10. *Daily Quiz*: Thử thách 5 câu mỗi ngày để giữ streak.
- **Thú Cưng Đồng Hành (Pet Companion)**: Nuôi thú (Cáo Lingokid), độ vui vẻ, tăng cấp, tiến hóa và cửa hàng phụ kiện bằng Xu.

### 2. General English for Adults (Module B)
- **16 Chủ đề từ vựng**: Du lịch, Công sở, Công nghệ, Đời sống, Tài chính,...
- **Thẻ Flashcard Song Ngữ**: Phiên âm IPA, ví dụ thực tế và audio phát âm.
- **Spaced Repetition System (SRS)**: Thuật toán SM-2 tự động phân bổ lịch ôn (Again, Hard, Good, Easy).
- **Ngữ Pháp Toàn Diện**: Cấp độ Cơ bản, Trung cấp và Nâng cao (Đảo ngữ C1-C2) kèm công thức, lỗi sai thường gặp và bài tập chấm điểm tức thì.

### 3. TOEIC & IELTS Modules (Modules C & D)
- **TOEIC Center**:
  - Listening Part 1–4 (Hình ảnh, câu hỏi ngắn, hội thoại) kèm transcript và audio.
  - Reading Part 5–7 (Điền câu, đọc hiểu đoạn văn) kèm giải thích chi tiết.
  - Dự đoán điểm TOEIC theo chuẩn ETS (10–990).
- **IELTS Speaking Room (Core Feature)**:
  - Giám khảo AI Sarah với sóng âm thanh chân thực.
  - Part 1, Part 2 (Cue Card với đồng hồ 1 phút chuẩn bị và 2 phút nói), Part 3.
  - Thu âm trực tiếp và chấm điểm theo 4 tiêu chí (Fluency, Lexical, Grammar, Pronunciation).
- **IELTS Writing Evaluator**:
  - Chấm chữa bài luận Task 1 & Task 2 theo 4 tiêu chí chính thức.
  - Chỉ ra điểm mạnh, điểm yếu, sửa lỗi ngữ pháp và viết lại bài mẫu Band 8.5.

### 4. Trung Tâm Khảo Thí (Test Center)
- **Full Mock Test**: Đề thi chuẩn ETS & Cambridge, đồng hồ đếm ngược, bảng câu hỏi (Question Palette), đánh dấu cờ (Flag), tự động lưu bài làm và bảng điểm chi tiết.

### 5. Bộ Tính Năng Đột Phá AI Studio
- **English Life Simulator**: Nhập vai giao tiếp tại Nhà hàng, Sân bay, Phỏng vấn xin việc.
- **Shadowing Studio**: Luyện ngữ điệu theo câu mẫu và chấm tỷ lệ tương đồng.
- **Word Universe**: Bản đồ mạng lưới từ vựng kết nối ngữ nghĩa 2D.
- **Mistake DNA**: Phân tích biểu đồ điểm yếu cá nhân (Giới từ, mạo từ, thì).
- **English Diary with AI**: Viết nhật ký hàng ngày và AI biên tập lại chuẩn bản xứ.
- **Focus Mode**: Đồng hồ Pomodoro 25 phút kèm âm thanh mưa và quán cafe.

---

## 🛠️ Hướng Dẫn Cài Đặt & Chạy Ứng Dụng

### 1. Khởi Chạy Frontend
```bash
cd frontend
npm install
npm run dev
```
Ứng dụng sẽ chạy tại: `http://localhost:5173`

### 2. Khởi Chạy Backend
```bash
cd backend
dotnet restore Lingora.sln
dotnet build Lingora.sln
dotnet run --project src/Lingora.API/Lingora.API.csproj
```
Swagger UI sẽ khả dụng tại: `http://localhost:5000/swagger`

---

## 👥 Tài Khoản Mẫu Đăng Nhập Nhanh

| Vai Trò | Email | Mật Khẩu | Quyền Hạn |
| :--- | :--- | :--- | :--- |
| **Học Viên (Student)** | `student@lingora.edu.vn` | `LingoraStudent2026!` | Học bài, luyện thi, nuôi thú cưng, luyện AI |
| **Phụ Huynh (Parent)** | `parent@lingora.edu.vn` | `LingoraParent2026!` | Giám sát giờ học của con, thiết lập an toàn |
| **Quản Trị (Admin)** | `admin@lingora.edu.vn` | `LingoraAdmin2026!` | Quản lý người dùng, khóa học, đề thi, AI config |

---

## 📄 Tài Liệu Tham Khảo Thêm
- [System Architecture](file:///d:/PROJECT%20VIBE%20CODE/LINGORA/docs/ARCHITECTURE.md)
- [Database ERD](file:///d:/PROJECT%20VIBE%20CODE/LINGORA/docs/DATABASE_ERD.md)
- [API Specification](file:///d:/PROJECT%20VIBE%20CODE/LINGORA/docs/API_SPECIFICATION.md)
- [Test Verification Report](file:///d:/PROJECT%20VIBE%20CODE/LINGORA/docs/TEST_RESULTS.md)
- [Deployment Guide](file:///d:/PROJECT%20VIBE%20CODE/LINGORA/docs/DEPLOYMENT.md)
