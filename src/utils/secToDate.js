/**
 * @param {Number} tz
 * @return {Date}
 */
const secToDate = tz => (sec = 0) => {
  const D = new Date(sec * 1000);

  D.setTime(+D + (tz * 60 * 60 * 1000));

  return {
    year: D.getUTCFullYear(),
    month: D.getUTCMonth(),
    date: D.getUTCDate(),
    hours: D.getUTCHours(),
    minutes: D.getUTCMinutes(),
    seconds: D.getUTCSeconds(),
    day: D.getUTCDay(),
  };
};

export default secToDate;
