const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: null,
    },
    content: {
      type: String,
      default: null,
    },
    createdAt: {
      type: Number,
      required: true,
      default: Date.now(),
    },
    user: {
      type: String,
      required: true,
    },
  },
  { collection: "notes" }
);

module.exports =
  mongoose.models.notes ||
  mongoose.model("notes", notesSchema);
