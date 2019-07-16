/* eslint-disable linebreak-style */
import jwt from 'jsonwebtoken';

const secretKey = process.env.SECRET_KEY;
export const generateToken = (user_id, email) => {
  const token = jwt.sign({user_id, email}, secretKey, { expiresIn: 84600 });
  return token;
};

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
    req.body.id = release.user_id;
    req.user = release;
    return next();
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: 'This token is not valid',
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
