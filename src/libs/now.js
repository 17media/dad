import suffix00 from '../utils/suffix00';
import qsParser from '../utils/qsParser';
import isAuto from '../utils/isAuto';

let startTime;

const now = () => {
  const currentTime = Date.now();
  const qsDateTime = qsParser();

  if (typeof startTime === 'undefined') {
    startTime = currentTime;
  }

  const timeInterval = qsDateTime ? startTime - +new Date(suffix00(qsDateTime)) : 0;
  const timeDuration = qsDateTime && !isAuto() ? currentTime - startTime : 0;

  return currentTime - timeInterval - timeDuration;
};

export default now;

export {
  now,
};
