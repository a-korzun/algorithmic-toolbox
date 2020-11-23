// @ts-check

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
  const number = parseInt(line.toString(), 10);

  const variants = optimal_summands(number);
  console.log(variants.length);

  for (let i = 0; i <= variants.length; i++) {
    if (i === variants.length) {
      process.stdout.write('\n');
      break;
    }

    process.stdout.write(`${variants[i]} `);
  }
  process.exit();
});

/**
 * @param {number} amount
 */
function optimal_summands(amount) {
  const summands = [];

  let d = amount;
  let num = 0;

  while (++num <= d) {
    d -= num;

    if (d <= num) {
      num += d;
    }

    summands.push(num);
  }

  if (summands.length === 0) {
    return [0];
  }

  return summands;
}

module.exports = optimal_summands;