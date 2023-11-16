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
exports.getTopFiveFromDB = exports.getProductFromDB = exports.getShopingCart = exports.editShopingCart = exports.getCategoryFromDB = exports.getCollectionFromDB = void 0;
const mongoDB_1 = require("../../configuration/mongoDB");
const myDB = mongoDB_1.client.db("store");
const getCollectionFromDB = (collection) => __awaiter(void 0, void 0, void 0, function* () {
    const myCollection = myDB.collection(collection);
    try {
        const documents = yield myCollection.find({}).toArray();
        return documents;
    }
    catch (err) {
        console.error("Failed to retrieve documents:", err);
    }
});
exports.getCollectionFromDB = getCollectionFromDB;
const getCategoryFromDB = (categoryID) => __awaiter(void 0, void 0, void 0, function* () {
    const myCollection = myDB.collection("products");
    const myCategoriesCollection = myDB.collection("categories");
    try {
        const documents = yield myCollection
            .find({ "category.id": Number(categoryID) })
            .toArray();
        if (documents)
            yield myCategoriesCollection.updateOne({ category_id: categoryID }, { $inc: { Views: 1 } });
        return documents;
    }
    catch (err) {
        console.error("Failed to retrieve documents:", err);
    }
});
exports.getCategoryFromDB = getCategoryFromDB;
const editShopingCart = (products, user_id) => __awaiter(void 0, void 0, void 0, function* () {
    const productToUpdate = products.map((productObj) => ({
        id: productObj.id,
        quantity: productObj.quantity
    }));
    try {
        const CollectionShopingCart = myDB.collection("shopingCart");
        yield CollectionShopingCart.updateOne({ user_id: user_id }, { $set: { products: productToUpdate } });
        const productsArr = yield CollectionShopingCart.findOne({}).then(a => a === null || a === void 0 ? void 0 : a.products);
        return productsArr;
    }
    catch (err) {
        throw err;
    }
});
exports.editShopingCart = editShopingCart;
const getShopingCart = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    const myCollection = myDB.collection("products");
    try {
        const CollectionShopingCart = myDB.collection("shopingCart");
        const productsArr = yield CollectionShopingCart.findOne({ user_id: user_id });
        const productsIdList = productsArr === null || productsArr === void 0 ? void 0 : productsArr.products.map((product) => product.id);
        const quantityList = productsArr === null || productsArr === void 0 ? void 0 : productsArr.products.map((id) => id.quantity);
        const products = yield myCollection.find({ id: { $in: productsIdList } }).toArray();
        for (let i = 0; i < products.length; i++) {
            products[i].quantity = quantityList[i];
        }
        return products;
    }
    catch (err) {
        throw err;
    }
});
exports.getShopingCart = getShopingCart;
const getProductFromDB = (productID) => __awaiter(void 0, void 0, void 0, function* () {
    const myCollection = myDB.collection("products");
    try {
        const document = yield myCollection.findOne({ id: Number(productID) });
        if (document)
            yield myCollection.updateOne({ id: Number(productID) }, { $inc: { Views: 1 } });
        return document;
    }
    catch (err) {
        console.error("Failed to retrieve documents:", err);
    }
});
exports.getProductFromDB = getProductFromDB;
const getTopFiveFromDB = (type) => __awaiter(void 0, void 0, void 0, function* () {
    const myCollection = myDB.collection(type);
    try {
        const topFiveProducts = yield myCollection
            .find()
            .sort({ Views: -1 })
            .limit(5)
            .toArray();
        return topFiveProducts;
    }
    catch (err) {
        console.error("Failed to retrieve documents:", err);
        throw new Error("Failed to connect to the database");
    }
});
exports.getTopFiveFromDB = getTopFiveFromDB;
