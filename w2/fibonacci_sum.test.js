const { assert } = require('console');
const fib = require('./fibonacci_sum');

assert(fib(3) === 4, fib(3));
assert(fib(100) === 5, fib(100));

process.exit();
