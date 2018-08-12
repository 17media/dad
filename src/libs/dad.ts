import toSec from '../utils/toSec';
import secToDate, { DadDate } from '../utils/secToDate';
import isValidDateFormat from '../utils/isValidDateFormat';
import unifyTimeFormat from '../utils/unifyTimeFormat';

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
export function dad(value: string): DadTime;
export function dad(value: number): DadDateString;

export function dad(value: string | number) {
  if (!/^(string|number)$/.test(typeof value)) {
    throw new Error('Invalid type. it should be `string` | `number`');
  }

  let dateOrSec = value;

  if (typeof value === 'string') {
    dateOrSec = unifyTimeFormat(value);

    if (!isValidDateFormat(dateOrSec)) {
      throw new Error(
        'Invalid date string format, Please pass `YYYY-MM-DD HH:mm:ss`',
      );
    }

    return {
      get tw() {
        return toSec(new Date(`${dateOrSec}+08:00`));
      },
      get ja() {
        return toSec(new Date(`${dateOrSec}+09:00`));
      },
      get hk() {
        return this.tw;
      },
    };
  }

  return {
    get tw() {
      return secToDate(8)(dateOrSec as number);
    },
    get ja() {
      return secToDate(9)(dateOrSec as number);
    },
    get hk() {
      return this.tw;
    },
  };
}

export default dad;
