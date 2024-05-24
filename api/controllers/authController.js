const User = require("./../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signToken = (email, id) => {
  return jwt.sign({ email, id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createTokenSign = (userData, statusCode, res) => {
  const token = signToken(userData.email, userData._id);

  // const cookieOptions = {
  //   expires: new Date(
  //     Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
  //   ),
  // };
  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  res.cookie("token", token);

  userData.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      userData,
    },
  });
};

exports.register = async (req, res, next) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({
        status: "fail",
        message: "Please provide all required fields",
      });
    }

    const newUser = await User.create({
      name,
      email,
      password,
      passwordConfirm: confirmPassword,
    });

    createTokenSign(newUser, 201, res);
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        status: "fail",
        message: "Please provide email and password",
      });
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({
        status: "fail",
        message: "Incorrect email or password",
      });
    }

    createTokenSign(user, 201, res);
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Something went wrong",
    });
  }
};

exports.userProfile = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({
      status: "fail",
      message: "You are not logged in",
    });
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(401).json({
        status: "fail",
        message: "Invalid token",
      });
    }

    const userDoc = await User.findById(decoded.id);

    userDoc.password = undefined;

    res.status(200).json({
      status: "success",
      data: {
        user: userDoc,
      },
    });
  });
};

exports.logout = (req, res, next) => {
  res.cookie("token", "").status(200).json({ status: "success" });
};
