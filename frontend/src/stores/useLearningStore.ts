import { create } from 'zustand';
import { KidsPet } from '../types';

interface LearningState {
  pet: KidsPet;
  unlockedWorlds: string[];
  completedLessonIds: string[];
  feedPet: () => boolean;
  levelUpPet: () => void;
  unlockWorld: (worldId: string) => void;
  completeLesson: (lessonId: string) => void;
}

export const useLearningStore = create<LearningState>((set, get) => ({
  pet: {
    name: 'Lingokid',
    type: 'fox',
    level: 3,
    exp: 240,
    happiness: 95,
    stage: 'baby',
    accessory: 'Mũ Phù Thủy Vàng',
  },
  unlockedWorlds: ['world-alphabet', 'world-animals', 'world-food', 'world-colors'],
  completedLessonIds: ['lesson-1', 'lesson-2'],

  feedPet: () => {
    const current = get().pet;
    if (current.happiness >= 100) return false;
    set({
      pet: {
        ...current,
        happiness: Math.min(100, current.happiness + 15),
        exp: current.exp + 20,
      },
    });
    return true;
  },

  levelUpPet: () => {
    const current = get().pet;
    const nextLevel = current.level + 1;
    let nextStage = current.stage;
    if (nextLevel >= 10) nextStage = 'legendary';
    else if (nextLevel >= 5) nextStage = 'teen';

    set({
      pet: {
        ...current,
        level: nextLevel,
        stage: nextStage,
      },
    });
  },

  unlockWorld: (worldId: string) => {
    set((state) => ({
      unlockedWorlds: state.unlockedWorlds.includes(worldId)
        ? state.unlockedWorlds
        : [...state.unlockedWorlds, worldId],
    }));
  },

  completeLesson: (lessonId: string) => {
    set((state) => ({
      completedLessonIds: state.completedLessonIds.includes(lessonId)
        ? state.completedLessonIds
        : [...state.completedLessonIds, lessonId],
    }));
  },
}));
