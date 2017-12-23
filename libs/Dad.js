'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _suffix = require('../utils/suffix00');

var _suffix2 = _interopRequireDefault(_suffix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dateForamtRE = /^\d{4}-\d{2}-\d{2}([\sT]\d{2})?(:\d{2})?(:\d{2})?/;

var getTime = function getTime(Date) {
  return +Date;
};

var wm = new WeakMap();

var Dad = function () {
  function Dad(date) {
    _classCallCheck(this, Dad);

    if (!dateForamtRE.test(date)) {
      throw new Error('Invaild date string format, Please pass `YYYY-MM-DD HH:mm:ss`');
    }

    var p = wm.set(this, {}).get(this);

    p.date = date;
  }

  _createClass(Dad, [{
    key: 'ja',
    get: function get() {
      var p = wm.get(this);

      return getTime(new Date((0, _suffix2.default)(p.date) + '+09:00'));
    }
  }, {
    key: 'tw',
    get: function get() {
      var p = wm.get(this);

      return getTime(new Date((0, _suffix2.default)(p.date) + '+08:00'));
    }
  }, {
    key: 'indo',
    get: function get() {
      var p = wm.get(this);

      return getTime(new Date((0, _suffix2.default)(p.date) + '+07:00'));
    }
  }]);

  return Dad;
}();

exports.default = Dad;