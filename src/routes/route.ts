import Express from "express";
const router = Express.Router();
import {
  addProduct,
  getProducts,
  getBestSell,
} from "../controllers/productController/productController";
import {
  addCarousel,
  getCarousel,
} from "../controllers/carouselController/carouselController";

router
  .get("/products", getProducts)
  .get("/bestsell", getBestSell)
  .post("/product", addProduct);

router.get("/carousel", getCarousel).post("/carousel", addCarousel);

export default router;
