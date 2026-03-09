import UserModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";

//Generate token
function createToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRETE);
}

// @desc register
// @route /auth/user/register
// @access public
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.json({
        success: false,
        message: "All failed required",
      });
    }

    const isValidEmail = validator.isEmail(email);
    if (!isValidEmail) {
      return res.json({
        success: false,
        message: "Invalid Email",
      });
    }
    const userExist = await UserModel.findOne({ email });
    if (userExist) {
      return res.json({
        success: false,
        message: "User already exist with this email",
      });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password",
      });
    }
    const saltRounds = 10;

    const salt = bcrypt.genSaltSync(saltRounds);
    const hashPassword = bcrypt.hashSync(password, salt);

    const user = await new UserModel({
      name,
      email,
      password: hashPassword,
    });

    let token = createToken(user._id);

    user.save();
    res.json({
      success: true,
      token,
      message: "Registration successful",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something wrong",
    });
  }
};
// @desc register
// @route /auth/user/login
// @access public
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({
        success: false,
        message: "Please insert your email and password",
      });
    }
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.json({
        success: false,
        message: "User does not exist",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = createToken(user._id);

    res.json({
      success: true,
      token,
      message: "Login successful",
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Something wrong",
    });
  }
};
