// Regular function
function checkAllDigitsSame(num) {
  let lastDigit = num % 10;
  num /= 10;
  num = Math.trunc(num);

  while(num > 0)
  {
    let digit = num%10;
    // console.log(lastDigit, digit);
    if(digit !== lastDigit)
      return false;
    num /= 10;
    num = Math.trunc(num);
  }
  return true;
}

// console.log(checkAllDigitsSame(23));

// Arrow function
const checkAllDigitsSameArrowFunction = (num) => {
  let lastDigit = num % 10;
  num /= 10;
  num = Math.trunc(num);

  while(num > 0)
  {
    let digit = num%10;
    // console.log(lastDigit, digit);
    if(digit !== lastDigit)
      return false;
    num /= 10;
    num = Math.trunc(num);
  }
  return true;
};

// console.log(checkAllDigitsSameArrow(23));

module.exports = {checkAllDigitsSame, checkAllDigitsSameArrowFunction};