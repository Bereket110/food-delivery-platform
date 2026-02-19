import Order from "../models/OrderModel.js";
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

  const order = new Order({
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
  });
  await order.save();
  res.status(200).json({
    success: true,
    message: "Ordered Successfully",
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
