const getChange = require('./money_change');

console.log('expected:', e = 5, 'got:', g = getChange(23), 'corect:', e === g);
console.log('expected:', e = 5, 'got:', g = getChange(18), 'corect:', e === g);
console.log('expected:', e = 6, 'got:', g = getChange(28), 'corect:', e === g);
console.log('expected:', e = 2, 'got:', g = getChange(2), 'corect:', e === g);

process.exit();
