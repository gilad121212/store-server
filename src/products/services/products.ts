import { getCollectionFromDB, getCategoryFromDB } from "../dal/productsDal";


export const getAllCategories = async () => {
    try {
      const categories = await getCollectionFromDB("categories");
      if (!categories) throw new Error("no collection in the database");
      return categories;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  export const getAllProducts = async () => {
    try {
      const products = await getCollectionFromDB("products");      
      if (!products) throw new Error("no collection in the database");
      return products;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  export const getCategory = async (categoryID:string) => {
    try {
      const products = await getCategoryFromDB(categoryID);      
      if (!products) throw new Error("no collection in the database");
      return products;
    } catch (error) {
      return Promise.reject(error);
    }
  };

