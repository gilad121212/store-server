import express from "express";
import {
  getAllCategoryController,
  getAllProductsController,
  getCategoryByIdController,
  getProductByIdController,
  getTopFiveController,
} from "../controllers/productsController";

const productsRouter = express.Router();

productsRouter.get("/", getAllCategoryController);
productsRouter.get("/all", getAllProductsController);
productsRouter.get("/all/:id", getCategoryByIdController);
productsRouter.get("/product/:id", getProductByIdController);
productsRouter.get("/top5/:type", getTopFiveController);

export default productsRouter;
