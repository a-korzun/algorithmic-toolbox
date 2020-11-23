// @ts-check

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    console.log(fib(parseInt(line, 10)));
    process.exit();
}

function fib(n) {
    if (n === 0 || n === 1) {
        return n;
    }

    const list = [0, 1];

    for (let i = 2; i <= n; i++) {
        list.push(list[i - 1] + list[i - 2]);
    }

    return list[n] % 10;
}

module.exports = fib;
