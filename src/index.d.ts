import Dad from './libs/Dad';
import { IDadDate } from './utils/secToDate';
declare const dad: (inputValue: string | number) => Dad;
export default dad;
export { isToday } from './libs/isToday';
export { now } from './libs/now';
export declare const tw: (inputValue: string | number) => number | IDadDate;
export declare const hk: (inputValue: string | number) => number | IDadDate;
export declare const ja: (inputValue: string | number) => number | IDadDate;
