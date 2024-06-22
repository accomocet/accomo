const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
     require: true,
      index:true,
       unique:true,
       // Ensure uniqueness of email addresses
  },
  usertype: {
    type: Boolean,
    required: true,
    default: false,
  }
});

module.exports = mongoose.model("User", userSchema);
