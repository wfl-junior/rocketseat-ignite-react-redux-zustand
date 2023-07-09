import { MessageCircle } from "lucide-react";

interface PlayerProps {}

export function Player({}: PlayerProps): JSX.Element | null {
  return (
    <div className="text-zinc-50 bg-zinc-950 min-h-screen flex items-center justify-center">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
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
        </div>

        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow">
          <div className="flex-1">video</div>

          <aside className="border-zinc-800 h-[600px] w-80 border-l"></aside>
        </main>
      </div>
    </div>
  );
}
