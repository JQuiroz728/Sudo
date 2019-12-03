const Sequelize = require('sequelize');

module.exports = new Sequelize('Sudo', 'postgres', 'password728', { // These are for my local setup. 
                                                                    // Change them to your local postgres setup.
    host: 'localhost',
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});