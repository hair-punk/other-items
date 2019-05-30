const chai = require('chai');
const expect = chai.expect;
const axios = require('axios');


describe('Server specification', () => {
  var server;
  beforeEach(() => {
    server = require('../server.js');
  });

  afterEach(() => {
    server.close();
  })

  it('Should return an array when calling \"/items\"', (done) => {
    axios.get('http://localhost:3003/items')
      .then((res) => {
        expect(res.status).to.equal(200);
        expect(res.data).to.be.an('array');
        expect(res.data.length).to.equal(15);
        done();
      });
  });
});