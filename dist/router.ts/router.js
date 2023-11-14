"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("../products/routes/router"));
const router_2 = __importDefault(require("../users/routes/router"));
const router = express_1.default.Router();
router.use('/products', router_1.default);
router.use('/users', router_2.default);
router.use(express_1.default.static("../../public"));
router.use("*", (req, res) => res.status(404).send("Page is not found"));
exports.default = router;
