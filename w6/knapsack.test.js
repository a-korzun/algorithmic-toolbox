const equal = require('../equal');
const optimal_weight = require('./knapsack');

equal(9, optimal_weight(10, 3, [1, 4, 8]));
equal(10, optimal_weight(10, 5, [3, 5, 3, 3, 5]));

process.exit();
