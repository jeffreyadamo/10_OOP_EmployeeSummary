// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(school){
        this.school = school;
        this.getSchool = function(school){
            const internSchool = this.school;
        }
        super(getRole = function(){
            const role = "Intern";
            return role;
        });
    }
}

module.exports = Intern;