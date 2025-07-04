import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const createNote = async () => {
    const res = await API.post("/notes", { title });
    navigate(`/note/${res.data._id}`);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create a New Note</h1>
      <input
        type="text"
        placeholder="Enter note title"
        className="w-full border p-2 mb-4"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={createNote}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Create Note
      </button>
    </div>
  );
}
