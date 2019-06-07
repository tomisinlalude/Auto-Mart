/* eslint-disable linebreak-style */
/* eslint-disable no-use-before-define */
/* eslint-disable no-const-assign */
/* eslint-disable consistent-return */

import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import { userDb, Users } from '../database/models/Users';

dotenv.config();

const secretKey = process.env.SECRET_KEY;

const generateToken = payload => jwt.sign(payload, secretKey, { expiresIn: '240h' });

const { insertUser } = Users;

class UserControllers {
  static createUser(req, res) {
    try {
      const {
        firstName, lastName, phoneNumber, email, password, address, isAdmin,
      } = req.body;
      const id = userDb.length + 1;
      const user = {
        id,
        token,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
        isAdmin,
      };
      const token = generateToken(
        {
          id: user.id, firstName, lastName, phoneNumber, email, password, address, isAdmin,
        },
      );
      insertUser(user);
      res.status(201).json({
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
      const {
        email, password,
      } = req.body;
      const returningUser = userDb.find(user => user.email === email && user.password === password);
      if (!returningUser) {
        return res.status(404).json({
          success: false,
          message: 'User does not exist',
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
          id: returningUser.id, email, password,
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

export default UserControllers;
