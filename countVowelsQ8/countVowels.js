// Regular function
function countVowels(input) {
  let count = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for(let idx = 0; idx < input.length; idx++)
  {
    if(vowels.includes(input[idx]))
    {
      count++;
    }
  }
  return count;
} 
// console.log(countVowels("codeacademy"));

// Arrow function and using forEach
let countVowelsUsingArrowFunction = (input) => {
  let count = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  input = input.split(''); // converting to array to use forEach
  input.forEach(countVowelArrowUtil);

  function countVowelArrowUtil(item) {
    if(vowels.includes(item))
    {
      count++;
    }
  }
  return count;
};

// console.log(countVowels("codeacademy"));
module.exports = {countVowels, countVowelsUsingArrowFunction};