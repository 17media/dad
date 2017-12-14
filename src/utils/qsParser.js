const global = new Function('return this')(); // eslint-disable-line no-new-func
const parseRE = /\b(--)?dad\.now=([^&]+)/;

export default (qstring = '') => {
  let qs = qstring;

  if (!qs) {
    if (global.location) {
      qs = global.location.search;
    } else {
      qs = process.argv.slice(2).join('&');
    }
  }

  return parseRE.test(qs) && RegExp.$2;
};
