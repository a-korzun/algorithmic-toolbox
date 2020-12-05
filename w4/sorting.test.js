const equal = require('../equal');
const sort = require('./sorting');

equal([1, 2, 3, 4, 5], sort([1, 2, 3, 4, 5], 0, 5));
equal([2, 2, 2, 3, 9], sort([2, 3, 9, 2, 2], 0, 5));
equal([1, 2, 3, 4, 9], sort([4, 2, 1, 3, 9], 0, 5));
equal([2, 2, 3, 9, 9], sort([2, 3, 9, 2, 9], 0, 5));
equal([-14, -12, -10, -9, -8, -7], sort([-9, -8, -10, -7, -12, -14], 0, 6));

equal([], sort([], 0, 0));
equal([1], sort([1], 0, 1));
equal([1, 1, 1, 1, 1, 1], sort([1, 1, 1, 1, 1, 1], 0, 6));
equal([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], sort([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0, 10));
equal([4, 4, 4, 4, 4, 4, 4, 4, 4, 4], sort([4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 0, 10));
equal([1, 1, 1, 4, 4, 4, 4, 8, 8, 8], sort([8, 4, 8, 1, 8, 4, 1, 4, 4, 1], 0, 10));
equal([0, 0, 0, 0, 0, 0], sort([0, 0, 0, 0, 0, 0], 0, 6));
equal([0, 0, 0, 1, 1, 1], sort([1, 0, 1, 0, 1, 0], 0, 5));
equal([0.0, 0.1, 0.2, 0.3, 0.4, 0.6], sort([0.6, 0.4, 0.3, 0.2, 0.1, 0.0], 0, 6));

equal([1, 1, 1, 3, 3, 3, 5, 5, 5, 6], sort([5, 5, 5, 1, 1, 1, 3, 3, 3, 6], 0, 10));
equal([0, 2, 8, 11, 34, 78, 892], sort([8, 2, 78, 892, 11, 0, 34], 0, 6));
equal([0, 1, 2, 2, 3, 3, 3, 3, 9, 9, 9, 11, 22, 47, 65, 83, 822], sort([9, 3, 83, 9, 2, 0, 1, 65, 2, 822, 9, 11, 22, 3, 3, 3, 47], 0, 16));

equal([-6, 0, 0, 1, 9, 17, 91, 178], sort([-6, 9, 0, 1, 17, 91, 0, 178], 0, 7));
equal([-8, -7, -6, -5, 0, 0, 0, 0, 1, 2, 3], sort([-5, -6, -7, 0, 0, 0, 0, -8, 1, 2, 3], 0, 10));

equal(Array.from({ length: 10 }, () => 4), sort(Array.from({ length: 10 }, () => 4), 0, 10));
equal(Array.from({ length: 100 }, () => 4), sort(Array.from({ length: 100 }, () => 4), 0, 100));
equal(Array.from({ length: 1000 }, () => 4), sort(Array.from({ length: 1000 }, () => 4), 0, 1000));
equal(Array.from({ length: 10000 }, () => 4), sort(Array.from({ length: 10000 }, () => 4), 0, 10000));
equal(Array.from({ length: 100000 }, () => 4), sort(Array.from({ length: 100000 }, () => 4), 0, 100000));

{
  let arr = Array.from({ length: 100001 }, () => Math.random());
  let expected = arr.slice().sort((a, b) => a - b);
  let got = sort(arr.slice(), 0, 100001);
  equal(expected, got);
}
{
  let arr = Array.from({ length: 100001 }, () => Math.random());
  let expected = arr.slice().sort((a, b) => a - b);
  let got = sort(arr.slice(), 0, 100001);
  equal(expected, got);
}
{
  let arr = Array.from({ length: 100000 }, () => (Math.random() * 10) ** 9);
  let expected = arr.slice().sort((a, b) => a - b);
  let got = sort(arr.slice(), 0, 100000);
  equal(expected, got);
}

{
  let arr = Array.from({ length: 100002 }, () => Math.round(Math.random() * 10) ** 9);
  let expected = arr.slice().sort((a, b) => a - b);
  let got = sort(arr.slice(), 0, 100002);
  equal(expected, got);
}
{
  let arr = Array.from({ length: 100003 }, () => Math.ceil(Math.random() * 10) ** 9);
  let expected = arr.slice().sort((a, b) => a - b);
  let got = sort(arr.slice(), 0, 100003);
  equal(expected, got);
}
{
  let arr = Array.from({ length: 100004 }, () => Math.floor(Math.random() * 10) ** 9);
  let expected = arr.slice().sort((a, b) => a - b);
  let got = sort(arr.slice(), 0, 100004);
  equal(expected, got);
}

process.exit();
