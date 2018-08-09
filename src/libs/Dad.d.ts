import { IDadDate } from '../utils/secToDate';
export default class Dad {
    constructor(inputValue: string | number);
    readonly ja: number | IDadDate;
    readonly tw: number | IDadDate;
    readonly hk: number | IDadDate;
}
