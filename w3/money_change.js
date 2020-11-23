// @ts-check

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
  console.log(getChange(parseInt(line, 10)));
  process.exit();
}

function getChange(m) {
  const coins = [];

  while (m) {
    if (m >= 10) {
      coins.push(10);
      m -= 10;

      continue;
    }

    if (m >= 5) {
      coins.push(5);
      m -= 5;

      continue;
    }

    if (m >= 1) {
      coins.push(1);
      m -= 1;

      continue;
    }
  }

  return coins.length;
}

module.exports = getChange;
