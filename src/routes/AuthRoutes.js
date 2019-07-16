/* eslint-disable linebreak-style */
import { Router } from 'express';

import AuthMiddlewares from '../middlewares/AuthMiddlewares';
import AuthControllers from '../controllers/AuthControllers';

const authRouter = Router();

authRouter.post('/signup',
  AuthMiddlewares.validateName,
  AuthMiddlewares.validatePassword,
  AuthMiddlewares.validateAddress,
  AuthMiddlewares.validateEmail,
  AuthControllers.createUser);

authRouter.post('/signin',
  AuthControllers.userLogin);

export default authRouter;
