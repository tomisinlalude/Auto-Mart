/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable no-return-assign */
/* eslint-disable consistent-return */

import dotenv from 'dotenv';

import { userDb } from '../database/models/Users';
import { carDb, Cars } from '../database/models/Cars';

dotenv.config();

const { addCar } = Cars;
class CarControllers {
  static createAd(req, res) {
    try {
      const {
        owner, state, status, make, model, manufacturer, price, bodyType,
      } = req.body;
      const carId = carDb.length + 1;
      const car = {
        carId,
        state: req.body.state,
        status: req.body.status,
        make: req.body.make,
        model: req.body.model,
        manufacturer: req.body.manufacturer,
        price: req.body.price,
        bodyType: req.body.bodyType,
        createdOn: Date.now(),
      };
      addCar(car);
      res.status(201).json({
        success: true,
        message: 'Advert post successfully created',
        data: {
          carId,
          owner,
          state,
          status,
          make,
          model,
          manufacturer,
          price,
          bodyType,
          createdOn: Date.now(),
        },
      });
      const checkOwner = userDb.find(user => owner === user.firstName && user.lastName);
      if (!checkOwner) {
        return res.status(400).json({
          success: false,
          message: 'User does not have an account',
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

  static markCarAsSold(req, res) {
    try {
      const {
        email, state, status, make, model, manufacturer, price,
      } = req.body;
      const id = Number(req.params.id);
      const checkStatus = carDb.filter(car => car.status === status);
      if (!checkStatus === 'sold') {
        return res.status(404).json({
          success: false,
          message: 'This car is still available',
        });
      }
      return res.status(200).json({
        success: true,
        message: 'Success! Marked as sold',
        data: {
          id,
          email,
          manufacturer,
          make,
          model,
          status,
          state,
          price,
          createdOn: Date.now(),
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

  static viewSpecificAd(req, res) {
    try {
      const {
        owner, state, status, make, model, manufacturer, price, bodyType,
      } = req.body;
      const id = Number(req.params.id);
      const specificAd = carDb.find(car => car.id === id);
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

  static adminViewAllCars(req, res) {
    try {
      if (carDb.length !== 0) {
        return res.status(200).json({
          success: true,
          message: 'View all cars successfully',
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

  static viewUnsoldCars(req, res) {
    try {
      const id = Number(req.params.id);
      carDb.forEach((car) => {
        if (car.id === id && car.status === 'available') {
          return res.status(200).json({
            success: true,
            message: 'Viewing unsold cars',
          });
        }
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: 'Not successful',
        err,
      });
    }
  }

  static viewUnsoldCarsWithinPriceRange(req, res) {
    try {
      const { minPrice, maxPrice } = req.body;
      const unsoldCars = carDb.filter(car => car.status === 'available');
      if (unsoldCars.length > 0) {
        const unsoldWithPriceRange = unsoldCars.filter(
          car => car.price >= minPrice && car.price <= maxPrice,
        );
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

  static updateCarPrice(req, res) {
    try {
      const { price } = req.body;
      if (price) {
        return res.status(200).json({
          status: 'success',
          data: price,
        });
      }
    } catch (err) {
      return res.status(500).json({
        status: 'error',
        message: 'Not successful',
      });
    }
  }

  static adminDeleteAdRecord(req, res) {
    try {
      let index;
      const car = carDb[index];
      const isAdmin = false;
      const id = carDb.find(carDb[index].id + 1);
      if (!isAdmin && car.id === id) {
        carDb.find(car, index);
        carDb.splice(index, 1);
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
}

export default CarControllers;
