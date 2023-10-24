import socketIO from "socket.io-client";
const socket = socketIO.connect("http://localhost:4000");

import { useState } from "react";
import Navbar from "./components/Navbar";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  const [link, setLink] = useState("");
  const [videoId, setVideoId] = useState("");

  const handleLinkChange = (newLink) => {
    setLink(newLink);
    getVideoId(newLink);
  };

  const getVideoId = (url) => {
    // Regex for extracting the video Id from a YouTube link such as this: https://www.youtube.com/watch?v=QQ5FZ0YCPZ0
    const regex = /v=([A-Za-z0-9_-]+)/;

    // Look for matches in the url
    const match = regex.exec(url);

    // Check if a video Id was extracted
    if (match) {
      const videoId = match[1]; // Get all the characters after "v="

      console.log("Video Id:", videoId);

      setVideoId(videoId);
    } else {
      console.log("Video Id was not found!");
    }
  };

  return (
    <>
      <Navbar link={link} handleLinkChange={handleLinkChange} />
      <VideoPlayer videoId={videoId} />
    </>
  );
}

export default App;
