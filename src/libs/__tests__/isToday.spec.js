import { isToday } from '../isToday';

describe('isToday Spec', () => {
  it('test today', async () => {
    expect(isToday(new Date() / 1000)).toBe(true);
  });

  it('test is not today', async () => {
    const D = new Date();
    D.setDate(D.getDate() + 1);
    expect(isToday(D / 1000)).toBe(false);
  });
});
