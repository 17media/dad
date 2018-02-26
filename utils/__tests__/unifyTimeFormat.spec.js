'use strict';

var _unifyTimeFormat = require('../unifyTimeFormat');

var _unifyTimeFormat2 = _interopRequireDefault(_unifyTimeFormat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('unifyTimeFormat spec', function () {
  it('transform incomplete time to complete timeformat and replace space with T', function () {
    var dateString = '2018-01-01 19:00';
    expect((0, _unifyTimeFormat2.default)(dateString)).toBe('2018-01-01T19:00:00');
  });

  it('transform incomplete time to complete timeformat', function () {
    var dateString = '2018-01-01';
    expect((0, _unifyTimeFormat2.default)(dateString)).toBe('2018-01-01T00:00:00');
  });
});