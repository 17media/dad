const prefix0 = (stringOfNumber: number | string): string => {
  const n = String(stringOfNumber);

  if (n.length < 2) {
    return `0${n}`;
  }

  return n;
};

export default prefix0;
