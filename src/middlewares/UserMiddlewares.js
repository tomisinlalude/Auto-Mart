class UserMiddlewares {
  static validateUsername(req, res, next) {
    const { userName } = req.body;
    const regex = /\d+/;
    if (regex.test(userName)) {
      return res.status(400).json({
        success: false,
        message: 'You cannot use digits in your username',
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
        message: 'Your password must be more than 6 characters in length',
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
