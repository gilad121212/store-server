import { Request, Response } from 'express';
import { getAllCategories, getAllProducts , getCategory} from '../services/products';




  export const getAllCategoryController = async (req: Request, res: Response) => {
    try {
        const categories = getAllCategories();
        return res.json(categories);
    } catch (error) {
        return res.send(error)
    }
  };

  export const getAllProductsController = async (req: Request, res: Response) => {
    try {
        const products = await getAllProducts();
        console.log('controller')
        console.log(products[0])


        return res.send(products);
    } catch (error) {
        return res.send(error)
    }
  };
    
  export const getCategoryByIdController = async (req: Request, res: Response) => {
    const id = req.params.id
    try {
        const products = await getCategory(id);
        console.log('controller')
        return res.send(products);
    } catch (error) {
        return res.send(error)
    }
  };
    


