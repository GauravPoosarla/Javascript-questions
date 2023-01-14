// Regular function

function concatenateTwoStrings(strings) {
    let finalString = strings[0].slice(1) + strings[1].slice(1);
    return finalString;
}

// console.log(concatenateTwoStrings(["code", "academy"]));

// Arrow function
let concatenateTwoStringsArrow = (strings) => {
    let finalString = strings[0].slice(1) + strings[1].slice(1);
    return finalString;
}

// console.log(concatenateTwoStrings(["code", "academy"]));