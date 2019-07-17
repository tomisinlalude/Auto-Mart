/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */

class OrderMiddlewares {
  static validateOrder(req, res, next) {
    const { car_id, amount } = req.body;

    if (!amount || !car_id) {
      return res.status(400).json({
        error: 'Incomplete data',
      });
    }
    return next();
  }

  static updateOrderPrice(req, res, next) {
    if (!req.body.price) {
      return res.status(400).json({
        error: 'Incomplete data',
      });
    }
    return next();
  }
}

export default OrderMiddlewares;
