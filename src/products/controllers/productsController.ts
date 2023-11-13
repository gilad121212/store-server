import { Request, Response } from 'express';
import { getAllCategories } from '../services/products';




  export const getAllCategoryController = async (req: Request, res: Response) => {
    try {
        const categories = getAllCategories();
        return res.json(categories);
    } catch (error) {
        return res.send(error)
    }
  };