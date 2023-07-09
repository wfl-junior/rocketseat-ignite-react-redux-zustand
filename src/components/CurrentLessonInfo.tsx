import { useCurrentLesson } from "~/hooks/useCurrentLesson";

interface CurrentLessonInfoProps {}

export function CurrentLessonInfo({}: CurrentLessonInfoProps): JSX.Element | null {
  const { currentModule, currentLesson } = useCurrentLesson();

  if (!currentModule || !currentLesson) {
    return null;
  }

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentLesson.title}</h1>

      <span className="text-sm text-zinc-400">
        Módulo "{currentModule.title}"
      </span>
    </div>
  );
}
