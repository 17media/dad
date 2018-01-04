"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var toSec = function toSec(Date) {
  return Math.floor(+Date / 1000);
};

exports.default = toSec;