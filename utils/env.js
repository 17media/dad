'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var global = exports.global = new Function('return this')(); // eslint-disable-line no-new-func
var isBrowser = exports.isBrowser = !!(global.document && global.document.createElement);
var isNode = exports.isNode = Object.prototype.toString.call(typeof process !== 'undefined' && process) === '[object process]';