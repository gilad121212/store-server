import express from 'express';
import { getAllCategoryController } from '../../controllers/productsController';


const productsRouter = express.Router();

productsRouter.get('/', getAllCategoryController);

// productsRouter.get('/:id', getCategoryByIdController);



export default productsRouter;