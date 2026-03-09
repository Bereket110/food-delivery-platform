import foodModel from "../models/FoodModel.js";
import fs from "fs";

// @desc add food
// @route POST api/food/add
// @access private/Admin
export const addFood = async (req, res) => {
  try {
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

    await food.save();
    res.status(200).json({
      success: true,
      message: "Food added Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error",
    });
  }
};

// @desc get food list
// @route get api/food/list
// @access public

export const getFoodList = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({
      success: true,
      data: foods,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Error",
    });
  }
};

// @desc delete single food
// @route get api/food/remove
// @access private admin

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
    res.json({
      success: false,
      message: "Error",
    });
  }
};
