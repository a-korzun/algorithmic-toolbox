// @ts-check

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

process.stdin.setEncoding('utf8');
rl.once('line', line => {
  const first = line.toString();

  rl.once('line', line => {
    const second = line.toString();

    process.stdout.write(String(edit_distance(first, second)));

    process.stdout.write('\n');
  });
});

function edit_distance(first, second) {
  const D = new Map();

  D.set(`0,0`, 0)

  for (let i = 1; i <= first.length; i++) {
    D.set(`${i},0`, i);
  }

  for (let j = 1; j <= second.length; j++) {
    D.set(`0,${j}`, j);
  }

  for (let j = 1; j <= second.length; j++) {
    for (let i = 1; i <= first.length; i++) {
      const insertion = D.get(`${i},${j-1}`) + 1;
      const deletion  = D.get(`${i-1},${j}`) + 1;
      const match     = D.get(`${i-1},${j-1}`);
      const mismatch  = D.get(`${i-1},${j-1}`) + 1;

      if (first[i-1] === second[j-1]) {
        D.set(`${i},${j}`, Math.min(insertion, deletion, match));
      } else {
        D.set(`${i},${j}`, Math.min(insertion, deletion, mismatch));
      }
    }
  }

  return D.get(`${first.length},${second.length}`);
}

module.exports = edit_distance;
