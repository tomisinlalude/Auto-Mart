/* eslint-disable linebreak-style */
import orderDb from '../database/models/Orders';

class OrderControllers {
  static createOrder(req, res) {
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
  }

  static updateOrderPrice(req, res) {
    const id = Number(req.params.id);
    orderDb.forEach((car, index) => {
      if (car.id === id && car.status === 'pending') {
        orderDb[index].amount = Number(req.body.priceOffered);
      }
    });
    res.send({
      status: 200,
      data: orderDb.find(car => car.id === id),
    });
  }
}

export default OrderControllers;
