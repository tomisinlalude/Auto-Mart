import responseHelper from '../helpers/responseHelper';

class UserAuth {
/**
   * Authorizes only admin
   *
   * @static
   * @param {object} req - HTTP request object
   * @param {object} res - HTTP response object
   * @param {function} next - Express function that passes control to the next middleware
   * @returns
   * @memberof UserAuthorization
   */
  static onlyAdmin(req, res, next) {
    req.user = UserAuthorization.getLoggedInUser(req, res);
    if (/^admin$/i.test(req.user.type)) return next();

    return responseHelper.send(res, 403, { error: 'Oops! This route is solely for admin.' });
    }
  }

  export default UserAuth;