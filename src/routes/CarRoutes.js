/* eslint-disable linebreak-style */
import { Router } from 'express';

import CarControllers from '../controllers/CarControllers';
import CarMiddlewares from '../middlewares/CarMiddlewares';

const carRouter = Router();

carRouter.post('/',
  CarMiddlewares.validateAd,
  CarControllers.createAd);

carRouter.get('/',
  CarControllers.viewAllCars);

carRouter.get('/status=available&&minValue=1000&&maxValue=100000000',
  CarControllers.viewUnsoldCarsWithinPriceRange);

carRouter.get('/status=available',
  CarControllers.viewUnsoldCars);

carRouter.get('/:id',
  CarControllers.viewSpecificAd);

carRouter.patch('/:id/price',
  CarMiddlewares.updateCarPrice,
  CarControllers.updateCarPrice);

carRouter.patch('/:id/status',
  CarControllers.markCarAsSold);

carRouter.delete('/:id',
  CarControllers.adminDeleteAdRecord);

export default carRouter;
