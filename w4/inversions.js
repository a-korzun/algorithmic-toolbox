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

    process.stdout.write(String(getNumberOfInversions(numbers, length)[1]));

    process.stdout.write('\n');
    process.exit();
  })
});

function getNumberOfInversions(array, n) {
  if (n === 0) {
    return [[], 0];
  }

  if (n === 1) {
    return [array, 0];
  }

  const mid = Math.floor(n / 2);

  const [leftArr, rightInversions] = getNumberOfInversions(array.slice(0, mid), mid);
  const [rightArr, leftInversions] = getNumberOfInversions(array.slice(mid, n), n - mid);

  let [result, inversions] = modifiedMerge(leftArr, rightArr, rightInversions + leftInversions);

  return [result, inversions];
}

function modifiedMerge(B = [], C = [], inversions = 0) {
  let bLen = B.length;
  const result = [];

  let pairs = inversions;

  let i = 0;
  while (B.length && C.length) {
    let b = B[0];
    let c = C[0];

    if (b <= c) {
      result.push(B.shift());
      i++;
    } else {
      result.push(C.shift());
      pairs += bLen - i;
    }
  }

  return [result.concat(B, C), pairs];
}

function mergeSort(array, n) {
  if (n === 0) {
    return [];
  }

  if (n === 1) {
    return array;
  }

  const mid = Math.floor(n / 2);

  const leftArr = mergeSort(array.slice(0, mid), mid);
  const rightArr = mergeSort(array.slice(mid, n), n - mid);

  let result = merge(leftArr, rightArr);

  return result;
}

function merge(B = [], C = []) {
  const result = [];

  while (B.length && C.length) {
    let b = B[0];
    let c = C[0];

    if (b <= c) {
      result.push(B.shift());
    } else {
      result.push(C.shift());
    }
  }

  return result.concat(B, C);
}

module.exports = { getNumberOfInversions, mergeSort };
