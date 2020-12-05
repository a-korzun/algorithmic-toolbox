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
    if (line.trim() === '' || length === 0) {

      process.stdout.write((''));

      process.stdout.write('\n');
      return process.exit();
    }

    const numbers = line.toString().split(' ').map(Number);

    process.stdout.write(quickSort3(numbers, 0, length).join(' '));

    process.stdout.write('\n');
  })
});

function quickSort2(array, l, r) {
  if (r === array.length) {
    r = r - 1;
  }

  if (l > r) {
    return array;
  }

  let k = l + Math.floor(Math.random() * (r - l + 1));

  swap(array, l, k);

  let m = partition2(array, l, r);

  quickSort2(array, l, m - 1);
  quickSort2(array, m + 1, r);

  return array;
}

function partition2(array, l, r) {
  let x = array[l];
  let j = l;
  for (let i = l + 1; i <= r; i++) {
    if (array[i] <= x) {
      j++;
      swap(array, i, j);
    }
  }

  swap(array, l, j);

  return j;
}

function quickSort3(array, l, r) {
  if (r === array.length) {
    r = r - 1;
  }

  if (l > r) {
    return array;
  }

  let k = l + Math.floor(Math.random() * (r - l + 1));

  swap(array, l, k);

  let [m1, m2] = partition3(array, l, r);

  quickSort3(array, l, m1 - 1);
  quickSort3(array, m2 + 1, r);

  return array;
}

function partition3(array, l, r) {
  let pivot = array[l];
  let m1 = 0;
  let m2 = 0;
  let k = r;

  while (m2 <= k) {
    if (array[m2] < pivot) {
      swap(array, m1, m2);
      m1++;
      m2++;
    } else if (array[m2] === pivot) {
      m2++
    } else {
      swap(array, m2, k);
      k--;
    }
  }

  return [m1, m2];
}

function swap(array, from, to) {
  const fel = array[from];
  const tel = array[to];

  array[from] = tel;
  array[to] = fel;
}

module.exports = quickSort3;
