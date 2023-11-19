import { NextFunction, Request, Response } from 'express';
import { getAllCategories, getAllProducts, getCategory, getProductById, updateCart, getTopFive, getProductsCart } from '../services/products';
import jwt from'jsonwebtoken';
import { secretKey } from '../../users/services/apiServices';

export const getAllCategoryController = async (req: Request, res: Response) => {
  try {
    const categories = await getAllCategories();
    return res.status(200).json(categories);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};


export const editCart = async (req: Request, res: Response) => {  
  const { products } = req.body  
  const { user } = req.body
  try {
    const result = await updateCart(products, user.user.id);
    return res.status(200).json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};


export const getCart = async (req: Request, res: Response) => {
  const { user } = req.body  
  try {
    const products = await getProductsCart(user.user.id);
    return res.status(200).json(products);
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

export const auth = (req: Request, res: Response, next:NextFunction) => {
  const token = req.header('Authorization');
  if(!token) 
    return res.status(401).send('Access denied. No token provided.');
  try {
    const decoded = jwt.verify(token, secretKey);
    req.body.user = decoded;     
    next();
  } catch (ex) {
    res.status(400).send(`Invalid token: ${ex}` );
  }
};