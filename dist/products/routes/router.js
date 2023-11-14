"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productsController_1 = require("../controllers/productsController");
const productsRouter = express_1.default.Router();
productsRouter.get("/", productsController_1.getAllCategoryController);
productsRouter.get("/all", productsController_1.getAllProductsController);
productsRouter.get("/all/:id", productsController_1.getCategoryByIdController);
productsRouter.get("/product/:id", productsController_1.getProductByIdController);
productsRouter.get("/top5/:type", productsController_1.getTopFiveController);
exports.default = productsRouter;
