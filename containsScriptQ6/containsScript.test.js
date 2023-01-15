const { checkEndsWithScript } = require('./containsScript')
const { checkEndsWithScriptUsingArrowFunction } = require('./containsScript');

describe('checking if the given input ends with Script ', () => {
    test('"javaScript" should result in "true"', () => {
        expect(checkEndsWithScript("javaScript")).toBe(true);
    });
    test('"typeScript" should result in "true"', () => {
        expect(checkEndsWithScript("typeScript")).toBe(true);
    });
    test('"javascript" should result in "false"', () => {
        expect(checkEndsWithScript("javascript")).toBe(false);
    });
    test('"IWorkAtMcKinsey" should result in "false"', () => {
        expect(checkEndsWithScript("IWorkAtMcKinsey")).toBe(false);
    });
    test('"javascriptis" should result in "false"', () => {
        expect(checkEndsWithScript("javascriptis")).toBe(false);
    });
});

describe('checking if the given input ends with Script ', () => {
    test('"javaScript" should result in "true"', () => {
        expect(checkEndsWithScriptUsingArrowFunction("javaScript")).toBe(true);
    });
    test('"typeScript" should result in "true"', () => {
        expect(checkEndsWithScriptUsingArrowFunction("typeScript")).toBe(true);
    });
    test('"javascript" should result in "false"', () => {
        expect(checkEndsWithScriptUsingArrowFunction("javascript")).toBe(false);
    });
    test('"IWorkAtMcKinsey" should result in "false"', () => {
        expect(checkEndsWithScriptUsingArrowFunction("IWorkAtMcKinsey")).toBe(false);
    });
    test('"javascriptis" should result in "false"', () => {
        expect(checkEndsWithScriptUsingArrowFunction("javascriptis")).toBe(false);
    });
});