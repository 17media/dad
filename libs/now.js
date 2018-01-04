'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.now = undefined;

var _suffix = require('../utils/suffix00');

var _suffix2 = _interopRequireDefault(_suffix);

var _qsParser = require('../utils/qsParser');

var _qsParser2 = _interopRequireDefault(_qsParser);

var _toSec = require('../utils/toSec');

var _toSec2 = _interopRequireDefault(_toSec);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var startTime = void 0;

var now = function now() {
  var currentTime = Date.now();
  var qs = (0, _qsParser2.default)();

  var dadNow = qs['dad.now'] || qs['--dad.now'];
  var isAuto = qs['--auto'] || qs.auto;

  if (typeof startTime === 'undefined') {
    startTime = currentTime;
  }

  var timeInterval = dadNow ? startTime - +new Date((0, _suffix2.default)(dadNow)) : 0;
  var timeDuration = dadNow && !isAuto ? currentTime - startTime : 0;

  var sec = (0, _toSec2.default)(currentTime - timeInterval - timeDuration);

  return sec;
};

exports.default = now;
exports.now = now;