import chai from 'chai';
import chaiHttp from 'chai-http';
import { expect } from 'chai';

import entry from '../index';

chai.use(chaiHttp);

const authUser = chai.request(entry);
const userCredentials = {
    userName: 'tomisinlalude',
    phoneNumber: parseInt('08154332954'),
    email: 'oluwatomisin1605@gmail.com', 
    password: 'oyinda',
};

describe('/POST user', () => {
    it('all required fields should be filled', () => {
        userCredentials;
        before((done) => {
            authUser
                .post('/api/v1/auth/signup')
                .send(userCredentials)
                .end((err, res) => {
                    expect(res.status).to.equal(500);
                    expect(res.success).to.be.false;
                    expect(res.body).to.be('object');
                    expect(res.body).to.have('message');
                    done();
                });
        });
    });
    it('POST a new user', () => {
        userCredentials;
        before((done) => {
            authUser
                .post('/api/v1/auth/signup')
                .send(userCredentials)
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.success).to.be.true;
                    expect(res.body).to.be('object');
                    expect(res.body).to.have('message');
                    expect(res.body.data).to.have('id');
                    expect(res.body.data).to.have('userName');
                    expect(res.body.data).to.have('phoneNumber');
                    expect(res.body.data).to.have('email');
                    expect(res.body.data).to.have('password');
                    expect('Location', '/');
                    done();
                });
        });
    });
});