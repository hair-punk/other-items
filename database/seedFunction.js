const faker = require('faker');
const db = require('./index.js');

module.exports.start = function(cb){
  db.Product.deleteMany((err) => {
    if(err){
      console.log('Error starting seeding process');
      cb(err);
      return;
    }
    console.log('Seedin process Started');
    var documents = [];
    for (var i = 0; i < 100; i++){
      var product = new db.Product({
        name: faker.commerce.productName(),
        owner: faker.company.companyName(),
        price: faker.commerce.price(),
        imageUrl: `http://lorempixel.com/${Math.floor(Math.random() * 640) + 640}/${Math.floor(Math.random() * 480) + 480}`
      });
      documents.push(product);
    }
    db.Product.insertMany(documents, (err) => {
      if(err){
        cb(err);
        return;
      }
      cb(null);
    });
  });
}