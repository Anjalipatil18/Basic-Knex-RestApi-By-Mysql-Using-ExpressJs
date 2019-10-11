const options = {
    client: 'mysql',
    connection: "mysql://root:andrea@localhost:3306/Department"
}

const knex = require('knex')(options);

knex.from('car').select("name", "price").where('price', '>', '50000')
    .then((rows) => {
        for (row of rows) {
            console.log(`${row['name']} ${row['price']}`);
        }
    })
    .catch((err) => { console.log( err); throw err })
    .finally(() => {
        knex.destroy();
    });