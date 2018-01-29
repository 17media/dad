/**
 * @param {Number} tz
 * @return {Date}
 */
const secToDate = (sec = 0) => {
  const D = new Date(sec * 1000);

  return D;
};

export default secToDate;
