import prefix0 from './prefix0';

/**
 * @param {Number} tz
 * @return {Date}
 */
const secToDate = tz => (sec = 0) => {
  const D = new Date(sec * 1000);

  D.setTime(+D + (tz * 60 * 60 * 1000));

  const date = {
    year: D.getUTCFullYear(),
    month: D.getUTCMonth(),
    date: D.getUTCDate(),
    hours: D.getUTCHours(),
    minutes: D.getUTCMinutes(),
    seconds: D.getUTCSeconds(),
    day: D.getUTCDay(),
  };

  date.format = (str = '') => str
    .replace(/[yY]+/, Y => String(date.year).slice(0 - Y.length))
    .replace(/M+/, (MM) => {
      const mm = date.month + 1;
      return (MM.length > 1 ? prefix0(mm) : mm);
    })
    .replace(/D+/, DD => (DD.length > 1 ? prefix0(date.date) : date.date))
    .replace(/h+/, h => (h.length > 1 ? prefix0(date.hours) : date.hours))
    .replace(/m+/, h => (h.length > 1 ? prefix0(date.minutes) : date.minutes))
    .replace(/s+/, h => (h.length > 1 ? prefix0(date.seconds) : date.seconds));

  date.ISO = date.format('YYYY-MM-DDThh:mm:ss');

  return date;
};

export default secToDate;
