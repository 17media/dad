import isAuto from '../isAuto';

describe('isAuto spec', () => {
  it('return true when given flag --auto if running under nodejs', () => {
    process.argv = [null, null, '--auto', '--dad.now=2017-12-12 19:30', '--bar'];
    expect(isAuto()).toBe(true);
  });

  it('return false when given flag --auto if running under nodejs', () => {
    process.argv = [null, null, '--dad.now=2017-12-12 19:30', '--bar'];
    expect(isAuto()).toBe(false);
  });
});
