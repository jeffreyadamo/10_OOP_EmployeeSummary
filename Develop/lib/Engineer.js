// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
const inquirer = require("inquirer");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    
    this.getRole = () => {
        const role = "Engineer";
        return role
    }   
    this.getGithub = function (github) {
      const githubURL = this.github;
      return githubURL;
    };
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
    //email
    {
        type: "input",
        name: "email",
        message: "What is your engineer's email?"
      },
    //github
    {
      type: "input",
      name: "github",
      message: "What is your engineer's github username?",
    }
  ])
  .then(function(data){
    console.log("Engineer's name is " + data.name);
    console.log("Engineer's id is " + data.id)
    console.log("Engineer's email is " + data.email)
    console.log("Engineer's github username is " + data.github)
  })
  .then(function(){
    const engineer = new Engineer(data.name, data.id, data.email, data.github)
    console.log(engineer);
  })
  .catch(function(err) {
        console.log(err)
     })
}

module.exports = {
    Engineer,
    buildEngineer
}
