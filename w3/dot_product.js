// @ts-check

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
  const amount = parseInt(line.toString(), 10);
  let a = [];
  let b = [];

  rl.once('line', line => {
    a = line.toString().split(' ').map(Number);

    rl.once('line', line => {
      b = line.toString().split(' ').map(Number);

      console.log(max_dot_product(amount, a, b));
      process.exit();
    });
  });
});

/**
 * @param {number} amount
 * @param {any[]} as
 * @param {any[]} bs
 */
function max_dot_product(amount, as, bs) {
  const A = as.sort((a, b) => a - b);
  const B = bs.sort((a, b) => a - b);

  let revenue = 0;

  for (let i = 0; i < A.length; i++) {
    revenue += Math.abs(A[i] * B[i]);
  }

  return revenue;
}

module.exports = max_dot_product;