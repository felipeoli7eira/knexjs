const Database = require('./database/config')

let data = {
    name: 'CS:GO',
    price: 29.90
}

const query = Database.insert(data)

console.log(query)