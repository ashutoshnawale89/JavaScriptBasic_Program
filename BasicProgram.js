var partTimeWage=80;
var fullTimeWage=180;
var noOfWorkingDayInMonth=20;
var noOfHoursInMonth=100;
var totalWage=0;
var storeData=new Map();
var day=0;
while(noOfHoursInMonth!=0 && noOfWorkingDayInMonth!=0){
    
var attendance=Math.floor(Math.random()*10);
// fullTime
if(attendance >= 5){
    noOfHoursInMonth=noOfHoursInMonth-8;
    noOfWorkingDayInMonth=noOfWorkingDayInMonth-1;
    totalWage=fullTimeWage+totalWage;
    storeData.set(day,fullTimeWage);
}
else {
    noOfHoursInMonth=noOfHoursInMonth-8;
    noOfWorkingDayInMonth=noOfWorkingDayInMonth-1;
    totalWage=partTimeWage+totalWage;
    storeData.set(day,partTimeWage);
}
day++;
}
console.log(storeData);
console.log("Total Wage Of Employee is : "+totalWage)
