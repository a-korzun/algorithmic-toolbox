const equal = require('../equal');
const edit_distance = require('./edit_distance');

equal(0, edit_distance('ab', 'ab'));
equal(1, edit_distance('ab', 'aba'));
equal(3, edit_distance('short', 'ports'));
equal(5, edit_distance('editing', 'distance'));

process.exit();
