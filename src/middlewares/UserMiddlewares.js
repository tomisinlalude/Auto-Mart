/* eslint-disable linebreak-style */
class UserMiddlewares {
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
    const { phoneNumber } = req.body;
    if (phoneNumber.length < 11) {
      return res.status(400).json({
        success: false,
        message: 'Your phone number should be 11 digits',
      });
    }
    return next();
  }

  static validatePassword(req, res, next) {
    const { password, confirmPassword } = req.body;
    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'Your password must be more than 6 characters',
      });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Your passwords don't match",
      });
    }
    return next();
  }
}

export default UserMiddlewares;
