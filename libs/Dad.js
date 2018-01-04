'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _suffix = require('../utils/suffix00');

var _suffix2 = _interopRequireDefault(_suffix);

var _toSec = require('../utils/toSec');

var _toSec2 = _interopRequireDefault(_toSec);

var _secToDate = require('../utils/secToDate');

var _secToDate2 = _interopRequireDefault(_secToDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dateForamtRE = /^\d{4}-\d{2}-\d{2}([\sT]\d{2})?(:\d{2})?(:\d{2})?/;

var wm = new WeakMap();

var Dad = function () {
  /**
   * @param {String | Number} dateOrSec
   */
  function Dad(dateOrSec) {
    _classCallCheck(this, Dad);

    if (!/^(string|number)$/.test(typeof dateOrSec === 'undefined' ? 'undefined' : _typeof(dateOrSec))) {
      throw new Error('Invaild type. it should be `string` | `number`');
    }

    if (typeof dateOrSec === 'string') {
      if (!dateForamtRE.test(dateOrSec)) {
        throw new Error('Invaild date string format, Please pass `YYYY-MM-DD HH:mm:ss`');
      }
    }

    var p = wm.set(this, {}).get(this);

    p.dateOrSec = dateOrSec;
  }

  _createClass(Dad, [{
    key: 'ja',
    get: function get() {
      var p = wm.get(this);

      if (typeof p.dateOrSec === 'number') {
        return (0, _secToDate2.default)(9)(p.dateOrSec);
      }

      return (0, _toSec2.default)(new Date((0, _suffix2.default)(p.dateOrSec) + '+09:00'));
    }
  }, {
    key: 'tw',
    get: function get() {
      var p = wm.get(this);

      if (typeof p.dateOrSec === 'number') {
        return (0, _secToDate2.default)(8)(p.dateOrSec);
      }

      return (0, _toSec2.default)(new Date((0, _suffix2.default)(p.dateOrSec) + '+08:00'));
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
        return (0, _secToDate2.default)(7)(p.dateOrSec);
      }

      return (0, _toSec2.default)(new Date((0, _suffix2.default)(p.dateOrSec) + '+07:00'));
    }
  }]);

  return Dad;
}();

exports.default = Dad;