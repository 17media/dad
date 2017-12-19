import { now } from '../now';

describe('now functionality', () => {
  it('should be equal to current time if no arguments', () => {
    const currentTime = now();
    const DateGeneratedCurrentTime = Date.now();

    expect(currentTime).toBeLessThanOrEqual(DateGeneratedCurrentTime);
  });

  it('should be equal to given time from arguments', () => {
    process.argv = [null, null, '--foo', '17', '--dad.now=2017-12-12 19:30', '--bar'];
    const currentTime = now();
    const DateGeneratedTime = +new Date('2017-12-12 19:30:00');

    expect(currentTime).toBe(DateGeneratedTime);
  });
});
