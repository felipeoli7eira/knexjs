const Database = require('./database/config')

/** insert
*
* Database.insert({column: value...}).into('tableName').then().catch()
*/



/** select
*
* Database.select().table('games').then(data => {...}).catch(error => {...})
*
* Database.select(['fieldName', 'fieldName']).table('games').then(data => {...}).catch(error => {...})
*
* Database.select().table('games').then(data => {
** Database.select().table('user').then(...).catch(....)
* }).catch(error)
*/

/** select with where

    Database
    .where({id: 1})
    .table('games')
    .then(data => console.log(data))
    .catch(error => console.log(error))

    Database
    .select(['id', 'price'])
    .where({id: 1})
    .table('games')
    .then(data => console.log(data))
    .catch(error => console.log(error))

    Database
    .select(['id', 'price'])
    .where({id: 1})
    .where({name: 'example'})
    .table('games')
    .then(data => console.log(data))
    .catch(error => console.log(error))

    Database
    .select(['id', 'price'])
    .where({id: 1})
    .where({name: 'CS:GO'})
    .table('games')
    .then(data => console.log(data))
    .catch(error => console.log(error))

    Database
    .select()
    .whereRaw('name = ... OR price > ...')
    .table('games')
    .then(data => console.log(data))
    .catch(error => console.log(error))

    Database.raw('SELECT * FROM games') <- qualquer código SQL. a raw() function recebe uma sql query qualquer. livre.
*/

/** Delete

Database
.table('games')
.where({id: 5})
.delete()
.then(data => console.log(data))
.catch(error => console.log(error)

*/