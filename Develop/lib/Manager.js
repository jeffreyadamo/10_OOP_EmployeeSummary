// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const inquirer = require("inquirer");
const Employee = require("./Employee");


class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.role = "Manager";

  } 
  getOfficeNumber() {
      return this.officeNumber;
    } 
}
  

// const buildManager = (data) => {
//   inquirer.prompt([
//     //Name
//     {
//       type: "input",
//       name: "name",
//       message: "What is your manager's name?"
//     },
//     //id
//     {
//       type: "input",
//       name: "id",
//       message: "What is your manager's id?"
//     },
//      //email
//      {
//         type: "input",
//         name: "email",
//         message: "What is your manager's email?"
//       },
//     //Office Number
//     {
//       type: "input",
//       name: "officeNumber",
//       message: "What is your manager's office number"
//     }
//   ])
//   .then(function(data){
//     console.log("Manager's name is " + data.name);
//     console.log("Manager's id is " + data.id);
//     console.log("Manager's email is " + data.email);
//     console.log("Manager's officeNumber is " + data.officeNumber)
//     return data;
//   })
//   .then(function(data){
//     const manager = new Manager(data.name, data.id, data.email, data.officeNumber)
//     console.log(manager);
//   })
//   .catch(function(err) {
//         console.log(err)
//      })
// }



module.exports =  Manager