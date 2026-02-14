import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import "dotenv/config";
//app config
const app = express();
const port = 4000;
connectDB();
//middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Working");
});

//API End Points
app.use("/api/food", foodRouter);
app.use("/image", express.static("uploads"));
app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
