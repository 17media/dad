"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isValidDateFormat = function isValidDateFormat(dateString) {
  return !isNaN(+new Date(dateString));
};

exports.default = isValidDateFormat;