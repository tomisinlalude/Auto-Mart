/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import logger from 'morgan';
import dotenv from 'dotenv';
import { uploader, cloudinaryConfig } from './config/cloudinaryConfig';
import { multerUploads, dataUri } from './middlewares/Multer';


import UserRoute from './routes/route';

const app = express();
const port = process.env.PORT || 3000;
dotenv.config();

app.use(cors({
  credentials: true,
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(logger('dev'));

app.use('/', cloudinaryConfig);
app.use('/api/v1/', UserRoute);

/*
** Configure Multer and Cloudinary for image upload
*/

// eslint-disable-next-line consistent-return
app.post('/api/v1/user/upload', multerUploads, (req, res) => {
  if (req.file) {
    const file = dataUri(req).content;
    return uploader.upload(file).then((result) => {
      const image = result.url;
      return res.status(200).json({
        message: 'Your image has been uploaded successfully to Cloudinary',
        data: {
          image,
        },
      });
    }).catch(err => res.status(400).json({
      message: 'Something went wrong while processing your request',
      data: {
        err,
      },
    }));
  }
});

app.listen(port, () => `server running on port ${port}`);

export default app;
