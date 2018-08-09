import Dad from './libs/Dad';
import { IDadDate } from './utils/secToDate';

type InputValue = number | string;

const dad = (inputValue: InputValue) => new Dad(inputValue);

export default dad;
export { isToday } from './libs/isToday';
export { now } from './libs/now';

export const tw = (inputValue: InputValue): IDadDate | number =>
  dad(inputValue).tw;
export const hk = (inputValue: InputValue): IDadDate | number =>
  dad(inputValue).hk;
export const ja = (inputValue: InputValue): IDadDate | number =>
  dad(inputValue).ja;
// export const indo = (inputValue: InputValue) => dad(inputValue).indo;

exports = dad;
