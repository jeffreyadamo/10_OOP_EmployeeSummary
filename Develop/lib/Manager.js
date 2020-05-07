// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const inquirer = require("inquirer");
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(officeNumber) {
    this.officeNumber = officeNumber;
    super(
      (getRole = function () {
        const role = "Manager";
        return role;
      })
    );
  }
}

const buildManager = () => {
  inquirer.prompt([
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
    //Office Number
    {
      type: "input",
      name: "officeNumber",
      message: "What is your manager's office number",
    }
  ]).then(function(){
    console.log("Manager data input")
})
}

module.exports = {
        Manager,
        buildManager
}
