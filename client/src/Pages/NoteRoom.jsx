// src/pages/NoteRoom.jsx

import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";
import API from "../api";

export default function NoteRoom() {
  const { id } = useParams(); // Note ID from URL
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const socketRef = useRef(null);
  const typingTimeout = useRef(null);

  useEffect(() => {
    socketRef.current = io("https://real-time-note-app-1.onrender.com");
    socketRef.current.emit("join_note", id);
    API.get(`/notes/${id}`).then((res) => {
      setContent(res.data.content || "");
      setTitle(res.data.title || "Untitled Note");
    });

    socketRef.current.on("note_update", (newContent) => {
      setContent(newContent);
    });

    return () => {
      socketRef.current.off("note_update");
    };
  }, [id]);

  const handleChange = (e) => {
    const value = e.target.value;
    setContent(value);

    socketRef.current.emit("note_update", { noteId: id, content: value });

    clearTimeout(typingTimeout.current);
    typingTimeout.current = setTimeout(() => {
      API.put(`/notes/${id}`, { content: value });
    }, 1000);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">{title}</h1>
      <textarea
        value={content}
        onChange={handleChange}
        placeholder="Start typing your note here..."
        className="w-full h-[500px] border border-gray-300 p-4 rounded resize-none font-mono text-base"
      />
    </div>
  );
}
