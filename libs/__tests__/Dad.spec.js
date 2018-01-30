'use strict';

var _ = require('../../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Dad functionality', function () {
  it('return time in ms where time zone is +8:00', function () {
    var datetime = Math.floor(new Date('2017-12-13 00:00:00+08:00').getTime() / 1000);
    expect((0, _2.default)('2017-12-13').tw).toBe(datetime);

    expect((0, _.tw)('2017-12-13')).toBe(datetime);

    expect((0, _2.default)('2017-12-13').hk).toBe(datetime);

    expect((0, _.hk)('2017-12-13')).toBe(datetime);
  });

  it('return time in ms where time zone is +9:00', function () {
    var datetime = Math.floor(new Date('2017-12-13 00:00:00+09:00').getTime() / 1000);
    expect((0, _2.default)('2017-12-13').ja).toBe(datetime);

    expect((0, _.ja)('2017-12-13')).toBe(datetime);
  });

  it('return time in ms where time zone is +7:00', function () {
    var datetime = Math.floor(new Date('2017-12-13 00:00:00+07:00').getTime() / 1000);
    expect((0, _2.default)('2017-12-13').indo).toBe(datetime);

    expect((0, _.indo)('2017-12-13')).toBe(datetime);
  });

  it('throw an error if date format is incorrect', function () {
    expect(function () {
      (0, _2.default)('2017/13/32');
    }).toThrowError('Invaild date string format');
  });

  it('if input is second number', function () {
    var CST0101 = new Date('2018-01-01 00:00:00+08:00') / 1000;

    expect((0, _.tw)(CST0101)).toEqual({
      year: 2018,
      month: 0,
      date: 1,
      hours: 0,
      minutes: 0,
      seconds: 0,
      day: 1
    });
    expect((0, _.ja)(CST0101)).toEqual({
      year: 2018,
      month: 0,
      date: 1,
      hours: 1,
      minutes: 0,
      seconds: 0,
      day: 1
    });
    expect((0, _.indo)(CST0101)).toEqual({
      year: 2017,
      month: 11,
      date: 31,
      hours: 23,
      minutes: 0,
      seconds: 0,
      day: 0
    });
  });

  it('Invaild type', function () {
    expect(function () {
      (0, _2.default)({});
    }).toThrowError('Invaild type');
  });
});