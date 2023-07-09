import { MessageCircle } from "lucide-react";
import { CurrentLessonInfo } from "./CurrentLessonInfo";

interface HeaderProps {}

export function Header({}: HeaderProps): JSX.Element | null {
  return (
    <header className="flex items-center justify-between">
      <CurrentLessonInfo />

      <button
        type="button"
        className="flex items-center gap-2 rounded bg-violet-600 px-3 py-2 text-sm font-medium text-white hover:bg-violet-700 transition-colors"
      >
        <MessageCircle className="w-4 aspect-square" />
        Deixar feedback
      </button>
    </header>
  );
}
