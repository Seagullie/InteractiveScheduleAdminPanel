import { TextInput, NumberInput, SelectInput } from "react-admin";
import { weekDayChoices, weekIndexChoices } from "./Constants";

export const filters = [
  <TextInput
    source="fullContext.studentsGroup.name"
    label="Група"
    alwaysOn
    key={2}
  />,
  <TextInput source="lesson.subject.name" label="Предмет" alwaysOn key={1} />,
  <NumberInput
    source="fullContext.timeContext.lessonIndex"
    label="N"
    // alwaysOn
    key={3}
  />,

  <SelectInput
    source="fullContext.timeContext.weekDay"
    choices={weekDayChoices}
    label="День"
    // alwaysOn
    key={4}
  />,
  <SelectInput
    source="fullContext.timeContext.weekIndex"
    choices={weekIndexChoices}
    label="Частота"
    // alwaysOn
    key={5}
  />,
];
