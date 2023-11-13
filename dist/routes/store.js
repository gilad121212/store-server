"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const storeRouter = express_1.default.Router();
storeRouter.get('/', getAllTripsController);
// Get a trip by ID
storeRouter.get('/:id', getTripByIdController);
// Create a new trip (protected with requireAuth)
storeRouter.post('/', requireAuth, createTripController);
// Update a trip by ID (protected with requireAuth)
storeRouter.put('/:id', requireAuth, updateTripController);
// Delete a trip by ID (protected with requireAuth)
storeRouter.delete('/:id', requireAuth, deleteTripController);
exports.default = storeRouter;
