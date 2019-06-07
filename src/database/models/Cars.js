/* eslint-disable linebreak-style */

export const carDb = [
  {
    carId: 1,
    owner: 'Oluwatomisin Lalude',
    state: 'New',
    status: 'Available',
    make: 'Dodge Viper Acura NSX',
    model: '2017',
    manufacturer: 'Chrysler Corporation',
    price: 15000000,
    bodyType: 'Truck',
    createdOn: Date.now(),
  },
  {
    carId: 2,
    owner: 'John Doe',
    state: 'Used',
    status: 'Sold',
    make: 'Dodge Viper Acura NSX',
    model: '2017',
    manufacturer: 'Chrysler Corporation',
    price: 15000000,
    bodyType: 'Car',
    createdOn: Date.now(),
  },
];

export class Cars {
  static addCar(car) {
    return carDb.push(car);
  }
}
