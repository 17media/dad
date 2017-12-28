'use strict';

var _now = require('../now');

describe('now functionality', function () {
  it('should be equal to current time if no arguments', function () {
    var currentTime = (0, _now.now)();
    var DateGeneratedCurrentTime = Date.now();

    expect(currentTime).toBeLessThanOrEqual(DateGeneratedCurrentTime);
  });

  it('should be equal to given time from arguments', function () {
    process.argv = [null, null, '--foo', '17', '--dad.now=2017-12-12 19:30', '--bar'];
    var currentTime = (0, _now.now)();
    var DateGeneratedTime = +new Date('2017-12-12 19:30:00');

    expect(currentTime).toBe(DateGeneratedTime);
  });
});