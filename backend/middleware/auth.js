import jwt from "jsonwebtoken";
export const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.json({
      success: false,
      message: "Please login first/Token not avalibale",
    });
  }
  try {
    const decode = await jwt.verify(token, process.env.JWT_SECRETE);
    const userId = decode.id;
    req.userId = userId;
    next();
  } catch (error) {
    // console.log(error.message);
    res.json({
      success: false,
      message: "Something Wrong",
    });
  }
};
