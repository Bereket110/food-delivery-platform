import mongoose from "mongoose";
export const connectDB = async () => {
  mongoose
    .connect("mongodb+srv://cluster0.vsfcfz9.mongodb.net/food-del")
    .then(() => console.log("Database connected"));
};
