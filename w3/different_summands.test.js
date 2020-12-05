// @ts-check
const optimal_summands = require('./different_summands');

console.log(
  'expected:',
  e = [1, 2, 3],
  'got:',
  g = optimal_summands(6),
  'correct:',
  JSON.stringify(e) === JSON.stringify(g)
);

console.log(
  'expected:',
  e = [1, 2, 5],
  'got:',
  g = optimal_summands(8),
  'correct:',
  JSON.stringify(e) === JSON.stringify(g)
);

console.log(
  'expected:',
  e = [2],
  'got:',
  g = optimal_summands(2),
  'correct:',
  JSON.stringify(e) === JSON.stringify(g)
);

console.log(
  'expected:',
  e = [0],
  'got:',
  g = optimal_summands(0),
  'correct:',
  JSON.stringify(e) === JSON.stringify(g)
);

console.log(
  'expected:',
  e = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  'got:',
  g = optimal_summands(55),
  'correct:',
  JSON.stringify(e) === JSON.stringify(g)
);

console.log(
  'expected:',
  e = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  'got:',
  g = optimal_summands(120),
  'correct:',
  JSON.stringify(e) === JSON.stringify(g)
);


process.exit();
