/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable radix */
/* eslint-disable prefer-destructuring */

import chaiHttp from 'chai-http';
import chai from 'chai';

import app from '../index';

chai.use(chaiHttp);

const expect = chai.expect;

const carCredentials = {
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
};

describe('Car ads', () => {
  it('Post a new ad', (done) => {
    chai.request(app)
      .post('/api/v1/car/')
      .set('Accept', 'application/json')
      .send(carCredentials)
      .end((err, res) => {
        if (err) throw err;
        expect(res.status).to.eql(201);
        expect(res.body.success).to.eql(true);
        expect(res.body.message).to.eql('Advert post successfully created');
        done();
      });
  });

  // it('viewing specific car ad', (done) => {
  //   chai.request(app)
  //     .get('api/v1/car/')
  //     .set('Accept', 'application/json')
  //     .end((err, res) => {
  //       if (err) throw err;
  //       expect(res.status).to.equal(200);
  //       expect(res.body.message).to.eql('Viewing car ad is successful');
  //       done();
  //     });
  // });

  // it('delete ad record', (done) => {
  //   chai.request(app)
  //     .delete('api/v1/car')
  //     .end((err, res) => {
  //       if (err) throw err;
  //       expect(res.status).to.eql(200);
  //       expect(res.body.message).to.eql('Success! This ad has been deleted');
  //       done();
  //     });
  // });
});
