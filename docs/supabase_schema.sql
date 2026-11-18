-- ====================================================================
-- LINGORA — SUPABASE POSTGRESQL PRODUCTION DATABASE SCHEMA
-- Compatible with PostgreSQL 15+ / Supabase PostgreSQL & Npgsql EF Core
-- ====================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. USERS & IDENTITY
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(256) NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    full_name VARCHAR(128) NOT NULL,
    role VARCHAR(32) NOT NULL DEFAULT 'Student', -- Student, Parent, Admin
    avatar_url TEXT,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS user_profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
    target_program VARCHAR(32) NOT NULL DEFAULT 'IELTS', -- Kids, General, TOEIC, IELTS
    current_level VARCHAR(32) NOT NULL DEFAULT 'Intermediate',
    target_score VARCHAR(32) NOT NULL DEFAULT '7.5',
    daily_goal_minutes INT NOT NULL DEFAULT 30,
    streak_days INT NOT NULL DEFAULT 1,
    total_xp INT NOT NULL DEFAULT 0,
    stars INT NOT NULL DEFAULT 0,
    coins INT NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS refresh_tokens (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    token TEXT NOT NULL,
    expires_at TIMESTAMPTZ NOT NULL,
    is_revoked BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_refresh_tokens_token ON refresh_tokens(token);

-- 2. VOCABULARY & SM-2 SPACED REPETITION (SRS)
CREATE TABLE IF NOT EXISTS vocabulary_topics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(128) NOT NULL,
    slug VARCHAR(128) NOT NULL UNIQUE,
    icon VARCHAR(32) DEFAULT '📚',
    description TEXT
);

CREATE TABLE IF NOT EXISTS vocabulary_words (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    topic_id UUID NOT NULL REFERENCES vocabulary_topics(id) ON DELETE CASCADE,
    word VARCHAR(128) NOT NULL,
    phonetic VARCHAR(128) NOT NULL,
    audio_url TEXT,
    meaning_vi TEXT NOT NULL,
    definition_en TEXT NOT NULL,
    example_en TEXT NOT NULL,
    example_vi TEXT NOT NULL,
    part_of_speech VARCHAR(32) DEFAULT 'Noun',
    difficulty_level VARCHAR(16) DEFAULT 'B1'
);
CREATE INDEX IF NOT EXISTS idx_vocab_words_word ON vocabulary_words(word);

CREATE TABLE IF NOT EXISTS user_vocabulary_srs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    word_id UUID NOT NULL REFERENCES vocabulary_words(id) ON DELETE CASCADE,
    state VARCHAR(32) NOT NULL DEFAULT 'New', -- New, Learning, Review, Mastered
    repetitions INT NOT NULL DEFAULT 0,
    interval_days DOUBLE PRECISION NOT NULL DEFAULT 1,
    ease_factor DOUBLE PRECISION NOT NULL DEFAULT 2.5,
    next_review_date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ,
    CONSTRAINT uq_user_word UNIQUE (user_id, word_id)
);
CREATE INDEX IF NOT EXISTS idx_user_vocab_srs_due ON user_vocabulary_srs(user_id, next_review_date);

-- 3. KIDS GAMIFICATION & PET COMPANION
CREATE TABLE IF NOT EXISTS kids_worlds (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(128) NOT NULL,
    vietnamese_name VARCHAR(128) NOT NULL,
    slug VARCHAR(128) NOT NULL UNIQUE,
    icon VARCHAR(32) DEFAULT '🦁',
    description TEXT,
    order_index INT NOT NULL DEFAULT 1,
    required_stars INT NOT NULL DEFAULT 0,
    theme_color VARCHAR(32) DEFAULT '#F59E0B',
    bg_gradient VARCHAR(128) DEFAULT 'from-amber-400 to-orange-500',
    levels_count INT NOT NULL DEFAULT 6
);

CREATE TABLE IF NOT EXISTS user_pets (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(64) NOT NULL DEFAULT 'Lingokid',
    type VARCHAR(32) NOT NULL DEFAULT 'fox',
    level INT NOT NULL DEFAULT 1,
    exp INT NOT NULL DEFAULT 0,
    happiness INT NOT NULL DEFAULT 100,
    stage VARCHAR(32) NOT NULL DEFAULT 'baby',
    accessory VARCHAR(64)
);

-- 4. TOEIC & IELTS EXAMINATION ENGINE
CREATE TABLE IF NOT EXISTS toeic_tests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(256) NOT NULL,
    year INT NOT NULL DEFAULT 2026,
    duration_minutes INT NOT NULL DEFAULT 120,
    total_questions INT NOT NULL DEFAULT 200,
    difficulty VARCHAR(32) DEFAULT 'Medium'
);

CREATE TABLE IF NOT EXISTS toeic_questions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    test_id UUID NOT NULL REFERENCES toeic_tests(id) ON DELETE CASCADE,
    part_number INT NOT NULL,
    question_number INT NOT NULL,
    image_url TEXT,
    audio_url TEXT,
    passage_text TEXT,
    question_text TEXT NOT NULL,
    options_json JSONB NOT NULL DEFAULT '[]',
    correct_answer VARCHAR(4) NOT NULL,
    explanation_vi TEXT NOT NULL,
    transcript_en TEXT
);

CREATE TABLE IF NOT EXISTS writing_submissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    task_type VARCHAR(32) NOT NULL, -- Task 1, Task 2
    prompt TEXT NOT NULL,
    essay_text TEXT NOT NULL,
    band_score NUMERIC(3,1) NOT NULL,
    tr_score NUMERIC(3,1) NOT NULL,
    cc_score NUMERIC(3,1) NOT NULL,
    lr_score NUMERIC(3,1) NOT NULL,
    gra_score NUMERIC(3,1) NOT NULL,
    feedback_json JSONB NOT NULL DEFAULT '{}',
    improved_essay TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS speaking_sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    part_number INT NOT NULL,
    topic TEXT NOT NULL,
    transcript TEXT NOT NULL,
    overall_band NUMERIC(3,1) NOT NULL,
    fluency_score NUMERIC(3,1) NOT NULL,
    lexical_score NUMERIC(3,1) NOT NULL,
    grammar_score NUMERIC(3,1) NOT NULL,
    pronunciation_score NUMERIC(3,1) NOT NULL,
    feedback_json JSONB NOT NULL DEFAULT '{}',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 5. AI TUTOR CONVERSATIONS & MISTAKE DNA
CREATE TABLE IF NOT EXISTS ai_conversations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    persona VARCHAR(64) NOT NULL DEFAULT 'Friendly',
    title VARCHAR(256) NOT NULL DEFAULT 'Conversation',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS ai_messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    conversation_id UUID NOT NULL REFERENCES ai_conversations(id) ON DELETE CASCADE,
    sender VARCHAR(16) NOT NULL, -- user or ai
    message_text TEXT NOT NULL,
    corrections_json JSONB,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS user_mistake_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    category VARCHAR(64) NOT NULL, -- Tenses, Prepositions, Articles, Vocab
    question_context TEXT NOT NULL,
    user_answer TEXT NOT NULL,
    correct_answer TEXT NOT NULL,
    explanation_vi TEXT NOT NULL,
    resolved BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_mistakes_user_cat ON user_mistake_logs(user_id, category);
