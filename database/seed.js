const seed = require('../database/seedFunction.js');

seed.start((err) => {
  if(err){
    console.log(err);
    return;
  }
  console.log('Seeding process Completed');
});









