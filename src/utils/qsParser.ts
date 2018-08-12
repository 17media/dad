import { isNode } from 'ienv';

export interface QueryString {
  [key: string]: string;
}

const qsParser = (qString = ''): QueryString => {
  const qsObj = {};
  const qs =
    qString ||
    (isNode
      ? process.argv.slice(2).join('&')
      : decodeURIComponent(window.location.search.slice(1)));

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
