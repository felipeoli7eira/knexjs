const knex = require('knex')(
    {
        client: 'mysql2',
        connection: {
            host: 'localhost',
            user: 'felipe',
            password: 'root',
            database: 'knex'
        }
    }
)

module.exports = knex