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

export const getFoodList = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({
      success: true,
      data: foods,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error",
    });
  }
};

export const removeFood = async (req, res) => {
  try {
    const { id } = req.body;
    const food = await foodModel.findById(id);

    fs.unlink(`uploads/${food.image}`, () => {});

    await foodModel.findByIdAndDelete(id);
    res.json({
      success: true,
      message: "Food Removed",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error",
    });
  }
};
