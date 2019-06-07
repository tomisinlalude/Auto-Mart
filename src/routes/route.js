/* eslint-disable linebreak-style */
/* eslint-disable import/no-named-as-default-member */
import express from 'express';
import dotenv from 'dotenv';

import UserAuth from '../middlewares/AuthMiddlewares';
import AuthControllers from '../controllers/AuthControllers';
import CarControllers from '../controllers/CarControllers';
import OrderControllers from '../controllers/OrderControllers';
import CarMiddlewares from '../middlewares/CarMiddlewares';
import OrderMiddlewares from '../middlewares/OrderMiddlewares';
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
  CarControllers.adminViewAllCars,
  CarControllers.updateCarPrice);

UserRouter.post('/order',
  OrderMiddlewares.validateOrder,
  OrderControllers.createOrder);

UserRouter.get('/car/',
  CarControllers.viewSpecificAd,
  CarControllers.viewUnsoldCars,
  CarControllers.viewUnsoldCarsWithinPriceRange);

UserRouter.patch('/order/:id/price',
  OrderMiddlewares.updateOrderPrice,
  OrderControllers.updateOrderPrice);

UserRouter.delete('/car',
  CarControllers.adminDeleteAdRecord);

export default UserRouter;
