// Models
import User from "../models/userModel.js";
// Utils
import generateToken from "../utils/generateToken.js";

// @desc    Register User & Get Token
// @route   POST /api/users/register
// @access  Public
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  // Check if user exists
  const userAlreadyExists = await User.findOne({ email });

  if (userAlreadyExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    username,
    email,
    password,
  });

  if (user) {
    generateToken(res, user._id);

    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
};

// @desc    Login User & Get Token
// @route   POST /api/users/register
// @access  Public
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Check if the email is in the db
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
};

// @desc    Logout User & Destroy Token
// @route   POST /api/users/logout
// @access  Private
const logoutUser = async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out successfully" });
};

export { registerUser, loginUser, logoutUser };
