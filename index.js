const inquirer = require('inquirer');
const connection = require("./connection");
require("console.table");

function viewDepartment() {
    console.log("View all departments")
    connection.promise().query("SELECT id, name FROM department;")
        .then(result => {
            console.table(result[0]);
            mainMenu();
        })
}

function createDepartment() {
    console.log("Create Department")
    inquirer.prompt([
        {
            name: "name",
            message: "What is the name of the department?"
        }
    ]).then(input => {
        let name = input;
        connection.promise().query("INSERT INTO department SET ?", name)
            .then(() => console.log(`Added ${name.name} to the database`))
            .then(() => mainMenu())
    })
}

function createRole() {
    console.log("Create Role")
    inquirer.prompt([
        {
            name: "name",
            message: "What is the name of the role?"
        }
    ]).then(input => {
        let title = input;
        connection.promise().query("INSERT INTO role SET ?", title)
            .then(() => console.log(`Added ${title.title} to the database`))
            .then(() => mainMenu())
    })
}

function createEmployee() {
    console.log("Create Employee")
    inquirer.prompt([
        {
            name: "name",
            message: "What is the name of the employee?"
        }
    ]).then(input => {
        let name = input;
        connection.promise().query("INSERT INTO employee SET ?", name)
            .then(() => console.log(`Added ${name.name} to the database`))
            .then(() => mainMenu())
    })
}
function viewEmployees() {
    console.log("viewEmployees Function")
    connection.promise().query("SELECT * FROM employee;")
        .then(result => {
            console.table(result[0]);
            mainMenu();
        })
}

function viewRoles() {
    console.log("view all roles")
    connection.promise().query("SELECT * FROM role")
        .then(result => {
            console.table(result[0]);
            mainMenu();
        })
}

function quit() {
    console.log("exiting...done.")
    process.exit();
}

function mainMenu() {
    console.log("Main Menu")
    inquirer.prompt(
        {
            type: "list",
            name: "choice",
            message: "Please make a selection:",
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
                    name: "Create new Employee",
                    value: "CREATE_EMPLOYEE"
                },
                {
                    name: "View All Roles",
                    value: "VIEW_ROLES"
                },
                {
                    name: "Create new Roll",
                    value: "CREATE_ROLE"
                },
                {
                    name: "Exit",
                    value: "QUIT"
                }
            ]
        }
    ).then((answers) => {
        console.log(answers)
        switch (answers.choice) {
            case "VIEW_DEPARTMENT":
                viewDepartment();
                break;
            case "CREATE_DEPARTMENT":
                createDepartment();
                break;
            case "VIEW_ROLES":
                viewRoles();
                break;
            case "CREATE_ROLE":
                createRole();
                break;
            case "VIEW_EMPLOYEES":
                viewEmployees();
                break;
            case "CREATE_EMPLOYEE":
                createEmployee();
                break;
            default:
                quit();
        }
    })
}

function init() {
    console.log('EMPLOYEE');
    mainMenu();
}
init();


