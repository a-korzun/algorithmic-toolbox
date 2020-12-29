const equal = require('../equal');
const { get_maximum_value, parse_expression } = require('./placing_parentheses');

equal(6, get_maximum_value(parse_expression('1+5')));
equal(200, get_maximum_value(parse_expression('5-8+7*4-8+9')));

process.exit();
