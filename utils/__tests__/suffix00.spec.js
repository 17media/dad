'use strict';

var _suffix = require('../suffix00');

var _suffix2 = _interopRequireDefault(_suffix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('suffix00 spec', function () {
  it('omit hh:mm:ss', function () {
    expect((0, _suffix2.default)('2017-12-12')).toBe('2017-12-12 00:00:00');
  });

  it('omit mm:ss', function () {
    expect((0, _suffix2.default)('2017-12-12 19')).toBe('2017-12-12 19:00:00');
  });

  it('omit ss', function () {
    expect((0, _suffix2.default)('2017-12-12 19:30')).toBe('2017-12-12 19:30:00');
  });

  it('full date time', function () {
    expect((0, _suffix2.default)('2017-12-12 19:59:59')).toBe('2017-12-12 19:59:59');
  });
});