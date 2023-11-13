import { getCollectionFromDB } from "../dal/productsDal";


export const getAllCategories = async () => {
    try {
      const categories = await getCollectionFromDB("categories");
      if (!categories) throw new Error("no collection in the database");
      return categories;
    } catch (error) {
      return Promise.reject(error);
    }
  };