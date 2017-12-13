import { now } from '../now';

describe('now Test Spec', () => {
  it('test spec', async () => {
    const a = Date.now();
    const b = now();

    expect(a).toBe(b);
  });

  it('test if hand-code date and time', () => {
    process.argv = [null, null, '--foo', '17', '--daddy.now=2017-12-12 19:30', '--bar'];
    const a = +new Date('2017-12-12 19:30:00');
    const b = now();

    expect(a).toBe(b);
  });
});
