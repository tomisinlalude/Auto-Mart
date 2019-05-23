import chai from 'chai';
import chaiHttp from 'chai-http';

import entry from '../index';

chai.use(chaiHttp);

const expect = chai.expect;
const authUser = chai.request(entry);
const userCredentials = {
    'userName': 'tomisinlalude',
    'phoneNumber': parseInt('08154332954'),
    'email': 'oluwatomisin1605@gmail.com', 
    'password': 'oyinda',
    'confirmPassword': 'oyinda'
}

describe('/POST user', () => {
    it('all required fields should be filled', (done) => {
        authUser
            .post('/api/v1/auth/signup')
            .type('form')
            .send(userCredentials)
            .end((err, res) => {
                expect(res).to.be.json;
                expect(res).to.have.status(500);
                expect(res).to.have.success(false);
                expect(res.body).to.have.param('message');
                expect(res).to.not.redirect;
                done();
            });
    });
    it('POST a new user', (done) => {
        authUser
            .post('/api/v1/auth/signup')
            .type('form')
            .send(userCredentials)
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.be.json;
                expect(res).to.have.status(200);
                expect(res).to.have.success(true);
                expect(res).to.have.param('message');
                expect(res).to.have.param('data');
                expect(res).to.have.param('data', 'userName');
                expect(res).to.have.param('data', 'phoneNumber');
                expect(res).to.have.param('data', 'email');
                expect(res).to.have.param('data', 'password');
                expect(res).to.have.param('data', 'confirmPassword');
                expect(res).to.redirectTo('/index.html');
                done();
            });
    });
});