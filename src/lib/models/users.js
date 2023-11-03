const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    accountCreatedAt: {
      type: Number,
    },
  },
  { collection: "users" }
);

module.exports = mongoose.model(
  "users",
  usersSchema,
  "users"
);
