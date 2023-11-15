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
exports.getToken = exports.register = void 0;
const dal_1 = require("../dal");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secretKey = 'akiva';
const register = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, dal_1.getUserByEmail)(user.email);
        if (!users) {
            const res = yield (0, dal_1.addUser)(user);
            return res;
        }
        else {
            return Promise.reject(new Error("user is Already exists"));
        }
    }
    catch (error) {
        return Promise.reject(error);
    }
});
exports.register = register;
const getToken = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usersFromDB = yield (0, dal_1.getUserByEmail)(user.email);
        if (!usersFromDB) {
            return Promise.reject(new Error("user is not found"));
        }
        if (usersFromDB.password !== user.password) {
            return Promise.reject(new Error("The password is incorrect!"));
        }
        const token = jsonwebtoken_1.default.sign({ user }, secretKey, { expiresIn: '30d' });
        return token;
    }
    catch (error) {
        return Promise.reject(error);
    }
});
exports.getToken = getToken;
