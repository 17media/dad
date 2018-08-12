export interface DadDate {
    year: number;
    month: number;
    date: number;
    hours: number;
    minutes: number;
    seconds: number;
    day: number;
    ISO: string;
    format: (str?: string) => string;
}
declare const secToDate: (tz?: number) => (sec?: number) => DadDate;
export default secToDate;
