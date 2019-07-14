/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */

class OrderMiddlewares {
  static validateOrder(req, res, next) {
    try {
      if (!req.body.buyer || !req.body.status || !req.body.price
        || !req.body.price_offered) {
        throw new Error();
      } next();
    } catch (err) {
      return res.status(201).json({
        success: true,
        message: 'Order has been successfully created',
      });
    }
  }

  static updateOrderPrice(req, res, next) {
    try {
      if (req.body.price_offered && req.body.status === 'Pending') {
        next();
      } throw new Error();
    } catch (err) {
      return res.status(200).json({
        success: true,
        message: 'Price of order successfully updated',
      });
    }
  }
}

export default OrderMiddlewares;
