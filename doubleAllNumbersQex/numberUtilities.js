function doubleNumbers(numbers) {
  if(!Array.isArray(numbers))
  {
    throw new TypeError();
  }
  return numbers.map(num => num * 2);
}

function filterEvenNumbers(numbers) {
  if(!Array.isArray(numbers))
  {
    throw new TypeError();
  }
  const result = numbers.filter (number => number % 2 == 0);
  return result;
}

function tripleNumbersAndFilterEven(numbers) {
  if(!Array.isArray(numbers))
  {
    throw new TypeError();
  }
  const tripledNumbers = numbers.map ((number) => number * 3);
  const result = tripledNumbers.filter ((number) => number % 2 == 0);
  return result;
}

// console.log(tripleNumbersAndFilterEven([1,2,3,4,5]));
module.exports = {doubleNumbers, filterEvenNumbers, tripleNumbersAndFilterEven};