class EmployeePayrollData{
    //constructor
    constructor(id, name, salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    //Getters and setters
    getId(){ 
        return this.id; 
    }
    setId(id){
        this.id = id;
    }
    getName(){ 
        return this.name; 
    }
    setName(name){
        this.name = name;
    }
    getSalary(){ 
        return this.salary; 
    }
    setSalary(salary){
        this.salary = salary;
    }
    toString(){
        return "Id = " + this.id + "\nName = " + this.name + "\nSalary = " + this.salary;
    }
}
//calling the constructor
let employeePayrollData = new EmployeePayrollData(1, "Ramesh", 45000);
console.log(employeePayrollData.toString());
employeePayrollData.id = 2;
employeePayrollData.name = "Chandu";
employeePayrollData.salary = 68000;
console.log(employeePayrollData.toString());