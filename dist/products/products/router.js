"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productsRouter = express_1.default.Router();
productsRouter.get('/', getAllTripsController);
// Get a trip by ID
productsRouter.get('/:id', getTripByIdController);
// Create a new trip (protected with requireAuth)
productsRouter.post('/', requireAuth, createTripController);
// Update a trip by ID (protected with requireAuth)
productsRouter.put('/:id', requireAuth, updateTripController);
// Delete a trip by ID (protected with requireAuth)
productsRouter.delete('/:id', requireAuth, deleteTripController);
exports.default = productsRouter;
