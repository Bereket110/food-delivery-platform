import foodModel from "../models/FoodModel.js";
import fs from "fs";
export const addFood = async (req, res) => {
  if (!req.file) {
    return res
      .status(400)
      .json({ success: false, message: "No image uploaded" });
  }

  const { name, price, description, category } = req.body;
  const image_filename = req.file.filename;

  let food = new foodModel({
    name: name,
    price: price,
    description: description,
    category: category,
    image: image_filename,
  });

  try {
    await food.save();
    res.status(200).json({
      success: true,
      message: "Food added Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error",
    });
  }
};
