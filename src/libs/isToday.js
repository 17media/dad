const isToday = (unixTimestamp = 0) =>
  new Date(unixTimestamp * 1000).toDateString() === new Date().toDateString();

export {
  isToday,
};

export default isToday;
