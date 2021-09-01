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

test('Check Submit Values', () => {
    const submit =  document.querySelector("button[type='submit']");
    
    const sign = document.getElementById('sign')
    const valueA = document.getElementById('a');
    const valueB = document.getElementById('b');

    sign.value = '/'
    valueA.value = '20';
    valueB.value = '2';
    const expected = '10';

    submit.click();
    const result = document.getElementById('result').value
    equal(result, expected)
})
    