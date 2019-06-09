/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
import orderDb from '../database/models/Orders';

class OrderControllers {
  static createOrder(req, res) {
    try {
      const newOrder = {
        id: 1,
        buyer: req.body.buyer,
        carId: req.body.carId,
        createdOn: req.body.createdOn,
        status: req.body.status,
        price: req.body.price,
        priceOffered: req.body.priceOffered,
      };

      orderDb.push(newOrder);
      return res.status(201).json({
        success: true,
        message: 'Order has been created',
        data: newOrder,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: 'Create order not successful',
        err,
      });
    }
  }

  static updateOrderPrice(req, res) {
    try {
      const id = Number(req.params.id);
      orderDb.forEach((order, index) => {
        if (order.orderId === id && order.status === 'Pending') {
          orderDb[index].price = Number(req.body.priceOffered);
        }
      });
      res.status(200).json({
        success: true,
        message: 'Price of order successfully updated',
        data: orderDb.find(order => order.orderId === id),
      });
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
