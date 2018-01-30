"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @param {Number} tz
 * @return {Date}
 */
var secToDate = function secToDate(tz) {
  return function () {
    var sec = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    var D = new Date(sec * 1000);

    D.setTime(+D + tz * 60 * 60 * 1000);

    return {
      year: D.getUTCFullYear(),
      month: D.getUTCMonth(),
      date: D.getUTCDate(),
      hours: D.getUTCHours(),
      minutes: D.getUTCMinutes(),
      seconds: D.getUTCSeconds(),
      day: D.getUTCDay()
    };
  };
};

exports.default = secToDate;