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
exports.getProductByIdController = exports.getCategoryByIdController = exports.getAllProductsController = exports.getAllCategoryController = void 0;
const products_1 = require("../services/products");
const getAllCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield (0, products_1.getAllCategories)();
        return res.status(200).json(categories);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getAllCategoryController = getAllCategoryController;
const getAllProductsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield (0, products_1.getAllProducts)();
        return res.send(products);
    }
    catch (error) {
        return res.send(error);
    }
});
exports.getAllProductsController = getAllProductsController;
const getCategoryByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const products = yield (0, products_1.getCategory)(id);
        res.status(200).json({ data: products });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getCategoryByIdController = getCategoryByIdController;
const getProductByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const product = yield (0, products_1.getProductById)(id);
        res.status(200).json({ data: product });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getProductByIdController = getProductByIdController;
