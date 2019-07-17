/* eslint-disable linebreak-style */
/* eslint-disable camelcase */

import jwt from 'jsonwebtoken';

import authModel from '../database/models/authModel';

const secretKey = process.env.SECRET_KEY;
export const generateToken = (user_id, email) => {
  const token = jwt.sign({ user_id, email }, secretKey, { expiresIn: 84600 });
  return token;
};

export const verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
      return res.status(400).json({
        success: false,
        error: 'No token provided for this action',
      });
    }
    const release = jwt.verify(token, secretKey);

    req.user = release.user_id;
    return next();
  } catch (err) {
    return res.status(400).json({
      success: false,
      error: 'This token is not valid',
    });
  }
};

export const getUserFromToken = async (token) => {
  try {
    const release = jwt.verify(token, secretKey);
    const { email } = release;
    const user = await authModel.checkAll(email);
    return user;
  } catch (error) {
    return false;
  }
};
