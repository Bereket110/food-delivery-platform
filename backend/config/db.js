// import mongoose from "mongoose";
// export const connectDB = async () => {
//   mongoose
//     .connect("mongodb://localhost:27017/maahe-food-del")
//     .then(() => console.log("Database connected"));
// };
//Mongodb atlas connection URL
// .connect(`${process.env.MONGODB_URL}/food-del`)


import mongoose from "mongoose";

let cached = globalThis.mongoose;

if (!cached) {
  cached = globalThis.mongoose = {
    conn: null,
    promise: null,
  };
}

export const connectDB = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!process.env.MONGODB_URL) {
    throw new Error("MONGODB_URL environment variable is missing");
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(process.env.MONGODB_URL, {
        dbName: "maahe-food-del",
      })
      .then((mongooseInstance) => mongooseInstance)
      .catch((error) => {
        cached.promise = null;
        throw error;
      });
  }

  cached.conn = await cached.promise;
  console.log("Database connected");

  return cached.conn;
};
