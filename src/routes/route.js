/* eslint-disable linebreak-style */
/* eslint-disable import/no-named-as-default-member */
import express from 'express';
import dotenv from 'dotenv';

import UserAuth from '../middlewares/AuthMiddlewares';
import AuthControllers from '../controllers/AuthControllers';
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
  AuthControllers.createUser);

UserRouter.post('/auth/signin',
  AuthControllers.userLogin);

UserRouter.post('/car/',
  CarMiddlewares.validateAd,
  CarControllers.createAd,
  CarControllers.markCarAsSold,
  CarControllers.viewSpecificAd,
  CarControllers.adminViewAllCars,
  CarControllers.viewUnsoldCars,
  CarControllers.viewUnsoldCarsWithinPriceRange,
  CarControllers.updateCarPrice,
  CarControllers.adminDeleteAdRecord);

UserRouter.post('/order',
  CarControllers.createOrder);

UserRouter.patch('/order/<:order-id>/price',
  CarControllers.updateOrderPrice);

export default UserRouter;
