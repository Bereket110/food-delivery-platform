import express from "express";
import { foodOrder } from "../controller/orderController.js";
const orderRoute = express.Router();

orderRoute.post("/", foodOrder);

export default orderRoute;
