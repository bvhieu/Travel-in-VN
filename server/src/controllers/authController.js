const User = require("../models/User");
const CustomError = require("../errors");

const register = async (req, res) => {
  const { username, email, password, avatar, address } = req.body;

  const emailExists = await User.findOne({ email });
  if (emailExists) {
    throw new CustomError.BadRequestError("Email already in use");
  }

  const user = await User.create({
    username,
    email,
    password,
    avatar,
    address,
  });

  res.status(200).json({
    msg: "Success creating account.",
  });
};

module.exports = {
  register,
  // login,
  // logout,
  // forgotPassword,
  // resetPassword,
};
