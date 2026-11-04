import express from "express";
import {
  addFood,
  removeFood,
  getFoodList,
  getAdminInfo,
} from "../controller/foodController.js";
import multer from "multer";
const foodRouter = express.Router();

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", getFoodList);
foodRouter.post("/remove", removeFood);

//Route to admin to get total information about the performance of the system
foodRouter.get("/admin-info", getAdminInfo);

export default foodRouter;
