export interface IDadDate {
    year: number;
    month: number;
    date: number;
    hours: number;
    minutes: number;
    seconds: number;
    day: number;
    ISO: string;
    format: (str: string) => string;
}
declare const secToDate: (tz?: number) => (sec?: number) => IDadDate;
export default secToDate;
