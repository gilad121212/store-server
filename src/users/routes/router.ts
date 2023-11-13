import express from 'express';

import { signUp, logIn } from '../controllers/controllers';
const usersRouter = express.Router();

usersRouter.post('/signUp', signUp)
usersRouter.post('/logIn', logIn)



export default usersRouter