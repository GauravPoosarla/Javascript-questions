const { changeCapitalisation } = require('./changeCapitalisationOfAllLetters');
const { changeCapitalisationUsingArrowFunction } = require('./changeCapitalisationOfAllLetters');

describe('changing the capitalisation of every letter', () => {
    test('"MeRRy hAD a LITTle lAMp" should result in "mErrY Had A littLE LamP"', () => {
        expect(changeCapitalisation("MeRRy hAD a LITTle lAMp")).toBe("mErrY Had A littLE LamP");
    });
    test('"I am Gaurav Poosarla" should result in "i AM gAURAV pOOSARLA"', () => {
        expect(changeCapitalisation("I am Gaurav Poosarla")).toBe("i AM gAURAV pOOSARLA");
    });
    test('"IWorkAtMcKinsey" should result in "iwORKaTmCkINSEY"', () => {
        expect(changeCapitalisation("IWorkAtMcKinsey")).toBe("iwORKaTmCkINSEY");
    });
});

describe('changing the capitalisation of every letter using arrow function', () => {
    test('"MeRRy hAD a LITTle lAMp" should result in "mErrY Had A littLE LamP"', () => {
        expect(changeCapitalisationUsingArrowFunction("MeRRy hAD a LITTle lAMp")).toBe("mErrY Had A littLE LamP");
    });
    test('"I am Gaurav Poosarla" should result in "i AM gAURAV pOOSARLA"', () => {
        expect(changeCapitalisationUsingArrowFunction("I am Gaurav Poosarla")).toBe("i AM gAURAV pOOSARLA");
    });
    test('"IWorkAtMcKinsey" should result in "iwORKaTmCkINSEY"', () => {
        expect(changeCapitalisationUsingArrowFunction("IWorkAtMcKinsey")).toBe("iwORKaTmCkINSEY");
    });
});