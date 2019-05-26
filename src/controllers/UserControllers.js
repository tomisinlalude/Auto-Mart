import Users from '../database/models/Users';

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
            const user = {
                email, password
            }
            login(user);
                res.status(200).json({
                    success: true,
                    message: 'User has been logged in',
                    data: {
                    // id
                    email,
                    updatedOn: Date.now(),
                    }
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
