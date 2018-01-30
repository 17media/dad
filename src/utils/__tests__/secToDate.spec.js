import secToDate from '../secToDate';

describe('`secToDate` Spec', () => {
  it('test if timezone +8', () => {
    const s = new Date('2018-01-04 08:00:00+08:00') / 1000;

    expect(
      secToDate(8)(s)
    ).toMatchObject({
      year: 2018,
      month: 0,
      date: 4,
      hours: 8,
      minutes: 0,
      seconds: 0,
      day: 4,
    });
  });

  it('test if timezone +9', () => {
    const s = new Date('2018-01-04 08:00:00+08:00') / 1000;

    expect(
      secToDate(9)(s)
    ).toMatchObject({
      year: 2018,
      month: 0,
      date: 4,
      hours: 9,
      minutes: 0,
      seconds: 0,
      day: 4,
    });
  });

  it('test format feature', () => {
    const s = new Date('2018-01-04 08:00:00+08:00') / 1000;

    expect(
      secToDate(9)(s).format('YYYY/MM/DD hh:mm:ss')
    ).toBe('2018/01/04 09:00:00');

    expect(
      secToDate(9)(s).format('D-M-YY h:m:s YMD')
    ).toBe('4-1-18 9:0:0 YMD');
  });
});
