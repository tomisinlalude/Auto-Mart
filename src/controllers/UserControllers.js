import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import { Users, UserDb } from '../database/models/Users';

dotenv.config();

const secret = process.env.SECRET_KEY;

const generateToken = payload => jwt.sign(payload, secret, { expiresIn: '240h' });

const { insertUser } = Users;

class UserControllers {
  static createUser(req, res) {
    try {
      const {
        userName, phoneNumber, email, password,
      } = req.body;
      const user = {
        userName, phoneNumber, email, password,
      };
      insertUser(user);
      res.status(200).json({
        success: true,
        message: 'User has been created',
        data: {
          // id,
          userName,
          phoneNumber,
          email,
          createdOn: Date.now(),
          updatedOn: Date.now(),
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
