const equal = require('../equal');
const get_change = require('./change_dp');

equal(2, get_change(2));
equal(9, get_change(34));

process.exit();
