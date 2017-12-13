import suffix00 from '../utils/suffix00';
import qsParser from '../utils/qsParser';

const now = () => {
  let ts = Date.now();
  const qsDateTime = qsParser();

  if (qsDateTime) {
    ts = +new Date(suffix00(qsDateTime));
  }

  return ts;
};

export {
  now,
};
export default now;
