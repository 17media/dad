import now from './now';

const isToday = (sec: number) => {
  const ms = sec * 1000;
  const dadNow = now();

  const currentDate = new Date(dadNow * 1000);

  return new Date(ms).toDateString() === currentDate.toDateString();
};

export default isToday;
