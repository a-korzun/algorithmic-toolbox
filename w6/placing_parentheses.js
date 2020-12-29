// @ts-check

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
  const expression = line.toString();

  process.stdout.write(String(get_maximum_value(parse_expression(expression))));
  process.stdout.write('\n');
});

function parse_expression(expression) {
  const result = [];
  const operations = expression.split(/\d+/).filter(x => x);
  const numbers = expression.split(/[\+\*\-]/).map(Number);

  while (numbers.length) {
    result.push([numbers.shift(), operations.shift()]);
  }

  return result;
}

function get_maximum_value(expression) {
  const m = new Map(); // minimum values
  const M = new Map(); // maximum values

  function co(i, j) { return `${i},${j}` };

  const min_and_max = (i, j) => {
    let min = Infinity;
    let max = -Infinity;

    for (let k = i; k <= j - 1; k++) {
      let a = eval('M.get(co(i,k))' + expression[k-1][1] + 'M.get(co(k + 1,j))');
      let b = eval('M.get(co(i,k))' + expression[k-1][1] + 'm.get(co(k + 1,j))');
      let c = eval('m.get(co(i,k))' + expression[k-1][1] + 'M.get(co(k + 1,j))');
      let d = eval('m.get(co(i,k))' + expression[k-1][1] + 'm.get(co(k + 1,j))');

      min = Math.min(min, a, b, c, d);
      max = Math.max(max, a, b, c, d);
    }

    return { min, max };
  }

  for (let i = 1; i <= expression.length; i++) {
    m.set(co(i,i), expression[i-1][0]);
    M.set(co(i,i), expression[i-1][0]);
  }

  for (let s = 1; s <= expression.length - 1; s++) {
    for (let i = 1; i <= expression.length - s; i++) {
      const j = i + s;
      const { min, max } = min_and_max(i, j);

      m.set(co(i, j), min);
      M.set(co(i, j), max);
    }
  }

  return M.get(co(1, expression.length));
}

module.exports = { get_maximum_value, parse_expression };