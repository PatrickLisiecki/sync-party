// Google API
const { google } = require("googleapis");

// Initialize the YouTube API library
const YT = google.youtube("v3");

// a very simple example of searching for youtube videos
async function getVideo() {
  const res = await YT.videos.list({
    key: process.env.API_KEY,
    part: "id",
    id: "42iQKuQodW4",
    maxResults: 1,
  });

  console.log(res.data.items.title);
}

if (module === require.main) {
  getVideo().catch(console.error);
}

module.exports = getVideo;
