const equal = require('../equal');
const optimal_sequence = require('./primitive_calculator');

equal([1], optimal_sequence(1));
equal([1, 2, 4, 5], optimal_sequence(5));
equal([1, 3, 9, 10, 11, 22, 66, 198, 594, 1782, 5346, 16038, 16039, 32078, 96234], optimal_sequence(96234));
equal([1, 3, 9, 10, 11, 33, 99, 297, 891, 2673, 8019, 16038, 16039, 48117, 96234], optimal_sequence(96234));

process.exit();
