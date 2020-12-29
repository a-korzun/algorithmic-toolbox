// @ts-check

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
  const W = parseInt(line.toString().split(' ')[0], 10);
  const n = parseInt(line.toString().split(' ')[1], 10);

  rl.once('line', line => {
    const weights = line.toString().split(' ').map(Number);

    process.stdout.write(String(optimal_weight(W, n, weights)));
    process.stdout.write('\n');
  });

});

function optimal_weight(W, n, weights) {
  const values = new Map();

  values.set(`0,0`, 0);

  for (let w = 0; w <= W; w++) {
    values.set(`${w},0`, 0);
  }

  for (let i = 0; i <= n; i++) {
    values.set(`0,${i}`, 0);
  }

  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= W; w++) {
      values.set(`${w},${i}`, values.get(`${w},${i - 1}`));

      if (weights[i - 1] <= w) {
        let val = values.get(`${w - weights[i - 1]},${i - 1}`) + weights[i - 1];

        if (values.get(`${w},${i}`) < val) {
          values.set(`${w},${i}`, val);
        }
      }
    }
  }

  return values.get(`${W},${n}`);
}

module.exports = optimal_weight;