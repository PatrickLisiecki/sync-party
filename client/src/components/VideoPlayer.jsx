import { useEffect, useState } from "react";

export default function VideoPlayer(videoId) {
  return (
    <div className="flex min-h-screen w-screen items-center justify-center">
      <iframe
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com`}
      ></iframe>
    </div>
  );
}
