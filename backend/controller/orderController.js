import orderModel from "../models/OrderModel.js";
import UserModel from "../models/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRETE_KEY);

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

    // const line_items = req.body.items.map((item) => {
    //   const amount = Number(item.amount);
    //   const quantity = Number(item.quantity);
    //   return {
    //     price_data: {
    //       currency: "usd",
    //       product_data: {
    //         name: item.name,
    //       },
    //       unit_amount: Math.round(amount * 100) || 0, // ensure integer
    //     },
    //     quantity: quantity || 1,
    //   };
    // });

    // line_items.push({
    //   price_data: {
    //     currency: "usd",
    //     product_data: {
    //       name: "Delivery fee",
    //     },
    //     unit_amount: 2 * 100,
    //   },
    //   quantity: "1",
    // });
    // const session = await stripe.checkout.sessions.create({
    //   line_items: line_items,
    //   mode: "payment",
    //   success_url: `http://localhost:5173/verify?success=true&orderId=${newOrder._id}`,
    //   cancel_url: `http://localhost:5173/verify?success=false&orderId=${newOrder._id}`,
    // });

    res.json({
      success: true,
      // session_url: session.url,
      session_url: `http://localhost:5173/verify?success=true&orderId=${newOrder._id}`,
      message: "Data displayed",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something wrong",
    });
  }
};

//Verify order
export const verifyOrder = async (req, res) => {
  try {
    const { orderId, success } = req.body;

    if (success == "true") {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      res.json({
        success: true,
        message: "Paid",
      });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.json({
        success: true,
        message: "Not paid",
      });
    }
  } catch (error) {
    res.json({
      success: false,
      message: "Something wrong",
    });
  }
};

export const userOrder = async (req, res) => {
  try {
    const userOrder = await orderModel
      .find({
        userId: req.userId,
      })
      .sort({ date: -1 });
    res.json({
      success: true,
      data: userOrder,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Something wrong",
    });
  }
};

//List all Order for admin
export const OrderList = async (req, res) => {
  try {
    // sort by date descending so the latest orders appear first
    const orders = await orderModel.find({}).sort({ date: -1 });
    res.json({
      success: true,
      orders,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Something wrong",
    });
  }
};

//Update Order status
export const updateOrderStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;

    await orderModel.findByIdAndUpdate(orderId, {
      status: status,
    });

    res.json({
      success: true,
      message: "Status update ",
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Something wrong",
    });
  }
};
