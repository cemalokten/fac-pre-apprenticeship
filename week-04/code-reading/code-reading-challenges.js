//---------------------------------------------------
// # Challenge 1 - What does this function return?

function a() {
	let b = 1;
	if (true) {
		let b = 2;
	}
	return b;
}

a();
//---------------------------------------------------

const n = function(a) {
	return Object.keys(a);
};

n([ 1, 2, '%', '!' ]);

//----------------------------------------

const array = [];

function r(l) {
	l[3] = 'a';
	const n = [];
	for (const k in l) {
		n.push(k);
	}
	n;
}

r(array);

//----------------------------------------

function pick(obj, keys) {
	const resultObject = {};
	for (const el of keys) {
		resultObject[el] = obj[el];
	}
	return resultObject;
}

console.log(pick({ a: 1, b: 2, c: 3, d: 4 }, [ 'c', 'b', 'c' ]));

// const s = 'loop';
// const chars = [];
// for (const char of s) {
//   chars.push(char);
// }
// chars;
