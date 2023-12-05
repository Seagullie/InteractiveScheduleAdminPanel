import {
  AutocompleteInput,
  Create,
  Datagrid,
  DeleteButton,
  EditButton,
  List,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  Show,
  SimpleShowLayout,
  TextField,
  useRecordContext,
} from "react-admin";
import { Edit, NumberInput, SimpleForm } from "react-admin";

import { ScheduleLessonForReadDto } from "schedule-server-api-client";
import { WeekDayTextField, WeekIndexTextField } from "./CustomFields";
import {
  ScheduleLessonForReadDtoToWriteDto,
  ScheduleLessonFormToWriteDto,
} from "./Mappers";
import { filters } from "./Filters";
import { weekIndexChoices, weekDayChoices } from "./Constants";

export const SchedulelessonList = () => {
  return (
    <List filters={filters}>
      <ScheduleLessonDatagrid />
    </List>
  );
};

const ScheduleLessonDatagrid = () => {
  const record = useRecordContext();
  console.log(record);

  return (
    <Datagrid rowClick="show">
      <ReferenceField
        label="Пара"
        reference="Lesson"
        source="lesson.id"
        sortBy="lesson.subject.name"
      />
      <ReferenceField
        reference="StudentsGroup"
        source="fullContext.studentsGroup.id"
        label="Група"
        sortBy="fullContext.studentsGroup.name"
      />

      <WeekDayTextField label={"День"} />

      <TextField
        label="Пара, N"
        source="fullContext.timeContext.lessonIndex"
        // sortBy=
      />

      <WeekIndexTextField label={"Частота"} />

      <EditButton />
      {/* <DeleteButton /> */}
    </Datagrid>
  );
};

export const ScheduleLessonShow = () => (
  <Show>
    <SimpleShowLayout>
      <ReferenceField source="lesson.id" reference="Lesson" label="Пара" />
      <ReferenceField
        source="fullContext.studentsGroup.id"
        reference="StudentsGroup"
        label="Група"
      />

      <WeekDayTextField label={"День"} />
      <TextField source="fullContext.timeContext.lessonIndex" label="N" />
      <WeekIndexTextField label={"Частота"} />
    </SimpleShowLayout>
  </Show>
);

export const ScheduleLessonEdit = () => {
  return (
    <Edit transform={ScheduleLessonForReadDtoToWriteDto}>
      <EditForm />
    </Edit>
  );
};

export const ScheduleLessonCreate = () => {
  return (
    <Create transform={ScheduleLessonFormToWriteDto}>
      <EditForm />
    </Create>
  );
};

function EditForm() {
  const record: ScheduleLessonForReadDto = useRecordContext();

  return (
    <SimpleForm>
      {/* lesson: */}
      <ReferenceInput source="lessonId" reference="Lesson">
        <AutocompleteInput
          defaultValue={record?.lesson?.id}
          //   filterToQuery={filterToQuery}
          fullWidth
        />
      </ReferenceInput>
      {/* full context: */}
      <ReferenceInput
        source="fullContext.studentsGroup.id"
        reference="StudentsGroup"
      >
        <AutocompleteInput
          defaultValue={record?.fullContext?.studentsGroup?.id}
        />
      </ReferenceInput>
      {/* time context: */}
      <SelectInput
        source="fullContext.timeContext.weekIndex"
        choices={weekIndexChoices}
        label="Частота"
      />
      <SelectInput
        source="fullContext.timeContext.weekDay"
        choices={weekDayChoices}
        label="День"
      />
      <NumberInput source="fullContext.timeContext.lessonIndex" label="N" />
    </SimpleForm>
  );
}
