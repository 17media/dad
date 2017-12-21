import suffix00 from '../utils/suffix00';
import qsParser from '../utils/qsParser';

const isToday = (ms = 0) => {
  const qsDateTime = qsParser();
  const currentTime = qsDateTime
    ? new Date(suffix00(qsDateTime))
    : new Date();
  return new Date(ms).toDateString() === currentTime.toDateString();
};

export {
  isToday,
};

export default isToday;
