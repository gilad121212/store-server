import { Request, Response } from 'express';
import { getAllCategories, getAllProducts , getCategory} from '../services/products';


  export const getAllCategoryController = async (req: Request, res: Response) => {
    try {
        const categories = await getAllCategories();
        return res.json(categories);
    } catch (error) {
        return res.send(error)
    }
  };

  export const getAllProductsController = async (req: Request, res: Response) => {
    try {
        const products = await getAllProducts();
        return res.send(products);
    } catch (error) {
        return res.send(error)
    }
  };
    
  export const getCategoryByIdController = async (req: Request, res: Response) => {
    const id = req.params.id
    try {
        const products = await getCategory(id);
        return res.send(products);
    } catch (error) {
        return res.send(error)
    }
  };
    


