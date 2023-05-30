import React from "react";
import YouTube from "react-youtube";

interface YoutubeVideoProps {
  videoId: string;
}

const YoutubeVideo: React.FC<YoutubeVideoProps> = ({ videoId }) => {
  const containerClasses =
    "w-full md:w-1/5 h-48 bg-slate-950/80 rounded-md border border-amber-950 p-4";
  const videoClasses = "w-full h-full rounded-md";

  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 0,
      controls: 1, // Activar controles de reproducción
      mute: 1,
    },
  };

  return (
    <div className={containerClasses}>
      <div className={videoClasses}>
        <YouTube videoId={videoId} opts={opts} />
      </div>
    </div>
  );
};

export default YoutubeVideo;
