// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, role){
        this.name = name;
        this.id = id;
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
    const email = employeeName + "fakemail.com";
    return email;
}
Employee.prototype.getRole = function(){
    const role = "Employee";
    return role;
    //return const role = "Employee";
}

module.exports = Employee