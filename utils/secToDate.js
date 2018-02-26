'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prefix = require('./prefix0');

var _prefix2 = _interopRequireDefault(_prefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {Number} tz
 * @return {Date}
 */
var secToDate = function secToDate(tz) {
  return function () {
    var sec = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    var D = new Date(sec * 1000);

    D.setTime(+D + tz * 60 * 60 * 1000);

    var date = {
      year: D.getUTCFullYear(),
      month: D.getUTCMonth(),
      date: D.getUTCDate(),
      hours: D.getUTCHours(),
      minutes: D.getUTCMinutes(),
      seconds: D.getUTCSeconds(),
      day: D.getUTCDay()
    };

    date.format = function () {
      var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return str.replace(/[yY]+/, function (Y) {
        return String(date.year).slice(0 - Y.length);
      }).replace(/M+/, function (MM) {
        var mm = date.month + 1;
        return MM.length > 1 ? (0, _prefix2.default)(mm) : mm;
      }).replace(/D+/, function (DD) {
        return DD.length > 1 ? (0, _prefix2.default)(date.date) : date.date;
      }).replace(/h+/, function (h) {
        return h.length > 1 ? (0, _prefix2.default)(date.hours) : date.hours;
      }).replace(/m+/, function (h) {
        return h.length > 1 ? (0, _prefix2.default)(date.minutes) : date.minutes;
      }).replace(/s+/, function (h) {
        return h.length > 1 ? (0, _prefix2.default)(date.seconds) : date.seconds;
      });
    };

    date.ISO = date.format('YYYY-MM-DDThh:mm:ss');

    return date;
  };
};

exports.default = secToDate;