"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productsRouter = express_1.default.Router();
// productsRouter.get('/', getAllCategoryController);
// productsRouter.get('/:id', getCategoryByIdController);
exports.default = productsRouter;
