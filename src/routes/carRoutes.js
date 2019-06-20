/* eslint-disable linebreak-style */
import { Router } from 'express';

import CarControllers from '../controllers/CarControllers';
import CarMiddlewares from '../middlewares/CarMiddlewares';

const carRouter = Router();

carRouter.post('/',
  CarMiddlewares.validateAd,
  CarControllers.createAd);

export default carRouter;
