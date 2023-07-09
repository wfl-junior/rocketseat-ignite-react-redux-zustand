import { useAppSelector } from "~/store";

interface CurrentVideoInfoProps {}

export function CurrentVideoInfo({}: CurrentVideoInfoProps): JSX.Element | null {
  const { currentModuleTitle, currentLessonTitle } = useAppSelector(state => {
    const { course, currentModuleIndex, currentLessonIndex } = state.player;
    const currentModule = course.modules[currentModuleIndex];

    return {
      currentModuleTitle: currentModule.title,
      currentLessonTitle: currentModule.lessons[currentLessonIndex].title,
    };
  });

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentLessonTitle}</h1>

      <span className="text-sm text-zinc-400">
        Módulo "{currentModuleTitle}"
      </span>
    </div>
  );
}
