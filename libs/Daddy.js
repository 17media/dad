import suffix00 from '../utils/suffix00';

const dateForamtRE = /^\d{4}-\d{2}-\d{2}([\sT]\d{2})?(:\d{2})?(:\d{2})?/;

const getTime = (Date) => {
  const time = +Date;
  return {
    time,
    unix: time / 1000,
  };
};

const wm = new WeakMap();
export default class Daddy {
  constructor(date) {
    if (!dateForamtRE.test(date)) {
      throw new Error('Invaild date string format, Please pass `YYYY-MM-DD HH:mm:ss`');
    }

    const p = wm.set(this, {}).get(this);

    p.date = date;
  }

  get ja() {
    const p = wm.get(this);

    return getTime(new Date(`${suffix00(p.date)}+09:00`));
  }

  get tw() {
    const p = wm.get(this);

    return getTime(new Date(`${suffix00(p.date)}+08:00`));
  }

  get indo() {
    const p = wm.get(this);

    return getTime(new Date(`${suffix00(p.date)}+07:00`));
  }
}
