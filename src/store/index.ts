import { create } from "zustand";
import { api } from "~/lib/axios";
import type { Course } from "~/types/Course";

export interface PlayerState {
  isLoading: boolean;
  course: Course | null;
  currentModuleIndex: number;
  currentLessonIndex: number;

  next: () => void;
  loadCourse: () => Promise<void>;
  play: (indexes: [number, number]) => void;
}

export const useStore = create<PlayerState>((set, get) => {
  return {
    course: null,
    isLoading: true,
    currentModuleIndex: 0,
    currentLessonIndex: 0,
    loadCourse: async () => {
      set({ isLoading: true });
      const { data } = await api.get<Course>("/courses/1");

      set({
        course: data,
        isLoading: false,
      });
    },
    play: ([moduleIndex, lessonIndex]: [number, number]) => {
      set({
        currentModuleIndex: moduleIndex,
        currentLessonIndex: lessonIndex,
      });
    },
    next: () => {
      const { course, currentModuleIndex, currentLessonIndex } = get();

      let nextModuleIndex = currentModuleIndex;
      let nextLessonIndex = currentLessonIndex + 1;

      if (
        course &&
        nextLessonIndex >= course.modules[currentModuleIndex].lessons.length
      ) {
        nextLessonIndex = 0;
        nextModuleIndex = currentModuleIndex + 1;

        if (nextModuleIndex >= course.modules.length) {
          nextModuleIndex = 0;
        }
      }

      set({
        currentModuleIndex: nextModuleIndex,
        currentLessonIndex: nextLessonIndex,
      });
    },
  };
});
