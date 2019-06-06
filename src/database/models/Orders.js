/* eslint-disable linebreak-style */

export const orderDb = [
  {
    id: 1,
    buyer: 'John Doe',
    carId: 100,
    createdOn: 'Wed May 22 09:13:52 2019 UTC',
    status: 'Pending',
    price: 4000000,
    priceOffered: 38000000,
  },
];

export class Orders {
  static addOrder(order) {
    return orderDb.push(order);
  }
}
