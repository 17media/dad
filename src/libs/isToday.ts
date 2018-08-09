import { now } from './now';

const isToday = (sec = 0) => {
  const ms = sec * 1000;
  const dadNow = now();

  const currentDate = new Date(dadNow * 1000);

  return new Date(ms).toDateString() === currentDate.toDateString();
};

export { isToday };

export default isToday;
