import qsParser from '../utils/qsParser';
import toSec from '../utils/toSec';
import isValidDateFormat from '../utils/isValidDateFormat';
import unifyTimeFormat from '../utils/unifyTimeFormat';

let startTime;

const now = () => {
  const currentTime = Date.now();
  const qs = qsParser();

  const dadNow = unifyTimeFormat(qs['dad.now'] || qs['--dad.now']);

  if (dadNow && !isValidDateFormat(dadNow)) {
    throw new Error('Invalid time format in dad.now.');
  }

  const isAuto = qs['--auto'] || qs.auto;

  if (typeof startTime === 'undefined') {
    startTime = currentTime;
  }

  const timeInterval = dadNow ? startTime - +new Date(dadNow) : 0;
  const timeDuration = dadNow && !isAuto ? currentTime - startTime : 0;

  const sec = toSec(currentTime - timeInterval - timeDuration);

  return sec;
};

export default now;

export {
  now,
};
