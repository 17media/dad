import prefix0 from './prefix0';

export interface IDadDate {
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

const secToDate = (tz = 8) => (sec = 0): IDadDate => {
  const D = new Date(sec * 1000);

  D.setTime(+D + tz * 60 * 60 * 1000);

  const year = D.getUTCFullYear();
  const month = D.getUTCMonth();
  const date = D.getUTCDate();
  const hours = D.getUTCHours();
  const minutes = D.getUTCMinutes();
  const seconds = D.getUTCSeconds();
  const day = D.getUTCDay();

  /**
   *
   * @param str - Format date string. default: `YYYY-MM-DDThh:mm:ss`
   */
  const format = (str = 'YYYY-MM-DDThh:mm:ss') =>
    str
      .replace(/[yY]+/, (Y) => String(year).slice(0 - Y.length))
      .replace(/M+/, (MM) => {
        const mm = month + 1;
        return MM.length > 1 ? prefix0(mm) : String(mm);
      })
      .replace(/D+/, (DD) => (DD.length > 1 ? prefix0(date) : String(date)))
      .replace(/h+/, (h) => (h.length > 1 ? prefix0(hours) : String(hours)))
      .replace(/m+/, (m) => (m.length > 1 ? prefix0(minutes) : String(minutes)))
      .replace(
        /s+/,
        (s) => (s.length > 1 ? prefix0(seconds) : String(seconds)),
      );

  return {
    year,
    month,
    date,
    hours,
    minutes,
    seconds,
    day,
    format,
    get ISO() {
      return this.format();
    },
  };
};

export default secToDate;
