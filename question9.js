// Regular function

function replaceEveryCharacterWithSuccessor(input) {
    let finalString = "";
    for(let idx=0; idx<input.length; idx++)
    {
        let charCode = input.charCodeAt(idx) + 1;
        let char = String.fromCharCode(charCode);
        finalString += char;
    }
    return finalString;
}

// console.log(replaceEveryCharacterWithSuccessor("codeacademy"));

// Arrow function

let replaceEveryCharacterWithSuccessorArrow = (input) => {
    let finalString = "";
    for(let idx=0; idx<input.length; idx++)
    {
        let charCode = input.charCodeAt(idx) + 1;
        let char = String.fromCharCode(charCode);
        finalString += char;
    }
    return finalString;
}

console.log(replaceEveryCharacterWithSuccessorArrow("codeacademy"));