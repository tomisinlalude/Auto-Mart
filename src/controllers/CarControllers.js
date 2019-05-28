/* eslint-disable linebreak-style */
import dotenv from 'dotenv';

import { Cars } from '../database/models/Models';

dotenv.config();

const { addCar } = Cars;

class CarControllers {
  static createAd(req, res) {
    try {
      const {
        make, model, manufacturer, state, price,
      } = req.body;
      const car = {
        make, model, manufacturer, state, price,
      };
      addCar(car);
      res.status(200).json({
        success: true,
        message: 'Advert post successfully created',
        data: {
          make,
          model,
          manufacturer,
          state,
          price,
        },
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: 'Post Advert not successful',
        err,
      });
    }
  }
}

export default CarControllers;
