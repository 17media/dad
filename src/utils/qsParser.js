const global = (1, eval)('this'); // eslint-disable-line no-eval
const parseRE = /\b(--)?daddy\.now=([^&]+)/;

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
