
const stringCount = require('./test1');

test("Count string equal to 5", () => {
    const string = "caren";
    expect(string.length).toBeLessThanOrEqual(10);
    expect(stringCount(string)).toEqual(5);
    expect(stringCount("")).toBeUndefined;
})