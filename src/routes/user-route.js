import express from 'express';
import dotenv from 'dotenv';

import responseHelper from '../helpers/responseHelper';
import User from '../database/models/user';

dotenv.config();
const UserRouter = express.Router();

UserRouter.post('/signup', (req, res) => {
  const { id, userName, phoneNumber, email, password } = req.params;
  User.insertUser(req.body)
    .then(user => {
      responseHelper.successRes;
      res,
    {  data: {
        id: user.id,
        userName: user.userName,
        phoneNumber: user.phoneNumber,
        email: user.email,
        password: user.password,
      } }
    })
    .catch(err => {
      responseHelper.sendServerErrorResponse;
    });
});

export default UserRouter;