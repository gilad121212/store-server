import { client } from "../configuration/mongoDB"
import { User, UserFromClient } from "../configuration/Userinterface";
const myDB = client.db("store");
const collectionUsers = myDB.collection("users");
const collectionCarts = myDB.collection("shopingCart");

export const getUserByEmail = async (email: string) => {
    try {
        const document = await collectionUsers.findOne({ "email": email });
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
        const add = await collectionUsers.insertOne(user)
        const userFromDB = await collectionUsers.findOne({ "email": user.email })
        if (!userFromDB) { 
            throw new Error("Failed to create shopping cart The user has not been updated in the system")
        }
        const Cart = {
            user_id: userFromDB._id.toString(),
            products: [
            ]
        }
        await collectionCarts.insertOne(Cart)
        return userFromDB._id;
    } catch (err) {
        console.error("Failed to retrieve documents:", err);
        throw err
    }
}

export const getId = async (user: User) => {
    try {
        const userFromDB = await collectionUsers.findOne({ "email": user.email })
        return userFromDB?._id;
    } catch (err) {
        console.error("Failed to retrieve documents:", err);
        throw err
    }
}