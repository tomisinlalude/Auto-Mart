/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */

import orderModel from '../database/models/orderModel';

class OrderControllers {
  static async createOrder(req, res) {
    try {
      const {
        car_id, amount,
      } = req.body;

      const { id } = req.user;

      const order = await orderModel.createOrder(id, car_id, amount);
      return res.status(201).json({
        success: true,
        message: 'Order has been created',
        data: order,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: 'Create order not successful',
        err,
      });
    }
  }

  static async updateOrderPrice(req, res) {
    const { id } = req.params;
    const { price } = req.body;

    try {
      const findOrder = await orderModel.findOrder(id);

      if (findOrder === undefined) {
        return res.status(404).json({
          success: 'false',
          error: 'Not found',
        });
      }

      const updatePrice = await orderModel.updateOrderPrice(id, price);
      if (updatePrice) {
        res.status(200).json({
          status: 'successful',
          message: 'Price of order successfully updated',
          data: updatePrice,
        });
      }
    } catch (err) {
      return res.status(500).json({
        success: 'false',
        message: 'Not successful',
      });
    }
  }
}

export default OrderControllers;
