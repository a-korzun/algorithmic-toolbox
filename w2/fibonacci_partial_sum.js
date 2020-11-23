// @ts-check

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    if (line !== "\n") {
        const n = parseInt(line.toString().split(' ')[0], 10);
        const m = parseInt(line.toString().split(' ')[1], 10);

        console.log(getFibSum(n, m));
        process.exit();
    }
}

function getFibSum(m, n) {
  let from = m;
  let to = n;
  let result = 0;

  let prev = 0;
  let curr = 1;

  for (let i = 0; i < to + 1; i++) {
      if (i >= from) {
          result += prev;
      }

      const c = prev + curr;
      prev = curr;
      curr = c;
  }

  return result % 10
}

module.exports = getFibSum;
