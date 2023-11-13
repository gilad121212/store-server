"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleServerErrorNotFound = exports.handleServerError = void 0;
const handleServerError = (error, req, res, next) => {
    console.log((error.message));
    res.status(500).send(error.message);
};
exports.handleServerError = handleServerError;
const handleServerErrorNotFound = (error, req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    res.status(404).send("err.message");
};
exports.handleServerErrorNotFound = handleServerErrorNotFound;
