/* eslint-disable linebreak-style */
import jwt from 'jsonwebtoken';

const secretKey = process.env.SECRET_KEY;
export const generateToken = payload => jwt.sign(payload, secretKey, { expiresIn: '240h' });
export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(400).json({
      success: false,
      message: 'No token provided for this action',
    });
  }
  try {
    const release = jwt.verify(token, secretKey);
    req.body.id = release.id;
    return next();
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: 'This token is not valid',
    });
  }
};
