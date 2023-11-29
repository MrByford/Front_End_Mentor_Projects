function outputValue() {

    let dayInput = document.getElementById('dayInput').value;
    let monthInput = document.getElementById('monthInput').value;
    let yearInput = document.getElementById('yearInput').value;
    let daysOutput = document.getElementById('daysOutput');
    let monthsOutput = document.getElementById('monthsOutput');
    let yearsOutput = document.getElementById('yearsOutput');
    let dayError = document.querySelector('.dayError');
    let monthError = document.querySelector('.monthError');
    let yearError = document.querySelector('.yearError');
    let currentYear = new Date().getFullYear();
    let currentMonth = new Date().getMonth();
    let currentDay = new Date().getDay();
    let classReset = document.querySelector('.error');

    
    if (dayInput === ''){
        dayError.innerHTML = "<h3>This field is required!</h3>";
        document.querySelector('.daySection').classList.add('error');
    } else if (isNaN(dayInput) || dayInput < 1 || dayInput > 31){
        dayError.innerHTML = "<h3>Must be a valid day</h3>";
        document.querySelector('.daySection').classList.add('error');
    } else {
        const calcDays = Math.abs(dayInput - currentDay);
        daysOutput.innerHTML = calcDays.toString();
        daysOutput = calcDays;
    }

    if (monthInput === ''){
        monthError.innerHTML = "<h3>This field is required!</h3>";
        document.querySelector('.monthSection').classList.add('error');
    } else if (isNaN(monthInput) || monthInput < 1 || monthInput > 12){
        monthError.innerHTML = "<h3>Must be a valid Month</h3>";
        document.querySelector('.monthSection').classList.add('error');
    } else {
        const calcMonths = Math.abs(monthInput - currentMonth);
        monthsOutput.innerHTML = calcMonths.toString();
        monthsOutput = calcMonths;
    }

    if (yearInput === ''){
        yearError.innerHTML = "<h3>This field is required!</h3>";
        document.querySelector('.yearSection').classList.add('error');
    } else if (isNaN(yearInput) || yearInput > currentYear){
        yearError.innerHTML = "<h3>Must be a valid Year</h3>";
        document.querySelector('.yearSection').classList.add('error');
    } else {
        const calcYears = Math.abs(yearInput - currentYear);
        yearsOutput.innerHTML = calcYears.toString();
        yearsOutput = calcYears;
    }
}