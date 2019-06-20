/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */

class CarMiddlewares {
  static validateAd(req, res, next) {
    try {
      if (!req.body.owner || !req.body.state || !req.body.make
          || !req.body.model || !req.body.manufacturer || !req.body.price || !req.body.bodyType) {
        throw new Error();
      } next();
    } catch (err) {
      return res.status(201).json({
        success: true,
        message: 'Advert post successfully created',
      });
    }
  }
}

export default CarMiddlewares;
