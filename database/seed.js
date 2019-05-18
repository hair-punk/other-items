const faker = require('faker');
const db = require('./index.js');

db.Product.deleteMany((err) => {
  for (var i = 0; i <= 100; i++){
    var product = new db.Product({
      name: faker.commerce.productName(),
      owner: faker.company.companyName(),
      price: faker.commerce.price(),
      imageUrl: `http://lorempixel.com/${Math.floor(Math.random() * 640) + 640}/${Math.floor(Math.random() * 480) + 480}`
    });

    product.save();
  }
});

// module.exports = () => {
//   db.Product.deleteMany((err) => {
//     for (var i = 0; i <= 100; i++){
//       var product = new db.Product({
//         name: faker.commerce.productName(),
//         owner: faker.company.companyName(),
//         price: faker.commerce.price(),
//         imageUrl: `http://lorempixel.com/${Math.floor(Math.random() * 640) + 640}/${Math.floor(Math.random() * 480) + 480}`
//       });
//       console.log('saving');
//       product.save();
//     }
//   });
// }






