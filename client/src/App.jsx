// import socketIO from "socket.io-client";
// const socket = socketIO.connect("http://localhost:4000");

import { useState } from "react";
import Navbar from "./components/Navbar";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  const [link, setLink] = useState("");
  const [videoId, setVideoId] = useState("");
  const [chatMessage, setChatMessage] = useState("");

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
    <main className="flex min-h-screen w-full flex-col bg-secondary">
      <Navbar link={link} handleLinkChange={handleLinkChange} />
      <section className="flex w-full flex-grow flex-row justify-between bg-red-300">
        <VideoPlayer videoId={videoId} />
        <aside className="flex min-w-[400px] bg-primary p-2">
          <div className="flex h-full w-full flex-col justify-start rounded-md bg-secondary">
            <form className="mx-2 mb-2 mt-auto">
              <div className="flex h-[60px] w-full flex-row rounded-md bg-primary p-3">
                <input
                  type="text"
                  name="chatMsg"
                  id="chatMsg"
                  placeholder="Start typing..."
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  className="h-full flex-grow bg-inherit focus:outline-none"
                ></input>
                <button
                  type="submit"
                  className="h-[40px] w-[40px] rounded-full text-center text-xl text-white hover:bg-red-500"
                >
                  +
                </button>
              </div>
            </form>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default App;
