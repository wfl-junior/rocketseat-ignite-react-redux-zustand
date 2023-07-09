import { MessageCircle } from "lucide-react";

interface HeaderProps {}

export function Header({}: HeaderProps): JSX.Element | null {
  return (
    <header className="flex items-center justify-between">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">Fundamentos do Redux</h1>

        <span className="text-sm text-zinc-400">
          Módulo "Desvendando o Redux"
        </span>
      </div>
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
