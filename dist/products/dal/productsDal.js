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
exports.getCategoryFromDB = exports.getCollectionFromDB = void 0;
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
    try {
        const documents = yield myCollection.find({ 'category.id': Number(categoryID) }).toArray();
        console.log(documents);
        return documents;
    }
    catch (err) {
        console.error("Failed to retrieve documents:", err);
    }
});
exports.getCategoryFromDB = getCategoryFromDB;
