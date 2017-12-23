import { isNode } from 'ienv';

const qsParser = (qstring = '') => {
  const qsObj = {};
  const qs = qstring || (
    isNode
      ? process.argv.slice(2).join('&')
      : global.location.search
  );

  if (qs) {
    qs.split('&').forEach((nameValue) => {
      const [name, value] = nameValue.split('=');
      Object.assign(qsObj, {
        [name]: typeof value === 'undefined' ? true : value,
      });
    });
  }

  return qsObj;
};

export default qsParser;
