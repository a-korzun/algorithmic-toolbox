// @ts-check

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
    const count = parseInt(line.toString(), 10);
    let numbers = [];

    rl.once('line', line => {
      numbers = line.toString().split(' ').map(Number);

      console.log(largest_number(numbers));
      process.exit();
    });
});

function largest_number(digits) {
  let answer = '';

  while (digits.length > 0) {
    let maxDigit = 0;

    for (let digit of digits) {
      if (isGreaterOrEqual(digit, maxDigit)) {
        maxDigit = digit;
      }
    }

    answer += maxDigit;

    digits.splice(digits.indexOf(maxDigit), 1);
  }

  return answer;
}

function isGreaterOrEqual(digit, maxDigit) {
  return `${digit}${maxDigit}` >= `${maxDigit}${digit}`;
}

module.exports = largest_number;