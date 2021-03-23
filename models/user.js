const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username Required"],
  },
  password: {
    type: String,
    required: [true, "Password Required"],
  },
});

module.exports = mongoose.model("User", userSchema);
