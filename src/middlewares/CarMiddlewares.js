/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */

class CarMiddlewares {
  static validateAd(req, res, next) {
    const {
      state, status, price, manufacturer, body_type, model,
    } = req.body;

    if (!state || !status || !model || !manufacturer || !price || !body_type) {
      return res.status(400).json({
        error: 'Incomplete data',
      });
    }

    return next();
  }

  static updateCarPrice(req, res, next) {
    if (!req.body.price) {
      return res.status(400).json({
        error: 'Incomplete data',
      });
    }
    return next();
  }
}

export default CarMiddlewares;
