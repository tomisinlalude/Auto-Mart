/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable consistent-return */

import regeneratorRuntime from 'regenerator-runtime';
import bcrypt from 'bcrypt';

import { generateToken, getUserFromToken } from '../middlewares/jwt';
import authModel from '../database/models/authModel';

class AuthControllers {
  static async createUser(req, res) {
    try {
      const {
        first_name, last_name, email, password, address,
      } = req.body;
      const existingUser = await authModel.checkEmail(email);
      if (existingUser) {
        return res.status(409).json({
          status: 'error',
          message: 'This email has been used. Kindly login instead.',
        });
      }
      const passwordHash = await bcrypt.hash(password, 10);
      const user = await authModel
        .createUser(first_name, last_name, email, passwordHash, address);
      const token = generateToken(
        {
          id: user.user_id, email,
        },
      );
      res.status(201).json({
        status: 'success',
        message: 'User has been created',
        data: {
          id: user.user_id,
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
        status: 'error',
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
      const returningUser = await authModel.checkEmail(email);
      if (!returningUser) {
        return res.status(404).json({
          status: 'error',
          message: 'User does not exist. Sign up',
        });
      }

      const passwordsMatch = await bcrypt.compare(password, returningUser.password_hash);
      if (!passwordsMatch) {
        return res.status(404).json({
          status: 'error',
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
        status: 'success',
        message: 'User has been logged in',
        data: {
          token,
          id,
          first_name,
          last_name,
          email,
          password,
        },
      });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        message: 'User login failed',
        err,
      });
    }
  }

  static async resetPassword(req, res) {
    const { password } = req.body;
    try {
      const { user_id } = await getUserFromToken(req.params.token);
      if (!user_id) {
        return res.status(404).json({
          status: 'error',
          message: 'User does not exist',
        });
      }
      const passwordHash = await bcrypt.hash(password, 10);
      await authModel.resetPassword(user_id, passwordHash);
      return res.status(200).json({
        status: 'success',
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
