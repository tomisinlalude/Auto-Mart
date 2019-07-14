/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable consistent-return */

import regeneratorRuntime from 'regenerator-runtime';

import { generateToken } from '../middlewares/jwt';
import authModel from '../database/models/authModel';

class AuthControllers {
  static async createUser(req, res) {
    try {
      const {
        first_name, last_name, email, password, confirm_password, address,
      } = req.body;
      const existingUser = await authModel.checkAll(email);
      if (existingUser) {
        return res.status(409).json({
          success: false,
          message: 'This email has been used. Kindly login instead.',
        });
      }
      const user = await authModel
        .createUser(first_name, last_name, email, password, confirm_password, address);
      const token = generateToken(
        {
          id: user.id, email,
        },
      );
      res.status(201).json({
        success: true,
        message: 'User has been created',
        data: {
          id: user.id,
          token,
          first_name,
          last_name,
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
      const { user_id: id, first_name, last_name } = returningUser;

      const token = generateToken(
        {
          id, email,
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

  static async resetPassword(req, res) {
    const { password } = req.body;
    try {
      const { user_id } = await authModel.checkToken(req.header.token);
      if (!user_id) {
        return res.status(404).json({
          success: false,
          message: 'User does not exist',
        });
      }
      await authModel.resetPassword(user_id, password);
      return res.status(200).json({
        success: true,
        message: 'Password has been reset',
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: 'Password reset failed',
        err,
      });
    }
  }
}

export default AuthControllers;
