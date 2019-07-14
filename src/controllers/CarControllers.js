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
        owner, state, status, model, manufacturer, price, body_type, image_url,
      } = req.body;

      const { checkOwner } = await carModel;
      if (!checkOwner) {
        return res.status(400).json({
          success: false,
          message: 'User does not have an account',
        });
      }
      const car = await carModel.createAd(
        owner,
        state,
        status,
        price,
        manufacturer,
        model,
        body_type,
        image_url,
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
    const { user_id: owner, new_price } = req.body;
    const { car_id } = req.params;
    try {
      const updatedPrice = await carModel.updateCarPrice(car_id, owner, new_price);
      if (updatedPrice) {
        return res.status(200).json({
          success: true,
          message: 'Price of car successfully updated',
          data: updatedPrice,
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
    const { car_id } = req.params;
    try {
      const specificAd = await carModel.selectSpecificCar(car_id);
      if (!specificAd) {
        return res.status(404).json({
          success: false,
          message: 'This car ad is not found',
        });
      }
      return res.status(200).json({
        success: true,
        message: 'Viewing car ad is successful',
        data: specificAd,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: 'Viewing car ad is not successful',
        err,
      });
    }
  }

  static async viewUnsoldCars(req, res) {
    try {
      const unsold = await carModel.unsoldCarsOnly();
      if (unsold) {
        return res.status(200).json({
          success: true,
          message: 'Viewing unsold cars',
          data: unsold,
        });
      }
    } catch (err) {
      res.status(500).json({
        success: false,
        message: 'Not successful',
        err,
      });
    }
  }

  static async viewUnsoldCarsWithinPriceRange(req, res) {
    try {
      const unsold = carModel.unsoldCarsOnly();
      if (unsold.length > 0) {
        const unsoldWithPriceRange = await carModel.unsoldCarsPriceRange();
        if (unsoldWithPriceRange.length > 0) {
          return res.status(200).json({
            status: 'success',
            data: unsoldWithPriceRange,
          });
        }
      }
    } catch (err) {
      return res.status(404).json({
        status: 'error',
        message: 'No cars within this price range',
      });
    }
  }

  static async viewAllCars(req, res) {
    try {
      const allCars = await carModel.allCars();
      if (allCars) {
        return res.status(200).json({
          success: true,
          message: 'Viewed all cars successfully',
          data:
            allCars,
        });
      }
    } catch (err) {
      res.status(500).json({
        success: false,
        message: 'Not successful',
        err,
      });
    }
  }

  static async adminDeleteAdRecord(req, res) {
    try {
      const isAdmin = false;
      const deleteAd = await carModel.deleteAd();
      if (!isAdmin && deleteAd) {
        return res.status(200).json({
          success: true,
          message: 'Success! This ad has been deleted',
        });
      }
      return res.status(404).json({
        success: false,
        message: 'Car ad not found',
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: 'Not successful',
        err,
      });
    }
  }

  static async markCarAsSold(req, res) {
    const { user_id } = req.body;
    const { car_id } = req.params;
    try {
      const id = Number(req.params.id);
      const checkStatus = await carModel.markAdAsSold;
      if (checkStatus === 'sold') {
        return res.status(404).json({
          success: false,
          message: 'This car has been sold',
        });
      }
      return res.status(200).json({
        success: true,
        message: 'Success! Marked as sold',
        data: {
          car_id,
          manufacturer,
          model,
          status,
          state,
          price,
        },
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: 'Not successful',
        err,
      });
    }
  }
}

export default CarControllers;
