const getChange = require('./money_change');

console.log('expected:', e = 5, 'got:', g = getChange(23), 'correct:', e === g);
console.log('expected:', e = 5, 'got:', g = getChange(18), 'correct:', e === g);
console.log('expected:', e = 6, 'got:', g = getChange(28), 'correct:', e === g);
console.log('expected:', e = 2, 'got:', g = getChange(2), 'correct:', e === g);

process.exit();
