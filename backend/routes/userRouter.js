import express from "express";
import { login, protect, register } from "../controller/userController.js";
const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/protect", protect);

export default userRouter;
