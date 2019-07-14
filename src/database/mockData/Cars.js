/* eslint-disable linebreak-style */

const carDb = [
  {
    owner: 'Oluwatomisin Lalude',
    state: 'New',
    status: 'Available',
    model: '2017',
    manufacturer: 'Chrysler Corporation',
    price: 15000000,
    body_type: 'Truck',
    image_url: '../ui/images/adlist1.png',
  },
  {
    owner: 'Dara Abijo',
    state: 'Used',
    status: 'Available',
    model: '2017',
    manufacturer: 'Chrysler Corporation',
    price: 15000000,
    body_type: 'Car',
    image_url: '../ui/images/adlist2.png',
  },
  {
    owner: 'John Doe',
    state: 'Used',
    status: 'Sold',
    model: '2017',
    manufacturer: 'Chrysler Corporation',
    price: 15000000,
    body_type: 'Car',
    image_url: '../ui/images/adlist3.png',
  },
];

class Cars {
  static insertCar(car) {
    return carDb.push(car);
  }
}

export { carDb, Cars };
