import express from 'express';
import dotenv from 'dotenv';

import UserMiddlewares from '../middlewares/UserMiddlewares';
import UserControllers from '../controllers/UserControllers';

dotenv.config();
const UserRouter = express.Router();

UserRouter.post('/signup', 
UserMiddlewares.validateUsername, 
UserMiddlewares.validatePhoneNumber, 
UserMiddlewares.validatePassword, 
UserControllers.createUser);

UserRouter.post('/signin', 
UserControllers.userLogin
);

export default UserRouter;