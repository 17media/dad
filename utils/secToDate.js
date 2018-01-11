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

    return D;
  };
};

exports.default = secToDate;