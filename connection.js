const mysql = require("mysql2");
require("dotenv").config()


// Connect to database
const connection = mysql.createConnection(
    {
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
  );

connection.connect(function(err){
    if (err) throw err;
});

module.exports = connection;