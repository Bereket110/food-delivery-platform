import UserModel from "../models/userModel.js";

export const foodOrder = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    street,
    city,
    state,
    zipCode,
    country,
    phone,
    totalFee,
  } = req.body;

  const user = await UserModel.findOne({ email });
  if (!user) {
    return res.json({
      success: false,
      message: "User not found you should login or sign up first",
    });
  }
  const userId = user._id;
  const saveUpdate = await UserModel.findByIdAndUpdate(userId, {
    cardData: req.body,
  });

  // const order = new Order({
  //   firstName,
  //   lastName,
  //   email,
  //   street,
  //   city,
  //   state,
  //   zipCode,
  //   country,
  //   phone,
  //   totalFee,
  // });
  await saveUpdate.save();
  res.status(200).json({
    success: true,
    message: "Ordered Successfully",
    user,
  });
};
/*
{
   "firstName":"Bereket",
    "lastName":"Yakob",
    "email":"bereket@gmail.com",
    "street":"Sawla",
    "city":"Gofa",
    "state":"Bola",
    "zipCode":"1000",
    "country":"Ethiopia",
    "phone":"099283475",
    "totalFee":"76"
}  
*/

export const addToCard = async (req, res) => {
  try {
    const user = await UserModel.findById(req.userId);
    const cartData = user.cartData;
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }

    const updateCard = await UserModel.findByIdAndUpdate(user._id, {
      cartData,
    });
    await updateCard.save();
    res.json({
      success: true,
      message: "Product added to cart",
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Something wrong",
    });
  }
};

export const removeFromCard = async (req, res) => {
  try {
    const userData = await UserModel.findById({ _id: req.userId });
    const cartData = userData.cartData;

    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }

    await UserModel.findByIdAndUpdate(userData._id, { cartData });
    res.json({
      success: true,
      message: "Removed from cart",
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Something wrong",
    });
  }
};

export const getCardAll = async (req, res) => {
  try {
    const userData = await UserModel.findById({ _id: req.userId });
    const cartData = userData.cartData;
    res.json({
      success: true,
      cartData,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Something wrong",
    });
  }
};
