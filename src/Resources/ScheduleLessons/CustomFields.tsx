import { useRecordContext } from "react-admin";
import { ScheduleLessonForReadDto } from "schedule-server-api-client";
import { WEEK_DAY_NAMES, LESSON_FREQUENCIES } from "../../Constants";

export const WeekDayTextField = ({ label }: { label: string }) => {
  const record: ScheduleLessonForReadDto = useRecordContext();
  console.log(record);

  let weekDay = record?.fullContext?.timeContext?.weekDay;

  if (weekDay == undefined) {
    return <span>Завантаження...</span>;
  }

  // map week index to name representation
  const weekDayName = WEEK_DAY_NAMES[weekDay];

  return <span>{weekDayName}</span>;
};

export const WeekIndexTextField = ({ label }: { label: string }) => {
  const record: ScheduleLessonForReadDto = useRecordContext();
  console.log(record);

  let weekIndex = record?.fullContext?.timeContext?.weekIndex;

  if (weekIndex == undefined) {
    return <span>Завантаження...</span>;
  }

  // map week index to name representation
  const weekIndexName = LESSON_FREQUENCIES[weekIndex];

  return <span>{weekIndexName}</span>;
};
