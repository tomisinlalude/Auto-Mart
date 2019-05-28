/* eslint-disable linebreak-style */
/* eslint-disable prefer-destructuring */
import chaiHttp from 'chai-http';
import chai from 'chai';

import app from '../index';

chai.use(chaiHttp);

const expect = chai.expect;

const adCredentials = {
  make: 'Dodge Viper Acura NSX',
  model: '2017',
  manufacturer: 'Chrysler Corporation',
  state: 'New',
  price: 'N15,000,000',
};

describe('/POST car ad', () => {
  it('POST a new ad', (done) => {
    chai.request(app)
      .post('/api/v1/user/postAd')
      .set('Accept', 'application/json')
      .send(adCredentials)
      .end((err, res) => {
        expect(res.status).to.eql(200);
        expect(res.body.success).to.eql(true);
        expect(res.body.message).to.eql('Advert post successfully created');
        expect(res.body.data).to.be.an('object');
        done();
      });
  });
});
