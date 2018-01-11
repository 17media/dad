import isValidDateFormat from '../isValidDateFormat';

describe('`isValidDateFormat` Spec', () => {
  it('return false if is invalid time format', () => {
    const dataString = '2018-12-20%2019:00:00';
    expect(isValidDateFormat(dataString)).toBe(false);
  });

  it('return true if is valid time format', () => {
    const dataString = '2018-12-20 19:00:00';
    expect(isValidDateFormat(dataString)).toBe(true);
  });
});
