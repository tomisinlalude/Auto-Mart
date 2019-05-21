import User from '../../../src/database/models/user';

const users = [
    {
    "id": 1,
    "UserName": "tomisinlalude",
    "PhoneNumber": parseInt('08154332954'),
    "email": "oluwatomisin1605@gmail.com",
    "password": "oyinda",
    "isAdmin": true,
    "createdOn":Date.now(),
    "updatedOn":Date.now(),
    },
    {
    "id": 2,
    "UserName": "tomisinlalude",
    "PhoneNumber": parseInt('08154332954'),
    "email": "oluwatomisin1605@gmail.com",
    "password": "oyinda",
    "isAdmin": true,
    "createdOn": Date.now(),
    "updatedOn": Date.now(),
    }
]

const createUsers = async () => {
    await User.insertMany(users);
};
