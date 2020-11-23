const { assert } = require('console');
const fib = require('./fibonacci_huge');

assert(fib(239, 1000) === 161, fib(239, 1000));
assert(fib(2816213588, 239) === 151, fib(2816213588, 239));

process.exit();
