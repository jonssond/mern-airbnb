const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please, tell us your name!"],
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please, provide your e-mail!"],
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid e-mail."],
  },
  photo: String,
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  password: {
    type: String,
    required: [true, "Please insert a password!"],
    minlength: 3,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password!"],
    validate: {
      validator: function (val) {
        return val === this.password;
      },
      message: "The passwords must be equal!",
    },
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
