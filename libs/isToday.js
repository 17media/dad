'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isToday = undefined;

var _now = require('./now');

var isToday = function isToday() {
  var sec = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  var ms = sec * 1000;
  var dadNow = (0, _now.now)();

  var currentDate = new Date(dadNow * 1000);

  return new Date(ms).toDateString() === currentDate.toDateString();
};

exports.isToday = isToday;
exports.default = isToday;