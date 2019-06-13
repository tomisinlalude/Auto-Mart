/* eslint-disable linebreak-style */
import { Router } from 'express';

import { multerUploads } from '../middlewares/Multer';
import UploadControllers from '../controllers/UploadControllers';
import UploadMiddlewares from '../middlewares/UploadMiddlewares';

const uploadRouter = Router();

uploadRouter.post('/', multerUploads,
  UploadMiddlewares.validateImage,
  UploadMiddlewares.validateImageSize,
  UploadControllers.uploadImage);

export default uploadRouter;
