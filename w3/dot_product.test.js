// @ts-check

const max_dot_product = require('./dot_product');

console.log(
  'expected:',
  e = 897,
  'got:',
  g = max_dot_product(1, [23], [39]),
  'correct:',
  e === g
);

console.log(
  'expected:',
  e = 23,
  'got:',
  g = max_dot_product(3, [1, 3, -5], [-2, 4, 1]),
  'correct:',
  e === g
);


console.log(
  'expected:',
  e = 27,
  'got:',
  g = max_dot_product(3, [1, 3, 5], [2, 4, 1]),
  'correct:',
  e === g
);

process.exit();
