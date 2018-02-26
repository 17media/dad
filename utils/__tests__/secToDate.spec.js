'use strict';

var _secToDate = require('../secToDate');

var _secToDate2 = _interopRequireDefault(_secToDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('`secToDate` Spec', function () {
  it('test if timezone +8', function () {
    var s = new Date('2018-01-04 08:00:00+08:00') / 1000;

    expect((0, _secToDate2.default)(8)(s)).toMatchObject({
      year: 2018,
      month: 0,
      date: 4,
      hours: 8,
      minutes: 0,
      seconds: 0,
      day: 4
    });
  });

  it('test if timezone +9', function () {
    var s = new Date('2018-01-04 08:00:00+08:00') / 1000;

    expect((0, _secToDate2.default)(9)(s)).toMatchObject({
      year: 2018,
      month: 0,
      date: 4,
      hours: 9,
      minutes: 0,
      seconds: 0,
      day: 4
    });
  });

  it('test format feature', function () {
    var s = new Date('2018-01-04 08:00:00+08:00') / 1000;

    expect((0, _secToDate2.default)(9)(s).format('YYYY/MM/DD hh:mm:ss')).toBe('2018/01/04 09:00:00');

    expect((0, _secToDate2.default)(9)(s).format('D-M-YY h:m:s YMD')).toBe('4-1-18 9:0:0 YMD');
  });

  it('test ISO date string', function () {
    var s = new Date('2018-01-04 08:00:00+08:00') / 1000;

    expect((0, _secToDate2.default)(9)(s).ISO).toBe('2018-01-04T09:00:00');
  });
});