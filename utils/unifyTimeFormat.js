'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _suffix = require('./suffix00');

var _suffix2 = _interopRequireDefault(_suffix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var unifyTimeFormat = function unifyTimeFormat() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return (0, _suffix2.default)(string.replace(' ', 'T'));
};

exports.default = unifyTimeFormat;