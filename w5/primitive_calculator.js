// @ts-check

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

process.stdin.setEncoding('utf8');
rl.once('line', line => {
  const m = parseInt(line, 10)

  const s = optimal_sequence(m);

  process.stdout.write(String(s.length - 1));
  process.stdout.write('\n');
  process.stdout.write(String(s));
  process.stdout.write('\n');
});

function optimal_sequence(n) {
  const sequence = [];
  const map = new Map([[0, 0]]);

  for (let i = 1; i <= n; i++) {
    let valueDivide3 = i % 3 == 0 ? map.get(i / 3) : n;
    let valueDivide2 = i % 2 == 0 ? map.get(i / 2) : n;
    let valueMinusOne = map.get(i - 1);

    let value;

    if (valueDivide3 <= valueDivide2 && valueDivide3 <= valueMinusOne) {
        value = i / 3;
    } else if (valueDivide2 <= valueDivide3 && valueDivide2 <= valueMinusOne) {
        value = i / 2;
    } else {
        value = i - 1;
    }

    let min = map.get(value) + 1;
    map.set(i, min);
  }

  while (n > 1) {
    const valueDivide3 = n % 3 == 0 ? map.get(n / 3) : n;
    const valueDivide2 = n % 2 == 0 ? map.get(n / 2) : n;
    const valueMinusOne = map.get(n - 1);

    let value;
    if (valueDivide3 <= valueDivide2 && valueDivide3 <= valueMinusOne) {
        value = n / 3;

    } else if (valueDivide2 <= valueDivide3 && valueDivide2 <= valueMinusOne) {
        value = n / 2;

    } else {
        value = n - 1;
    }
    sequence.push(n);
    n = value;
  }

  sequence.push(1);

  return sequence.reverse();
}

module.exports = optimal_sequence;
