# 🐞 Debugging JavaScript

How would you effectively find out where (and why) an error is occurring in your JavaScript code?

Further reading -
- [x] [FCC Console Article](https://www.freecodecamp.org/news/how-to-get-the-most-out-of-the-javascript-console-b57ca9db3e6d/)
- [x] [Dev Tools Debugging](https://developer.chrome.com/docs/devtools/javascript/)

### Questions to consider

- [x] What console methods are there other than console.log? Can these help us debug?
- [ ] What does the `debugger`; statement do?
- [ ] How do we use the debugger in our browser?

### `console`

- The `console` object gives you access to the browser’s console.
- Other `console` elements: `console.log`, `console.info`, `console.warn`, `console.error`
- They have visual differences which help identify them
- Placeholders can be used to insert variables `console.log('INFO: %s', 'string goes here')` outputs `INFO: string goes here`
- `%s` for strings, `%o` for objects, `%i` for integers, `%f` for floating points, `%c` for css.

### `Assert()`
- `console.assert(arg1, arg2)` takes two arguements - if the first one is false it displays the second, like `OR`

### `Dir()`
- The `dir` method displays an interactive list of the object passed to it. e.g `console.dir(document.body)`


### `Table()`
- The `table` method displays an array or object as a table. e.g `console.table(['Javascript', 'PHP', 'Perl', 'C++'])`

### `Group()`
- `console.group()` is made up of at least a minimum of three `console` calls
```js
console.group();console.log('I will output');
console.group();console.log('more indents')
console.groupEnd();
console.log('ohh look a bear');
console.groupEnd();
```


### `Time()`
- The `time` method, like the group method above, comes in two parts.
- A method to start the timer and a method to end it.
- To start the timer, you use `console.time('id for timer')` and to end the timer you use `console.timeEnd('id for timer')` 
- The output will look a bit like this `timer: 0.57ms`
- It is very useful when you need to do a quick bit of benchmarking.

