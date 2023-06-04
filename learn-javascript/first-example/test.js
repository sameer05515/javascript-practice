let arr=[];

for (let index = 0; index < 100; index++) {
    arr.push(index);    
}

console.log(arr);


let sal={
    real: 28,
    fake: 24
}

const tax= 0.3;

const projectedDuration= {
    monthName: 'June\'2023',
    days: 24,
    daysInMonth: 30
}

const calculateMonthlySalary= (ctc=0) => {
    return (ctc * (1-tax))/12;
};

const calculateSalaryForGivenDays= (ctc=0, days=0, daysInMonth=31)=>{
    return calculateMonthlySalary(ctc) * days/ daysInMonth;
}

console.log(
`Real monthly salary ${calculateMonthlySalary(sal.real)}
Fake monthly salary ${calculateMonthlySalary(sal.fake)}`)

console.log(
`Real salary for ${projectedDuration.days} days of ${projectedDuration.monthName} : ${calculateSalaryForGivenDays(sal.real, projectedDuration.days, projectedDuration.daysInMonth)}
Fake salary for ${projectedDuration.days} days of ${projectedDuration.monthName} : ${calculateSalaryForGivenDays(sal.fake, projectedDuration.days, projectedDuration.daysInMonth)}`)