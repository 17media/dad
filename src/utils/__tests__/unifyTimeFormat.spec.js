import unifyTimeFormat from '../unifyTimeFormat';

describe('unifyTimeFormat spec', () => {
  it('change unify time format', () => {
    const dateString = '2018-01-01 19:00';
    expect(unifyTimeFormat(dateString)).toBe('2018-01-01T19:00:00');
  });
});
