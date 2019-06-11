const faker = require('faker');
const fs = require('fs');


const dataGenerator = (numOfRecords) => {
  const writeStream = fs.createWriteStream(__dirname + '/data/mockdata.csv', {flag: 'w', defaultEncoding: 'utf8'});

  for (var i = 0; i < numOfRecords; i++) {

    let name = faker.commerce.productName();
    let owner = faker.company.companyName(0);
    let price = faker.commerce.price();
    let imageNumber = faker.random.number({min: 1, max: 250});
    let image = `https://etsymoreyoumightlikephotos.s3.us-east-2.amazonaws.com/${imageNumber}`

    const dataString = `${name}, ${owner}, ${price}, ${image}\n`;

    writeStream.write(dataString, (err) => {
      if (err) {
        console.log(err);
      }
    })
  }
};

dataGenerator(1e7);