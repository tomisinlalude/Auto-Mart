/* eslint-disable linebreak-style */

// import chai from 'chai';
// import chaiHttp from 'chai-http';

// import app from '../index';

// const { expect } = chai;

// chai.use(chaiHttp);

// let userToken;

// describe('POST /api/v2/flag', () => {
//   it('should return a 422 status if carId was not provided', (done) => {
//     chai.request(app)
//       .post('/api/v2/flag')
//       .send({
//         reason: 'pricing',
//       })
//       .set('Authorization', userToken)
//       .end((error, res) => {
//         if (error) done(error);
//         expect(res).to.be.an('object');
//         expect(res).to.have.status(422);
//         expect(res.body.status).to.deep.equal('error');
//         expect(res.body.message).to.deep.equal('Car id was not specified');
//         done();
//       });
//   });

//   it('should return a 404 status if car does not exist', (done) => {
//     chai.request(app)
//       .post('/api/v2/flag')
//       .send({
//         carId: 300,
//         reason: 'pricing',
//       })
//       .set('Authorization', userToken)
//       .end((error, res) => {
//         if (error) done(error);
//         expect(res).to.be.an('object');
//         expect(res).to.have.status(404);
//         expect(res.body.status).to.deep.equal('error');
//         expect(res.body.message).to.deep.equal('car not found');
//         done();
//       });
//   });

//   it('should return a 422 status error if carId is not an integer', (done) => {
//     chai.request(app)
//       .post('/api/v2/flag')
//       .send({
//         carId: 'notInteger',
//         reason: 'pricing',
//       })
//       .set('Authorization', userToken)
//       .end((error, res) => {
//         if (error) done(error);
//         expect(res).to.be.an('object');
//         expect(res).to.have.status(422);
//         expect(res.body.status).to.deep.equal('error');
//         expect(res.body.message).to.deep.equal('invalid car id');
//         done();
//       });
//   });

//   it('should return a 422 status error if reason was not specified', (done) => {
//     chai.request(app)
//       .post('/api/v2/flag')
//       .send({
//         carId: 4,
//         description: 'super weird reason',
//       })
//       .set('Authorization', userToken)
//       .end((error, res) => {
//         if (error) done(error);
//         expect(res).to.be.an('object');
//         expect(res).to.have.status(422);
//         expect(res.body.status).to.deep.equal('error');
//         expect(res.body.message).to.deep.equal('Reason was not specified');
//         done();
//       });
//   });

//   it('should return a 422 status error if reason is longer than 100 characters', (done) => {
//     chai.request(app)
//       .post('/api/v2/flag')
//       .send({
//         carId: 4,
//         reason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa sed elementum tempus egestas. Enim nec dui nunc mattis. Sapien eget mi proin sed libero.',
//         description: 'super weird reason',
//       })
//       .set('Authorization', userToken)
//       .end((error, res) => {
//         if (error) done(error);
//         expect(res).to.be.an('object');
//         expect(res).to.have.status(422);
//         expect(res.body.status).to.deep.equal('error');
//         expect(res.body.message).to.deep.equal('Reason should not exxceed 100 characters');
//         done();
//       });
//   });

//   it('should return a 422 status error if reason is an integer', (done) => {
//     chai.request(app)
//       .post('/api/v2/flag')
//       .send({
//         carId: 4,
//         reason: 4949,
//         description: 'super weird reason',
//       })
//       .set('Authorization', userToken)
//       .end((error, res) => {
//         if (error) done(error);
//         expect(res).to.be.an('object');
//         expect(res).to.have.status(422);
//         expect(res.body.status).to.deep.equal('error');
//         expect(res.body.message).to.deep.equal('Invalid reason');
//         done();
//       });
//   });

//   it('should return a 422 status error if description is an integer', (done) => {
//     chai.request(app)
//       .post('/api/v2/flag')
//       .send({
//         carId: 4,
//         reason: 'Weird pricing',
//         description: 299,
//       })
//       .set('Authorization', userToken)
//       .end((error, res) => {
//         if (error) done(error);
//         expect(res).to.be.an('object');
//         expect(res).to.have.status(422);
//         expect(res.body.status).to.deep.equal('error');
//         expect(res.body.message).to.deep.equal('Invalid description');
//         done();
//       });
//   });

//   it('should return a 201 status if everything checks out', (done) => {
//     chai.request(app)
//       .post('/api/v2/flag')
//       .send({
//         carId: 4,
//         reason: 'Weird pricing',
//         description: 'It really feels weird',
//       })
//       .set('Authorization', userToken)
//       .end((error, res) => {
//         if (error) done(error);
//         expect(res).to.be.an('object');
//         expect(res).to.have.status(201);
//         expect(res.body.status).to.deep.equal('success');
//         expect(res.body.data).to.be.an('object');
//         done();
//       });
//   });
// });
