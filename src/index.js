import Dad from './libs/Dad';

const dad = (...args) => new Dad(...args);

export default dad;
export { isToday } from './libs/isToday';
export { now } from './libs/now';

export const tw = (...args) => dad(...args).tw;
export const hk = (...args) => dad(...args).hk;
export const ja = (...args) => dad(...args).ja;
export const indo = (...args) => dad(...args).indo;
