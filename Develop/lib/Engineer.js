// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
const inquirer = require("inquirer");

class Engineer extends Employee {
  constructor(gitHub) {
    this.gitHub = gitHub;
    this.getGitHub = function (gitHub) {
      const gitHubURL = `http://www.github.com/${this.gitHub}`;
    };
    super(
      (getRole = function () {
        const role = "Engineer";
        return role;
      })
    );
  }
}

function buildEngineer() {
  inquirer.prompt([
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
    //GitHub
    {
      type: "input",
      name: "gitHub",
      message: "What is your engineer's GitHub username?",
    },
  ]);
}

module.exports = Engineer;
