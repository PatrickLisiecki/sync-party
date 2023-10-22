// Express server
const express = require("express");
const app = express();
const port = 4000;

// env
require("dotenv").config();

// Cors
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:5173",
  allowedHeaders: ["Content-Type", "Authorization"],
  methods: ["GET", "POST", "PATCH", "DELETE"],
  credentials: true, // Allow cookies and authentication headers to be sent with the request
};

// YT API
const getVideo = require("./api/video");

app.use(cors(corsOptions));
app.use(express.json());

app.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.originalUrl}`);
  res.on("finish", () => {
    console.log(`Response Status: ${res.statusCode}`);
  });
  next();
});

// console.log(process.env.API_KEY ? process.env.API_KEY : "KEY");

app.get("/", (req, res) => {
  res.send("Hello World!");
  getVideo();
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
