import mongoose from "mongoose";
export const connectDB = async () => {
  mongoose
    .connect("mongodb://localhost:27017/maahe-food-del")
    .then(() => console.log("Database connected"));
};
//Mongodb atlas connection URL
// .connect(`${process.env.MONGODB_URL}/food-del`)
