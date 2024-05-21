const User = require("./../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signToken = (email, id) => {
  return jwt.sign({ email, id }, process.env.JWT_SECRET);
};

const createTokenSign = (userData, statusCode, res) => {
  const token = signToken(userData.email, userData._id);

  const cookieOptions = {
    httpOnly: true,
  };

  res.cookie("token", token, cookieOptions);

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
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.confirmPassword,
      passwordChangedAt: req.body.passwordChangedAt,
    });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(401).json(err);
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return next(new Error("No user found"));
  }

  createTokenSign(user, 201, res);
};
