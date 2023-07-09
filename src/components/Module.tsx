import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronDown } from "lucide-react";
import { useStore } from "~/zustand-store";
import { Lesson } from "./Lesson";

interface ModuleProps {
  title: string;
  moduleIndex: number;
  amountOfLessons: number;
}

export function Module({
  title,
  moduleIndex,
  amountOfLessons,
}: ModuleProps): JSX.Element | null {
  const { currentModuleIndex, currentLessonIndex, play, lessons } = useStore(
    store => ({
      play: store.play,
      currentModuleIndex: store.currentModuleIndex,
      currentLessonIndex: store.currentLessonIndex,
      lessons: store.course?.modules[moduleIndex].lessons,
    }),
  );

  return (
    <Collapsible.Root className="flex flex-col" defaultOpen={moduleIndex === 0}>
      <Collapsible.Trigger className="flex w-full items-center gap-3 p-4 bg-zinc-800 group">
        <span className="flex w-10 aspect-square rounded-full items-center justify-center bg-zinc-950 text-xs">
          {moduleIndex + 1}
        </span>

        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>

          <span className="text-xs text-zinc-400">
            {amountOfLessons} aula{amountOfLessons !== 1 && "s"}
          </span>
        </div>

        <ChevronDown className="w-5 aspect-square text-zinc-400 ml-auto transition-transform group-aria-[expanded=true]:rotate-180" />
      </Collapsible.Trigger>

      <Collapsible.Content>
        <nav className="relative flex-col flex gap-4 p-6">
          {lessons?.map((lesson, lessonIndex) => (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              duration={lesson.duration}
              onPlay={() => play([moduleIndex, lessonIndex])}
              isActive={
                moduleIndex === currentModuleIndex &&
                lessonIndex === currentLessonIndex
              }
            />
          ))}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
