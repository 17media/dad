const isBrowser = typeof window !== 'undefined';

const isNode = !isBrowser;

const env = isBrowser ? 'browser' : 'nodejs';

if (typeof global === 'undefined' && typeof window !== 'undefined') {
  global = window; // eslint-disable-line
}

export default env;
export { isNode, isBrowser };
