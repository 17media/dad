import prefix0 from '../prefix0';

describe('Test `prefix0` Spec', () => {
  it('should be prefixed', () => {
    expect(prefix0(9)).toBe('09');
    expect(prefix0('9')).toBe('09');
  });

  it("shouldn't be prefixed ", () => {
    expect(prefix0(10)).toBe('10');
    expect(prefix0('10')).toBe('10');
  });
});
