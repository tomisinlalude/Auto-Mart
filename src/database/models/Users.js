/* eslint-disable linebreak-style */
export const userDb = [
  {
    id: 1,
    token: 'yhMolpeSvbmo9',
    email: 'oluwatomisin1605@gmail.com',
    firstName: 'Oluwatomisin',
    lastName: 'Lalude',
    password: 'oyinda',
    confirmPassword: 'oyinda',
    phoneNumber: '08154332954',
    address: 'Oyebajo street, Fadeyi, Lagos',
    isAdmin: false,
  },
  {
    id: 2,
    token: 'Dasml0pwerzm',
    email: 'johndoe@mail.com',
    firstName: 'John',
    lastName: 'Doe',
    password: 'password',
    confirmPassword: 'password',
    phoneNumber: '08012345678',
    address: 'Birrel Avenue, Yaba, Lagos',
    isAdmin: false,
  },
];

export class Users {
  static insertUser(user) {
    return userDb.push(user);
  }
}
