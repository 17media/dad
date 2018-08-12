import now from '../now';

describe('now functionality', () => {
  it('should be equal to current time if no arguments', () => {
    const currentTime = now();
    const DateGeneratedCurrentTime = Math.floor(Date.now() / 1000);

    expect(currentTime).toBe(DateGeneratedCurrentTime);
  });

  it('should be equal to given time from arguments', () => {
    process.argv = [
      'null',
      'null',
      '--foo',
      '17',
      '--dad.now=2017-12-12 19:30',
      '--bar',
    ];
    const currentTime = now();
    const DateGeneratedTime = Math.floor(
      +new Date('2017-12-12 19:30:00') / 1000,
    );

    expect(currentTime).toBe(DateGeneratedTime);
  });

  it('should throw an error when dad.now time format is invalid', () => {
    process.argv = [
      'null',
      'null',
      '--foo',
      '17',
      '--dad.now=2017-12-12%adf2019:30',
      '--bar',
    ];
    expect(() => now()).toThrowError();
  });
});
