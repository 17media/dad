'use strict';

var _toSec = require('../toSec');

var _toSec2 = _interopRequireDefault(_toSec);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('toSec spec', function () {
  it('transform Date object to second', function () {
    expect((0, _toSec2.default)(new Date('2018-01-04'))).toBe(1515024000);
  });

  it('transform millisecond to second', function () {
    expect((0, _toSec2.default)(1515024000567)).toBe(1515024000);
  });
});