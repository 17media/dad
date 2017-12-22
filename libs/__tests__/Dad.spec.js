'use strict';

var _ = require('../../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Dad functionality', function () {
  it('return time in ms where time zone is +8:00', function () {
    var datetime = new Date('2017-12-13 00:00:00+08:00').getTime();
    expect((0, _2.default)('2017-12-13').tw).toBe(datetime);

    expect((0, _.tw)('2017-12-13')).toBe(datetime);
  });

  it('return time in ms where time zone is +9:00', function () {
    var datetime = new Date('2017-12-13 00:00:00+09:00').getTime();
    expect((0, _2.default)('2017-12-13').ja).toBe(datetime);

    expect((0, _.ja)('2017-12-13')).toBe(datetime);
  });

  it('return time in ms where time zone is +7:00', function () {
    var datetime = new Date('2017-12-13 00:00:00+07:00').getTime();
    expect((0, _2.default)('2017-12-13').indo).toBe(datetime);

    expect((0, _.indo)('2017-12-13')).toBe(datetime);
  });

  it('throw an error if date format is incorrect', function () {
    expect(function () {
      (0, _2.default)('2017/12/13');
    }).toThrowError('Invaild date string format');
  });
});