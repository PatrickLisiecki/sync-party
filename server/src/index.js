require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { join } = require("path");
const { createServer } = require("http");
const { Server } = require("socket.io");

// Create httpServer from express app
const app = express();
app.use(cors());
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "DELETE"],
  },
});

const PORT = 4000;

// app.use((req, res, next) => {
//   console.log(`Request: ${req.method} ${req.originalUrl}`);
//   res.on("finish", () => {
//     console.log(`Response Status: ${res.statusCode}`);
//   });
//   next();
// });

app.get("/", (req, res) => {
  // res.sendFile(join(__dirname, "../../client/index.html"));
  res.send("Hello World!");
});

io.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  socket.on("disconnect", () => {
    console.log("🔥: A user disconnected");
  });
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
