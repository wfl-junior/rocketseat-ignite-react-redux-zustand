import { Header } from "~/components/Header";
import { Module } from "~/components/Module";
import { VideoPlayer } from "~/components/VideoPlayer";

interface PlayerProps {}

export function Player({}: PlayerProps): JSX.Element | null {
  return (
    <div className="text-zinc-50 bg-zinc-950 min-h-screen flex items-center justify-center">
      <div className="flex w-[1100px] flex-col gap-6">
        <Header />

        <main className="flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow">
          <div className="flex-1">
            <VideoPlayer />
          </div>

          <aside className="border-zinc-800 w-80 border-l relative">
            <div className="absolute inset-0 overflow-y-auto scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-700 divide-y-2 divide-zinc-900 flex flex-col">
              <Module
                number={1}
                amountOfLessons={3}
                title="Desvendando o Redux"
              />

              <Module
                number={2}
                amountOfLessons={3}
                title="Desvendando o Redux"
              />
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}
