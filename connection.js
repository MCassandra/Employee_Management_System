const mysql = require("mysql2");
require("dotenv").config()


// Connect to database
const connection = mysql.createConnection(
    {
      host: process.env.host,
      // MySQL username,
      user: process.env.user,
      // TODO: Add MySQL password here
      password: process.env.password,
      database: 'employees'
    },
    console.log(`Connected to the employees database.`)
  );

connection.connect(function(err){
    if (err) throw err;
});

module.exports = connection;