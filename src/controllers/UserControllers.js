/* eslint-disable linebreak-style */
/* eslint-disable no-const-assign */
/* eslint-disable consistent-return */
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import { Users, UserDb } from '../database/models/Models';

dotenv.config();

const secret = process.env.SECRET_KEY;

const generateToken = payload => jwt.sign(payload, secret, { expiresIn: '240h' });

const { insertUser } = Users;

class UserControllers {
  static createUser(req, res) {
    try {
      const {
        firstName, lastName, phoneNumber, email, password, address, isAdmin,
      } = req.body;
      const user = {
        firstName, lastName, phoneNumber, email, password, address, isAdmin,
      };
      const token = generateToken(
        {
          id: user.id, firstName, lastName, phoneNumber, email, password, address, isAdmin,
        },
      );
      insertUser(user);
      res.status(200).json({
        success: true,
        message: 'User has been created',
        data: {
          token,
          firstName,
          lastName,
          phoneNumber,
          email,
          password,
          address,
          isAdmin,
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

  static userLogin(req, res) {
    try {
      const { email, password } = req.body;
      const returningUser = UserDb.find(user => user.email === email && user.password === password);
      if (!returningUser) {
        return res.status(404).json({
          success: false,
          message: 'User does not exist',
        });
      }
      const token = generateToken(
        { id: returningUser.id, email, username: returningUser.username },
      );
      return res.status(201).json({
        success: true,
        message: 'User has been logged in',
        token,
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

export default UserControllers;
