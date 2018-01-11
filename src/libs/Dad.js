import toSec from '../utils/toSec';
import secToDate from '../utils/secToDate';
import isValidDateFormat from '../utils/isValidDateFormat';
import unifyTimeFormat from '../utils/unifyTimeFormat';


const wm = new WeakMap();
export default class Dad {
  /**
   * @param {String | Number} dateOrSec
   */
  constructor(inputValue) {
    if (!/^(string|number)$/.test(typeof inputValue)) {
      throw new Error('Invaild type. it should be `string` | `number`');
    }

    let dateOrSec;

    if (typeof inputValue === 'string') {
      dateOrSec = unifyTimeFormat(inputValue);

      if (!isValidDateFormat(dateOrSec)) {
        throw new Error('Invaild date string format, Please pass `YYYY-MM-DD HH:mm:ss`');
      }
    } else {
      dateOrSec = inputValue;
    }

    const p = wm.set(this, {}).get(this);

    p.dateOrSec = dateOrSec;
  }

  get ja() {
    const p = wm.get(this);

    if (typeof p.dateOrSec === 'number') {
      return secToDate(9)(p.dateOrSec);
    }

    return toSec(new Date(`${p.dateOrSec}+09:00`));
  }

  get tw() {
    const p = wm.get(this);

    if (typeof p.dateOrSec === 'number') {
      return secToDate(8)(p.dateOrSec);
    }

    return toSec(new Date(`${p.dateOrSec}+08:00`));
  }

  get hk() {
    return this.tw;
  }

  get indo() {
    const p = wm.get(this);

    if (typeof p.dateOrSec === 'number') {
      return secToDate(7)(p.dateOrSec);
    }

    return toSec(new Date(`${p.dateOrSec}+07:00`));
  }
}
