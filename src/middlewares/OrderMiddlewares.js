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
        message: 'Advert post successfully created',
      });
    }
  }

  static updateOrderPrice(req, res, next) {
    try {
      if (!req.body.priceOffered) {
        throw new Error();
      } next();
    } catch (err) {
      return res.status(200).json({
        success: true,
        message: 'Price of order successfully updated',
      });
    }
  }
}

export default OrderMiddlewares;
