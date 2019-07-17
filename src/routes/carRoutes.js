/* eslint-disable linebreak-style */
import { Router } from 'express';

import CarControllers from '../controllers/CarControllers';
import CarMiddlewares from '../middlewares/CarMiddlewares';
import { verifyToken } from '../middlewares/jwt';

const carRouter = Router();

carRouter.post('/',
  verifyToken,
  CarMiddlewares.validateAd,
  CarControllers.createAd);

carRouter.patch('/:id/price',
  verifyToken,
  CarMiddlewares.updateCarPrice,
  CarControllers.updateCarPrice);

carRouter.get('/:id',
  verifyToken,
  CarControllers.viewSpecificAd);

carRouter.get('/?status=available',
  CarControllers.viewUnsoldCars);

carRouter.get('/?status=available&minValue=500000&maxValue=100000000',
  CarControllers.viewUnsoldCarsWithinPriceRange);

carRouter.get('/',
  verifyToken,
  CarControllers.viewAllCars);

carRouter.delete('/:id',
  verifyToken,
  CarControllers.adminDeleteAdRecord);

carRouter.patch('/:id/status',
  verifyToken,
  CarControllers.markCarAsSold);

export default carRouter;
