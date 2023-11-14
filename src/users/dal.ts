import { client } from "../configuration/mongoDB"
import { User, UserFromClient } from "../configuration/Userinterface";
const myDB = client.db("store");
const myCollection = myDB.collection("users");


// export const getCollectionFromDB = async (collection: string) => {
//   try {
//     const documents = await myCollection.find({}).toArray();
//     console.log('connect to db')
//     return documents;
//   } catch (err) {
//     console.error("Failed to retrieve documents:", err);
//   }
// };

// export const getCategoryFromDB = async (categoryID: string) => {
//     try {
//         const documents = await myCollection.find({ 'category.id': Number(categoryID) }).toArray();
//         console.log(documents)
//       return documents;
//     } catch (err) {
//       console.error("Failed to retrieve documents:", err);
//     }
//   };

export const getUserByEmail = async (email: string) => {
    try {
        const document = await myCollection.findOne({ "email": email });
        if (!document) {
            return null;
        }
        return document as User;
    } catch (err) {
        console.error("Failed to retrieve documents:", err);
        throw err
    }
}
export const addUser = async (user: User) => {
    try {
        const add = await myCollection.insertOne(user)
        return add;
    } catch (err) {
        console.error("Failed to retrieve documents:", err);
        throw err
    }
}