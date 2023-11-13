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
exports.getProductFromDB = exports.getByCategoryFromDB = exports.productsByCAtegory = exports.getCollectionFromDB = void 0;
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
const productsByCAtegory = () => __awaiter(void 0, void 0, void 0, function* () {
    const myCollection = myDB.collection("products");
    try {
        const product = yield myCollection.find({ 'category.id': Number(categoryID) }).toArray();
        return product;
    }
    catch (err) {
        console.error("Failed to retrieve documents:", err);
        throw err;
    }
});
exports.productsByCAtegory = productsByCAtegory;
const getByCategoryFromDB = (categoryID) => __awaiter(void 0, void 0, void 0, function* () {
    const myCollection = myDB.collection("products");
    try {
        const documents = yield myCollection.find({ 'category.name': categoryID }).toArray();
        return documents;
    }
    catch (err) {
        console.error("Failed to retrieve documents:", err);
    }
});
exports.getByCategoryFromDB = getByCategoryFromDB;
const getProductFromDB = (productID) => __awaiter(void 0, void 0, void 0, function* () {
    const myCollection = myDB.collection("products");
    try {
        const document = yield myCollection.findOne({ 'id': Number(productID) });
        if (document)
            yield myCollection.updateOne({ 'id': Number(productID) }, { $inc: { Views: 1 } });
        return document;
    }
    catch (err) {
        console.error("Failed to retrieve documents:", err);
    }
});
exports.getProductFromDB = getProductFromDB;
