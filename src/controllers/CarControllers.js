/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable prefer-const */

import regeneratorRuntime from 'regenerator-runtime';

import { getUserFromToken } from '../middlewares/jwt';
import carModel from '../database/models/carModel';

class CarControllers {
  static async createAd(req, res) {
    try {
      let {
        state, status, model, manufacturer, price, body_type, image_url,
      } = req.body;

      const { id } = req.user;
      if (!image_url) {
        image_url = '';
      }
      const car = await carModel.createAd(
        id,
        state,
        status,
        price,
        manufacturer,
        model,
        body_type,
        image_url,
      );
      res.status(201).json({
        status: 'success',
        message: 'Advert post successfully created',
        data: car,
      });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        message: 'Post Advert not successful',
        err,
      });
    }
  }

  static async updateCarPrice(req, res) {
    const { price } = req.body;
    const { id } = req.params;
    try {
      const findCar = await carModel.selectSpecificCar(id);

      if (findCar === undefined) {
        return res.status(404).json({
          status: 'error',
          error: 'Not found',
        });
      }

      const updatedPrice = await carModel.updateCarPrice(id, price);
      if (updatedPrice) {
        return res.status(200).json({
          status: 'success',
          message: 'Price of car successfully updated',
          data: updatedPrice,
        });
      }
    } catch (err) {
      return res.status(500).json({
        status: 'error',
        error: 'Not successful',
      });
    }
  }

  static async viewSpecificAd(req, res) {
    const { id } = req.params;
    try {
      const specificAd = await carModel.selectSpecificCar(id);
      if (specificAd === undefined) {
        return res.status(404).json({
          status: 'error',
          error: 'This car ad is not found',
        });
      }
      return res.status(200).json({
        status: 'success',
        message: 'Viewing car ad is successful',
        data: specificAd,
      });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        error: 'Viewing car ad is not successful',
        err,
      });
    }
  }

  static async viewUnsoldCars(req, res) {
    try {
      const unsold = await carModel.unsoldCarsOnly();
      if (unsold) {
        return res.status(200).json({
          status: 'success',
          message: 'Viewing unsold cars',
          data: unsold,
        });
      }
    } catch (err) {
      res.status(500).json({
        status: 'error',
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
          status: 'success',
          message: 'Viewed all cars successfully',
          data:
            allCars,
        });
      }
    } catch (err) {
      res.status(500).json({
        status: 'error',
        message: 'Not successful',
        err,
      });
    }
  }

  static async adminDeleteAdRecord(req, res) {
    const { id } = req.params;
    // const { is_admin: isAdmin } = await getUserFromToken(req.headers.authorization);
    // if (!isAdmin) {
    //   res.status(403).json({
    //     status: 'error',
    //     message: 'You do not have access to this feature',
    //   });
    // }
    try {
      const car = await carModel.selectSpecificCar(id);
      if (car === undefined) {
        return res.status(404).json({
          status: 'error',
          error: 'Car ad not found',
        });
      }
      await carModel.deleteAd(id);
      return res.status(200).json({
        status: 'success',
        message: 'Car ad has been successfully deleted',
      });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        message: 'Not successful',
        err,
      });
    }
  }

  static async markCarAsSold(req, res) {
    const { id } = req.params;
    try {
      const status = 'sold';
      const checkStatus = await carModel.markAdAsSold(id, status);
      if (checkStatus === undefined) {
        return res.status(404).json({
          success: false,
          message: 'Car does not exist',
        });
      }
      return res.status(200).json({
        status: 'success',
        message: 'Success! Marked as sold',
        data: checkStatus,
      });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        error: 'Not successful',
      });
    }
  }
}

export default CarControllers;
