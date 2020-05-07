const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
// const {buildManager} = require("./lib/Manager");
// const {buildIntern} = require("./lib/Intern");
// const {buildEngineer} = require("./lib/Engineer");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const employeeArr = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
// bob

const buildEmployee = function () {
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
      console.log("role received");
      console.log("role is " + data.role);

      switch (data.role) {
        case "Manager":
          return buildManager(data);
        case "Engineer":
          return buildEngineer(data);
        case "Intern":
          return buildIntern(data);
        case "No more employees to add":
          console.log("HTML will be rendered here");
          return lastStep();
      }
    });
};

buildEmployee();

module.exports = buildEmployee;
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
function lastStep() {
  fs.writeFile("ChangeThisLater.html", render(employeeArr), function (err) {
    if (err) {
      throw err;
    }

    console.log("Done");
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
      console.log("Engineer's name is " + data.name);
      console.log("Engineer's id is " + data.id);
      console.log("Engineer's email is " + data.email);
      console.log("Engineer's github username is " + data.github);
      return data;
    })
    .then(function (data) {
      const engineer = new Engineer(
        data.name,
        data.id,
        data.email,
        data.github
      );
      console.log(engineer);
      employeeArr.push(engineer);
      buildEmployee();
    })
    // .then(function () {
    //   buildEmployee;
    // }) //why doesn't this work?
    .catch(function (err) {
      console.log(err);
    });
}

const buildManager = (data) => {
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
      console.log("Manager's name is " + data.name);
      console.log("Manager's id is " + data.id);
      console.log("Manager's email is " + data.email);
      console.log("Manager's officeNumber is " + data.officeNumber);
      return data;
    })
    .then(function (data) {
      const manager = new Manager(
        data.name,
        data.id,
        data.email,
        data.officeNumber
      );
      console.log(manager);
      employeeArr.push(manager);
      buildEmployee();
    })
    .catch(function (err) {
      console.log(err);
    });
};

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
      console.log("Intern's name is " + data.name);
      console.log("Intern's id is " + data.id);
      console.log("Intern's email is " + data.email);
      console.log("Intern's school is " + data.school);
      return data;
    })
    .then(function (data) {
      const intern = new Intern(data.name, data.id, data.email, data.school);
      console.log(intern);
      employeeArr.push(intern);
      buildEmployee();
    })
    .catch(function (err) {
      console.log(err);
    });
}
