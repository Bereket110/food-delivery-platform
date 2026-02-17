import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import authRouter from "./routes/authRouter.js";
import "dotenv/config";
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
app.use("/auth/user", authRouter);
app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
