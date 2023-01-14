// Pending testing

// Using normal function
function largestEvenNumber(nums) {
    let largestEven = -1;
    nums.forEach(largestEvenNumberUtil);

    function largestEvenNumberUtil(item) {
       x = (item % 2 == 0) ? (item > largestEven) ? item : largestEven : largestEven;
       largestEven = x;
    }
    return largestEven;
}

console.log(largestEvenNumber([1, 3, 5, 7]));

// Using arrow function
const largestEvenUsingArrow = (nums) => {
    let largestEven = -1;
    nums.forEach(largestEvenArrowUtil);

    function largestEvenArrowUtil(item) {
        x = (item % 2 == 0) ? (item > largestEven) ? item : largestEven : largestEven;
        largestEven = x;
     }
     return largestEven;
}

// console.log(largestEvenUsingArrow([1, 2, 3, 4, 5])); 