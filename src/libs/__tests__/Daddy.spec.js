import daddy, { tw, ja, indo } from '../../';

describe('Daddy Spec', () => {
  it('test tw', () => {
    expect(daddy('2017-12-13').tw.time)
      .toBe(new Date('2017-12-13 00:00:00+08:00').getTime());

    expect(daddy('2017-12-13').tw.unix)
      .toBe(new Date('2017-12-13 00:00:00+08:00').getTime() / 1000);

    expect(tw('2017-12-13'))
      .toMatchObject(daddy('2017-12-13').tw);
  });

  it('test ja', () => {
    expect(daddy('2017-12-13').ja.time)
      .toBe(new Date('2017-12-13 00:00:00+09:00').getTime());

    expect(daddy('2017-12-13').ja.unix)
      .toBe(new Date('2017-12-13 00:00:00+09:00').getTime() / 1000);

    expect(ja('2017-12-13'))
      .toMatchObject(daddy('2017-12-13').ja);
  });

  it('test indo', () => {
    expect(daddy('2017-12-13').indo.time)
      .toBe(new Date('2017-12-13 00:00:00+07:00').getTime());

    expect(daddy('2017-12-13').indo.unix)
      .toBe(new Date('2017-12-13 00:00:00+07:00').getTime() / 1000);

    expect(indo('2017-12-13'))
      .toMatchObject(daddy('2017-12-13').indo);
  });

  it('invalid date format', () => {
    expect(() => {
      daddy('2017/12/13');
    })
      .toThrowError('Invaild date string format');
  });

  it('test daddy.now', async () => {

  });
});
