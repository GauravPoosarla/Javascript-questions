const { doubleNumbers, filterEvenNumbers, tripleNumbersAndFilterEven } = require('./numberUtilities');

describe('doubleNumbers', () => {
  it('should "throw an error" when input is not an array', () => {
    // expect(doubleNumbers('abc')).toThrow(TypeError);
    expect(() => doubleNumbers('abc')).toThrow(TypeError);
  });
  it('should return the new array with double the value when the input is an array', () => {
    expect(doubleNumbers([1, 2, 3])).toEqual([2, 4, 6]);
  });
});

describe('filterEvenNumbers', () => {
  it('should "throw an error" when input is not an array', () => {
    expect(() => filterEvenNumbers('abc')).toThrow(TypeError);
  });
  it('should return the new array with double the value when the input is an array', () => {
    expect(filterEvenNumbers([1, 2, 3])).toEqual([2]);
  });
});

describe('tripleNumbersAndFilterEven', () => {
  it('should "throw an error" when input is not an array', () => {
    expect(() => tripleNumbersAndFilterEven('abc')).toThrow(TypeError);
  });
  it('should return the new array with double the value when the input is an array', () => {
    expect(tripleNumbersAndFilterEven([1, 2, 3])).toEqual([6]);
  });
});