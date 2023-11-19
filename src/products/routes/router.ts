import express from "express";
import {
  getAllCategoryController,
  getAllProductsController,
  getCategoryByIdController,
  getProductByIdController,
  getTopFiveController,
  editCart,
  getCart,
  auth
} from "../controllers/productsController";

const productsRouter = express.Router();

productsRouter.get("/", getAllCategoryController);
productsRouter.get("/all", getAllProductsController);
productsRouter.get("/all/:id", getCategoryByIdController);
productsRouter.post("/editCart",auth, editCart);
productsRouter.post("/getCart", auth, getCart);
productsRouter.get("/product/:id", getProductByIdController);
productsRouter.get("/top5/:type", getTopFiveController);

export default productsRouter;
