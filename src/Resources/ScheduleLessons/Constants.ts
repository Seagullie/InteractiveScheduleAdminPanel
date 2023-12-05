import { LESSON_FREQUENCIES, WEEK_DAY_NAMES } from "../../Constants";

let weekDayChoices = WEEK_DAY_NAMES.map((dayName, index) => {
  return { id: index, name: dayName };
});
weekDayChoices = weekDayChoices.filter(
  (day) => day.name !== "Неділя" && day.name !== "Субота"
);

export { weekDayChoices };

export const weekIndexChoices = LESSON_FREQUENCIES.map((frequency, index) => {
  return { id: index, name: frequency };
});
