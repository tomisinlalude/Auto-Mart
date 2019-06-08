/* eslint-disable linebreak-style */

/**
 * @class UserAuth
 * @description Contains methods for validating each user related endpoint
 * @exports UserAuth
 */

class AuthMiddlewares {
  static validateName(req, res, next) {
    const { firstName, lastName } = req.body;
    const regex = /\d+/;
    if (regex.test(firstName, lastName)) {
      return res.status(400).json({
        success: false,
        message: 'You cannot use digits in your name',
      });
    }
    return next();
  }

  static validatePhoneNumber(req, res, next) {
    try {
      const { phoneNumber } = req.body;
      const phoneRegex = /[A-Za-z]/;
      if (phoneRegex.test(phoneNumber)) {
        throw new Error();
      }
      return next();
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: 'Enter a valid phone number',
      });
    }
  }

  static validatePassword(req, res, next) {
    try {
      const { password, confirmPassword } = req.body;
      if (password.length < 6) {
        throw new Error();
      }
      if (password !== confirmPassword) {
        return res.status(400).json({
          success: false,
          message: "Your passwords don't match",
        });
      }
      return next();
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: 'Your password must be more than 6 characters',
      });
    }
  }

  static validateAddress(req, res, next) {
    try {
      const { address } = req.body;
      if (address.length > 50) {
        throw new Error();
      }
      return next();
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: 'Address is too long',
      });
    }
  }

  static validateEmail(req, res, next) {
    try {
      const { email } = req.body;
      const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!emailRegex.test(email)) {
        throw new Error();
      }
      return next();
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: 'Enter a valid email address',
      });
    }
  }
}

export default AuthMiddlewares;
