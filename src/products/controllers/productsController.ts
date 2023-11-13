import { Request, Response } from 'express';
import { getAllCategories, getAllProducts , getCategory, getProductById} from '../services/products';


  export const getAllCategoryController = async (req: Request, res: Response) => {
    try {
        const categories = await getAllCategories();
        return res.status(200).json(categories);
      } catch (error: any) {
        res.status(500).json({ error: error.message });
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
    const id = req.params.id;
  
    try {
      const products = await getCategory(id);
      res.status(200).json({ data: products });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };

  export const getProductByIdController = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
      const product = await getProductById(id);
      res.status(200).json({ data: product });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };

