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
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        const userToInsert = {
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
            password: user.password
        };
        const result = yield (0, apiServices_1.register)(userToInsert);
        const token = yield (0, apiServices_1.getToken)(result);
        res.status(200).send(token);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
});
exports.signUp = signUp;
const logIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        const token = yield (0, apiServices_1.getToken)(user);
        res.status(200).send(token);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
});
exports.logIn = logIn;
