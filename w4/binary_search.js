// @ts-check

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

process.stdin.setEncoding('utf8');
rl.once('line', line => {
  const arr = line.toString().split(' ').slice(1).map(Number);

  rl.once('line', line => {
    const keys = line.toString().split(' ').slice(1).map(Number);
    const result = [];

    for (let key of keys) {
      result.push(binarySearch(arr, 0, arr.length-1, key));
    }

    const res = result.join(' ');
    const maxLength = 50000;

    for (let i = 0; i < res.length; i += maxLength) {
      process.stdout.write(res.slice(i, i + maxLength));
    }

    process.stdout.write('\n');
  })
});

function binarySearch(arr = [], left, right, key) {
  if (right < left) {
    return -1;
  }

  const mid = left + Math.round((right - left) / 2);

  if (key === arr[mid]) {
    return mid;
  }

  if (key < arr[mid]) {
    return binarySearch(arr, left, mid - 1, key);
  } else {
    return binarySearch(arr, mid + 1, right, key);
  }
}

module.exports = binarySearch;
