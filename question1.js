// Pending testing

// Using normal function
function largestEvenNumber(nums) {
    let largestEven = Number.MIN_VALUE;
    nums.forEach(largestEvenNumberUtil);

    function largestEvenNumberUtil(item) {
       x = (item % 2 == 0) ? (item > largestEven) ? item : largestEven : largestEven;
       largestEven = x;
    }
    return largestEven;
}

// console.log(largestEvenNumber([1, 2, 3, 4, 5]));

// Using arrow function
const largestEvenUsingArrow = (nums) => {
    let largestEven = Number.MIN_VALUE;
    nums.forEach(largestEvenArrowUtil);

    function largestEvenArrowUtil(item) {
        x = (item % 2 == 0) ? (item > largestEven) ? item : largestEven : largestEven;
        largestEven = x;
     }
     return largestEven;
}

// console.log(largestEvenUsingArrow([1, 2, 3, 4, 5])); 