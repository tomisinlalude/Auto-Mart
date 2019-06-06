/* eslint-disable linebreak-style */
/* eslint-disable import/no-named-as-default-member */
import express from 'express';
import dotenv from 'dotenv';

import UserAuth from '../middlewares/AuthMiddlewares';
import UserControllers from '../controllers/AuthControllers';
import CarControllers from '../controllers/CarControllers';
import CarMiddlewares from '../middlewares/CarMiddlewares';
// eslint-disable-next-line import/no-named-as-default

dotenv.config();
const UserRouter = express.Router();

UserRouter.post('/auth/signup',
  UserAuth.validateName,
  UserAuth.validatePhoneNumber,
  UserAuth.validatePassword,
  UserAuth.validateEmail,
  UserControllers.createUser);

UserRouter.post('/auth/signin',
  UserControllers.userLogin);

UserRouter.post('/car/',
  CarMiddlewares.validateAd,
  CarControllers.createAd,
  CarControllers.markCarSold,
  CarControllers.viewSpecificAd,
  CarControllers.deleteAdRecord);

export default UserRouter;
