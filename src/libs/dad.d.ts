import { DadDate } from '../utils/secToDate';
export interface DadDateString {
    readonly tw: DadDate;
    readonly ja: DadDate;
    readonly hk: DadDate;
}
export interface DadTime {
    readonly tw: number;
    readonly ja: number;
    readonly hk: number;
}
/**
 *
 * @param value date string YYYY-MM-DD hh:mm:ss | seconds<number>
 */
export declare function dad(value: string): DadTime;
export declare function dad(value: number): DadDateString;
export default dad;
