import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AppLayout } from '@/layouts/AppLayout';
import { LandingPage } from '@/features/landing/LandingPage';
import { LoginPage } from '@/features/auth/LoginPage';
import { RegisterPage } from '@/features/auth/RegisterPage';
import { ForgotPasswordPage } from '@/features/auth/ForgotPasswordPage';
import { OnboardingPage } from '@/features/onboarding/OnboardingPage';
import { StudentDashboard } from '@/features/dashboard/StudentDashboard';
import { KidsHub } from '@/features/kids/KidsHub';
import { AdultsHub } from '@/features/adults/AdultsHub';
import { VocabularySystem } from '@/features/adults/vocabulary/VocabularySystem';
import { ToeicHub } from '@/features/toeic/ToeicHub';
import { IeltsHub } from '@/features/ielts/IeltsHub';
import { TestCenterHub } from '@/features/test-center/TestCenterHub';
import { AiTutorChat } from '@/features/ai-tutor/AiTutorChat';
import { UniqueFeaturesHub } from '@/features/unique-features/UniqueFeaturesHub';
import { AnalyticsPage } from '@/features/analytics/AnalyticsPage';
import { AchievementsPage } from '@/features/achievements/AchievementsPage';
import { CommunityPage } from '@/features/community/CommunityPage';
import { SettingsPage } from '@/features/settings/SettingsPage';
import { AdminDashboard } from '@/features/dashboard/AdminDashboard';
import { ParentDashboard } from '@/features/dashboard/ParentDashboard';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPasswordPage />,
  },
  {
    path: '/onboarding',
    element: <OnboardingPage />,
  },
  {
    element: <AppLayout />,
    children: [
      {
        path: '/dashboard',
        element: <StudentDashboard />,
      },
      {
        path: '/kids',
        element: <KidsHub />,
      },
      {
        path: '/adults',
        element: <AdultsHub />,
      },
      {
        path: '/vocabulary',
        element: <VocabularySystem />,
      },
      {
        path: '/toeic',
        element: <ToeicHub />,
      },
      {
        path: '/ielts',
        element: <IeltsHub />,
      },
      {
        path: '/test-center',
        element: <TestCenterHub />,
      },
      {
        path: '/ai-tutor',
        element: <AiTutorChat />,
      },
      {
        path: '/unique-features',
        element: <UniqueFeaturesHub />,
      },
      {
        path: '/analytics',
        element: <AnalyticsPage />,
      },
      {
        path: '/achievements',
        element: <AchievementsPage />,
      },
      {
        path: '/community',
        element: <CommunityPage />,
      },
      {
        path: '/settings',
        element: <SettingsPage />,
      },
      {
        path: '/admin',
        element: <AdminDashboard />,
      },
      {
        path: '/parent',
        element: <ParentDashboard />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/dashboard" replace />,
  },
]);
