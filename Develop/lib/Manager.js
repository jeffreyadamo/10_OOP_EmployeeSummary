// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const inquirer = require("inquirer");
const Employee = require("./Employee");


class Manager extends Employee {
  constructor(name, id, officeNumber) {
    this.officeNumber = officeNumber;
    this.getRole = () => {
        const role = "Manager";
        return role}   
    super(name, id, email, role);
  }
}
  

const buildManager = (data) => {
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
  ])
  .then(function(data){
    console.log("Manager's name is " + data.name);
    console.log("Manager's id is " + data.id)
    console.log("Manager's officeNumber is " + data.officeNumber)
  })
  .then(function(){
    const manager = new Manager(data.name, data.id, data.officeNumber)
    console.log(manager);
  })
  .catch(function(err) {
        console.log(err)
     })
}



module.exports = {
        Manager,
        buildManager
}
