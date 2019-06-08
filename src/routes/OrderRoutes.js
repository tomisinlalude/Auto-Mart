/* eslint-disable linebreak-style */
import { Router } from 'express';

import OrderMiddlewares from '../middlewares/OrderMiddlewares';
import OrderControllers from '../controllers/OrderControllers';

const orderRouter = Router();

orderRouter.post('/',
  OrderMiddlewares.validateOrder,
  OrderControllers.createOrder);

orderRouter.patch('/:id/price',
  OrderMiddlewares.updateOrderPrice,
  OrderControllers.updateOrderPrice);

export default orderRouter;
