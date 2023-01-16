const { findLongestString } = require('./findLongestString');
const { findLongestStringUsingArrowFunction } = require('./findLongestString');

describe('finding the longest string of the given strings', () => {
  test('"["we", "love", "code", "academy"]" should result in "academy"', () => {
    expect(findLongestString(['we', 'love', 'code', 'academy'])).toBe('academy');
  });
  test('"["I", "am", "Gaurav"]" should result in "Gaurav"', () => {
    expect(findLongestString(['I', 'am', 'Gaurav'])).toBe('Gaurav');
  });
  test('"["McKinsey"]" should result in "McKinsey"', () => {
    expect(findLongestString(['McKinsey'])).toBe('McKinsey');
  });
});

describe('finding the longest string of the given strings using arrow function', () => {
  test('"["we", "love", "code", "academy"]" should result in "academy"', () => {
    expect(findLongestStringUsingArrowFunction(['we', 'love', 'code', 'academy'])).toBe('academy');
  });
  test('"["I", "am", "Gaurav"]" should result in "Gaurav"', () => {
    expect(findLongestStringUsingArrowFunction(['I', 'am', 'Gaurav'])).toBe('Gaurav');
  });
  test('"["McKinsey"]" should result in "McKinsey"', () => {
    expect(findLongestStringUsingArrowFunction(['McKinsey'])).toBe('McKinsey');
  });
});