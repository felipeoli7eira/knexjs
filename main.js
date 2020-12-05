const Database = require('./database/config')

let data = {
    name: 'CS:GO',
    price: 29.90
}

/*
    let data = [
        {....},
        {....},
        {....},
        {....},
        {....}
    ]
*/

const query = Database.insert(data).into('games').then(response => {

    console.log(response)

}).catch(error => console.log(error))

// console.log(query.toQuery())