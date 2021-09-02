
function filter(array, fn) {
  if (!Array.isArray(array)) return 'No array provided';

  if (typeof fn !== 'function') return 'No function provided';
  
  const results = [];


    for (const item of array) {
      if (fn(item)) {
        results.push(item)
      }
    }
  
  return results;
   
}