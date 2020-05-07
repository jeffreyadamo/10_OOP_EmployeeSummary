// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
const inquirer = require("inquirer");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;

    this.getRole = () => {
        const role = "Intern";
        return role
    }  
    this.getSchool = function (school) {
      const getSchool = this.school;
      return getSchool;
    };
  }
}

function buildIntern() {
  inquirer.prompt([
    //Name
    {
      type: "input",
      name: "name",
      message: `What is your intern's name?`
    },
    //id
    {
      type: "input",
      name: "id",
      message: `What is your intern's id`
    },
    //email
    {
        type: "input",
        name: "email",
        message: "What is your intern's email?"
      },
    //School
    {
      type: "input",
      name: "school",
      message: "Where did the intern go to school?"
    }
  ])
  .then(function(data){
    console.log("Intern's name is " + data.name);
    console.log("Intern's id is " + data.id);
    console.log("Intern's email is " + data.email);
    console.log("Intern's school is " + data.school)
  })
  .then(function(){
    const intern = new Intern(data.name, data.id, data.email, data.school)
    console.log(intern);
  })
}

module.exports = {
    Intern,
    buildIntern
}
