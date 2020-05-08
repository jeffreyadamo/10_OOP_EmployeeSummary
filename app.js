const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const employeeArr = [];
let managerCount = 0;

const buildEmployee = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Which type of team member would you like to add?",
        name: "role",
        choices: ["Engineer", "Intern", "Manager", "No more employees to add"],
      },
    ])
    .then(function (data) {
      switch (data.role) {
        case "Manager":
          return confirmManager();
        case "Engineer":
          return buildEngineer();
        case "Intern":
          return buildIntern();
        case "No more employees to add":
          console.log("HTML will be rendered in the output folder");
          return lastStep();
      }
    });
};

buildEmployee();

function lastStep() {
  fs.writeFile(outputPath, render(employeeArr), function (err) {
    if (err) {
      throw err;
    }
  });
}

function buildEngineer() {
  inquirer
    .prompt([
      //Name
      {
        type: "input",
        name: "name",
        message: `What is your engineer's name?`,
      },
      //id
      {
        type: "input",
        name: "id",
        message: `What is your engineer's id`,
      },
      //email
      {
        type: "input",
        name: "email",
        message: "What is your engineer's email?",
      },
      //github
      {
        type: "input",
        name: "github",
        message: "What is your engineer's github username?",
      },
    ])
    .then(function (data) {
      const engineer = new Engineer(
        data.name,
        data.id,
        data.email,
        data.github
      );
      employeeArr.push(engineer);
      buildEmployee();
    })
    .catch(function (err) {
      console.log(err);
    });
}

//If an 2nd Manager is selected to be build, app asks for confirmation
const confirmManager = () => {
  if (managerCount > 0) {
    inquirer
      .prompt([
        {
          type: "confirm",
          name: "extraManager",
          message: "Team already has a manager, would you like to another?",
        },
      ])
      .then(function (data) {
        if (data.extraManager === true) {
          buildManager();
        } else buildEmployee();
      })
      .catch(function (err) {
        console.log(err);
      });
  } else buildManager();
};

function buildManager() {
  inquirer
    .prompt([
      //Name
      {
        type: "input",
        name: "name",
        message: "What is your manager's name?",
      },
      //id
      {
        type: "input",
        name: "id",
        message: "What is your manager's id?",
      },
      //email
      {
        type: "input",
        name: "email",
        message: "What is your manager's email?",
      },
      //Office Number
      {
        type: "input",
        name: "officeNumber",
        message: "What is your manager's office number",
      },
    ])
    .then(function (data) {
      const manager = new Manager(
        data.name,
        data.id,
        data.email,
        data.officeNumber
      );
      employeeArr.push(manager);
      managerCount++;
      buildEmployee();
    })
    .catch(function (err) {
      console.log(err);
    });
}

function buildIntern() {
  inquirer
    .prompt([
      //Name
      {
        type: "input",
        name: "name",
        message: `What is your intern's name?`,
      },
      //id
      {
        type: "input",
        name: "id",
        message: `What is your intern's id`,
      },
      //email
      {
        type: "input",
        name: "email",
        message: "What is your intern's email?",
      },
      //School
      {
        type: "input",
        name: "school",
        message: "Where did the intern go to school?",
      },
    ])
    .then(function (data) {
      const intern = new Intern(
        data.name, 
        data.id, 
        data.email, 
        data.school
      );
      employeeArr.push(intern);
      buildEmployee();
    })
    .catch(function (err) {
      console.log(err);
    });
}
