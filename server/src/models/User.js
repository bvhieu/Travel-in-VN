const mongoose = require("mongoose");
// const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Name is required"],
    minlength: 3,
    maxlength: 20,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    // validate: {
    //   validator: validator.isEmail,
    //   message: "Invalid email",
    // },
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minlength: 6,
  },
  avatar: {
    type: String,
    required: [false, "Avatar is required"],
  },
  address: {
    type: String,
    required: [false, "Adress is not required"],
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.checkPassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
