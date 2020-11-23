const { assert } = require('console');
const fib = require('./fibonacci_partial_sum');

assert(fib(3, 7) === 1);
assert(fib(10, 10) === 5);
assert(fib(10, 200) === 2);

process.exit();
