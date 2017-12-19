import { isToday } from '../isToday';

describe('isToday  functionality', () => {
  it('return true if given time is during today', () => {
    expect(isToday((new Date()).getTime())).toBe(true);
  });

  it('return false if given time is not during today', () => {
    const datetime = new Date();
    datetime.setDate(datetime.getDate() + 1);
    expect(isToday(datetime.getTime())).toBe(false);
  });

  it('return true if given time is during date from argument --dad.now', () => {
    process.argv = [null, null, '--dad.now=2017-12-12 19:30'];
    const datetime = new Date('2017-12-12 00:00:00');
    expect(isToday(datetime.getTime())).toBe(true)
  })

  it('return false if given time is not during the date from argument --dad.now', () => {
    process.argv = [null, null, '--dad.now=2017-12-12 19:30'];
    const datetime = new Date();
    expect(isToday(datetime.getTime())).toBe(false)
  })
});
