import { client } from "../../configuration/mongoDB";

const myDB = client.db("store");

export const getCollectionFromDB = async (collection: string) => {
  const myCollection = myDB.collection(collection);
  try {
    const documents = await myCollection.find({}).toArray();
    return documents;
  } catch (err) {
    console.error("Failed to retrieve documents:", err);
  }
};

export const getCategoryFromDB = async (categoryID: string) => {
  const myCollection = myDB.collection("products");
  const myCategoriesCollection = myDB.collection("categories");
  try {
    const documents = await myCollection
      .find({ "category.id": Number(categoryID) })
      .toArray();
    if (documents)
      await myCategoriesCollection.updateOne(
        { category_id: categoryID },
        { $inc: { Views: 1 } }
      );
    return documents;
  } catch (err) {
    console.error("Failed to retrieve documents:", err);
  }
};

export const isProductExists = async (product: string, user_id: string) => {
  try {
    const CollectionShopingCart = myDB.collection("shopingCart");
    console.log();
    
    const cart = await CollectionShopingCart.findOne({ user_id: user_id})
    console.log(cart);
    const arrProducts = cart?.products.find((obj: { product_id: string; }) => obj.product_id === product)
    console.log(arrProducts);
    return "arrProducts"
  } catch (err) {
    console.error("Failed to retrieve documents:", err);
  }
};

export const getProductFromDB = async (productID: string) => {
  const myCollection = myDB.collection("products");
  try {
    const document = await myCollection.findOne({ id: Number(productID) });
    if (document)
      await myCollection.updateOne(
        { id: Number(productID) },
        { $inc: { Views: 1 } }
      );
    return document;
  } catch (err) {
    console.error("Failed to retrieve documents:", err);
  }
};

export const getTopFiveFromDB = async (type: string) => {
  const myCollection = myDB.collection(type);
  try {
    const topFiveProducts = await myCollection
      .find()
      .sort({ Views: -1 })
      .limit(5)
      .toArray();
    return topFiveProducts;
  } catch (err) {
    console.error("Failed to retrieve documents:", err);
    throw new Error("Failed to connect to the database");
  }
};
