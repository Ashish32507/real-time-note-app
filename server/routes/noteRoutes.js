const express = require("express");
const router = express.Router();
const {
  createNote,
  getNoteById,
  updateNoteContent,
} = require("../controller/noteController");

router.post("/", createNote);
router.get("/:id", getNoteById);
router.put("/:id", updateNoteContent);

module.exports = router;
