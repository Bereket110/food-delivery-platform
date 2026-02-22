import express from "express";
import {
  addToCard,
  getCardAll,
  removeFromCard,
} from "../controller/cartController.js";
import { authMiddleware } from "../middleware/auth.js";
const cartRouter = express.Router();

cartRouter.post("/add", authMiddleware, addToCard);
cartRouter.post("/remove", authMiddleware, removeFromCard);
cartRouter.post("/get", authMiddleware, getCardAll);

export default cartRouter;
