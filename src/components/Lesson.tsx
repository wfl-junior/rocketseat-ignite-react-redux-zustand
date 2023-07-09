import { Video } from "lucide-react";

interface LessonProps {
  title: string;
  duration: string;
}

export function Lesson({ title, duration }: LessonProps): JSX.Element | null {
  return (
    <button className="flex items-center gap-3 text-sm text-zinc-400">
      <Video className="w-4 aspect-square text-zinc-500" />
      <span>{title}</span>

      <span className="ml-auto font-mono text-xs text-zinc-500">
        {duration}
      </span>
    </button>
  );
}
