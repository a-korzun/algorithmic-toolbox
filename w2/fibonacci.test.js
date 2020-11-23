const { assert } = require('console');
const fib = require('./fibonacci');

assert(fib(0) === 0, 'fib(0) === 0', fib(0));
assert(fib(1) === 1, 'fib(1) === 1', fib(1));
assert(fib(2) === 1, 'fib(2) === 1', fib(2));
assert(fib(3) === 2, 'fib(3) === 2', fib(3));
assert(fib(4) === 3, 'fib(4) === 3', fib(4));
assert(fib(5) === 5, 'fib(5) === 5', fib(5));
assert(fib(6) === 8, 'fib(6) === 8', fib(6));
assert(fib(7) === 13, 'fib(7) === 13', fib(7));
assert(fib(8) === 21, 'fib(8) === 21', fib(8));

process.exit();
