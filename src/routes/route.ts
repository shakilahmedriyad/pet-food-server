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
import { getResult } from "../controllers/resultController/getResult";

router
  .get("/products", getProducts)
  .get("/bestsell", getBestSell)
  .post("/product", addProduct)
  .delete("/product/:productId", deleteProduct);

router.get("/carousel", getCarousel).post("/carousel", addCarousel);
//@ts-ignore
router.get("/result", getResult);

export default router;
