/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */

import { dataUri } from '../middlewares/Multer';
import { uploader } from '../config/cloudinaryConfig';

class UploadControllers {
  static uploadImage(req, res) {
    try {
      if (req.file) {
        const file = dataUri(req).content;
        return uploader.upload(file).then((result) => {
          const image = result.url;
          return res.status(200).json({
            success: true,
            message: 'Your image has been uploaded successfully to Cloudinary',
            data: {
              image,
            },
          });
        });
      }
    } catch (err) {
      res.status(400).json({
        success: false,
        message: 'Something went wrong while processing your request',
        data: {
          err,
        },
      });
    }
  }
}

export default UploadControllers;
