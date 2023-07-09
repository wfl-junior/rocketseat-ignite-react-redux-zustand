import { useStore } from "~/store";

export function useCurrentLesson() {
  return useStore(store => {
    const { currentModuleIndex, currentLessonIndex, course } = store;
    const currentModule = course?.modules[currentModuleIndex];

    return {
      currentModule,
      currentLesson: currentModule?.lessons[currentLessonIndex],
    };
  });
}
