export interface IQueryString {
    [key: string]: string;
}
declare const qsParser: (qstring?: string) => IQueryString;
export default qsParser;
