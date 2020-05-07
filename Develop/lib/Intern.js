// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
const inquirer = require("inquirer");

class Intern extends Employee {
  constructor(school) {
    this.school = school;
    this.getSchool = function (school) {
      const internSchool = this.school;
    };
    super(
      (getRole = function () {
        const role = "Intern";
        return role;
      })
    );
  }
}

function buildIntern() {
  inquirer.prompt([
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
    //School
    {
      type: "input",
      name: "school",
      message: "Where did the intern go to school?",
    },
  ]);
}

module.exports = Intern;
