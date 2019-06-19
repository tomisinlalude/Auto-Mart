/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable consistent-return */

import regeneratorRuntime from 'regenerator-runtime';

import { Users } from '../database/mockData/Users';
import { generateToken } from '../middlewares/jwt';
import authModel from '../database/models/authModel';

const { insertUser } = Users;

class AuthControllers {
  static async createUser(req, res) {
    try {
      const {
        firstName, lastName, email, password, confirmPassword, phoneNumber, address,
      } = req.body;
      const existingUser = await authModel.checkAll(email);
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: 'This email has been used. Kindly login instead.',
        });
      }
      const user = await authModel
        .createUser(firstName, lastName, email, password, confirmPassword, phoneNumber, address);
      const token = generateToken(
        {
          id: user.id, email,
        },
      );
      insertUser(user);
      res.status(201).json({
        success: true,
        message: 'User has been created',
        data: {
          id: user.id,
          token,
          firstName,
          lastName,
          phoneNumber,
          email,
          password,
          address,
        },
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: 'User creation failed',
        err,
      });
    }
  }

  static async userLogin(req, res) {
    try {
      const {
        email, password,
      } = req.body;
      const returningUser = await authModel.checkAll(email);
      if (!returningUser) {
        return res.status(404).json({
          success: false,
          message: 'User does not exist. Sign up',
        });
      }
      if (returningUser.password !== req.body.password) {
        return res.status(400).json({
          success: false,
          message: 'Incorrect password',
        });
      }
      const token = generateToken(
        {
          id: returningUser.id, email,
        },
      );
      return res.status(200).json({
        success: true,
        message: 'User has been logged in',
        data: {
          token,
          email,
          password,
        },
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: 'User login failed',
        err,
      });
    }
  }
}

export default AuthControllers;
