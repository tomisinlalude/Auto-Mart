/* eslint-disable linebreak-style */
import { Router } from 'express';

import AuthMiddlewares from '../middlewares/AuthMiddlewares';
import AuthControllers from '../controllers/AuthControllers';

const authRouter = Router();

authRouter.post('/signup',
  AuthMiddlewares.signUp,
  AuthControllers.createUser);

authRouter.post('/signin',
  AuthMiddlewares.signIn,
  AuthControllers.userLogin);

export default authRouter;
