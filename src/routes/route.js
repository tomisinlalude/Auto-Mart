/* eslint-disable linebreak-style */
import express from 'express';
import dotenv from 'dotenv';

import UserMiddlewares from '../middlewares/UserMiddlewares';
import UserControllers from '../controllers/UserControllers';
import CarControllers from '../controllers/CarControllers';
// import CarMiddlewares from '../middlewares/CarMiddlewares';

dotenv.config();
const UserRouter = express.Router();

UserRouter.post('/auth/signup',
  UserMiddlewares.validateName,
  UserMiddlewares.validatePhoneNumber,
  UserMiddlewares.validatePassword,
  UserControllers.createUser);

UserRouter.post('/auth/signin',
  UserControllers.userLogin);

UserRouter.post('/postAd',
  // CarMiddlewares.checkAd,
  CarControllers.createAd);

export default UserRouter;
