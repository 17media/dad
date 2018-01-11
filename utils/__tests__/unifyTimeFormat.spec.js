'use strict';

var _unifyTimeFormat = require('../unifyTimeFormat');

var _unifyTimeFormat2 = _interopRequireDefault(_unifyTimeFormat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('unifyTimeFormat spec', function () {
  it('change unify time format', function () {
    var dateString = '2018-01-01 19:00';
    expect((0, _unifyTimeFormat2.default)(dateString)).toBe('2018-01-01T19:00:00');
  });
});