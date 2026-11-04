
import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRouter.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ensure MongoDB is connected before handling API requests
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error("Database connection failed:", error);
    res.status(500).json({
      success: false,
      message: "Database connection failed",
    });
  }
});

// Root endpoint
app.get("/", (req, res) => {
  res.send("API Working");
});

// API endpoints
app.use("/api/food", foodRouter);
app.use("/image", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Local development only
if (process.env.NODE_ENV !== "production") {
  app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
  });
}

// Export for Vercel
export default app;
