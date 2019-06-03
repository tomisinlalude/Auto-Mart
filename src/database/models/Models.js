/* eslint-disable linebreak-style */
/* eslint-disable guard-for-in */
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
    owner: UserDb.firstName && UserDb.lastName,
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
export const orderDb = [
  {
    buyer: UserDb.firstName && UserDb.lastName,
    car_id: 1,
    amount: parseInt('8000000'),
    status: 'Pending',
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
export class Orders {
  static addOrder(order) {
    return orderDb.push(order);
  }

  static updatePrice(order) {
    return orderDb.push(order);
  }
}
