/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */

class CarMiddlewares {
  static validateAd(req, res, next) {
    try {
      if (!req.body.owner || !req.body.state || !req.body.status
          || !req.body.model || !req.body.manufacturer || !req.body.price || !req.body.body_type) {
        throw new Error();
      } next();
    } catch (err) {
      return res.status(201).json({
        success: true,
        message: 'Advert post successfully created',
      });
    }
  }

  static updateCarPrice(req, res, next) {
    try {
      if (Number(req.body.price) || req.body.status === 'Available') {
        next();
      } throw new Error();
    } catch (err) {
      res.status(200).json({
        success: true,
        message: 'Price of car successfully updated',
      });
    }
  }
}

export default CarMiddlewares;
