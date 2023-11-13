import express from 'express';
import {
    getAllCategoryController,
    getAllProductsController,
    getCategoryByIdController,
    getProductByIdController,
    getProductByCategory
} from '../controllers/productsController';


const productsRouter = express.Router();

productsRouter.get('/', getAllCategoryController);
productsRouter.get('/all', getAllProductsController);
productsRouter.get('/all/:id', getCategoryByIdController);
productsRouter.get('/product/:id', getProductByIdController);
productsRouter.get('/products/:category', getProductByCategory);







export default productsRouter;