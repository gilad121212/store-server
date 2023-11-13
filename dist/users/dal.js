"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = exports.getUserByEmail = void 0;
const mongoDB_1 = require("../configuration/mongoDB");
const myDB = mongoDB_1.client.db("store");
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
const getUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const document = yield myCollection.findOne({ "email": email });
        if (!document) {
            return null;
        }
        return document;
    }
    catch (err) {
        console.error("Failed to retrieve documents:", err);
        throw err;
    }
});
exports.getUserByEmail = getUserByEmail;
const addUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const add = yield myCollection.insertOne(user);
        return add;
    }
    catch (err) {
        console.error("Failed to retrieve documents:", err);
        throw err;
    }
});
exports.addUser = addUser;
