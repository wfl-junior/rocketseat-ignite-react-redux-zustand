import ReactPlayer from "react-player";
import { useDispatch } from "react-redux";
import { useAppSelector } from "~/store";
import { next } from "~/store/slices/player";

interface VideoPlayerProps {}

export function VideoPlayer({}: VideoPlayerProps): JSX.Element | null {
  const dispatch = useDispatch();
  const currentLessonId = useAppSelector(state => {
    const { course, currentModuleIndex, currentLessonIndex } = state.player;
    return course.modules[currentModuleIndex].lessons[currentLessonIndex].id;
  });

  function handlePlayNext() {
    dispatch(next());
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        // playing
        controls
        width="100%"
        height="100%"
        onEnded={handlePlayNext}
        url={`https://www.youtube.com/watch?v=${currentLessonId}`}
      />
    </div>
  );
}
