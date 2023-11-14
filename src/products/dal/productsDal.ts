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
    try {
        const documents = await myCollection.find({ 'category.id': Number(categoryID) }).toArray();
      return documents;
    } catch (err) {
      console.error("Failed to retrieve documents:", err);
    }
  };
   

  export const getProductFromDB = async (productID: string) => {
    const myCollection = myDB.collection("products");
    try {
        const document = await myCollection.findOne({ 'id': Number(productID) });
        if(document) await myCollection.updateOne({ 'id': Number(productID) },{ $inc: { Views: 1 } });
      return document;
    } catch (err) {
      console.error("Failed to retrieve documents:", err);
    }
  };
     