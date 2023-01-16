// Regular function
function concatenateTwoStrings(strings) {
  let finalString = strings[0].slice(1) + strings[1].slice(1);
  return finalString;
}

// console.log(concatenateTwoStrings(["code", "academy"]));

// Arrow function
let concatenateTwoStringsUsingArrowFunction = (strings) => {
  let finalString = strings[0].slice(1) + strings[1].slice(1);
  return finalString;
};

// console.log(concatenateTwoStrings(["code", "academy"]));

module.exports = {concatenateTwoStrings, concatenateTwoStringsUsingArrowFunction};