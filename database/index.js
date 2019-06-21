// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/products',{useNewUrlParser: true});

// // const atlas = require('./atlasHelper.js');//Pulling in password for MongoDB atlas
// // var uri = `mongodb+srv://root:${atlas.pass}@cluster0-lpse9.mongodb.net/products?retryWrites=true&w=majority`
// // mongoose.connect(uri, {useNewUrlParser: true});


// var productsSchema = new mongoose.Schema({
//   name: String,
//   owner: String,
//   price: Number,
//   imageUrl: String,
//   imageData: Buffer
// });

// var Product = mongoose.model('Product', productsSchema);

module.exports.Product = Product;

module.exports.fetch = (cb) => {
  Product.find((err, results) => {
    if (err){
      cb(err, null);
      return;
    }
    var limitedResults = [];
    var randomIndex = Math.floor(Math.random() * (results.length - 14));
    for(let i = 0; i <= 14; i ++){
      var newObj = {};
      Object.assign(newObj, results[randomIndex + i]._doc);
      newObj.imageData = results[randomIndex + i].imageData.toString('base64');
      limitedResults.push(newObj);
    }
    cb(null, limitedResults);
  });
}