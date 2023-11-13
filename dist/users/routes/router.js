"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers/controllers");
const usersRouter = express_1.default.Router();
usersRouter.post('/signUp', controllers_1.signUp);
usersRouter.post('/logIn', controllers_1.logIn);
exports.default = usersRouter;
