import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../index';

chai.use(chaiHttp);

const expect = chai.expect;
const authUser = chai.request(app);
const userCredentials = {
    userName: 'tomisinlalude',
    phoneNumber: '08154332954',
    email: 'oluwatomisin1605@gmail.com', 
    password: 'oyinda5_',
    confirmPassword: 'oyinda5_'
}

const userCredentialsWithWrongUsername = {
    userName: 'tomis9',
    phoneNumber: '08154332954',
    email: 'oluwatomisin1605@gmail.com', 
    password: 'oyinda5_',
    confirmPassword: 'oyinda5_'
}

const userCredentialsWithWrongPhoneNumber = {
    userName: 'tomis9',
    phoneNumber: '081543329',
    email: 'oluwatomisin1605@gmail.com', 
    password: 'oyinda5_',
    confirmPassword: 'oyinda5_'
}

const userCredentialsWithWrongPassword = {
    userName: 'tomisinlalude',
    phoneNumber: '08154332954',
    email: 'oluwatomisin1605@gmail.com', 
    password: 'oyi',
    confirmPassword: 'oyi'
}

describe('/POST user', () => {
    it('POST a new user', (done) => {
        authUser
            .post('/api/v1/user/signup')
            .set('Accept', 'application/json')
            .send(userCredentials)
            .end((err, res) => {
                expect(res.status).to.eql(200);
                expect(res.body.success).to.eql(true);
                expect(res.body.message).to.eql('User has been created');
                expect(res.body.data).to.be.an('object');
                done();
            });
    });

    it('should throw a 400 error if username contains a digit', (done) => {
        chai.request(app)
            .post('/api/v1/user/signup')
            .set('Accept', 'application/json')
            .send(userCredentialsWithWrongUsername)
            .end((err, res) => {
                expect(res.status).to.eql(400);
                expect(res.body.success).to.eql(false);
                expect(res.body.message).to.eql("You cannot use digits in your username");
                done();
            });
    });
    it('should throw a 400 error if phone number is not 11 digits', (done) => {
        chai.request(app)
            .post('/api/v1/user/signup')
            .set('Accept', 'application/json')
            .send(userCredentialsWithWrongPhoneNumber)
            .end((err, res) => {
                expect(res.status).to.eql(400);
                expect(res.body.success).to.eql(false);
                expect(res.body.message).to.eql("You cannot use digits in your username");
                done();
            });
    });
    // it('should throw a 400 error if password is less than six characters and does not contain a digit and special character', (done) => {
    //     chai.request(app)
    //         .post('/api/v1/user/signup')
    //         .set('Accept', 'application/json')
    //         .send(userCredentialsWithWrongPassword)
    //         .end((err, res) => {
    //             expect(res.status).to.eql(400);
    //             expect(res.body.success).to.eql(false);
    //             expect(res.body.message).to.eql("Your password must contain at least six characters, a digit and a special number");
    //             done();
    //         });
    // });
});