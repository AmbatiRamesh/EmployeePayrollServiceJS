console.log("----------Welcome to EmployeeWage---------");
const  FULL_TIME_HRS= 8;
const  PART_TIME_HRS= 4;
const  PART_TIME= 1;
const  FULL_TIME= 2;
const  WAGE_PER_HRS= 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH =160;
    let monthlyWage=0;
    let empWage=0;
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
               console.log("Employee is Absent");
                return 0;
               break;
        }
        }
        let empHrs=0;let day = 0; totalWorkingHrs =0;
        while(day<=NUM_OF_WORKING_DAYS && totalWorkingHrs<=MAX_HRS_IN_MONTH ){
            totalWorkingHrs++;
        let empCheck=Math.floor(Math.random()*10) % 3;
        day++;
        empHrs += getWorkingHrs(empCheck);
        empWage = empHrs*WAGE_PER_HRS;
        monthlyWage += empWage;
    console.log("Total hrs : " + totalWorkingHrs + " EmpWage : "+empWage + " monthlyWage : " + monthlyWage);
    }