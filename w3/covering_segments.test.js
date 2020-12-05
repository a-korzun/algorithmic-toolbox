// @ts-check

const optimal_points = require('./covering_segments');

console.log(
  'expected:',
  e = [3],
  'got:',
  g = optimal_points([[1, 3], [2, 5], [3, 6]]),
  'correct:',
  JSON.stringify(e) === JSON.stringify(g)
);

console.log(
  'expected:',
  e = [3, 6],
  'got:',
  g = optimal_points([[4, 7], [1, 3], [2, 5], [5, 6]]),
  'correct:',
  JSON.stringify(e) === JSON.stringify(g)
);

process.exit();
