'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _ienv = require('ienv');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var qsParser = function qsParser() {
  var qstring = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var qsObj = {};
  var qs = qstring || (_ienv.isNode ? process.argv.slice(2).join('&') : decodeURIComponent(_ienv.global.location.search.slice(1)));

  if (qs) {
    qs.split('&').forEach(function (nameValue) {
      var _nameValue$split = nameValue.split('='),
          _nameValue$split2 = _slicedToArray(_nameValue$split, 2),
          name = _nameValue$split2[0],
          value = _nameValue$split2[1];

      Object.assign(qsObj, _defineProperty({}, name, typeof value === 'undefined' ? true : value));
    });
  }

  return qsObj;
};

exports.default = qsParser;