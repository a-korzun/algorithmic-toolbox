// @ts-check

const min = require('./car_fueling');

console.log(
  'expected:',
  e = 2,
  'got:',
  g = min(950, 400, 4, [200, 375, 550, 750]),
  'correct:',
  e === g
);

console.log(
  'expected:',
  e = -1,
  'got:',
  g = min(10, 3, 4, [1, 2, 5, 9]),
  'correct:',
  e === g
);

process.exit();
