const inquirer = require('inquirer');
const connection = require("./connection");
require("console.table");

inquirer.prompt(
    {
        type: "list",
        name: "choice",
        message: "What do you want?",
        choices: ["view all departments", "view roles", "view employees", "create department"]
    }
).then()=>{}