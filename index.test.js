const reverseStr = require('./test2');
const calc = require('./test3');
const strCaps = require('./test4');

test("reverse 'caren' to 'nerac'", () => {
    const str = "caren";
    expect(reverseStr(str)).toEqual("nerac");
});


// Calculator unit tests 
describe('Addition', () => {
    test('add 2 + 2 + 2', () => {
        expect(calc.add(2, 2, 2)).toEqual(6);
    });

    test('subtract 3 from 5', () => {
        expect(calc.subtract(5, 3)).toEqual(2);
    });

    test('subtract 3 from 5', () => {
        expect(calc.subtract(3, 5)).toEqual(2);
    });

    test('multiply 4 and 5', () => {
        expect(calc.multiply(4, 5)).toEqual(20);
    });

    test('multiply 4 and 0', () => {
        expect(calc.multiply(4, 0)).toEqual(0);
    });

    test('divide 20 by 4', () => {
        expect(calc.divide(20, 4)).toEqual(5);
    });

    test('divide 20 by 0', () => {
        expect(calc.divide(20, 0)).toBeUndefined;
    });
})


// Capitalize string 
test(`Capitalize "kenn" to "Kenn"`, () => {
    const newStr = "kenn";
    expect(strCaps(newStr)).toEqual("Kenn");
})