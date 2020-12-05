// @ts-check

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

process.stdin.setEncoding('utf8');
rl.once('line', line => {
  const length = Number(line.toString());

  rl.once('line', line => {
    const numbers = line.toString().split(' ').map(Number);

    const element = majorityElement(numbers);

    process.stdout.write(Number.isFinite(element) ? '1' : '0');

    process.stdout.write('\n');
    process.exit();
  })
});

function majorityElement(numbers = []) {
  const occurrences = new Map();

  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    occurrences.set(number, (occurrences.get(number) || 0) + 1);
  }

  let majority;

  occurrences.forEach((count, number) => {
    if (count > numbers.length / 2) {
      majority = number;
    }
  });

  return majority;
}

module.exports = majorityElement;
