/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */

import Orders from '../database/mockData/Orders';
import orderModel from '../database/models/orderModel';

const { insertOrder } = Orders;

class OrderControllers {
  static async createOrder(req, res) {
    try {
      const {
        buyer, carId, status, price, priceOffered,
      } = req.body;
      req.body.buyer = await orderModel.checkBuyer;
      if (!req.body.buyer) {
        return res.status(400).json({
          success: false,
          message: 'User does not have an account',
        });
      }
      const order = await orderModel.createOrder(buyer, carId, status, price, priceOffered);
      insertOrder(order);
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
    try {
      const updatePrice = await orderModel.updateOrderPrice;
      if (updatePrice) {
        res.status(200).json({
          success: true,
          message: 'Price of order successfully updated',
        });
      }
    } catch (err) {
      return res.status(500).json({
        success: 'false',
        message: 'Not successful',
        err,
      });
    }
  }
}

export default OrderControllers;
