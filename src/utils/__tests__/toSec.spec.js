import toSec from '../toSec';

describe('toSec spec', () => {
  it('transform Date object to second', () => {
    expect(toSec(new Date('2018-01-04'))).toBe(1515024000);
  });

  it('transform millisecond to second', () => {
    expect(toSec(1515024000567)).toBe(1515024000);
  });
});
