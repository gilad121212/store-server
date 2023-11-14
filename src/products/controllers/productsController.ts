import { Request, Response } from 'express';
import { getAllCategories, getAllProducts , getCategory, getProductById , getTopFive, plusProduct, minProduct} from '../services/products';


  export const getAllCategoryController = async (req: Request, res: Response) => {
    try {
        const categories = await getAllCategories();
        return res.status(200).json(categories);
      } catch (error: any) {
        res.status(500).json({ error: error.message });
      }
  };
  export const AddProductToCart = async (req: Request, res: Response) => {
    const {productId} = req.body
    const {user_id} = req.body
    const {type} = req.body    
    try {
        type? await plusProduct(productId, user_id): null;
        return res.status(200).json("categories");
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

  export const getTopFiveController = async (req: Request, res: Response) => {
    const type = req.params.type;
    try {
      const topElements = await getTopFive(type);
      res.status(200).json({ data: topElements });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };

// code for akiva only
// export const getProductByCategory = async (req: Request, res: Response) => {
//   const {category} = req.params;
//   try {
//     const products = await getByCategory(category);
//     res.status(200).json({ data: products });
//   } catch (error: any) {
//     res.status(500).json({ error: error.message });
//   }
// }
