// @ts-check

const equal = require('../equal');
const binarySearch = require('./binary_search');

equal(2, binarySearch([1, 5, 8, 12, 13], 0, 5-1, 8));
equal(0, binarySearch([1, 5, 8, 12, 13], 0, 5-1, 1));
equal(-1, binarySearch([1, 5, 8, 12, 13], 0, 5-1, 23));
equal(0, binarySearch([1, 5, 8, 12, 13], 0, 5-1, 1));
equal(-1, binarySearch([1, 5, 8, 12, 13], 0, 5-1, 11));

equal(0, binarySearch([1, 2, 3, 4, 5], 0, 5-1, 1));
equal(1, binarySearch([1, 2, 3, 4, 5], 0, 5-1, 2));
equal(2, binarySearch([1, 2, 3, 4, 5], 0, 5-1, 3));
equal(3, binarySearch([1, 2, 3, 4, 5], 0, 5-1, 4));
equal(4, binarySearch([1, 2, 3, 4, 5], 0, 5-1, 5));
equal(0, binarySearch([0], 0, 1-1, 0));

equal(9998,binarySearch(Array.from({ length: 9999 }, (_, i) => i + 1), 0, 9999-1, 9999));
equal(9998,binarySearch(Array.from({ length: 9999 }, (_, i) => i + 1), 0, 9999-1, 9999));
equal(99998, binarySearch(Array.from({ length: 99999 }, (_, i) => i + 1), 0, 99999-1, 99999));
equal(1000000, binarySearch(Array.from({ length: 1000001 }, (_, i) => i + 1), 0, 1000001-1, 1000001));
equal(499, binarySearch(Array.from({ length: 1000001 }, (_, i) => i + 1), 0, 1000001-1, 500));
equal(-1, binarySearch(Array.from({ length: 999999 }, (_, i) => i + 1), 0, 1000001-1, 2000001));
equal(0, binarySearch(Array.from({ length: 1000000 }, (_, i) => i), 0, 1000000-1, 0));
{
  let arr = Array.from({ length: 100000 }, () => (Math.random() * 10) ** 9);
  arr.sort((a, b) => a - b);
  arr[4444] = 44444444;
  equal(4444, binarySearch(arr, 0, 100000-1, 44444444));
}
{
  let arr = Array.from({ length: 3 * (10 ** 6) }, () => (Math.random() * 10) ** 10);
  arr[44] = 44444444.444444;
  arr.sort((a, b) => a - b);
  let index = arr.indexOf(44444444.444444);
  equal(index, binarySearch(arr, 0, (3 * (10 ** 6))-1, 44444444.444444));
}
{
  let arr = Array.from({ length: 1000000 }, () => Math.random() * 10 ** 9);
  arr[44] = 44444444;
  arr.sort((a, b) => a - b);
  let index = arr.indexOf(44444444);
  equal(index, binarySearch(arr, 0, 1000000-1, 44444444));
}
{
  let arr = Array.from({ length: 1000000 }, () => Math.floor(Math.random() * 10) ** 9);
  arr[44] = 44444444;
  arr.sort((a, b) => a - b);
  let index = arr.indexOf(44444444);
  equal(index, binarySearch(arr, 0, 1000000-1, 44444444));
}
equal(0, binarySearch(Array.from({ length: 3 * (10 ** 4) }, (_, i) => 10 ** 8 + i), 0, 3 * (10 ** 4) - 1, 10 ** 8));
equal(3, binarySearch(Array.from({ length: 3 * (10 ** 4) }, (_, i) => 10 ** 8 + i), 0, 3 * (10 ** 4) - 1, 10 ** 8 + 3 ));

equal(2, binarySearch([-5, -4, -3, -2, -1], 0, 5-1, -3));
equal(2, binarySearch([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5], 0, 5-1, -3));

equal(5, binarySearch([1, 5, 8, 12, 13, 77], 0, 6-1, 77));
equal(-1, binarySearch([], 0, 0, 77));
equal(0, binarySearch([77], 0, 0, 77));
equal(-1, binarySearch([77], 0, 0, 22));
equal(0, binarySearch([1, 2, 2, 2, 2], 0, 5-1, 1));
equal(0, binarySearch([1, 2, 3, 4, 5], 0, 5-1, 1));
equal(1, binarySearch([1, 2, 3, 3, 3], 0, 5-1, 2));
equal(1, binarySearch([1, 2, 3, 3, 3], 0, 5-1, 2));
equal(1, binarySearch([0.1, 0.2, 0.3, 0.4, 0.5], 0, 5-1, 0.2));
equal(3, binarySearch([-0.5, -0.4, -0.3, -0.2, -0.1 ], 0, 4, -0.2));
equal(3, binarySearch([1000000, 2000000, 3000000, 4000000, 5000000], 0, 5-1, 4000000));
equal(3, binarySearch([10000000, 20000000, 30000000, 40000000, 50000000], 0, 5-1, 40000000));
equal(3, binarySearch([100000000, 200000000, 300000000, 400000000, 500000000], 0, 5-1, 400000000));
equal(3, binarySearch([1000000000, 2000000000, 3000000000, 4000000000, 5000000000], 0, 5-1, 4000000000));
equal(3, binarySearch([10000000000, 20000000000, 30000000000, 40000000000, 50000000000], 0, 5-1, 40000000000));
equal(3, binarySearch([100000000000, 200000000000, 300000000000, 400000000000, 500000000000], 0, 5-1, 400000000000));

equal(3, binarySearch([0.1, 0.2, 0.3, 0.4, 0.5], 0, 5-1, 0.4));

equal(-1, binarySearch([], 0, 0, 0));
equal(-1, binarySearch([0, 2], 0, 1, 1));
equal(1, binarySearch([0, 2], 0, 1, 2));
equal(-1, binarySearch([0, 2, 4, 6, 8, 10], 0, 6-1, 1));
equal(-1, binarySearch([1, 3, 5, 7, 9, 11], 0, 6-1, 22));
equal(0, binarySearch([1, 3, 5, 7, 9, 11], 0, 6-1, 1));
equal(6, binarySearch([1, 3, 5, 7, 9, 11, 13], 0, 6, 13));
equal(3, binarySearch([1, 3, 5, 7, 9, 11, 13], 0, 6, 7));
equal(5, binarySearch([1, 3, 5, 7, 9, 11, 13], 0, 6, 11));
equal(-1, binarySearch([1, 3, 5, 7, 9, 11, 13], 0, 6, 21));

process.exit();
