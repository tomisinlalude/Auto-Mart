/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable no-return-assign */
/* eslint-disable consistent-return */

import { Cars } from '../database/mockData/Cars';
import carModel from '../database/models/carModel';

const { insertCar } = Cars;

class CarControllers {
  static createAd(req, res) {
    try {
      const {
        owner, state, status, make, model, manufacturer, price, bodyType, imageUrl,
      } = req.body;

      const { checkOwner } = carModel;
      if (!checkOwner) {
        return res.status(400).json({
          success: false,
          message: 'User does not have an account',
        });
      }
      const car = carModel.createAd(
        owner,
        state,
        status,
        price,
        make,
        manufacturer,
        model,
        bodyType,
        imageUrl,
      );
      insertCar(car);
      res.status(201).json({
        success: true,
        message: 'Advert post successfully created',
        data: car,
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
