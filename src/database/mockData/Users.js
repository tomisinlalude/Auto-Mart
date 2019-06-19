/* eslint-disable linebreak-style */
const userDb = [
  {
    firstName: 'Oluwatomisin',
    lastName: 'Lalude',
    email: 'oluwatomisin1605@gmail.com',
    password: 'oyinda',
    confirmPassword: 'oyinda',
    phoneNumber: '08154332954',
    address: 'Oyebajo street, Fadeyi, Lagos',
    isAdmin: true,
  },
  {
    firstName: 'Dara',
    lastName: 'Abijo',
    email: 'daraabijo@mail.com',
    password: 'abijoDara',
    confirmPassword: 'abijoDara',
    phoneNumber: '09012345678',
    address: 'Birrel Avenue, Yaba, Lagos',
    isAdmin: false,
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@mail.com',
    password: 'password',
    confirmPassword: 'password',
    phoneNumber: '08012345678',
    address: 'Birrel Avenue, Yaba, Lagos',
    isAdmin: false,
  },
];

class Users {
  static insertUser(user) {
    return userDb.push(user);
  }
}

export { userDb, Users };
