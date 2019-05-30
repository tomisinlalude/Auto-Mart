/* eslint-disable linebreak-style */
export const UserDb = [
  {
    id: 1,
    token: '',
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
export const carDb = [
  {
    make: 'Dodge Viper Acura NSX',
    model: '2017',
    manufacturer: 'Chrysler Corporation',
    state: 'New',
    price: '15000000',
  },
];
export class Users {
  static insertUser(user) {
    return UserDb.push(user);
  }
}
export class Cars {
  static addCar(car) {
    return carDb.push(car);
  }
}
