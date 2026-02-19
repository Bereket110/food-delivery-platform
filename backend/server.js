import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import "dotenv/config";
import orderRouter from "./routes/orderRoute.js";
import userRouter from "./routes/userRouter.js";
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
app.use("/api/order", orderRouter);
app.use("/api/user", userRouter);
app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
