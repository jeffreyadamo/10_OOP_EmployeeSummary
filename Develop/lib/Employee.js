// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email, role){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
}

Employee.prototype.getName = function(name){
    const employeeName = this.name;
    return employeeName;
}
Employee.prototype.getId = function(id){
    const employeeId = this.id;
    return employeeId;
}
Employee.prototype.getEmail = function(name){
    const email = this.email;
    return email;
}
Employee.prototype.getRole = function(){
    const role = "Employee";
    return role;
    //return const role = "Employee";
}

module.exports = Employee