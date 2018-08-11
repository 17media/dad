import toSec from '../utils/toSec';
import secToDate, { IDadDate } from '../utils/secToDate';
import isValidDateFormat from '../utils/isValidDateFormat';
import unifyTimeFormat from '../utils/unifyTimeFormat';

export interface DadDate {
  readonly tw: IDadDate;
  readonly ja: IDadDate;
  readonly hk: IDadDate;
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
export function dad(value: number): DadDate;

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

// export interface DadConstructor {
//   // (value: string): DadInstanceTime;
//   // (value: number): DadInstanceDate;
// }

// const wm = new WeakMap();
// class Dad implements DadConstructor {
//   constructor(value: string | number) {
//     if (!/^(string|number)$/.test(typeof value)) {
//       throw new Error('Invaild type. it should be `string` | `number`');
//     }

//     let dateOrSec;

//     if (typeof value === 'string') {
//       dateOrSec = unifyTimeFormat(value);

//       if (!isValidDateFormat(dateOrSec)) {
//         throw new Error(
//           'Invaild date string format, Please pass `YYYY-MM-DD HH:mm:ss`',
//         );
//       }
//     } else {
//       dateOrSec = value;
//     }

//     const p = wm.set(this, {}).get(this);

//     p.dateOrSec = dateOrSec;
//   }

//   get ja() {
//     const p = wm.get(this);

//     if (typeof p.dateOrSec === 'number') {
//       return secToDate(9)(p.dateOrSec);
//     }

//     return toSec(new Date(`${p.dateOrSec}+09:00`));
//   }

//   get tw() {
//     const p = wm.get(this);

//     if (typeof p.dateOrSec === 'number') {
//       return secToDate(8)(p.dateOrSec);
//     }

//     return toSec(new Date(`${p.dateOrSec}+08:00`));
//   }

//   get hk() {
//     return this.tw;
//   }

//   // get indo(): number | IDadDate {
//   //   const p = wm.get(this);

//   //   if (typeof p.dateOrSec === 'number') {
//   //     return secToDate(7)(p.dateOrSec);
//   //   }

//   //   return toSec(new Date(`${p.dateOrSec}+07:00`));
//   // }
// }

// export default Dad;
