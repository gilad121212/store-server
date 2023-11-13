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
        console.log(documents)
      return documents;
    } catch (err) {
      console.error("Failed to retrieve documents:", err);
    }
  };
   