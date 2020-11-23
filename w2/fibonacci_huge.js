// @ts-check

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    if (line !== "\n") {
        const n = parseInt(line.toString().split(' ')[0], 10);
        const m = parseInt(line.toString().split(' ')[1], 10);

        console.log(getFibMod(n, m));
        process.exit();
    }
}

function pisanoPeriod(m) {
    let prev = 0;
    let curr = 1;
    let result = 0;

    for (let i = 0; i < m * m; i++) {
        let c = curr;
        curr = (prev + curr) % m;
        prev = c;

        if (prev === 0 && curr === 1) {
            result = i + 1;
        }
    }

    return result;
}

function getFibMod(n, m) {
    const period = pisanoPeriod(m)

    n = n % period;

    if (n === 0 || n === 1) {
        return n;
    }

    let prev = 0;
    let curr = 1;

    for (let i = 0; i < n - 1; i++) {
        let c = curr;
        curr = (prev + curr) % m;
        prev = c;
    }

    return curr % m;
}

module.exports = getFibMod;
