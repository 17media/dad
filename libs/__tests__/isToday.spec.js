'use strict';

var _isToday = require('../isToday');

describe('isToday  functionality', function () {
  it('return true if given time is during today', function () {
    expect((0, _isToday.isToday)(new Date().getTime() / 1000)).toBe(true);
  });

  it('return false if given time is not during today', function () {
    var datetime = new Date();
    datetime.setDate(datetime.getDate() + 1);
    expect((0, _isToday.isToday)(datetime.getTime() / 1000)).toBe(false);
  });

  it('return true if given time is during date from argument --dad.now', function () {
    process.argv = [null, null, '--dad.now=2017-12-12 19:30'];
    var datetime = new Date('2017-12-12 00:00:00');
    expect((0, _isToday.isToday)(datetime.getTime() / 1000)).toBe(true);
  });

  it('return false if given time is not during the date from argument --dad.now', function () {
    process.argv = [null, null, '--dad.now=2017-12-12 19:30'];
    var datetime = new Date();
    expect((0, _isToday.isToday)(datetime.getTime() / 1000)).toBe(false);
  });
});