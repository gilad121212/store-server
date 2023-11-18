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
exports.logIn = exports.signUp = void 0;
const apiServices_1 = require("../services/apiServices");
const dal_1 = require("../dal");
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        console.log(req.body);
        if (!user.email || !user.firstName || !user.lastName || !user.password) {
            return res.status(500).send("not format");
        }
        if (user.password.length < 6) {
            return res.status(500).send("password should be ...");
        }
        const userToInsert = {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            password: user.password
        };
        const id = yield (0, apiServices_1.register)(userToInsert);
        const token = yield (0, apiServices_1.getToken)({ email: userToInsert.email, password: userToInsert.password });
        const result = {
            token: token,
            id: id
        };
        return res.status(200).send(result);
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
});
exports.signUp = signUp;
const logIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        const token = yield (0, apiServices_1.getToken)(user);
        const id = yield (0, dal_1.getId)(user);
        const result = {
            token: token,
            id: id
        };
        res.status(200).send(result);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
});
exports.logIn = logIn;
const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token)
        return res.status(401).send('Access denied. No token provided.');
    try {
        const decoded = jwt.verify(token, 'secretKey');
        req.body.user = decoded;
        next();
    }
    catch (ex) {
        res.status(400).send('Invalid token.');
    }
};
