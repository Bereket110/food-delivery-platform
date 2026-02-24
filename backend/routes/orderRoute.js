import express from "express";
import { authMiddleware } from "../middleware/auth.js";
import {
  OrderList,
  placeOrder,
  updateOrderStatus,
  userOrder,
  verifyOrder,
} from "../controller/orderController.js";
const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/orders", authMiddleware, userOrder);
orderRouter.post("/list", OrderList);
orderRouter.post("/status-update", updateOrderStatus);
export default orderRouter;
