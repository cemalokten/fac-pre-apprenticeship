test('filter() should accept an Array and Function', () => {
  equal(filter(), 'No array provided')
  equal(filter([]), 'No function provided')
})

test('filter() should return an array', () => {
  equal(Array.isArray(filter([], () => {})), true)
}) 

test('filter() should return elements that match the callback', () => {
  const actual = filter([2], x => x)
  equal(actual[0], 2)

})

test('filter() should return elements changed by that match function requirements', () => {
  const actual = filter([1,2,3,4,5,6], x => x % 2 === 0);

  equal(actual[2], 6)
})



