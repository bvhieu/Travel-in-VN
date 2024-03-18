const User = require("../models/User");
const CustomError = require("../errors");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { username, email, password, avatar, address } = req.body;

  const emailExists = await User.findOne({ email });
  if (emailExists) {
    return res.status(400).json({ error: "Email already in use" });
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

const createToken = (userId) => {
  // Set the token payload
  const payload = {
    userId: userId,
  };

  // Generate the token with a secret key and expiration time
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

  return token;
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Missing Email or password" });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const isPasswordCorrect = await user.checkPassword(password);
  if (!isPasswordCorrect) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = createToken(user._id);

  res.status(200).json({ token });
};

module.exports = {
  register,
  login,
  // logout,
  // forgotPassword,
  // resetPassword,
};
