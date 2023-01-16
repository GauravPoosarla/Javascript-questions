// Regular function
function checkLeapYear(year) {
  return (year% 4 == 0 && year % 100 != 0) ? true :
    (year % 400 == 0 ) ? true : false;
}

// console.log(checkLeapYear(2000));

// Arrow function using ternary operators
let checkLeapYearUsingArrowFunction = (year) => {
  return (year% 4 == 0 && year % 100 != 0) ? true :
    (year % 400 == 0 ) ? true : false;
};

// console.log(checkLeapYearArrow(2000));

module.exports = {checkLeapYear, checkLeapYearUsingArrowFunction};