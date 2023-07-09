import { useEffect } from "react";
import { Header } from "~/components/Header";
import { Module } from "~/components/Module";
import { VideoPlayer } from "~/components/VideoPlayer";
import { useAppDispatch, useAppSelector } from "~/store";
import { loadCourse } from "~/store/slices/player";

interface PlayerProps {}

export function Player({}: PlayerProps): JSX.Element | null {
  const dispatch = useAppDispatch();
  const { modules, currentModuleTitle, currentLessonTitle } = useAppSelector(
    state => {
      const { course, currentModuleIndex, currentLessonIndex } = state.player;

      return {
        modules: state.player.course?.modules,
        currentModuleTitle: course?.modules[currentModuleIndex].title,
        currentLessonTitle:
          course?.modules[currentModuleIndex].lessons[currentLessonIndex].title,
      };
    },
  );

  useEffect(() => {
    if (!currentLessonTitle || !currentModuleTitle) return;
    document.title = `${currentLessonTitle} - ${currentModuleTitle}`;
  }, [currentLessonTitle, currentModuleTitle]);

  useEffect(() => {
    dispatch(loadCourse());
  }, [dispatch]);

  return (
    <div className="text-zinc-50 bg-zinc-950 min-h-screen flex items-center justify-center">
      {modules ? (
        <div className="flex w-[1100px] flex-col gap-6">
          <Header />

          <main className="flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow">
            <div className="flex-1">
              <VideoPlayer />
            </div>

            <aside className="border-zinc-800 w-80 border-l relative">
              <div className="absolute inset-0 overflow-y-auto scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-700 divide-y-2 divide-zinc-900 flex flex-col">
                {modules.map((module, index) => (
                  <Module
                    key={module.id}
                    moduleIndex={index}
                    title={module.title}
                    amountOfLessons={module.lessons.length}
                  />
                ))}
              </div>
            </aside>
          </main>
        </div>
      ) : null}
    </div>
  );
}
