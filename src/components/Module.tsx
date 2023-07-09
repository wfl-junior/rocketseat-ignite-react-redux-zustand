import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronDown } from "lucide-react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "~/store";
import { play } from "~/store/slices/player";
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
  const dispatch = useDispatch();
  const { lessons, currentModuleIndex, currentLessonIndex } = useAppSelector(
    state => {
      const { course, currentModuleIndex, currentLessonIndex } = state.player;

      return {
        currentModuleIndex,
        currentLessonIndex,
        lessons: course.modules[moduleIndex].lessons,
      };
    },
  );

  return (
    <Collapsible.Root className="flex flex-col">
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
          {lessons.map((lesson, lessonIndex) => (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              duration={lesson.duration}
              onPlay={() => dispatch(play([moduleIndex, lessonIndex]))}
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
