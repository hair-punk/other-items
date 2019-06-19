const promise = require('bluebird');
const initOptions = { promiseLib: promise };
const pgp = require('pg-promise')(initOptions);
const faker = require('faker');
const Pool = require('pg').Pool;

const connection = {
    host: 'localhost',
    port: 5432,
    database: 'betsy',
    user: 'postgres',
    password: 'password'
};

const db = pgp(connection);

// module.exports.fetch = (callback) => {
//     const randomNum = faker.random.number({min: 1, max: 1e7});
//     const itemsList = [];

//     for (var i = 0; i < 15; i++) {
//     db.any(`SELECT * FROM otheritems WHERE id=${randomNum}`, [true])
//     .then(data => {
//         itemsList.push(data);
//         console.log('DATA:', data);
//     })
//     .catch(error => {
//         console.log('ERROR:', error);
//     })
//   }  // .finally(db.$pool.end); // For immediate app exit, shutting down the connection pool
// }

module.exports.fetch = () => {
    const itemsList = [];

    for (var i = 0; i < 15; i++) {
        const randomNum = faker.random.number({min: 1, max: 1e7});
        db.any(`SELECT * FROM otheritems WHERE id=${randomNum}`, [true])
            .then(data => {
                itemsList.push(data);
            })
            .catch(error => {
                console.log('ERROR:', error);
            })
        }
};