/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable prefer-destructuring */
import chaiHttp from 'chai-http';
import chai from 'chai';

import app from '../index';
import {
  userCredentialsWithWrongName, userCredentialsWithWrongEmail,
  userCredentialsWithWrongAddress, userCredentialsWithWrongPhoneNumber,
  userCredentialsWithWrongPassword, userCredentialsWithNonMatchingPasswords,
} from './mockData/mockAuth';

chai.use(chaiHttp);

const expect = chai.expect;

describe('/POST user', () => {
  // it('should throw a 400 error if user already exists', (done) => {
  //   chai.request(app)
  //     .post('/api/v1/auth/signup')
  //     .set('Accept', 'application/json')
  //     .end((err, res) => {
  //       expect(res.status).to.eql(400);
  //       expect(res.body.success).to.eql(false);
  //       expect(res.body.message).to.eql('This email has been used. Kindly login instead.');
  //       done();
  //     });
  // });

  // it('Create a new user', (done) => {
  //   chai.request(app)
  //     .post('/api/v1/auth/signup')
  //     .set('Accept', 'application/json')
  //     .send(userCredentials)
  //     .end((err, res) => {
  //       expect(res.status).to.eql(201);
  //       expect(res.body.success).to.eql(true);
  //       expect(res.body.message).to.eql('User has been created');
  //       expect(res.body.data).to.have.property('token');
  //       expect(res.body.data).to.be.an('object');
  //       done();
  //     });
  // });

  it('should throw a 400 error if name contains a digit', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .set('Accept', 'application/json')
      .send(userCredentialsWithWrongName)
      .end((err, res) => {
        expect(res.status).to.eql(400);
        expect(res.body.success).to.eql(false);
        expect(res.body.message).to.eql('You cannot use digits in your name');
        done();
      });
  });

  it('should throw a 400 error if email is invalid', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .set('Accept', 'application/json')
      .send(userCredentialsWithWrongEmail)
      .end((err, res) => {
        expect(res.status).to.eql(400);
        expect(res.body.success).to.eql(false);
        expect(res.body.message).to.eql('Enter a valid email address');
        done();
      });
  });

  it('should throw a 400 error if address is invalid', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .set('Accept', 'application/json')
      .send(userCredentialsWithWrongAddress)
      .end((err, res) => {
        expect(res.status).to.eql(400);
        expect(res.body.success).to.eql(false);
        expect(res.body.message).to.eql('Address is too long');
        done();
      });
  });

  it('should throw a 400 error if phone number is not 11 digits', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .set('Accept', 'application/json')
      .send(userCredentialsWithWrongPhoneNumber)
      .end((err, res) => {
        expect(res.status).to.eql(400);
        expect(res.body.success).to.eql(false);
        expect(res.body.message).to.eql('Enter a valid phone number');
        done();
      });
  });

  it('should throw a 400 error if password is less than 6 characters', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .set('Accept', 'application/json')
      .send(userCredentialsWithWrongPassword)
      .end((err, res) => {
        expect(res.status).to.eql(400);
        expect(res.body.success).to.eql(false);
        expect(res.body.message).to.eql('Your password must be more than 6 characters');
        done();
      });
  });

  it('should throw a 400 error if passwords do not match', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .set('Accept', 'application/json')
      .send(userCredentialsWithNonMatchingPasswords)
      .end((err, res) => {
        expect(res.status).to.eql(400);
        expect(res.body.success).to.eql(false);
        expect(res.body.message).to.eql("Your passwords don't match");
        done();
      });
  });

  // it('Signin a returning user', (done) => {
  //   chai.request(app)
  //     .post('/api/v1/auth/signin')
  //     .set('Accept', 'application/json')
  //     .send(returningUser)
  //     .end((err, res) => {
  //       expect(res.status).to.eql(200);
  //       expect(res.body.success).to.eql(true);
  //       expect(res.body.message).to.eql('User has been logged in');
  //       done();
  //     });
  // });

  // it('Signin a returning user should fail if a user does not exist', (done) => {
  //   chai.request(app)
  //     .post('/api/v1/auth/signin')
  //     .set('Accept', 'application/json')
  //     .send(nonExistingUser)
  //     .end((err, res) => {
  //       expect(res.status).to.eql(404);
  //       expect(res.body.success).to.eql(false);
  //       expect(res.body.message).to.eql('User does not exist');
  //       done();
  //     });
  // });

  // it('Signin a returning user should fail if password is incorrect', (done) => {
  //   chai.request(app)
  //     .post('/api/v1/auth/signin')
  //     .set('Accept', 'application/json')
  //     .send(returningUserWithWrongPassword)
  //     .end((err, res) => {
  //       expect(res.status).to.eql(404);
  //       expect(res.body.success).to.eql(false);
  //       expect(res.body.message).to.eql('User does not exist');
  //       done();
  //     });
  // });
});
