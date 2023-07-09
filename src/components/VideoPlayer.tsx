import ReactPlayer from "react-player";
import { useAppSelector } from "~/store";

interface VideoPlayerProps {}

export function VideoPlayer({}: VideoPlayerProps): JSX.Element | null {
  const currentLessonId = useAppSelector(state => {
    const { course, currentModuleIndex, currentLessonIndex } = state.player;
    return course.modules[currentModuleIndex].lessons[currentLessonIndex].id;
  });

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        controls
        width="100%"
        height="100%"
        url={`https://www.youtube.com/watch?v=${currentLessonId}`}
      />
    </div>
  );
}
