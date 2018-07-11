/* global api, describe, it, expect, beforeEach */

const Bathroom = require('../../../models/bathroom');

const bathroomData = {
  name: 'John Smith',
  address: 'Flat 2, 76a St John\'s Wood High Street, London, NW8 7SH',
  image: 'https://s-media-cache-ak0.pinimg.com/originals/7f/45/d3/7f45d357db0ebb1ca4475a1c20b831ae.jpg',
  description: 'A throne for your throne',
  toilet: true,
  shower: false,
  bidet: true,
  sanitaryProducts: false,
  babyChanging: true,
  location: {
    lat: 51.532923,
    lng: -0.169155
  }
};

let bathroomId;

describe('GET /bathoom/:id', ()=> {
  beforeEach(done => {
    Bathroom.remove({})
      .then(() => Bathroom.create(bathroomData))
      .then(bathroom => {
        bathroomId = bathroom._id;
      })
      .then(() => done());
  });

  it('should return a 200 response', done => {
    api
      .get(`/api/bathrooms/${bathroomId}`)
      .send(bathroomData)
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });
  it('should return a valid bathroom object', done => {
    api
      .get(`/api/bathrooms/${bathroomId}`)
      .send(bathroomData)
      .end((err, res) => {
        // console.log(bathroomId, res.status);
        expect(res.body._id).to.be.a('string');
        expect(res.body.name).to.eq(bathroomData.name);
        expect(res.body.address).to.eq(bathroomData.address);
        expect(res.body.image).to.eq(bathroomData.image);
        expect(res.body.location).to.deep.eq(bathroomData.location);
        done();
      });
  });
});
