import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import "dotenv/config";
import userRouter from "./routes/userRouter.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
//app config
const app = express();
const port = 4000;
connectDB();
//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("API Working");
});

//API End Points
app.use("/api/food", foodRouter);
app.use("/image", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
