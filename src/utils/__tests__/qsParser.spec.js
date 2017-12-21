import qsParser from '../qsParser';

describe('qsParser spec', () => {
  it('test location.search spec', async () => {
    expect(qsParser('?foo=17&dad.now=2017-12-12 18:00&bar=media'))
      .toBe('2017-12-12 18:00');
  });

  it('Node env by cli', async () => {
    expect(qsParser('--foo&17&--dad.now=2017-12-12 00:00&--bar'))
      .toBe('2017-12-12 00:00');
  });

  it('test if no any args', async () => {
    expect(qsParser()).toBeFalsy();
  });

  it('test if argv is passed', async () => {
    process.argv = [null, null, '--foo', '17', '--dad.now=2017-12-12 19', '--bar'];
    expect(qsParser()).toBe('2017-12-12 19');
  });
});
