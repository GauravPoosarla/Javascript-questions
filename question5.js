// Regular function

function checkLeapYear(year) {
    if(year % 400 == 0)
    {
        return true;
    }
    if(year % 100 == 0)
    {
        return false;
    }
    if(year % 4 == 0)
    {
        return true;
    }
    return false;
}

// console.log(checkLeapYear(2000));

// Arrow function using ternary operators

let checkLeapYearArrow = (year) => {
    return (((year % 4 == 0) && (year % 100 != 0)) ||
             (year % 400 == 0));
}

console.log(checkLeapYearArrow(2000));