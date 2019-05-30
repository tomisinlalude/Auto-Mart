/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */

import dotenv from 'dotenv';

import { Cars, UserDb } from '../database/models/Models';

dotenv.config();

const { addCar } = Cars;

class CarControllers {
  static createAd(req, res) {
    try {
      const {
        owner, state, status, make, model, manufacturer, price, bodyType, createdOn,
      } = req.body;
      const car = {
        state, status, make, model, manufacturer, price, bodyType,
      };
      const checkOwner = UserDb.find(user => owner === user.id);
      if (!checkOwner) {
        return res.status(400).json({
          success: false,
          message: 'User does not have an account',
        });
      }
      addCar(car);
      res.status(201).json({
        success: true,
        message: 'Advert post successfully created',
        data: {
          owner,
          state,
          status,
          make,
          model,
          manufacturer,
          price,
          bodyType,
          createdOn,
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
