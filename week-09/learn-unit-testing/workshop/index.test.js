test('Make URL Test', () => {
    const result = makeUrl('pikachu');
    const expected = 'https://pokeapi.co/api/v2/pikachu';
    equal(result, expected);
})

test('URL TO OBJECT TEST 🧪', () => {
    const result = searchParamsToObject('name=oliver&email=hello@oliverjam.es');
    const expected = { name: "oliver", email: "hello@oliverjam.es" };
    equal(result.name, expected.name)
})