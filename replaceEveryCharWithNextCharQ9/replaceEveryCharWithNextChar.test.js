const { replaceEveryCharacterWithSuccessor } = require('./replaceEveryCharWithNextChar');
const { replaceEveryCharacterWithSuccessorUsingArrowFunction } = require('./replaceEveryCharWithNextChar');

describe('replace every char with the next alphabet', () => {
  test('"codeacademy" should result in ""dpefbdbefnz""', () => {
    expect(replaceEveryCharacterWithSuccessor('codeacademy')).toBe('dpefbdbefnz');
  });
  test('"lazyinterns" should result in "mbazjoufsot"', () => {
    expect(replaceEveryCharacterWithSuccessor('lazyinterns')).toBe('mbazjoufsot');
  });
  test('"mckinsey" should result in "ndljoqfz"', () => {
    expect(replaceEveryCharacterWithSuccessor('mckinsey')).toBe('ndljotfz');
  });
  test('"sdfghjk" should result in "teghikl"', () => {
    expect(replaceEveryCharacterWithSuccessor('sdfghjk')).toBe('teghikl');
  });
});

describe('replace every char with the next alphabet', () => {
  test('"codeacademy" should result in ""dpefbdbefnz""', () => {
    expect(replaceEveryCharacterWithSuccessorUsingArrowFunction('codeacademy')).toBe('dpefbdbefnz');
  });
  test('"lazyinterns" should result in "mbazjoufsot"', () => {
    expect(replaceEveryCharacterWithSuccessorUsingArrowFunction('lazyinterns')).toBe('mbazjoufsot');
  });
  test('"mckinsey" should result in "ndljotfz"', () => {
    expect(replaceEveryCharacterWithSuccessorUsingArrowFunction('mckinsey')).toBe('ndljotfz');
  });
  test('"sdfghjk" should result in "teghikl"', () => {
    expect(replaceEveryCharacterWithSuccessorUsingArrowFunction('sdfghjk')).toBe('teghikl');
  });
});