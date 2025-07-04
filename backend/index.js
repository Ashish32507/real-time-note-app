const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");

dotenv.config();

const app = express();
const server = http.createServer(app);

// Enable CORS for frontend
const io = new Server(server, {
  cors: {
    origin: "https://real-time-note-app-indol.vercel.app",
    methods: ["GET", "POST"],
  },
});

app.use(cors());
app.use(express.json());

// Routes
app.use("/notes", require("./routes/noteRoutes"));

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// Real-time Collaboration with Socket.IO
io.on("connection", (socket) => {
  console.log(`🔌 User connected: ${socket.id}`);

  socket.on("join_note", (noteId) => {
    console.log(`🛎️ ${socket.id} joined room: ${noteId}`);
    socket.join(noteId);
  });

  socket.on("note_update", ({ noteId, content }) => {
    console.log(`✏️ ${socket.id} updated note ${noteId}`);
    socket.to(noteId).emit("note_update", content);
  });

  socket.on("disconnect", () => {
    console.log(`❌ Disconnected: ${socket.id}`);
  });
});

// ======== Serve React Frontend from Vite Build ========
app.use(express.static(path.resolve(__dirname, "../client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/dist/index.html"));
});
// =======================================================

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
