import { getCollectionFromDB, getCategoryFromDB, getProductFromDB , getTopFiveFromDB, editShopingCart as editShopingCart, getShopingCart } from "../dal/productsDal";
import { Products } from "../dal/productsDal";

export const getAllCategories = async () => {
  try {
    const categories = await getCollectionFromDB("categories");
    if (!categories || categories.length === 0) throw new Error("no collection in the database");
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


export const updateCart = async (product:Products, user_id:string) => {
  try {
    const result = await editShopingCart(product, user_id);
    return result
  } catch (error) {
    return Promise.reject(error);
  }
};
export const getProductsCart = async (user_id:string) => {
  try {
    const result = await getShopingCart(user_id);
    return result
  } catch (error) {
    return Promise.reject(error);
  }
};



export const getCategory = async (categoryID: string) => {
  try {
    const products = await getCategoryFromDB(categoryID);
    if (!products || products.length === 0) {
      throw new Error("No such category in the database");
    }
    return products;
  } catch (error) {
    return Promise.reject(error);
  }
};
// export const getByCategory = async (category: string) => {
//   try {
//     const product = await getByCategoryFromDB(category);
//     if (!product) throw new Error("no such product in the database");
//     return product;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// }


  export const getProductById = async (id: string) => {
    try {
      const product = await getProductFromDB(id);
      if (!product) throw new Error("no such product in the database");
      return product;
    } catch (error) {
      return Promise.reject(error);
    }
  };
  

export const getTopFive = async (type: string) => {
  try {
    const topElements = await getTopFiveFromDB(type);
    return topElements;
  } catch (error) {
    return Promise.reject(error);
  }
};
