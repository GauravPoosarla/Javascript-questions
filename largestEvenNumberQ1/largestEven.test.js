const { largestEven } = require('./largestEven');
const { largestEvenUsingArrowFunction} = require('./largestEven');

describe('finding the largest even number', () => {
    test('[1, 2, 3, 4, 5] should give "4" ', () => {
        expect(largestEven([1, 2, 3, 4, 5])).toBe(4);
    });
    test('[1, 3, 5, 7] should give "-1" ', () => {
        expect(largestEven([1, 3, 5, 7])).toBe(-1);
    })
});

describe('finding the largest even number using arrow function', () => {
    test('[1, 2, 3, 4, 5] should give "4" ', () => {
        expect(largestEvenUsingArrowFunction([1, 2, 3, 4, 5])).toBe(4);
    });
    test('[1, 3, 5, 7] should give "-1" ', () => {
        expect(largestEvenUsingArrowFunction([1, 3, 5, 7])).toBe(-1);
    })
});