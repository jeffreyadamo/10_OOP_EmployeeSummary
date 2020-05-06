// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(gitHub){
        this.gitHub = gitHub;
        this.getGitHub = function(gitHub){
            const gitHubURL = `http://www.github.com/${this.gitHub}` 
        }
        super(getRole = function(){
            const role = "Engineer";
            return role;
        });
    }
}

module.exports = Engineer;