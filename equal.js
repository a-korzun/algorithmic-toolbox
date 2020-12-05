module.exports = function equal(a, b) {
  const isEqual = JSON.stringify(a) === JSON.stringify(b);

  if (Array.isArray(a) && a.length > 99) { a = `Array(${a.length})` }
  if (Array.isArray(b) && b.length > 99) { b = `Array(${b.length})` }

  const msg = 'expected: ' + JSON.stringify(a) +
    ' got: ' + JSON.stringify(b) +
    ' equals:' + (isEqual ? '\x1b[32m true \x1b[0m' : '\x1b[31m false \x1b[0m');

  process.stdout.write(msg + '\n');
}
