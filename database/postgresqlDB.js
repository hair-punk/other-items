const faker = require('faker');
const Pool = require('pg').Pool;

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'betsy',
    user: 'postgres',
    password: 'password'
});

module.exports.fetch = (req, res) => {
    const randomNum = faker.random.number({min: 1, max: 9999986});
    pool.query(`SELECT * FROM otheritems limit 15 offset ${randomNum}`, (error, results) => {
        if (error) {
            console.log(error);
        } else {
            console.log('RESULTS HERE:', results);
            res.status(200).json(results.rows);
        }
    });
};
