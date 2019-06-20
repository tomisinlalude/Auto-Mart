/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */

class OrderMiddlewares {
  static validateOrder(req, res, next) {
    try {
      if (!req.body.buyer || !req.body.status || !req.body.price
        || !req.body.priceOffered) {
        throw new Error();
      } next();
    } catch (err) {
      return res.status(201).json({
        success: true,
        message: 'Order has been successfully created',
      });
    }
  }
}

export default OrderMiddlewares;
