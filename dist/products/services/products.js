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
exports.getTopFive = exports.getProductById = exports.getCategory = exports.getProductsCart = exports.updateCart = exports.getAllProducts = exports.getAllCategories = void 0;
const productsDal_1 = require("../dal/productsDal");
const getAllCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield (0, productsDal_1.getCollectionFromDB)("categories");
        if (!categories || categories.length === 0)
            throw new Error("no collection in the database");
        return categories;
    }
    catch (error) {
        return Promise.reject(error);
    }
});
exports.getAllCategories = getAllCategories;
const getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield (0, productsDal_1.getCollectionFromDB)("products");
        if (!products)
            throw new Error("no collection in the database");
        return products;
    }
    catch (error) {
        return Promise.reject(error);
    }
});
exports.getAllProducts = getAllProducts;
const updateCart = (product, user_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, productsDal_1.editShopingCart)(product, user_id);
        return result;
    }
    catch (error) {
        return Promise.reject(error);
    }
});
exports.updateCart = updateCart;
const getProductsCart = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, productsDal_1.getShopingCart)(user_id);
        return result;
    }
    catch (error) {
        return Promise.reject(error);
    }
});
exports.getProductsCart = getProductsCart;
const getCategory = (categoryID) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield (0, productsDal_1.getCategoryFromDB)(categoryID);
        if (!products || products.length === 0) {
            throw new Error("No such category in the database");
        }
        return products;
    }
    catch (error) {
        return Promise.reject(error);
    }
});
exports.getCategory = getCategory;
const getProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield (0, productsDal_1.getProductFromDB)(id);
        if (!product)
            throw new Error("no such product in the database");
        return product;
    }
    catch (error) {
        return Promise.reject(error);
    }
});
exports.getProductById = getProductById;
const getTopFive = (type) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const topElements = yield (0, productsDal_1.getTopFiveFromDB)(type);
        return topElements;
    }
    catch (error) {
        return Promise.reject(error);
    }
});
exports.getTopFive = getTopFive;
