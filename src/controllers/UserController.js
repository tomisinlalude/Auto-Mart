import User from '../database/models/Users';

class UserControllers {
    try {
        const user = { ...req.body };
        User.insertUser(user);
            res.send({
              status: 200,
              message: 'User has been created',
            }),
            {
              id: user.id,
              userName: user.userName,
              phoneNumber: user.phoneNumber,
              email: user.email,
              password: user.password,
              createdOn: Date.now(),
              updatedOn: Date.now(),
    }
    catch(err) {
        errMessage(err),
    }
}

const errMessage = (err) => message = err.message;

export default UserControllers;
