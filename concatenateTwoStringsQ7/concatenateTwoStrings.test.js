const { concatenateTwoStrings } = require('./concatenateTwoStrings');
const { concatenateTwoStringsUsingArrowFunction } = require('./concatenateTwoStrings');

describe('concatenating two strings without first char ', () => {
    test('"["code", "academy"]" should result in "odecademy"', () => {
        expect(concatenateTwoStrings(["code", "academy"])).toBe("odecademy");
    });
    test('"["ca", "ac"]" should result in "ac"', () => {
        expect(concatenateTwoStrings(["ca", "ac"])).toBe("ac");
    });
    test('"["a", "c"]" should result in ""', () => {
        expect(concatenateTwoStrings(["a", "c"])).toBe("");
    });
    test('"["ac", ""]" should result in "c"', () => {
        expect(concatenateTwoStrings(["ac", ""])).toBe("c");
    });
});

describe('concatenating two strings without first char using Arrow functions', () => {
    test('"["code", "academy"]" should result in "odecademy"', () => {
        expect(concatenateTwoStringsUsingArrowFunction(["code", "academy"])).toBe("odecademy");
    });
    test('"["ca", "ac"]" should result in "ac"', () => {
        expect(concatenateTwoStringsUsingArrowFunction(["ca", "ac"])).toBe("ac");
    });
    test('"["a", "c"]" should result in ""', () => {
        expect(concatenateTwoStringsUsingArrowFunction(["a", "c"])).toBe("");
    });
    test('"["ac", ""]" should result in "c"', () => {
        expect(concatenateTwoStringsUsingArrowFunction(["ac", ""])).toBe("c");
    });
});