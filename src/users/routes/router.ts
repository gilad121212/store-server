import express from 'express';

import { signUp } from '../controllers/controllers';
const usersRouter = express.Router();

usersRouter.get('/signUp', signUp)


export default usersRouter