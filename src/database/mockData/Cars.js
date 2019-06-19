/* eslint-disable linebreak-style */

const carDb = [
  {
    owner: 'Oluwatomisin Lalude',
    state: 'New',
    status: 'Available',
    make: 'Dodge Viper Acura NSX',
    model: '2017',
    manufacturer: 'Chrysler Corporation',
    price: 15000000,
    bodyType: 'Truck',
    imageUrl: '../ui/images/adlist1.png',
  },
  {
    owner: 'Dara Abijo',
    state: 'Used',
    status: 'Sold',
    make: 'Dodge Viper Acura NSX',
    model: '2017',
    manufacturer: 'Chrysler Corporation',
    price: 15000000,
    bodyType: 'Car',
    imageUrl: '../ui/images/adlist2.png',
  },
  {
    owner: 'John Doe',
    state: 'Used',
    status: 'Sold',
    make: 'Dodge Viper Acura NSX',
    model: '2017',
    manufacturer: 'Chrysler Corporation',
    price: 15000000,
    bodyType: 'Car',
    imageUrl: '../ui/images/adlist3.png',
  },
];

class Cars {
  static insertCar(car) {
    return carDb.push(car);
  }
}

export { carDb, Cars };
