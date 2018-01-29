import dad, { tw, hk, ja, indo } from '../../';

describe('Dad functionality', () => {
  it('return time in ms where time zone is +8:00', () => {
    const datetime = Math.floor(new Date('2017-12-13 00:00:00+08:00').getTime() / 1000);
    expect(dad('2017-12-13').tw)
      .toBe(datetime);

    expect(tw('2017-12-13'))
      .toBe(datetime);

    expect(dad('2017-12-13').hk)
      .toBe(datetime);

    expect(hk('2017-12-13'))
      .toBe(datetime);
  });

  it('return time in ms where time zone is +9:00', () => {
    const datetime = Math.floor(new Date('2017-12-13 00:00:00+09:00').getTime() / 1000);
    expect(dad('2017-12-13').ja)
      .toBe(datetime);

    expect(ja('2017-12-13'))
      .toBe(datetime);
  });

  it('return time in ms where time zone is +7:00', () => {
    const datetime = Math.floor(new Date('2017-12-13 00:00:00+07:00').getTime() / 1000);
    expect(dad('2017-12-13').indo)
      .toBe(datetime);

    expect(indo('2017-12-13'))
      .toBe(datetime);
  });

  it('throw an error if date format is incorrect', () => {
    expect(() => {
      dad('2017/13/32');
    })
      .toThrowError('Invaild date string format');
  });

  it('if input is second number', () => {
    const UTC0101 = new Date('2018-01-01 00:00:00+08:00') / 1000;

    expect(tw(UTC0101)).toEqual({
      year: 2018,
      month: 0,
      date: 1,
      hours: 0,
      minutes: 0,
      seconds: 0,
      day: 1,
    });
    expect(ja(UTC0101)).toEqual({
      year: 2018,
      month: 0,
      date: 1,
      hours: 1,
      minutes: 0,
      seconds: 0,
      day: 1,
    });
    expect(indo(UTC0101)).toEqual({
      year: 2017,
      month: 11,
      date: 31,
      hours: 23,
      minutes: 0,
      seconds: 0,
      day: 0,
    });
  });

  it('Invaild type', () => {
    expect(() => {
      dad({});
    })
      .toThrowError('Invaild type');
  });
});
