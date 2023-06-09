class EmployeePayrollData{
     //constructor
     constructor(id, name, salary, gender, startDate){
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.gender = gender;
        this.startDate = startDate;
    }

    //Getters and setters
    getId(){ return this.id; }
    setId(id){
        this.id = id;
    }

    getName(){ return this.name; }
    setName(name){
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{3,}$");
        if(nameRegex.test(name))
            this.name = name;
        else
            throw "NAME is Incorrect";
    }

    getSalary(){ return this.salary; }
    setSalary(salary){
        this.salary = salary;
    }

    getGender(){ return this.gender; }
    setGender(gender){
        this.gender = gender;
    }

    getStartDate(){ return this.startDate; }
    setStartDate(startDate){
        this.startDate = startDate;
    }

    toString(){
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const employeeDate = this.startDate == undefined ? "undefined" : this.startDate.toLocaleDateString("en-us", options);
        return "Id = " + this.id + ",\tName = " + this.name + ",\tSalary = " + this.salary +
         ",\tGender = " + this.gender + ",\tStart Date = " + employeeDate;
    }
}
//calling the constructor
let employeePayrollData = new EmployeePayrollData(1, "Ramesh", 45000);
console.log(employeePayrollData.toString());
try{
    employeePayrollData.id = 2;
    employeePayrollData.name = "Chandu";
    employeePayrollData.salary = 68000;
    console.log(employeePayrollData.toString());
}catch(e){console.error(e);}

let newemployeePayrollData = new EmployeePayrollData(3, "Vinay", 48000, "M", new Date());
console.log(newemployeePayrollData.toString());