import User from '../database/models/Users';

class UserControllers {
    static createUser(req, res) {
        try {
            const user = { ...req.params };
            User.insertUser(user);
                res.status(200).json ({
                    success: true,
                    message: 'User has been created',
                    data: {
                    id: user.id,
                    userName: user.userName,
                    phoneNumber: user.phoneNumber,
                    email: user.email,
                    password: user.password,
                    createdOn: Date.now(),
                    updatedOn: Date.now(),
                    }
                })
        }
    
        catch(err) {
            res.status(500).json ({
                success: false,
                message: 'User creation failed'
            });
        }
    }
}

export default UserControllers;
