// Regular Function
function findLongestString(arr) {
  let finalString = arr[0];
  for(let idx=1; idx<arr.length; idx++)
  {
    if(arr[idx].length > finalString.length)
    {
      finalString = arr[idx];
    }
  }
  return finalString;
}

// console.log(findLongestString(["we", "love", "code", "academy"]));

// Arrow function using forEach and ternary operations.
let findLongestStringUsingArrowFunction = (arr) => {
  let finalString = arr[0];
  arr.forEach(findLongestStringUtil);

  function findLongestStringUtil(item) {
    let x = item.length > finalString.length ? item : finalString;
    finalString = x;
  }
  return finalString;
};

// console.log(findLongestStringArrow(["we", "love", "code", "academy"]));

module.exports = {findLongestString, findLongestStringUsingArrowFunction};