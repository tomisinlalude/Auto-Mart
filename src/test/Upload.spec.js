/* eslint-disable linebreak-style */
/* eslint-disable prefer-destructuring */

// import chaiHttp from 'chai-http';
// import chai from 'chai';

// import app from '../index';

// import { carWithUnsupportedImage, carWithImageSizeTooLarge } from './mockData/mockCar';

// chai.use(chaiHttp);

// const expect = chai.expect;

// describe('Testing Upload', () => {
//   it('should throw a 422 error for unsupported image type', (done) => {
//     chai.request(app)
//       .post('/api/v1/uploads')
//       .set('enctype', 'multipart/form-data')
//       .send(carWithUnsupportedImage)
//       .end((err, res) => {
//         expect(res).to.be.an('object');
//         expect(res).to.have.status(422);
//         expect(res.body.success).to.eql(false);
//         expect(res.body.message).to.eql('This image type is not supported');
//         done();
//       });
//   });

//   it('should throw a 422 error for image size that exceeds 3mb', (done) => {
//     chai.request(app)
//       .post('/api/v1/uploads')
//       .set('enctype', 'multipart/form-data')
//       .send(carWithImageSizeTooLarge)
//       .end((err, res) => {
//         expect(res).to.be.an('object');
//         expect(res).to.have.status(422);
//         expect(res.body.success).to.eql(false);
//         expect(res.body.message).to.eql('This image size exceeds 3mb');
//         done();
//       });
//   });
// });
