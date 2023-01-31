const reverseStr = require('./test2');

test("reverse 'caren' to 'nerac'", () => {
    const str = "caren";
    expect(reverseStr(str)).toEqual("nerac");
})