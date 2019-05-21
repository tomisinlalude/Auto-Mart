import chai from 'chai';
import chaiHttp from 'chai-http';
import User from '../../src/database/models/user';

import app from '../src/index';

const { expect } = chai;
chai.use(chaiHttp);

describe('User', () => {
    describe('/POST User', () => {
        it('it should only POST user requests that meet all required fields', (done) => {
          const user = {
            userName,
            phoneNumber,
            email,
            password,
          };
          chai.request(server)
            .post('/api/v1/auth/signup')
            .send(user)
            .end((err, res) => {
              res.should.have.status(400);
              res.body.should.be.a('object');
              res.body.should.have.property('status');
              res.body.should.have.property('message');
              res.body.errors.should.have.property('errors');
              done();
            });
        });
        it('it should  POST a new user', (done) => {
          const user = {
            userName,
            phoneNumber,
            email,
            password,
            };
        });
        chai.request(server)
        .post('/api/v1/auth/signup')
        .send(user)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('data');
          res.body.data.should.have.property('userName');
          res.body.data.should.have.property('phoneNumber');
          res.body.data.should.have.property('email');
          res.body.data.should.have.property('password');
    });
});