import daddy from '../';

describe('Daddy Spec', () => {
  it('test tw', () => {
    expect(daddy('2017-12-13').tw.time)
      .toBe(new Date('2017-12-13 00:00:00+08:00').getTime());

    expect(daddy('2017-12-13').tw.unix)
      .toBe(new Date('2017-12-13 00:00:00+08:00').getTime() / 1000);
  });

  it('test ja', () => {
    expect(daddy('2017-12-13').ja.time)
      .toBe(new Date('2017-12-13 00:00:00+09:00').getTime());

    expect(daddy('2017-12-13').ja.unix)
      .toBe(new Date('2017-12-13 00:00:00+09:00').getTime() / 1000);
  });

  it('test indo', () => {
    expect(daddy('2017-12-13').indo.time)
      .toBe(new Date('2017-12-13 00:00:00+07:00').getTime());

    expect(daddy('2017-12-13').indo.unix)
      .toBe(new Date('2017-12-13 00:00:00+07:00').getTime() / 1000);
  });

  it('invalid date format', () => {
    expect(() => {
      daddy('2017/12/13');
    })
      .toThrowError('Invaild date string format');
  });
});
