const { checkAllDigitsSame } = require('./checkAllDigitsSame');
const { checkAllDigitsSameArrowFunction } = require('./checkAllDigitsSame');

describe('finding if all the digits are same or not', () => {
    test('22 should return "true"', () => {
        expect(checkAllDigitsSame(22)).toBe(true);
    });
    test('23 should return "false"', () => {
        expect(checkAllDigitsSame(23)).toBe(false);
    });
    test('1 should return "true"', () => {
        expect(checkAllDigitsSame(1)).toBe(true);
    });
});

describe('finding if all the digits are same or not using arrow function', () => {
    test('22 should return "true"', () => {
        expect(checkAllDigitsSameArrowFunction(22)).toBe(true);
    });
    test('23 should return "false"', () => {
        expect(checkAllDigitsSameArrowFunction(23)).toBe(false);
    });
    test('1 should return "true"', () => {
        expect(checkAllDigitsSameArrowFunction(1)).toBe(true);
    });
});