import secToDate from '../secToDate';

describe('`secToDate` Spec', () => {
  it('test if timezone +8', () => {
    const s = new Date('2018-01-04 08:00:00+08:00') / 1000;

    expect(new Date(s * 1000).toISOString()).toBe('2018-01-04T00:00:00.000Z');

    expect(
      secToDate(8)(s).toISOString()
    ).toBe('2018-01-04T08:00:00.000Z');
  });

  it('test if timezone +9', () => {
    const s = new Date('2018-01-04 08:00:00+08:00') / 1000;

    expect(
      secToDate(9)(s).toISOString()
    ).toBe('2018-01-04T09:00:00.000Z');
  });
});
