/* eslint-disable linebreak-style */
/* eslint-disable radix */
/* eslint-disable prefer-destructuring */
import chaiHttp from 'chai-http';
import chai from 'chai';

import app from '../index';

chai.use(chaiHttp);

const expect = chai.expect;

// const nonExistingUser = {
//   owner: null,
// };

const adCredentials = {
  state: 'New',
  status: 'Available',
  make: 'Dodge Viper Acura NSX',
  model: '2017',
  manufacturer: 'Chrysler Corporation',
  price: parseInt('15000000'),
  bodyType: 'Truck',
};

describe('/POST car ad', () => {
  it('Post a new ad', (done) => {
    chai.request(app)
      .post('/api/v1/user/car/')
      .set('Accept', 'application/json')
      .send(adCredentials)
      .end((err, res) => {
        expect(res.status).to.eql(201);
        expect(res.body.success).to.eql(true);
        expect(res.body.message).to.eql('Advert post successfully created');
        done();
      });
  });
  // it('Post ad should fail if a user does not exist', (done) => {
  //   chai.request(app)
  //     .post('/api/v1/user/car/')
  //     .set('Accept', 'application/json')
  //     .send(nonExistingUser)
  //     .end((err, res) => {
  //       expect(res.status).to.eql(400);
  //       expect(res.body.success).to.eql(false);
  //       expect(res.body.message).to.eql('User does not have an account');
  //       done();
  //     });
  // });
});
