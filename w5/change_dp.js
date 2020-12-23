// @ts-check

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

process.stdin.setEncoding('utf8');
rl.once('line', line => {
  const m = parseInt(line, 10);

  process.stdout.write(String(get_change(m)));

  process.stdout.write('\n');
});

function get_change(m) {
  const denominators = [1, 3, 4];

  const minNumOfCoins = [0];

  for (let i = 1; i <= m; i++) {
    minNumOfCoins[i] = Infinity;

    for (let j = 0; j < denominators.length; j++) {
      const coin = denominators[j];
      if (i - coin >= 0) {
        minNumOfCoins[i] = Math.min(minNumOfCoins[i], minNumOfCoins[i - coin] + 1);
      }
    }
  }

  return minNumOfCoins[m];
}

module.exports = get_change;
