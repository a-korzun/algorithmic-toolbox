const largest_number = require('./largest_number');

console.log('expected:', e = '221', 'got:', g = largest_number([21, 2]), 'corect:', e === g);
console.log('expected:', e = '99641', 'got:', g = largest_number([9, 4, 6, 1, 9]), 'corect:', e === g);
console.log('expected:', e = '923923', 'got:', g = largest_number([23, 39, 92]), 'corect:', e === g);

process.exit();
