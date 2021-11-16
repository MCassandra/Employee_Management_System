const inquirer = require('inquirer');
const connection = require("./connection");
require("console.table");

function mainMenu() {
    console.log("Main Menu")
    inquirer.prompt(
        {
            type: "list",
            name: "choice",
            message: "What do you want?",
            choices: [
                {
                    name: "View All Department",
                    value: "VIEW_DEPARTMENT"
                },
                {
                    name: "Create new Department",
                    value: "CREATE_DEPARTMENT"
                },
                {
                    name: "View All Employees",
                    value: "VIEW_EMPLOYEES"
                },
                {
                    name: "View All Roles",
                    value: "VIEW_ROLES"
                },
                {
                    name: "QUIT",
                    value: "QUIT"
                }
            ]
        }
    ).then(() => {
        console.log()
        switch () {
            case "VIEW_DEPARTMENT":
                viewDepartment();
                break;
            case "CREATE_DEPARTMENT":
                createDepartment();
                break;
            case "VIEW_ROLES":
                viewRoles();
                break;
            case "VIEW_EMPLOYEES":
                viewEmployees();
                break;
            default:
                quit();
        }
    })
}

mainMenu()

