/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */

import regeneratorRuntime from 'regenerator-runtime';

import { Cars } from '../database/mockData/Cars';
import carModel from '../database/models/carModel';

const { insertCar } = Cars;

class CarControllers {
  static async createAd(req, res) {
    try {
      const {
        owner, state, status, make, model, manufacturer, price, bodyType, imageUrl,
      } = req.body;

      const { checkOwner } = await carModel;
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

  static async updateCarPrice(req, res) {
    try {
      const update = await carModel.updateCarPrice();
      if (update) {
        return res.status(200).json({
          success: true,
          message: 'Price of car successfully updated',
        });
      }
    } catch (err) {
      return res.status(500).json({
        success: 'false',
        message: 'Not successful',
      });
    }
  }

  static async viewSpecificAd(req, res) {
    try {
      const {
        owner, state, status, make, model, manufacturer, price, bodyType,
      } = req.body;
      const id = Number(req.params.id);
      const specificAd = await carModel.selectSpecificCar;
      if (!specificAd) {
        return res.status(404).json({
          success: false,
          message: 'This car ad is not found',
        });
      }
      return res.status(200).json({
        success: true,
        message: 'Viewing car ad is successful',
        data: {
          id,
          owner,
          state,
          status,
          price,
          make,
          model,
          manufacturer,
          bodyType,
          createdOn: Date.now(),
        },
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: 'Viewing car ad is not successful',
        err,
      });
    }
  }
}

export default CarControllers;
