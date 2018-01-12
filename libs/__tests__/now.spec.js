'use strict';

var _now = require('../now');

describe('now functionality', function () {
  it('should be equal to current time if no arguments', function () {
    var currentTime = (0, _now.now)();
    var DateGeneratedCurrentTime = Math.floor(Date.now() / 1000);

    expect(currentTime).toBe(DateGeneratedCurrentTime);
  });

  it('should be equal to given time from arguments', function () {
    process.argv = [null, null, '--foo', '17', '--dad.now=2017-12-12 19:30', '--bar'];
    var currentTime = (0, _now.now)();
    var DateGeneratedTime = Math.floor(+new Date('2017-12-12 19:30:00') / 1000);

    expect(currentTime).toBe(DateGeneratedTime);
  });

  it('should throw an error when dad.now time format is invalid', function () {
    process.argv = [null, null, '--foo', '17', '--dad.now=2017-12-12%adf2019:30', '--bar'];
    expect(function () {
      return (0, _now.now)();
    }).toThrowError();
  });
});