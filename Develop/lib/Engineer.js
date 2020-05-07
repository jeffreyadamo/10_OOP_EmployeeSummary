// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
const inquirer = require("inquirer");
const buildEmployee = require("../app");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    this.role="Engineer"
  }

  getGithub() {
    return this.github;
  }
}

// function buildEngineer() {
//   inquirer
//     .prompt([
//       //Name
//       {
//         type: "input",
//         name: "name",
//         message: `What is your engineer's name?`,
//       },
//       //id
//       {
//         type: "input",
//         name: "id",
//         message: `What is your engineer's id`,
//       },
//       //email
//       {
//         type: "input",
//         name: "email",
//         message: "What is your engineer's email?",
//       },
//       //github
//       {
//         type: "input",
//         name: "github",
//         message: "What is your engineer's github username?",
//       },
//     ])
//     .then(function (data) {
//       console.log("Engineer's name is " + data.name);
//       console.log("Engineer's id is " + data.id);
//       console.log("Engineer's email is " + data.email);
//       console.log("Engineer's github username is " + data.github);
//       return data;
//     })
//     .then(function (data) {
//       const engineer = new Engineer(
//         data.name,
//         data.id,
//         data.email,
//         data.github
//       );
//       console.log(engineer);
//     })
//     .then(function () {
//       buildEmployee;
//     }) //why doesn't this work?
//     .catch(function (err) {
//       console.log(err);
//     });
// }

module.exports =
  Engineer