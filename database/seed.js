const faker = require('faker');
const db = require('./index.js');

db.Product.deleteMany((err) => {
  for (var i = 0; i <= 100; i++){
    var product = new db.Product({
      name: faker.commerce.productName(),
      owner: faker.company.companyName(),
      price: faker.commerce.price(),
      imageUrl: faker.image.imageUrl()
    });

    product.save();
  }
});


