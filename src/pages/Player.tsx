import { ChevronDown, MessageCircle, Video } from "lucide-react";
import ReactPlayer from "react-player";

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
          <div className="flex-1">
            <div className="w-full bg-zinc-950 aspect-video">
              <ReactPlayer
                controls
                width="100%"
                height="100%"
                url="https://www.youtube.com/watch?v=Jai8w6K_GnY"
              />
            </div>
          </div>

          <aside className="border-zinc-800 w-80 border-l">
            <div>
              <button className="flex w-full items-center gap-3 p-4 bg-zinc-800">
                <span className="flex w-10 aspect-square rounded-full items-center justify-center bg-zinc-950 text-xs">
                  1
                </span>

                <div className="flex flex-col gap-1 text-left">
                  <strong className="text-sm">Desvendando o Redux</strong>
                  <span className="text-xs text-zinc-400">12 aulas</span>
                </div>

                <ChevronDown className="w-5 aspect-square text-zinc-400 ml-auto" />
              </button>

              <nav className="relative flex-col flex gap-4 p-6">
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                  <Video className="w-4 aspect-square text-zinc-500" />
                  <span>Fundamentos do Redux</span>

                  <span className="ml-auto font-mono text-xs text-zinc-500">
                    09:13
                  </span>
                </button>
              </nav>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}
