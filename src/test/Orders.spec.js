// /* eslint-disable linebreak-style */
// /* eslint-disable prefer-destructuring */

// import chaiHttp from 'chai-http';
// import chai from 'chai';

// import app from '../index';

// import orderCredentials from './mockData/mockOrder';

// chai.use(chaiHttp);

// const expect = chai.expect;

// describe('Purchase orders', () => {
//   it('create order', (done) => {
//     chai.request(app)
//       .post('/api/v1/order')
//       .send(orderCredentials)
//       .end((_err, res) => {
//         expect(res.status).to.eql(201);
//         expect(res.body.success).to.eql(true);
//         expect(res.body.message).to.eql('Order has been successfully created');
//         done();
//       });
//   });

//   it('update order price', (done) => {
//     const id = 1;
//     chai.request(app)
//       .patch(`/api/v1/order/${id}/price`)
//       .send({ priceOffered: 27000000 })
//       .end((_err, res) => {
//         expect(res.status).to.eql(200);
//         expect(res.body.success).to.eql(true);
//         expect(res.body.message).to.eql('Price of order successfully updated');
//         done();
//       });
//   });
// });
