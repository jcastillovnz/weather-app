import { WEEKDAYS } from "../constans/weekdays";

export const convertDate = (date: string) => {
  const newDate = new Date(date);
  const weekDay = WEEKDAYS[newDate.getDay()];
  const day = newDate.getDate();
  const month = newDate.getMonth();
  const hour = newDate.toLocaleTimeString();
  return { weekDay, hour, day, month };
};
