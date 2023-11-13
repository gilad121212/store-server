import express from 'express';


const productsRouter = express.Router();

productsRouter.get('/', getAllTripsController);

// Get a trip by ID
productsRouter.get('/:id', getTripByIdController);

// Create a new trip (protected with requireAuth)
productsRouter.post('/', requireAuth, createTripController);

// Update a trip by ID (protected with requireAuth)
productsRouter.put('/:id', requireAuth, updateTripController);

// Delete a trip by ID (protected with requireAuth)
productsRouter.delete('/:id', requireAuth, deleteTripController);

export default productsRouter;