(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('ienv')) :
	typeof define === 'function' && define.amd ? define(['exports', 'ienv'], factory) :
	(factory((global.Dad = {}),global.ienv));
}(this, (function (exports,ienv) { 'use strict';

var toSec = function toSec(Date) {
  return Math.floor(+Date / 1000);
};

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

var isValidDateFormat = function isValidDateFormat(dateString) {
  return !isNaN(+new Date(dateString));
};

var suffix00 = function suffix00(date) {
  var len = date.length;

  if (len === 10) {
    return date + " 00:00:00";
  }

  if (len === 13) {
    return date + ":00:00";
  }

  if (len === 16) {
    return date + ":00";
  }

  return date;
};

var unifyTimeFormat = function unifyTimeFormat() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return suffix00(string).replace(' ', 'T');
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var wm = new WeakMap();

var Dad = function () {
  /**
   * @param {String | Number} dateOrSec
   */
  function Dad(inputValue) {
    _classCallCheck(this, Dad);

    if (!/^(string|number)$/.test(typeof inputValue === 'undefined' ? 'undefined' : _typeof(inputValue))) {
      throw new Error('Invaild type. it should be `string` | `number`');
    }

    var dateOrSec = void 0;

    if (typeof inputValue === 'string') {
      dateOrSec = unifyTimeFormat(inputValue);

      if (!isValidDateFormat(dateOrSec)) {
        throw new Error('Invaild date string format, Please pass `YYYY-MM-DD HH:mm:ss`');
      }
    } else {
      dateOrSec = inputValue;
    }

    var p = wm.set(this, {}).get(this);

    p.dateOrSec = dateOrSec;
  }

  _createClass(Dad, [{
    key: 'ja',
    get: function get() {
      var p = wm.get(this);

      if (typeof p.dateOrSec === 'number') {
        return secToDate(9)(p.dateOrSec);
      }

      return toSec(new Date(p.dateOrSec + '+09:00'));
    }
  }, {
    key: 'tw',
    get: function get() {
      var p = wm.get(this);

      if (typeof p.dateOrSec === 'number') {
        return secToDate(8)(p.dateOrSec);
      }

      return toSec(new Date(p.dateOrSec + '+08:00'));
    }
  }, {
    key: 'hk',
    get: function get() {
      return this.tw;
    }
  }, {
    key: 'indo',
    get: function get() {
      var p = wm.get(this);

      if (typeof p.dateOrSec === 'number') {
        return secToDate(7)(p.dateOrSec);
      }

      return toSec(new Date(p.dateOrSec + '+07:00'));
    }
  }]);

  return Dad;
}();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var qsParser = function qsParser() {
  var qstring = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var qsObj = {};
  var qs = qstring || (ienv.isNode ? process.argv.slice(2).join('&') : decodeURIComponent(ienv.global.location.search.slice(1)));

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

var startTime = void 0;

var now = function now() {
  var currentTime = Date.now();
  var qs = qsParser();

  var dadNow = unifyTimeFormat(qs['dad.now'] || qs['--dad.now']);

  if (dadNow && !isValidDateFormat(dadNow)) {
    throw new Error('Invalid time format in dad.now.');
  }

  var isAuto = qs['--auto'] || qs.auto;

  if (typeof startTime === 'undefined') {
    startTime = currentTime;
  }

  var timeInterval = dadNow ? startTime - +new Date(dadNow) : 0;
  var timeDuration = dadNow && !isAuto ? currentTime - startTime : 0;

  var sec = toSec(currentTime - timeInterval - timeDuration);

  return sec;
};

var isToday = function isToday() {
  var sec = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  var ms = sec * 1000;
  var dadNow = now();

  var currentDate = new Date(dadNow * 1000);

  return new Date(ms).toDateString() === currentDate.toDateString();
};

var dad = function dad() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Dad, [null].concat(args)))();
};

var tw = function tw() {
  return dad.apply(undefined, arguments).tw;
};
var hk = function hk() {
  return dad.apply(undefined, arguments).hk;
};
var ja = function ja() {
  return dad.apply(undefined, arguments).ja;
};
var indo = function indo() {
  return dad.apply(undefined, arguments).indo;
};

exports['default'] = dad;
exports.tw = tw;
exports.hk = hk;
exports.ja = ja;
exports.indo = indo;
exports.isToday = isToday;
exports.now = now;

Object.defineProperty(exports, '__esModule', { value: true });

})));
