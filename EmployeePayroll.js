console.log("----------Welcome to EmployeeWage---------");
const  FULL_TIME_HRS= 8;
const  PART_TIME_HRS= 4;
const  PART_TIME= 1;
const  FULL_TIME= 2;
const  WAGE_PER_HRS= 20;
function getWorkingHrs(empCheck){
    switch(empCheck){
        case PART_TIME:
            console.log("Employee is Part time");
            return PART_TIME_HRS;
            break;
        case FULL_TIME:
            console.log("Employee is Full time");
            return FULL_TIME_HRS;
            break;
        default:
            return 0;
    }
    }
    let empHrs=0;
    let empCheck=Math.floor(Math.random()*10) % 3;
    empHrs = getWorkingHrs(empCheck);
    let empWage = empHrs*WAGE_PER_HRS;
    console.log("EmpWage : "+empWage)