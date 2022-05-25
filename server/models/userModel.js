const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Please add a email']
  },
  passwordHash: {
    type: String,
    required: [true, 'Please add a passwordHash']
  }
});

const User = mongoose.model("user", userSchema);

module.exports = User;
