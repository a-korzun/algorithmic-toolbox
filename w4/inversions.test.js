// @ts-check

const equal = require('../equal');
const { getNumberOfInversions, mergeSort }  = require('./inversions');

// equal([2, 2, 3, 9, 9], mergeSort([2, 3, 9, 2, 9], 5));
// equal([1, 2, 3, 4, 5], mergeSort([1, 2, 3, 4, 5], 5));
// equal([2, 2, 2, 3, 9], mergeSort([2, 3, 9, 2, 2], 5));
// equal([1, 2, 3, 4, 9], mergeSort([4, 2, 1, 3, 9], 5));
// equal([2, 2, 3, 9, 9], mergeSort([2, 3, 9, 2, 9], 5));
// equal([-14, -12, -10, -9, -8, -7], mergeSort([-9, -8, -10, -7, -12, -14], 6));

// equal([], mergeSort([], 0));
// equal([1], mergeSort([1], 1));
// equal([1, 1, 1, 1, 1, 1], mergeSort([1, 1, 1, 1, 1, 1], 6));
// equal([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], mergeSort([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10));
// equal([4, 4, 4, 4, 4, 4, 4, 4, 4, 4], mergeSort([4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 10));
// equal([1, 1, 1, 4, 4, 4, 4, 8, 8, 8], mergeSort([8, 4, 8, 1, 8, 4, 1, 4, 4, 1], 10));
// equal([0, 0, 0, 0, 0, 0], mergeSort([0, 0, 0, 0, 0, 0], 6));
// equal([0, 0, 0, 1, 1, 1], mergeSort([1, 0, 1, 0, 1, 0], 6));
// equal([0.0, 0.1, 0.2, 0.3, 0.4, 0.6], mergeSort([0.6, 0.4, 0.3, 0.2, 0.1, 0.0], 6));

// equal([1, 1, 1, 3, 3, 3, 5, 5, 5, 6], mergeSort([5, 5, 5, 1, 1, 1, 3, 3, 3, 6], 10));
// equal([0, 2, 8, 11, 34, 78, 892], mergeSort([8, 2, 78, 892, 11, 0, 34], 7));
// equal([0, 1, 2, 2, 3, 3, 3, 3, 9, 9, 9, 11, 22, 47, 65, 83, 822], mergeSort([9, 3, 83, 9, 2, 0, 1, 65, 2, 822, 9, 11, 22, 3, 3, 3, 47], 17));

// equal([-6, 0, 0, 1, 9, 17, 91, 178], mergeSort([-6, 9, 0, 1, 17, 91, 0, 178], 8));
// equal([-8, -7, -6, -5, 0, 0, 0, 0, 1, 2, 3], mergeSort([-5, -6, -7, 0, 0, 0, 0, -8, 1, 2, 3], 11));

// equal(Array.from({ length: 10 }, () => 4), mergeSort(Array.from({ length: 10 }, () => 4), 10));
// equal(Array.from({ length: 100 }, () => 4), mergeSort(Array.from({ length: 100 }, () => 4), 100));
// equal(Array.from({ length: 1000 }, () => 4), mergeSort(Array.from({ length: 1000 }, () => 4), 1000));
// equal(Array.from({ length: 10000 }, () => 4), mergeSort(Array.from({ length: 10000 }, () => 4), 10000));
// equal(Array.from({ length: 100000 }, () => 4), mergeSort(Array.from({ length: 100000 }, () => 4), 100000));

// {
//   let arr = Array.from({ length: 100001 }, () => Math.random());
//   let expected = arr.slice().sort((a, b) => a - b);
//   let got = mergeSort(arr.slice(), 100001);
//   equal(expected, got);
// }
// {
//   let arr = Array.from({ length: 100001 }, () => Math.random());
//   let expected = arr.slice().sort((a, b) => a - b);
//   let got = mergeSort(arr.slice(), 100001);
//   equal(expected, got);
// }
// {;
//   let arr = Array.from({ length: 100000 }, () => (Math.random() * 10) ** 9);
//   let expected = arr.slice().sort((a, b) => a - b);
//   let got = mergeSort(arr.slice(), 100000);
//   equal(expected, got);
// }
// {;
//   let arr = Array.from({ length: 100002 }, () => Math.round(Math.random() * 10) ** 9);
//   let expected = arr.slice().sort((a, b) => a - b);
//   let got = mergeSort(arr.slice(), 100002);
//   equal(expected, got);
// }
// {
//   let arr = Array.from({ length: 100003 }, () => Math.ceil(Math.random() * 10) ** 9);
//   let expected = arr.slice().sort((a, b) => a - b);
//   let got = mergeSort(arr.slice(), 100003);
//   equal(expected, got);
// }
// {
//   let arr = Array.from({ length: 100004 }, () => Math.floor(Math.random() * 10) ** 9);
//   let expected = arr.slice().sort((a, b) => a - b);
//   let got = mergeSort(arr.slice(), 100004);
//   equal(expected, got);
// }

equal(2, getNumberOfInversions([2, 3, 9, 2, 9], 5)[1]);
equal(4, getNumberOfInversions([2, 3, 9, 2, 9, 4], 6)[1]);
equal(3, getNumberOfInversions([3, 2, 1], 3)[1]);
equal(15, getNumberOfInversions([9, 8, 7, 3, 2, 1], 6)[1]);

process.exit();
