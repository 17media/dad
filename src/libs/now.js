import suffix00 from '../utils/suffix00';
import qsParser from '../utils/qsParser';
import toSec from '../utils/toSec';

let startTime;

const now = () => {
  const currentTime = Date.now();
  const qs = qsParser();

  const dadNow = qs['dad.now'] || qs['--dad.now'];
  const isAuto = qs['--auto'] || qs.auto;

  if (typeof startTime === 'undefined') {
    startTime = currentTime;
  }

  const timeInterval = dadNow ? startTime - +new Date(suffix00(dadNow)) : 0;
  const timeDuration = dadNow && !isAuto ? currentTime - startTime : 0;

  const sec = toSec(currentTime - timeInterval - timeDuration);

  return sec;
};

export default now;

export {
  now,
};
