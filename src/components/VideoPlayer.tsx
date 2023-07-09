import ReactPlayer from "react-player";
import { useStore } from "~/zustand-store";

interface VideoPlayerProps {}

export function VideoPlayer({}: VideoPlayerProps): JSX.Element | null {
  const next = useStore(store => store.next);
  const currentLessonId = useStore(store => {
    const { course, currentModuleIndex, currentLessonIndex } = store;
    return course?.modules[currentModuleIndex].lessons[currentLessonIndex].id;
  });

  if (!currentLessonId) {
    return null;
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        // playing
        controls
        width="100%"
        height="100%"
        onEnded={next}
        url={`https://www.youtube.com/watch?v=${currentLessonId}`}
      />
    </div>
  );
}
