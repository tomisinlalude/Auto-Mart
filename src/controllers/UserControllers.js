import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config()

const secret = process.env.SECRET_KEY;

const generateToken = payload => {
    return jwt.sign(payload, secret, {expiresIn: '240h'});
}

import { Users, UserDb } from '../database/models/Users';

const { insertUser, login } = Users;

class UserControllers {
    static createUser(req, res) {
        try {
            const { userName, phoneNumber, email, password } = req.body;
            const user = {
                userName, phoneNumber, email, password
            }
            insertUser(user);
                res.status(200).json({
                    success: true,
                    message: 'User has been created',
                    data: {
                    // id,
                    userName,
                    phoneNumber,
                    email,
                    createdOn: Date.now(),
                    updatedOn: Date.now(),
                    }
                })
        }
    
        catch(err) {
            res.status(500).json ({
                success: false,
                message: 'User creation failed',
                err,
            });
        }
    }

    static userLogin(req, res) {
        try {
            const { email, password } = req.body;
            const user = UserDb.find(user => user.email === email && user.password === password);
            if(!user) {
                return res.status(404).json({
                    success: false,
                    message: 'User does not exist',
                })
            }
            const token = generateToken({id: user.id, email, username:user.username});
            return  res.status(201).json({
                success: true,
                message: 'User has been logged in',
                token,
            })
        }
    
        catch(err) {
            res.status(500).json ({
                success: false,
                message: 'User login failed',
                err,
            });
        }
    }
}

export default UserControllers;
