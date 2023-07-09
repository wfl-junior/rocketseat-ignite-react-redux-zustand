import { PlayCircle, Video } from "lucide-react";

interface LessonProps {
  title: string;
  duration: string;
  onPlay: () => void;
  isActive?: boolean;
}

export function Lesson({
  title,
  onPlay,
  duration,
  isActive = false,
}: LessonProps): JSX.Element | null {
  return (
    <button
      onClick={onPlay}
      disabled={isActive}
      data-active={isActive}
      className="flex items-center gap-3 text-sm text-zinc-400 data-[active=true]:text-emerald-400 hover:enabled:text-zinc-100 transition-colors"
    >
      {isActive ? (
        <PlayCircle className="w-4 aspect-square text-emerald-400" />
      ) : (
        <Video className="w-4 aspect-square text-zinc-500" />
      )}

      <span>{title}</span>

      <span className="ml-auto font-mono text-xs text-zinc-500">
        {duration}
      </span>
    </button>
  );
}
