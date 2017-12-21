import { isNode } from './env';

const isAuto = () => (isNode
  ? process.argv.indexOf('--auto') !== -1
  : global.location.search.indexOf('auto=true') !== -1);

export default isAuto;
