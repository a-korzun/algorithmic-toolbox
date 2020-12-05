// @ts-check

const equal = require('../equal');
const majority_element = require('./majority_element');

equal(2, majority_element([2, 3, 9, 2, 2]));
equal(undefined, majority_element([1, 2, 3, 4]));
equal(undefined, majority_element([1, 2, 3, 1]));
equal(1, majority_element([1, 2, 3, 1, 1]));
equal(undefined, majority_element([512766168, 717383758, 5, 126144732, 5, 573799007, 5, 5, 5, 405079772]));

process.exit();
