import express from "express";
import { addFood } from "../controller/foodController";
import multer from "multer";
const foodRouter = express.Router();

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Data.now()}${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

foodRouter.get("/add", upload.single("image"), addFood);

export default foodRouter;
