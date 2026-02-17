import UserModel from "../models/AuthModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// @desc register
// @route /auth/user/register
// @access public
export const register = async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.json({
        success: false,
        message: "Failed Required",
      });
    }
    const saltRounds = 10;

    const salt = bcrypt.genSaltSync(saltRounds);
    const hashPassword = bcrypt.hashSync(password, salt);
    const userExist = await UserModel.findOne({ email });
    if (userExist) {
      return res.json({
        success: false,
        message: "This email already exist",
      });
    }
    const user = await new UserModel({
      name,
      email,
      password: hashPassword,
    });
    let token = await jwt.sign({ email }, process.env.JWT_SECRETE);
    console.log(token);
    user.save();
    res.json({
      success: true,
      message: "User registration successfully",
    });
  } catch (error) {
    console.log(error.message);
  }
};
// @desc register
// @route /auth/user/login
// @access public
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.json({
        success: false,
        message: "This user not found",
      });
    }

    const match = await bcrypt.compare(password, user.password);

    if (match) {
      res.json({
        success: true,
        message: "login successfully",
      });
    } else {
      res.json({
        success: false,
        message: "login failed",
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};
