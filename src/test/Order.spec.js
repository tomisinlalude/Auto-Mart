/* eslint-disable linebreak-style */
/* eslint-disable prefer-destructuring */

// import chaiHttp from 'chai-http';
// import chai from 'chai';

// import app from '../index';

// chai.use(chaiHttp);

// const expect = chai.expect;

// const orderCredentials = {
//   id: 1,
//   buyer: 'Oluwatomisin Lalude',
//   carId: 1,
//   status: 'Pending',
//   price: 30000000,
//   priceOffered: 25000000,
// };

// describe('testing for orders', () => {
//   it('create order', (done) => {
//     chai.request(app)
//       .post('/api/v1/order')
//       .send(orderCredentials)
//       .end((err, res) => {
//         if (err) throw err;
//         expect(res.status).to.eql(201);
//         expect(res.body.success).to.eql(true);
//         expect(res.body.message).to.eql('Order has been successfully created');
//         done();
//       });
//   });

//   it('update order price', (done) => {
//     chai.request(app)
//       .patch('/api/v1/order/1')
//       .send({ priceOffered: 12020 })
//       .end((err, res) => {
//         if (err) throw err;
//         expect(res.status).to.eql(200);
//         expect(res.body.success).to.eql(true);
//         expect(res.body.message).to.eql('Price of order successfully updated');
//         done();
//       });
//   });
// });
