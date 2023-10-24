import { useEffect, useState } from "react";

export default function VideoPlayer(videoId) {
  return (
    <div className="flex h-48 min-w-[640px] items-center justify-center bg-blue-200">
      {/* <iframe
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com`}
      ></iframe> */}
    </div>
  );
}
