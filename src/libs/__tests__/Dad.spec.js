import dad, { tw, ja, indo } from '../../';

describe('Dad Spec', () => {
  it('test tw', () => {
    expect(dad('2017-12-13').tw.time)
      .toBe(new Date('2017-12-13 00:00:00+08:00').getTime());

    expect(dad('2017-12-13').tw.unix)
      .toBe(new Date('2017-12-13 00:00:00+08:00').getTime() / 1000);

    expect(tw('2017-12-13'))
      .toMatchObject(dad('2017-12-13').tw);
  });

  it('test ja', () => {
    expect(dad('2017-12-13').ja.time)
      .toBe(new Date('2017-12-13 00:00:00+09:00').getTime());

    expect(dad('2017-12-13').ja.unix)
      .toBe(new Date('2017-12-13 00:00:00+09:00').getTime() / 1000);

    expect(ja('2017-12-13'))
      .toMatchObject(dad('2017-12-13').ja);
  });

  it('test indo', () => {
    expect(dad('2017-12-13').indo.time)
      .toBe(new Date('2017-12-13 00:00:00+07:00').getTime());

    expect(dad('2017-12-13').indo.unix)
      .toBe(new Date('2017-12-13 00:00:00+07:00').getTime() / 1000);

    expect(indo('2017-12-13'))
      .toMatchObject(dad('2017-12-13').indo);
  });

  it('invalid date format', () => {
    expect(() => {
      dad('2017/12/13');
    })
      .toThrowError('Invaild date string format');
  });
});
