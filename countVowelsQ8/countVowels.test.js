const { countVowels } = require('./countVowels');
const { countVowelsUsingArrowFunction} = require('./countVowels');

describe('counting vowels present in a string', () => {
    test('"codeacademy" should result in "5"', () => {
        expect(countVowels("codeacademy")).toBe(5);
    });
    test('"gaurav" should result in "3"', () => {
        expect(countVowels("gaurav")).toBe(3);
    });
    test('"mckinsey" should result in "2"', () => {
        expect(countVowels("mckinsey")).toBe(2);
    });
    test('"sdfghjk" should result in "0"', () => {
        expect(countVowels("sdfghjk")).toBe(0);
    });
});

describe('counting vowels present in a string', () => {
    test('"codeacademy" should result in "5"', () => {
        expect(countVowelsUsingArrowFunction("codeacademy")).toBe(5);
    });
    test('"gaurav" should result in "3"', () => {
        expect(countVowelsUsingArrowFunction("gaurav")).toBe(3);
    });
    test('"mckinsey" should result in "2"', () => {
        expect(countVowelsUsingArrowFunction("mckinsey")).toBe(2);
    });
    test('"sdfghjk" should result in "0"', () => {
        expect(countVowelsUsingArrowFunction("sdfghjk")).toBe(0);
    });
});