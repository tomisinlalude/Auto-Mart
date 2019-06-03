/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable no-return-assign */
/* eslint-disable consistent-return */

import dotenv from 'dotenv';

import { Cars, UserDb, Orders } from '../database/models/Models';

dotenv.config();

const { addCar } = Cars;
const { addOrder, updatePrice } = Orders;
class CarControllers {
  static createAd(req, res) {
    try {
      const {
        id, owner, state, status, make, model, manufacturer, price, bodyType, createdOn,
      } = req.body;
      const car = {
        owner, state, status, make, model, manufacturer, price, bodyType,
      };
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
      const checkOwner = UserDb.find(user => car.owner === user.firstName && user.lastName);
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

  static createOrder(req, res) {
    try {
      const {
        id, buyer, amount, carId, status, createdOn,
      } = req.body;
      const order = {
        buyer, amount, status,
      };
      addOrder(order);
      res.status(201).json({
        success: true,
        message: 'Order created',
        data: {
          buyer,
          amount,
          carId,
          status,
          createdOn,
        },
      });
      // eslint-disable-next-line no-param-reassign
      const carIdentification = idNo => (Orders.addOrder ? idNo++ : idNo);
      carIdentification(carId);
      const checkBuyer = UserDb.find(user => order.buyer === user.firstName && user.lastName);
      if (!checkBuyer) {
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

  static updateOrderPrice(req, res) {
    try {
      const {
        id, carId, status, oldPrice, newPrice,
      } = req.body;
      const update = {
        status, oldPrice, newPrice,
      };
      const carIdentification = idNo => (Orders.addOrder ? idNo++ : idNo);
      carIdentification(carId);
      updatePrice(update);
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
