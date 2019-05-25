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
    password: 'oyinda',
    confirmPassword: 'oyinda'
}

const userCredentialsWithWrongUsername = {
    userName: 'tomis9',
    phoneNumber: '08154332954',
    email: 'oluwatomisin1605@gmail.com', 
    password: 'oyinda',
    confirmPassword: 'oyinda'
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
});