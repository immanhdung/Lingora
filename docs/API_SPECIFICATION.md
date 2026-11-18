# LINGORA — RESTful API Specification

Base URL: `/api/v1`  
All protected routes require standard header: `Authorization: Bearer <JWT_ACCESS_TOKEN>`.

---

## 1. Authentication & Users
- `POST /api/v1/auth/register` — Register new user (email, password, fullName, role).
- `POST /api/v1/auth/login` — Sign in, returns JWT Access Token + Refresh Token.
- `POST /api/v1/auth/refresh` — Refresh expired JWT token with valid refresh token.
- `GET /api/v1/auth/me` — Get current authenticated user profile, stats & progress.

## 2. Vocabulary & Spaced Repetition (SRS)
- `GET /api/v1/vocabulary/topics` — List all vocabulary categories with word counts.
- `GET /api/v1/vocabulary/words?topicId={id}` — Get words for a topic with user's SRS states.
- `POST /api/v1/vocabulary/srs/review` — Submit flashcard recall score (0-5) to recalculate ease factor and review interval.

## 3. Kids Universe
- `GET /api/v1/kids/worlds` — List 10 animated worlds and star unlock requirements.

## 4. AI Features & Evaluation
- `POST /api/v1/ai/tutor/chat` — Chat with AI Tutor across 5 personas with grammar breakdown.
- `POST /api/v1/ai/writing/evaluate` — Submit Task 1 or Task 2 essay for AI assessment across 4 criteria.
- `POST /api/v1/ai/speaking/evaluate` — Submit recorded speaking session transcript for Cambridge band scoring.
