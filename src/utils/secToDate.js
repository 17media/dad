/**
 * @param {number} tz
 */
const secToDate = tz => (sec = 0) => {
  const D = new Date(sec * 1000);

  D.setTime(+D + (tz * 60 * 60 * 1000));

  return D;
};

export default secToDate;
