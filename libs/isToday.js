'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isToday = undefined;

var _suffix = require('../utils/suffix00');

var _suffix2 = _interopRequireDefault(_suffix);

var _qsParser = require('../utils/qsParser');

var _qsParser2 = _interopRequireDefault(_qsParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isToday = function isToday() {
  var ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  var qs = (0, _qsParser2.default)();
  var dadNow = qs['--dad.now'] || qs['dad.now'];

  var currentTime = dadNow ? new Date((0, _suffix2.default)(dadNow)) : new Date();
  return new Date(ms).toDateString() === currentTime.toDateString();
};

exports.isToday = isToday;
exports.default = isToday;