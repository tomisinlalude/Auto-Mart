/* eslint-disable linebreak-style */
/* eslint-disable import/no-named-as-default-member */
import express from 'express';
import dotenv from 'dotenv';

import UserMiddlewares from '../middlewares/UserMiddlewares';
import UserControllers from '../controllers/UserControllers';
import CarControllers from '../controllers/CarControllers';
// eslint-disable-next-line import/no-named-as-default

dotenv.config();
const UserRouter = express.Router();

UserRouter.post('/auth/signup',
  UserMiddlewares.validateName,
  UserMiddlewares.validatePhoneNumber,
  UserMiddlewares.validatePassword,
  UserControllers.createUser);

UserRouter.post('/auth/signin',
  UserControllers.userLogin);

UserRouter.post('/car/',
  // CarMiddlewares.checkAd,
  CarControllers.createAd);

export default UserRouter;
