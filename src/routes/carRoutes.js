/* eslint-disable linebreak-style */
import { Router } from 'express';

import CarControllers from '../controllers/CarControllers';
import CarMiddlewares from '../middlewares/CarMiddlewares';

const carRouter = Router();

carRouter.post('/',
  CarMiddlewares.validateAd,
  CarControllers.createAd);

carRouter.patch('/:id/price',
  CarMiddlewares.updateCarPrice,
  CarControllers.updateCarPrice);

carRouter.get('/:id',
  CarControllers.viewSpecificAd);

carRouter.get('/?status=available',
  CarControllers.viewUnsoldCars);

carRouter.get('/?status=available&minValue=500000&maxValue=100000000',
  CarControllers.viewUnsoldCarsWithinPriceRange);

carRouter.get('/',
  CarControllers.viewAllCars);

export default carRouter;
