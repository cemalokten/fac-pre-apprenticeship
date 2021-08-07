## 📌 EXECTUTE PROGRAM LEARNINGS

**Function to return everything except the first item of an array**
```js
function everythingButLast([,...rest]) {
return rest;
}

everythingButLast([1000,2000,3000])
```

**Loop through object and push values to array**
```js
const users = [{name: 'Amir'}, {name: 'Betty'}];
const names = [];
for (const {name} of users) {
  names.push(name);
}
names;
```

**Computed Object Propertys**

```js
const users = [
  {name: 'Amir', loginCount: 5},
  {name: 'Betty', loginCount: 16},
];

function loginCount(user) {
  return {[user.name]: user.loginCount}
}

/* The reason why that works is because your returning 
object, with a [key] AND then its value.....
So {[user.name]: user.loginCount} = {[key]: value} = {Amir: 5}
*/

[
  loginCount(users[0]),
  loginCount(users[1]),
];

// Returns [{Amir: 5}, {Betty: 16}]

```

**Combine two sets of data using spread operator**
```js
// Compares two sets, all values are unique, so removes duplicates
const set1 = new Set([1, 2, 3]);
const set2 = new Set([2, 3, 4]);
const unionSet = new Set([...set1, ...set2]);
[unionSet.has(1), unionSet.has(4)];
```

**Check intersection of array**
```js
/* This takes two arrays, and then filters the first array
It then cjecks if the element (n) is included in array 2, 
if it is, then it outputs it
This array will return [2,3]
*/
const array1 = [1, 2, 3];
const array2 = [2, 3, 4];
array1.filter(n => array2.includes(n));
```

**Check intersection of sets**
```js
const set1 = new Set([1, 2, 3]);
const set2 = new Set([2, 3, 4]);
const intersectionSet = new Set(
  Array.from(set1).filter(n => set2.has(n))
);
[intersectionSet.has(2), intersectionSet.has(3)];
```

**LODASH Pick Function**
```
/* 
1 - Loops through keys
2 - Creates new Key value on Result (result[key])
3 - Assigns the Value of obj[key] to it.
eg. result[a] = 1; {a: 1}
*/
function pick(obj, keys) {
  const result = {};
  for (const key of keys) {
    result[key] = obj[key]
  }
  return result;
}
```
**GETTERS AND SETTERS**