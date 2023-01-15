const { checkLeapYear } = require('./checkLeapYear')
const { checkLeapYearUsingArrowFunction} = require('./checkLeapYear');

describe('finding if a year is leap or not using ternary', () => {
    test('2000 should return "true"', () => {
        expect(checkLeapYear(2000)).toBe(true);
    });
    test('2020 should return "true"', () => {
        expect(checkLeapYear(2020)).toBe(true);
    });
    test('2019 should return "false"', () => {
        expect(checkLeapYear(2019)).toBe(false);
    });
    test('2006 should return "false"', () => {
        expect(checkLeapYear(2006)).toBe(false);
    });
    test('2004 should return "true"', () => {
        expect(checkLeapYear(2004)).toBe(true);
    });
});

describe('finding if a year is leap or not using arrow function', () => {
    test('2000 should return "true"', () => {
        expect(checkLeapYearUsingArrowFunction(2000)).toBe(true);
    });
    test('2020 should return "true"', () => {
        expect(checkLeapYearUsingArrowFunction(2020)).toBe(true);
    });
    test('2019 should return "false"', () => {
        expect(checkLeapYearUsingArrowFunction(2019)).toBe(false);
    });
    test('2006 should return "false"', () => {
        expect(checkLeapYearUsingArrowFunction(2006)).toBe(false);
    });
    test('2004 should return "true"', () => {
        expect(checkLeapYearUsingArrowFunction(2004)).toBe(true);
    });
});