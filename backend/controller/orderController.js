import orderModel from "../models/OrderModel";
import UserModel from "../models/userModel";
import Stripe from "stripe";

const strip = new Stripe(process.env.STRIPE_SECRETE_KEY);

//Placing user order from frontend
export const placeOrder = async (req, res) => {
  try {
    const userId = req.userId;
    const newOrder = new orderModel({
      userId: req.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });

    await newOrder.save();

    await UserModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({
      success: true,
      message: "Accepted and Updated",
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: false,
      message: "Something wrong",
    });
  }
};
