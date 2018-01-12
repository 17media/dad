'use strict';

var _secToDate = require('../secToDate');

var _secToDate2 = _interopRequireDefault(_secToDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('`secToDate` Spec', function () {
  it('test if timezone +8', function () {
    var s = new Date('2018-01-04 08:00:00+08:00') / 1000;

    expect(new Date(s * 1000).toISOString()).toBe('2018-01-04T00:00:00.000Z');

    expect((0, _secToDate2.default)(8)(s).toISOString()).toBe('2018-01-04T08:00:00.000Z');
  });

  it('test if timezone +9', function () {
    var s = new Date('2018-01-04 08:00:00+08:00') / 1000;

    expect((0, _secToDate2.default)(9)(s).toISOString()).toBe('2018-01-04T09:00:00.000Z');
  });
});