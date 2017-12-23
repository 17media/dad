'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.indo = exports.ja = exports.tw = exports.now = exports.isToday = undefined;

var _isToday = require('./libs/isToday');

Object.defineProperty(exports, 'isToday', {
  enumerable: true,
  get: function get() {
    return _isToday.isToday;
  }
});

var _now = require('./libs/now');

Object.defineProperty(exports, 'now', {
  enumerable: true,
  get: function get() {
    return _now.now;
  }
});

var _Dad = require('./libs/Dad');

var _Dad2 = _interopRequireDefault(_Dad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dad = function dad() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(_Dad2.default, [null].concat(args)))();
};

exports.default = dad;
var tw = exports.tw = function tw() {
  return dad.apply(undefined, arguments).tw;
};
var ja = exports.ja = function ja() {
  return dad.apply(undefined, arguments).ja;
};
var indo = exports.indo = function indo() {
  return dad.apply(undefined, arguments).indo;
};