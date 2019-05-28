export const UserDb = [
  {
    id: 1,
    userName: 'JohnDoe',
    email: 'johndoe@mail.com',
    password: 'password',
    phoneNumber: '08012345678',
  },
];
export const carDb = [
  {
    make: 'Dodge Viper Acura NSX',
    model: '2017',
    manufacturer: 'Chrysler Corporation',
    state: 'New',
    price: 'N15,000,000',
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
