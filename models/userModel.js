const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
      username: {
        type: String,
        required: [true, "Please enter your user name"],
      },
  
      email: {
        type: String,
        required: [true, "please enter your email address"],
        unique: [true, "email already exists"],
      },
  
      password: {
        type: String,
        required: [true, "please Enter your password"],
      },
    },
    {
      timestamps: true,
    }
  );

module.exports = mongoose.model("User", userSchema);
