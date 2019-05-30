/* eslint-disable linebreak-style */
/* eslint-disable radix */
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
    owner: 'id',
    state: 'New',
    status: 'Available',
    make: 'Dodge Viper Acura NSX',
    model: '2017',
    manufacturer: 'Chrysler Corporation',
    price: parseInt('15000000'),
    bodyType: 'Truck',
    createdOn: Date.now(),
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
