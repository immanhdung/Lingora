import { create } from 'zustand';
import { User, UserRole, LearningProgramType } from '../types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  token: string | null;
  isEmailVerified: boolean;
  setUser: (user: User | null) => void;
  setRole: (role: UserRole) => void;
  setProgram: (program: LearningProgramType) => void;
  login: (email: string, role?: UserRole) => void;
  loginWithGoogle: () => void;
  verifyEmail: (code: string) => boolean;
  logout: () => void;
  updateStats: (xp: number, stars: number, coins: number) => void;
}

const mockDefaultUser: User = {
  id: 'usr-lingora-demo',
  email: 'learner@lingora.edu.vn',
  fullName: 'Minh Anh',
  role: 'Student',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  targetProgram: 'IELTS',
  currentLevel: 'Intermediate',
  targetScore: '7.5',
  dailyGoalMinutes: 30,
  streakDays: 14,
  totalXp: 3850,
  stars: 128,
  coins: 450,
  createdAt: '2026-01-10T00:00:00Z',
};

export const useAuthStore = create<AuthState>((set, get) => ({
  user: mockDefaultUser,
  isAuthenticated: true,
  token: 'mock-jwt-token-lingora-pro',
  isEmailVerified: true,

  setUser: (user) => set({ user, isAuthenticated: !!user }),

  setRole: (role) =>
    set((state) => ({
      user: state.user ? { ...state.user, role } : null,
    })),

  setProgram: (targetProgram) =>
    set((state) => ({
      user: state.user ? { ...state.user, targetProgram } : null,
    })),

  login: (email, role = 'Student') => {
    const newUser: User = {
      ...mockDefaultUser,
      email,
      role,
      fullName: email.includes('@') ? email.split('@')[0] : 'Học Viên Lingora',
    };
    set({
      user: newUser,
      isAuthenticated: true,
      token: 'jwt-lingora-' + Date.now(),
      isEmailVerified: true,
    });
  },

  loginWithGoogle: () => {
    const googleUser: User = {
      ...mockDefaultUser,
      email: 'google.learner@gmail.com',
      fullName: 'Google Learner (Nguyễn Văn An)',
      role: 'Student',
      avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
    };
    set({
      user: googleUser,
      isAuthenticated: true,
      token: 'google-oauth-token-' + Date.now(),
      isEmailVerified: true,
    });
  },

  verifyEmail: (code: string) => {
    // Accepts 6-digit code or demo 123456
    if (code && code.trim().length === 6) {
      set({ isEmailVerified: true });
      return true;
    }
    return false;
  },

  logout: () => {
    localStorage.removeItem('lingora_auth_token');
    set({ user: null, isAuthenticated: false, token: null });
  },

  updateStats: (xp, stars, coins) =>
    set((state) => {
      if (!state.user) return {};
      return {
        user: {
          ...state.user,
          totalXp: state.user.totalXp + xp,
          stars: state.user.stars + stars,
          coins: state.user.coins + coins,
        },
      };
    }),
}));
