import Express from "express";
const router = Express.Router();
import {
  addProduct,
  getProducts,
  getBestSell,
  deleteProduct,
} from "../controllers/productController/productController";
import {
  addCarousel,
  getCarousel,
} from "../controllers/carouselController/carouselController";
import {
  getResult,
  getSemesters,
  getStudentInfo,
} from "../controllers/resultController/getResult";

router
  .get("/products", getProducts)
  .get("/bestsell", getBestSell)
  .post("/product", addProduct)
  .delete("/product/:productId", deleteProduct);

router.get("/carousel", getCarousel).post("/carousel", addCarousel);
//@ts-ignore
router.get("/result", getResult);
router.get("/result/semesterList", getSemesters);
//@ts-ignore
router.get("/result/studentInfo", getStudentInfo);

export default router;
