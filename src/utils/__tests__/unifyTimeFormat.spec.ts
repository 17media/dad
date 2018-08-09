import unifyTimeFormat from '../unifyTimeFormat';

describe('unifyTimeFormat spec', () => {
  it('transform incomplete time to complete timeformat and replace space with T', () => {
    const dateString = '2018-01-01 19:00';
    expect(unifyTimeFormat(dateString)).toBe('2018-01-01T19:00:00');
  });

  it('transform incomplete time to complete timeformat', () => {
    const dateString = '2018-01-01';
    expect(unifyTimeFormat(dateString)).toBe('2018-01-01T00:00:00');
  });
});
