"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var prefix0 = function prefix0(stringOfNumber) {
  var n = String(stringOfNumber);

  if (n.length < 2) {
    return "0" + n;
  }

  return n;
};

exports.default = prefix0;