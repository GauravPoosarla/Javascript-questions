// Regular function

function replaceEveryCharacterWithSuccessor(input) {
  let finalString = '';
  for(let idx=0; idx<input.length; idx++)
  {
    let charCode = input.charCodeAt(idx) + 1;
    if(charCode == 123)
    {
      finalString += 'a';
      continue;
    }
    if(charCode == 91)
    {
      finalString += 'A';
      continue;
    }
    let char = String.fromCharCode(charCode);
    finalString += char;
  }
  return finalString;
}

// console.log(replaceEveryCharacterWithSuccessor("codeacademy"));

// Arrow function

let replaceEveryCharacterWithSuccessorUsingArrowFunction = (input) => {
  let finalString = '';
  for(let idx=0; idx<input.length; idx++)
  {
    let charCode = input.charCodeAt(idx) + 1;
    if(charCode == 123)
    {
      finalString += 'a';
      continue;
    }
    if(charCode == 91)
    {
      finalString += 'A';
      continue;
    }
    let char = String.fromCharCode(charCode);
    finalString += char;
  }
  return finalString;
};

// console.log(replaceEveryCharacterWithSuccessorArrow("codeacademy"));
module.exports = {replaceEveryCharacterWithSuccessor, replaceEveryCharacterWithSuccessorUsingArrowFunction};