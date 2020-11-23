// @ts-check

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    console.log(getFibSum(parseInt(line, 10)));
    process.exit();
}

function getFibSum(n) {
    if (n === 0 || n === 1) {
        return n;
    }

    let prev = 0;
    let curr = 1;

    const remaining = n % 60;

    if (remaining === 0) {
        return 0;
    }

    for (let i = 2; i < remaining + 3; i++) {
        const c = (prev + curr) % 60;
        prev = curr;
        curr = c;
    }

    return curr % 10 - 1;
}

module.exports = getFibSum;
