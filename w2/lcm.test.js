const lcm = require('./lcm');

console.assert(lcm(761457, 614573) === 467970912861);
console.assert(lcm(6, 8) === 24);
console.assert(lcm(21, 6) === 42);

process.exit();
