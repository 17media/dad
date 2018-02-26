'use strict';

var _prefix = require('../prefix0');

var _prefix2 = _interopRequireDefault(_prefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Test `prefix0` Spec', function () {
  it('should be prefixed', function () {
    expect((0, _prefix2.default)(9)).toBe('09');
    expect((0, _prefix2.default)('9')).toBe('09');
  });

  it('shouldn\'t be prefixed ', function () {
    expect((0, _prefix2.default)(10)).toBe('10');
    expect((0, _prefix2.default)('10')).toBe('10');
  });
});