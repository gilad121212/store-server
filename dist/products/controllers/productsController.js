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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = exports.getTopFiveController = exports.getProductByIdController = exports.getCategoryByIdController = exports.getAllProductsController = exports.getCart = exports.editCart = exports.getAllCategoryController = void 0;
const products_1 = require("../services/products");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const apiServices_1 = require("../../users/services/apiServices");
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
const editCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { products } = req.body;
    const { user } = req.body;
    try {
        const result = yield (0, products_1.updateCart)(products, user.user.id);
        return res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.editCart = editCart;
const getCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user } = req.body;
    try {
        console.log(user);
        const products = yield (0, products_1.getProductsCart)(user.user.id);
        return res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getCart = getCart;
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
const getTopFiveController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const type = req.params.type;
    try {
        const topElements = yield (0, products_1.getTopFive)(type);
        res.status(200).json({ data: topElements });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getTopFiveController = getTopFiveController;
const auth = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token)
        return res.status(401).send('Access denied. No token provided.');
    try {
        const decoded = jsonwebtoken_1.default.verify(token, apiServices_1.secretKey);
        req.body.user = decoded;
        next();
    }
    catch (ex) {
        res.status(400).send(`Invalid token: ${ex}`);
    }
};
exports.auth = auth;
