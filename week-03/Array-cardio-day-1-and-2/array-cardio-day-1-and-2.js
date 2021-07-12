// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
	{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
	{ first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
	{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
	{ first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
	{ first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
	{ first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
	{ first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
	{ first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
	{ first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
	{ first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
	{ first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
	{ first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

1852 - 1815;
1905 - 1855;

const people = [
	'Bernhard, Sandra',
	'Bethea, Erin',
	'Becker, Carl',
	'Bentsen, Lloyd',
	'Beckett, Samuel',
	'Blake, William',
	'Berger, Ric',
	'Beddoes, Mick',
	'Beethoven, Ludwig',
	'Belloc, Hilaire',
	'Begin, Menachem',
	'Bellow, Saul',
	'Benchley, Robert',
	'Blair, Robert',
	'Benenson, Peter',
	'Benjamin, Walter',
	'Berlin, Irving',
	'Benn, Tony',
	'Benson, Leana',
	'Bent, Silas',
	'Berle, Milton',
	'Berry, Halle',
	'Biko, Steve',
	'Beck, Glenn',
	'Bergman, Ingmar',
	'Black, Elk',
	'Berio, Luciano',
	'Berne, Eric',
	'Berra, Yogi',
	'Berry, Wendell',
	'Bevan, Aneurin',
	'Ben-Gurion, David',
	'Bevel, Ken',
	'Biden, Joseph',
	'Bennington, Chester',
	'Bierce, Ambrose',
	'Billings, Josh',
	'Birrell, Augustine',
	'Blair, Tony',
	'Beecher, Henry',
	'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const inventors1500 = inventors.filter((c) => c.year < 1500 && c.year > 1400);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

const inventorsNames = inventors.map((c) => `${c.first} ${c.last}`);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const inventorsByAge = inventors.sort((a, b) => a.year - b.year);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

const totalAge = inventors.reduce((acc, cur) => acc + (cur.passed - cur.year), 0);

console.log(totalAge);

// 5. Sort the inventors by years lived

const inventorsByYearsLived = inventors.sort((a, b) => b.passed - b.year - (a.passed - a.year));

console.log(inventorsByYearsLived);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const boulevards = `
    Boulevards of Paris,
    City walls of Paris,
    Thiers wall,
    Wall of Charles V,
    Wall of Philip II Augustus,
    City gates of Paris,
    Haussmann's renovation of Paris,
    Boulevards of the Marshals,
    Boulevard Auguste-Blanqui,
    Boulevard Barbès,
    Boulevard Beaumarchais,
    Boulevard de l'Amiral-Bruix,
    Boulevard Mortier,
    Boulevard Poniatowski,
    Boulevard Soult,
    Boulevard des Capucines,
    Boulevard de la Chapelle,
    Boulevard de Clichy,
    Boulevard du Crime,
    Boulevard du Général-d'Armée-Jean-Simon,
    Boulevard Haussmann,
    Boulevard de l'Hôpital,
    Boulevard des Italiens,
    Boulevard Lefebvre,
    Boulevard de la Madeleine,
    Boulevard de Magenta,
    Boulevard Malesherbes,
    Boulevard Marguerite-de-Rochechouart,
    Boulevard Montmartre,
    Boulevard du Montparnasse,
    Boulevard Raspail,
    Boulevard Richard-Lenoir,
    Boulevard Saint-Germain,
    Boulevard Saint-Michel,
    Boulevard de Sébastopol,
    Boulevard de Strasbourg,
    Boulevard du Temple,
    Boulevard Voltaire,
    Boulevard de la Zone,
`;

const boulevardsArray = boulevards.split(',').filter((c) => c.includes('de'));

boulevardsArray;

// 7. sort Exercise
// Sort the people alphabetically by last name

const alpha = people.sort((last, first) => {
	const [ aLast, aFirst ] = last.split(', ');
	const [ bLast, bFirst ] = last.split(', ');
	return aLast > bLast ? -1 : 1;
});

console.log(alpha);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [ 'car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const instancesOfVehicle = data.reduce((obj, item) => {
	if (!obj[item]) {
		obj[item] = 0;
	}
	obj[item]++;
	return obj;
}, {});

instancesOfVehicle;

// ## Array Cardio Day 2

const people2 = [ { name: 'Wes', year: 1988 }, { name: 'Kait', year: 1986 }, { name: 'Irv', year: 1970 }, { name: 'Lux', year: 2015 } ];

const comments = [
	{ text: 'Love this!', id: 523423 },
	{ text: 'Super good', id: 823423 },
	{ text: 'You are the best', id: 2039842 },
	{ text: 'Ramen is my fav food ever', id: 123523 },
	{ text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?

const someOlderThan19 = people2.some((c) => 2021 - c.year > 19);

someOlderThan19;

// Array.prototype.every() // is everyone 19 or older?

const everyOlderThan19 = people2.every((c) => 2021 - c.year > 19);

everyOlderThan19;

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const findComment = comments.find((c) => c.id === 823423);

findComment;

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

comments.splice(comments.findIndex((c) => c.id === 823423), 1);

comments;
