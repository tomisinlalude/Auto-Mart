/* eslint-disable linebreak-style */
import { Router } from 'express';

import OrderMiddlewares from '../middlewares/OrderMiddlewares';
import OrderControllers from '../controllers/OrderControllers';
import { verifyToken } from '../middlewares/jwt';

const orderRouter = Router();

orderRouter.post('/',
  verifyToken,
  OrderMiddlewares.validateOrder,
  OrderControllers.createOrder);

orderRouter.patch('/:id/price',
  verifyToken,
  OrderMiddlewares.updateOrderPrice,
  OrderControllers.updateOrderPrice);

export default orderRouter;
