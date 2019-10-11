const mysql = require('mysql')
const connection=mysql.createConnection({
    host : '127.0.0.1',
    user : 'root',
    password : 'Anjali2018@',
    database : 'Department'
})
module.exports = connection;
connection.connect(function(err){
  if (err){
    console.error('error connection: '+ err.stack)
  }
  console.log('connected as id ' + connection.threadId)
})

console.log("created table......")



const knex = require('knex')
({client:"mysql",
connection:{
    host : '127.0.0.1',
    user : 'root',
    password : 'Anjali2018@',
    database : 'Department'
},
pool:{min:0,max:7}
})

knex.schema.createTable('car', (table) => {
  table.increments('id')
  table.string('name')
  table.integer('price')
})
.then(()=>{
  console.log("create table")
}).catch(()=>{
  console.log("asdfghj,.")
});