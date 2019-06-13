/* eslint-disable linebreak-style */
class UploadMiddlewares {
  static validateImage(req, res, next) {
    try {
      const file = req.body.file
        .originalname
        .match(/(.jpg|.png|.jpeg)$/g);
      if (file) return next();
      throw new Error();
    } catch (err) {
      return res.status(422).json({
        success: false,
        message: 'This image type is not supported',
      });
    }
  }

  static validateImageSize(req, res, next) {
    try {
      const fileSize = req.body.file.size;
      if (fileSize <= (1048576 * 3)) return next();
      throw new Error();
    } catch (err) {
      return res.status(422).json({
        success: false,
        message: 'This image size exceeds 3mb',
      });
    }
  }
}

export default UploadMiddlewares;
