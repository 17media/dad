import dad, { tw, ja, indo } from '../../';

describe('Dad functionality', () => {
  it('return time in ms where time zone is +8:00', () => {
    expect(dad('2017-12-13').tw)
      .toBe(new Date('2017-12-13 00:00:00+08:00').getTime());

    expect(tw('2017-12-13'))
      .toMatchObject(dad('2017-12-13').tw);
  });

  it('return time in ms where time zone is +9:00', () => {
    expect(dad('2017-12-13').ja.time)
      .toBe(new Date('2017-12-13 00:00:00+09:00').getTime());

    expect(ja('2017-12-13'))
      .toMatchObject(dad('2017-12-13').ja);
  });

  it('return time in ms where time zone is +7:00', () => {
    expect(dad('2017-12-13').indo.time)
      .toBe(new Date('2017-12-13 00:00:00+07:00').getTime());

    expect(indo('2017-12-13'))
      .toMatchObject(dad('2017-12-13').indo);
  });

  it('throw an error if date format is incorrect', () => {
    expect(() => {
      dad('2017/12/13');
    })
      .toThrowError('Invaild date string format');
  });
});
