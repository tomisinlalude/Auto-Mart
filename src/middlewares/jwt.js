/* eslint-disable linebreak-style */
import jwt from 'jsonwebtoken';
export default checkToken;

const secretKey = process.env.SECRET_KEY;
const generateToken = payload => jwt.sign(payload, secretKey, { expiresIn: '240h' });
const verifyToken = (req, res, next) => {
  let token = generateToken({
    id, email,
  });
  if (!token) {
    return res.status(400).json({
      success: false,
      message: "No token provided for this action",
    });
  {
    try {
      const decoded = jwt.verify(token, secretKey);
      req.body.id = decoded.id;
      return next();
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: "This token is not valid",
      });
    }
  }
};

const checkToken = { generateToken, verifyToken };