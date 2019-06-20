/* eslint-disable linebreak-style */

const orderDb = [
  {
    buyer: 'Oluwatomisin Lalude',
    carId: 1,
    status: 'Accepted',
    price: 4000000,
    priceOffered: 38000000,
  },
  {
    buyer: 'Dara Abijo',
    carId: 2,
    status: 'Pending',
    price: 6000000,
    priceOffered: 4000000,
  },
  {
    buyer: 'John Doe',
    carId: 3,
    status: 'Rejected',
    price: 2000000,
    priceOffered: 1700000,
  },
];

class Orders {
  static insertOrder(order) {
    return orderDb.push(order);
  }
}

export { orderDb, Orders };
