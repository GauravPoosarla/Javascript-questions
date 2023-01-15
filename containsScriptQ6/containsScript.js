// Regular Function
function checkEndsWithScript(input) {
    if(input.endsWith("Script") && input.length >= 6)
    {
        return true;
    }
    return false;
}

// console.log(checkEndsWithScript('JavaScript'));
// console.log(checkEndsWithScript('javascript'));

// Arrow function using ternary operators
let checkEndsWithScriptUsingArrowFunction = (input) => {
    let ans = (input.endsWith("Script")) ? (input.length >= 6) ? true : false : false;
    return ans;
}

// console.log(checkEndsWithScript('JavaScript'));
// console.log(checkEndsWithScript('javascript'));

module.exports = {checkEndsWithScript, checkEndsWithScriptUsingArrowFunction};