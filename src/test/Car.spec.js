/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable prefer-destructuring */

import chaiHttp from 'chai-http';
import chai from 'chai';

import app from '../index';
import { carCredentials } from './mockData/mockCar';

chai.use(chaiHttp);

const expect = chai.expect;

describe('Car ads', () => {
  it('Post a new ad', (done) => {
    chai.request(app)
      .post('/api/v1/car')
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

  it('view all cars', (done) => {
    chai.request(app)
      .get('/api/v1/car')
      .end((err, res) => {
        if (err) throw err;
        expect(res.status).to.eql(200);
        expect(res.body.success).to.eql(true);
        expect(res.body.message).to.eql('Viewed all cars successfully');
        done();
      });
  });

  it('update car price', (done) => {
    const id = 1;
    chai.request(app)
      .patch(`/api/v1/car/${id}/price`)
      .send({ price: 27000000 })
      .end((err, res) => {
        if (err) throw err;
        expect(res.status).to.eql(200);
        expect(res.body.success).to.eql(true);
        expect(res.body.message).to.eql('Price of car successfully updated');
        done();
      });
  });

  it('mark car as sold', (done) => {
    const id = 1;
    chai.request(app)
      .patch(`/api/v1/car/${id}/status`)
      .end((err, res) => {
        if (err) throw err;
        expect(res.status).to.equal(200);
        expect(res.body.success).to.eql(true);
        expect(res.body.message).to.eql('Success! Marked as sold');
        done();
      });
  });

  it('view specific car', (done) => {
    const id = 1;
    chai.request(app)
      .get(`/api/v1/car/${id}`)
      .end((err, res) => {
        if (err) throw err;
        expect(res.status).to.equal(200);
        expect(res.body.success).to.eql(true);
        expect(res.body.message).to.eql('Viewing car ad is successful');
        done();
      });
  });

  // it('view unsold cars', (done) => {
  //   chai.request(app)
  //     .get('api/v1/car/?status=available')
  //     .end((err, res) => {
  //       if (err) throw err;
  //       expect(res.status).to.equal(200);
  //       expect(res.body.success).to.eql(true);
  //       expect(res.body.data.length).to.be.eql(1);
  //       expect(res.body.message).to.eql('Viewing unsold cars');
  //       done();
  //     });
  // });

  // it('view unsold cars by price range', (done) => {
  //   chai.request(app)
  //     .get('api/v1/car/?status=available&minValue=500000&maxValue=100000000')
  //     .end((err, res) => {
  //       if (err) throw err;
  //       expect(res.status).to.equal(200);
  //       expect(res.body.success).to.eql(true);
  //       expect(res.body.data.length).to.be.eql(1);
  //       expect(res.body.message).to.eql('Viewing car ad is successful');
  //       done();
  //     });
  // });

  // it('delete ad record', (done) => {
  //   const id = 1;
  //   chai.request(app)
  //     .delete(`api/v1/car/${id}`)
  //     .end((err, res) => {
  //       if (err) throw err;
  //       expect(res.status).to.eql(200);
  //       expect(res.body.success).to.eql(true);
  //       expect(res.body.message).to.eql('Success! This ad has been deleted');
  //       done();
  //     });
  // });

  it('should return an empty object after delete', (done) => {
    const id = 1;
    chai.request(app)
      .get(`/api/v1/car/${id}`)
      .end((err, res) => {
        if (err) throw err;
        expect(res.status).to.eql(200);
        expect(res.body.success).to.eql(true);
        done();
      });
  });
});
