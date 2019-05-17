const chai = require('chai');
const expect = chai.expect;
const db = require('../database/index.js');

describe('Database specification', () => {
  beforeEach((done) => {
    db.Product.deleteMany((err) => {
      if (err){
        done(err);
      }
      done();
    })
  });


  it('Should not have any documents', (done) => {
    db.Product.find((err, results) => {
      if(err){
        done(err);
      }
      expect(results).to.be.an('array');
      expect(results.length).to.equal(0);
      done();
    });
  });

  it('Should contain one complete document', (done) => {
    var newDoc = new db.Product({
      name: 'Crayons',
      owner: 'Jonathan Inc.',
      price: 38.50,
      imageUrl: 'http://lorempixel.com/640/480'
    });

    newDoc.save(() => {
      db.Product.find((err, results) => {
        if (err){
          done(err);
        }
        expect(results).to.be.an('array');
        expect(results.length).to.equal(1);
        expect(results[0].name).to.equal('Crayons');
        done();
      });
    });
  });
});