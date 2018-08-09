declare module 'ienv' {
  const isNode: boolean;
  const global: NodeJS.Global | Window;

  export { global, isNode };
}
