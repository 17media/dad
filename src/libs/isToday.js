import suffix00 from '../utils/suffix00';
import qsParser from '../utils/qsParser';

const isToday = (ms = 0) => {
  const qs = qsParser();
  const dadNow = qs['--dad.now'] || qs['dad.now'];

  const currentTime = dadNow
    ? new Date(suffix00(dadNow))
    : new Date();
  return new Date(ms).toDateString() === currentTime.toDateString();
};

export {
  isToday,
};

export default isToday;
