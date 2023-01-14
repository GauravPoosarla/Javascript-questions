// Regular Function

function changeCapitalisation(input) {
    let newString = "";
    for(let idx=0; idx<input.length; idx++) {
        let currChar = (input.charCodeAt(idx) >= 65 && input.charCodeAt(idx) <= 90) ? input[idx].toLowerCase(): input[idx].toUpperCase();
        newString += currChar;
    }
    return newString;
}

// console.log(changeCapitalisation('IamGaurav'));

// Arrow Function 

let changeCapitalisationArrow = (input) => {
    let newString = ""; // new string because strings are immutable in js
    for(let idx=0; idx<input.length; idx++) {
        let currChar = (input.charCodeAt(idx) >= 65 && input.charCodeAt(idx) <= 90) ? input[idx].toLowerCase(): input[idx].toUpperCase();
        newString += currChar;
    }
    return newString;
}

console.log(changeCapitalisationArrow('IamGaurav'));