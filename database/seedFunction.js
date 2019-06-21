const faker = require('faker');
const db = require('./index.js/index.js');
const S3 = require('aws-sdk/clients/s3');
const credentials = require('../s3_helper.js');

const s3 = new S3({
  region: 'us-east-2',
  credentials: {
    accessKeyId: credentials.accessKeyId,
    secretAccessKey: credentials.secretAccessKey
  }
});
const Bucket = 'etsymoreyoumightlikephotos';

module.exports.start = function(cb) {
  db.Product.deleteMany((err) => {
    if(err){
      console.log('Error starting seeding process');
      cb(err);
      return;
    }
    console.log('Seeding process started');
    var objectPromises = [];
    var documents = [];

    s3.listObjects({Bucket}, (err, data) => {
      if(err){
        console.log(`Error obtaining objects from S3 bucket ${Bucket}`);
        cb(err);
        return;
      }
      for (let i = 0; i < data.Contents.length; i ++){
        objectPromises.push(s3.getObject({Bucket, Key: data.Contents[i].Key}).promise());
      }
      Promise.all(objectPromises).then((images) => {
        for (let i = 0; i < images.length; i ++){
          documents.push(new db.Product({
            name: faker.commerce.productName(),
            owner: faker.company.companyName(),
            price: faker.commerce.price(),
            imageData: images[i].Body
          }));
        }
        db.Product.insertMany(documents, (err) => {
          if(err){
            cb(err);
            return;
          }
          cb(null);
        });
      });
    });
  });
};

