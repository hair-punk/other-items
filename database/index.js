const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/products',{useNewUrlParser: true});

var productsSchema = new mongoose.Schema({
  name: String,
  owner: String,
  price: Number,
  imageUrl: String

});

var Product = mongoose.model('Product', productsSchema);

module.exports.Product = Product;
module.exports.fetch = (cb) => {
  Product.find((err, results) => {
    if (err){
      cb(err, null);
      return;
    }
    var limitedResults = [];
    for(var i = 1; i <= 15; i ++){
      limitedResults.push(results[Math.floor(Math.random() * 15)]);
    }
    cb(null, limitedResults);
  });
}
