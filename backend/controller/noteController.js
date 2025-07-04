const Note = require("../model/Note");

// POST /notes
const createNote = async (req, res) => {
  try {
    const { title } = req.body;
    const note = await Note.create({ title, content: "" });
    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({ msg: "Failed to create note", error: err.message });
  }
};

// GET /notes/:id
const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ msg: "Note not found" });
    res.json(note);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching note", error: err.message });
  }
};

// PUT /notes/:id
const updateNoteContent = async (req, res) => {
  try {
    const { content } = req.body;
    const note = await Note.findByIdAndUpdate(
      req.params.id,
      { content },
      { new: true }
    );
    res.json(note);
  } catch (err) {
    res.status(500).json({ msg: "Error updating note", error: err.message });
  }
};

module.exports = {
  createNote,
  getNoteById,
  updateNoteContent,
};
