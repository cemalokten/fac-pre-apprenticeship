/* CHALLENGE 1
1. Find the second paragraph on the page
2. Add a class of "highlight", or
3. Remove the class of "highlight" if already present
e.g. "<p class="para">Hello</p>" -> "<p class="para highlight">Hello</p>"
*/
const paragraph = Array.from(document.querySelectorAll('p'))
const highlightButton = document.querySelector('#toggle-highlight');
const arrayOfStrings = Array.from(document.getElementsByTagName('pre'));
const pre = document.getElementsByTagName('pre');

const arr = arrayOfStrings[0].textContent.split(/[^a-z]/);

const generateLiButton = document.querySelector('#generate-list');

const li = document.createElement('li')
const ul = document.createElement('ul')

const sections = document.querySelectorAll('section')

function toggleHighlight(e) {
  e.preventDefault();
  paragraph[1].classList.toggle('highlight')
}

highlightButton.addEventListener('click', toggleHighlight(e));

/* CHALLENGE 2
1. Take an array of strings as a parameter
1. Return a new `ul` containing an `li` containing a string for each element in the array
e.g. generateList(["hello", "world"]) -> <ul>
                                           <li>hello</li>
                                           <li>world</li>
                                          </ul>
*/ 
function generateList(array) {
  const newArr = array.filter((c) => c != "")
  pre[0].innerHTML = `<ul> ${newArr.map((c) => `<li>${c}</li>`)}</ul>`
  return newArr;
}
generateLiButton.addEventListener('click', generateList(arr));


/* CHALLENGE 3a
1. Take a `textarea` element as a parameter
2. Count how many characters have been typed into it
3. If it contains > 140 characters set the `aria-invalid="true"` attribute
*/
function validateTweet(textarea) {
  // your code here
}

/* CHALLENGE 3b
1. Find the textarea with ID "tweet"
2. Whenever a user types into it validate it using the previous function
*/
function validateTweetOnInput() {
  // your code here
}

/* CHALLENGE 4
1. Find all buttons with a classname of "toggle-button"
2. When each button is clicked show/hide the next sibling following the button
e.g. <button class="toggle-button">Toggle</button>
     <p>This should appear/disappear when the button is clicked</p>
*/
function setupToggleButtons() {
  // your code here
}
