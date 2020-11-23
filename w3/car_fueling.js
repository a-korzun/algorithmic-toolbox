// @ts-check

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
  let distance = parseInt(line.toString(), 10);
  let capacity;
  let stationsAmount;
  let stations;

  rl.once('line', line => {
    capacity = parseInt(line.toString(), 10);

    rl.once('line', line => {
      stationsAmount = parseInt(line.toString(), 10);

      rl.once('line', line => {
        stations = line.toString().split(' ').map(Number);

        console.log(min(distance, capacity, stationsAmount, stations));
        process.exit();
    });
    });
  });
});

function min(distance, capacity, stationsAmount, stations) {
  stations.unshift(0);
  stations.push(distance);

  let numRefills = 0;
  let currentRefill = 0;

  while (stations[currentRefill] + capacity <= distance) {
    const lastRefill = currentRefill;

    while (
      currentRefill <= stationsAmount &&
      stations[currentRefill + 1] - stations[lastRefill] <= capacity
    ) {
      currentRefill += 1;
    }

    if (currentRefill === lastRefill) {
      return -1;
    }

    if (currentRefill <= stationsAmount) {
      numRefills += 1;
    }
  }

  return numRefills;
}

module.exports = min;