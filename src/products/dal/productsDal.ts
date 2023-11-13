import { client } from "../../configuration/mongoDB";

const myDB = client.db("store");
const myCollection = myDB.collection("products");


export const getCollectionFromDB = async (collection: string) => {
  try {
    const documents = await myCollection.find({}).toArray();
    console.log('con to db')

    return documents;
  } catch (err) {
    console.error("Failed to retrieve documents:", err);
  }
};
 
export const getCategoryFromDB = async (categoryID: string) => {
    try {
        const documents = await myCollection.find({ 'category.id': Number(categoryID) }).toArray();
        console.log(documents)
      return documents;
    } catch (err) {
      console.error("Failed to retrieve documents:", err);
    }
  };
   