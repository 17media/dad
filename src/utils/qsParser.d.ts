export interface QueryString {
    [key: string]: string;
}
declare const qsParser: (qString?: string) => QueryString;
export default qsParser;
