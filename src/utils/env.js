export const global = new Function('return this')(); // eslint-disable-line no-new-func
export const isBrowser = !!(typeof window === 'object' && window.document);
export const isNode =
  Object.prototype.toString.call(typeof process !== 'undefined' && process) ===
  '[object process]';
