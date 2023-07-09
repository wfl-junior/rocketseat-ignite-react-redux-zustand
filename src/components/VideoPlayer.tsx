import ReactPlayer from "react-player";

interface VideoPlayerProps {}

export function VideoPlayer({}: VideoPlayerProps): JSX.Element | null {
  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        controls
        width="100%"
        height="100%"
        url="https://www.youtube.com/watch?v=Jai8w6K_GnY"
      />
    </div>
  );
}
