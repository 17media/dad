import dad from './libs/dad';
import { DadDate } from './utils/secToDate';
import isToday from './libs/isToday';
import now from './libs/now';
export { now, isToday };
/**
 *
 * @param value date string YYYY-MM-DD hh:mm:ss (+08:00) | timestamp
 *
 */
export declare function tw(value: string): number;
export declare function tw(value: number): DadDate;
/**
 *
 * @param value date string YYYY-MM-DD hh:mm:ss (+09:00) | timestamp
 *
 */
export declare function ja(value: string): number;
export declare function ja(value: number): DadDate;
export declare const hk: typeof tw;
export default dad;
