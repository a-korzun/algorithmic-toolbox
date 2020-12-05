// @ts-check

const max = require('./fractional_knapsack');

console.log(
  'expected:',
  e = '180.0000',
  'got:',
  g = max(3, 50, [60, 100, 120], [20, 50, 30]),
  'correct:',
  e === g
);

console.log(
  'expected:',
  e = '166.6667',
  'got:',
  g = max(1, 10, [500], [30]),
  'correct:',
  e === g
);

// 10 / 30 * 500

console.log(
  'expected:',
  e = '500.0000',
  'got:',
  g = max(1, 1000, [500], [30]),
  'correct:',
  e === g
);

console.log(
  'expected:',
  e = '233.3333',
  'got:',
  g = max(1, 14, [500], [30]),
  'correct:',
  e === g
);


process.exit();
