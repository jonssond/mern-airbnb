const UserModel = require("./../models/User");

exports.register = async (req, res, next) => {
  try {
    const newUser = await UserModel.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.confirmPassword,
      passwordChangedAt: req.body.passwordChangedAt,
    });
    res.status(201).json(newUser);
  } catch (err) {
    console.log(err);
  }
};
