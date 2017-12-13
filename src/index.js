import Daddy from './libs/Daddy';

const daddy = (...args) => new Daddy(...args);

export default daddy;
export { isToday } from './libs/isToday';
export { now } from './libs/now';

export const tw = (...args) => daddy(...args).tw;
export const ja = (...args) => daddy(...args).ja;
export const indo = (...args) => daddy(...args).indo;
