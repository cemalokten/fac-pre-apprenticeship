test('ADD', () => {
    const expected = 20;
    const result = calculate(10, '+', 10);
    equal(result, expected);
})

test('SUBTRACT', () => {
    const expected = 20;
    const result = calculate(30, '-', 10);
    equal(result, expected);
})

test('DIVIDE', () => {
    const expected = 20;
    const result = calculate(40, '/', 2);
    equal(result, expected);
})

test('MULTIPLY', () => {
    const expected = 20;
    const result = calculate(2, '*', 10);
    equal(result, expected);
})

test('NON-NUMERICAL', () => {
    const expected = 20;
    const result = calculate('10', '+', '10')
   equal(result, expected);
})

