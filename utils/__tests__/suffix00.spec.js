import suffix00 from '../suffix00';

describe('suffix00 Spec', () => {
  it('omit hh:mm:ss', () => {
    expect(suffix00('2017-12-12')).toBe('2017-12-12 00:00:00');
  });

  it('omit mm:ss', () => {
    expect(suffix00('2017-12-12 19')).toBe('2017-12-12 19:00:00');
  });

  it('omit ss', () => {
    expect(suffix00('2017-12-12 19:30')).toBe('2017-12-12 19:30:00');
  });

  it('full date time', () => {
    expect(suffix00('2017-12-12 19:59:59')).toBe('2017-12-12 19:59:59');
  });
});
