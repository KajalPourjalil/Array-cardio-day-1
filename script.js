const inventors = [
    {first: 'Hedy', last: 'Lamarr', year: '1914', passed: '2000'},
    {first: 'Grace', last: 'Hopper', year: '1906', passed: '1992'},
    {first: 'Stephanie', last: 'Kwolek', year: '1923', passed: '2014'},
    {first: 'Mary', last: 'Anderson', year: '1866', passed: '1953'},
    {first: 'Thomas', last: 'Edison', year: '1847', passed: '1931'},
    {first: 'Alexander', last: 'Graham Bell', year: '1847', passed: '1922'},
    {first: 'Nikola', last: 'Tesla', year: '1856', passed: '1943'},
    {first: 'Albert', last: 'Einstein', year: '1879', passed: '1955'},
    {first: 'Barbara', last: 'Askins', year: '1939', passed: '2015'},
    {first: 'Marion', last: 'Donovan', year: '1917', passed: '1998'},
    {first: 'Elihu', last: 'Thomson', year: '1853', passed: '1937'},
    {first: 'Benjamin', last: 'Franklin', year: '1706', passed: '1790'},
]


const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// const fifteen = inventors.filter(function(inventor) {
//     if(inventor.year >= 1500 && inventor.year <=1600)
//         return true
// });
const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year <= 1600);
console.table(fifteen);

// const fullNames = inventors.map(inventor => inventor.first + " " + inventor.last);
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames);

const ordered = inventors.sort((a, b) => a.year >= b.year ? 1 : -1);
console.table(ordered)

const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year)
}, 0);
console.log(totalYears)

const oldest = inventors.sort(function(a, b) {
   const lastGuy = a.passed - a.year;
   const nextGuy = b.passed - b.year;
   return lastGuy > nextGuy ? -1 : 1;
   // if(lastGuy > nextGuy){
   //     return -1;
   // } else {
   //     return 1;
   // }
});
console.table(oldest);

//https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links
//     .map(link => link.textContent)
//     .filter(streetName => streetName.includes('de'));

const alpha = people.sort((lastOne, nextOne) => {
    const [aLast, aFirst] = lastOne.split(', ');
    const [bLast, bFirst] = nextOne.split(', ');
    return aLast > bLast ? 1 : -1;
});

console.log(alpha);

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van',
'bike', 'walk', 'car', 'van', 'car', 'truck'];

const transportation = data.reduce(function (obj, item) {
    if(!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    console.log(item);
    return obj;
}, {});

console.log(transportation);








