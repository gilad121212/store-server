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
const collectionUsers = myDB.collection("users");
const collectionCarts = myDB.collection("shopingCart");
const Cart = { "user_id": { "$oid": "6551ecae1026f74928c28106" }, "products": [{ "product_id": "65510639bf9c16a9b1242704", "quantity": { "$numberInt": "1" } }] };
const getUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const document = yield collectionUsers.findOne({ "email": email });
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
        const add = yield collectionUsers.insertOne(user);
        const userFromDB = yield collectionUsers.findOne({ "email": user.email });
        if (!userFromDB) {
            throw new Error("Failed to create shopping cart The user has not been updated in the system");
        }
        const Cart = {
            user_id: userFromDB._id,
            products: []
        };
        yield collectionCarts.insertOne(Cart);
        return add;
    }
    catch (err) {
        console.error("Failed to retrieve documents:", err);
        throw err;
    }
});
exports.addUser = addUser;
