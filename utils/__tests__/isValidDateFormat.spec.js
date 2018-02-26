'use strict';

var _isValidDateFormat = require('../isValidDateFormat');

var _isValidDateFormat2 = _interopRequireDefault(_isValidDateFormat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('`isValidDateFormat` Spec', function () {
  it('return false if is invalid time format', function () {
    var dataString = '2018-12-20%2019:00:00';
    expect((0, _isValidDateFormat2.default)(dataString)).toBe(false);
  });

  it('return true if is valid time format', function () {
    var dataString = '2018-12-20 19:00:00';
    expect((0, _isValidDateFormat2.default)(dataString)).toBe(true);
  });
});