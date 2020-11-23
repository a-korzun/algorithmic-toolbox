// @ts-check

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
    const [itemsCount, knapsackCapacity] = line.toString().split(' ').map(Number);
    const values = [];
    const weights = [];
    let count = 0;

    rl.on('line', line => {
        const [v, w] = readLine(line);
        values.push(v);
        weights.push(w);

        if (++count >= itemsCount) {
            console.log(max(itemsCount, knapsackCapacity, values, weights));
            process.exit();
        }
    });
});

function readLine(line) {
    const v = parseInt(line.toString().split(' ')[0], 10);
    const w = parseInt(line.toString().split(' ')[1], 10);

    return [v, w];
}

function max(count, capacity, values, weights) {
  const sorted = values
    .map((value, index) => ({
      value,
      weight: weights[index],
    }))
    .sort((a, b) => b.value / b.weight - a.value / a.weight);

  let value = 0;
  let weight = 0;

  if (count === 0) {
    return formatOutput(value);
  }

  for (const item of sorted) {
    const diff = (weight + item.weight) - capacity;

    if (weight === capacity) {
      return formatOutput(value);
    }

    if (diff > 0) {
      const ratio = item.weight / (item.weight - diff);

      value += item.value / ratio;

      return formatOutput(value);
    }

    value += item.value;
    weight += item.weight;
  }

  return formatOutput(value);
}

function formatOutput(number) {
  let [c, d] = String(Math.round(number * 10000) / 10000).split('.');

  if (d === undefined) {
    d = '0000';
  } else {
    d = (d + '00000').substring(0, 4);
  }

  return [c, d].join('.');
}

module.exports = max;