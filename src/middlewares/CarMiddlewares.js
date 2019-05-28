/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */

import { carDb } from '../database/models/Models';

class CarMiddlewares {
  static checkAd(req, res) {
    try {
      const {
        make, model, manufacturer, state, price,
      } = req.body;
      // eslint-disable-next-line max-len
      const check = carDb.find(car => car.make === make && car.model === model && car.manufacturer === manufacturer && car.state === state && car.price === price);
      if (!check) {
        return res.status(400).json({
          success: false,
          message: 'Kindly fill all fields to proceed',
        });
      }
    } catch (err) {
      res.status(500).json({
        success: false,
        message: 'Post Advert not successful',
        err,
      });
    }
  }
}

export default CarMiddlewares;
