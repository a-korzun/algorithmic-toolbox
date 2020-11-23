// @ts-check

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
    const count = parseInt(line.toString(), 10);
    const segments = [];

    let i = 0;

    rl.on('line', line => {
        const segment = readLine(line);
        segments.push(segment);

        if (++i >= count) {
          const points = optimal_points(segments) ;
            console.log(points.length);
            console.log(points.join(' '));
            process.exit();
        }
    });
});

function readLine(line) {
    const v = parseInt(line.toString().split(' ')[0], 10);
    const w = parseInt(line.toString().split(' ')[1], 10);

    return [v, w];
}


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

function optimal_points(segments) {
  segments = segments.sort((a, b) => a[1] - b[1]);

  let point = segments[0][1];

  const points = [point];

  for (let segment of segments) {
    if (point < segment[0] || point > segment[1]) {
      point = segment[1];
      points.push(point);
    }
  }

  return points;
}

module.exports = optimal_points;