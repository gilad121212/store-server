import express from 'express';
import { getAllCategoryController, getAllProductsController, getCategoryByIdController, getProductByIdController } from '../controllers/productsController';


const productsRouter = express.Router();

productsRouter.get('/', getAllCategoryController);
productsRouter.get('/all', getAllProductsController);
productsRouter.get('/all/:id', getCategoryByIdController);
productsRouter.get('/product/:id', getProductByIdController);







export default productsRouter;