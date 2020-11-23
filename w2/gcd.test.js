const { assert } = require('console');
const gcd = require('./gcd');

assert(gcd(3918848, 1653264) === 61232);
assert(gcd(357, 234) === 3);

process.exit();
