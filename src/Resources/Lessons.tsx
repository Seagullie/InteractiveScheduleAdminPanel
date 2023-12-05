import {
  AutocompleteInput,
  Create,
  CreateButton,
  Datagrid,
  DeleteButton,
  Edit,
  EditButton,
  List,
  NumberField,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
  useRecordContext,
} from "react-admin";
import { Show, SimpleShowLayout } from "react-admin";
import { LessonForReadDto } from "schedule-server-api-client";

// TODO: fix sorting

const filters = [
  <TextInput source="subject.name" label="Предмет" alwaysOn key={1} />,
  <TextInput source="room.name" label="Аудиторія" alwaysOn key={2} />,
  <TextInput source="teacher.lastName" label="Викладач" alwaysOn key={3} />,
];

export const LessonList = () => {
  return (
    <List filters={filters}>
      <Datagrid rowClick="show">
        {/* <TextField source="id" /> */}
        {/* note: value of reference prop is case sensitive */}
        <ReferenceField
          reference="Subject"
          source="subject.id"
          label="Предмет"
          sortBy="subject.name"
        />
        <ReferenceField
          source="room.id"
          reference="Room"
          sortBy="room.name"
          label="Аудиторія"
        />
        <ReferenceField
          source="teacher.id"
          reference="Teacher"
          sortBy="teacher.lastName"
          label="Викладач"
        />
        <TextField source="classType" label="Тип пари" />

        {/* <DeleteButton /> */}
        <EditButton />
        {/* <CreateButton /> */}
      </Datagrid>
    </List>
  );
};

export const LessonShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="classType" />
      <TextField source="subject.name" />
      <TextField source="teacher.lastName" />
      <TextField source="room.name" />
    </SimpleShowLayout>
  </Show>
);

const filterToQuery = (searchText: string) => ({ Name: searchText });

export const LessonEdit = () => {
  return (
    <Edit>
      <EditForm />
    </Edit>
  );
};

export const LessonCreate = () => {
  return (
    <Create>
      <EditForm />
    </Create>
  );
};

const EditForm = () => {
  const classTypeChoices = [
    { id: 0, name: "Лекція" },
    { id: 1, name: "Практична" },
    { id: 2, name: "Лабораторна" },
  ];

  const shortClassTypeToId = {
    "лек.": 0,
    "практ.": 1,
    "лаб.": 2,
  };

  const record = useRecordContext();
  console.log(record);

  const classTypeId = shortClassTypeToId[record?.classType];
  // wait for record to load
  if (classTypeId !== undefined && classTypeId !== null) {
    // patch record's classType to make it compatible with SelectInput
    record.classType = classTypeId;
  }

  return <BaseForm classTypeChoices={classTypeChoices} record={record} />;
};

const BaseForm = (props: {
  classTypeChoices: { id: number; name: string }[];
  record: any;
}) => {
  const record = props.record;

  return (
    <SimpleForm>
      {/* <ReferenceInput source="userId" reference="users" />
      <TextInput source="title" />
      <TextInput source="body" multiline rows={5} /> */}

      <SelectInput
        defaultValue={record?.classType}
        source="classType"
        choices={props.classTypeChoices}
      />
      <ReferenceInput source="SubjectId" reference="Subject">
        <AutocompleteInput
          defaultValue={record?.subject?.id}
          filterToQuery={filterToQuery}
          fullWidth
        />
      </ReferenceInput>
      <ReferenceInput source="roomId" reference="Room">
        <AutocompleteInput defaultValue={record?.room?.id} />
      </ReferenceInput>
      <ReferenceInput source="teacherId" reference="Teacher">
        <AutocompleteInput
          source="id"
          filterToQuery={filterToQuery}
          defaultValue={record?.teacher?.id}
        />
      </ReferenceInput>
    </SimpleForm>
  );
};

export const getLessonRecordRepresentation = (record: LessonForReadDto) => {
  const roomName = record.room?.name ?? "";
  const subjectName = record.subject?.name ?? "";
  const teacherLastName = record.teacher?.lastName ?? "";

  const bits = [roomName, subjectName, teacherLastName].filter(
    (x) => x.length > 0
  );

  return bits.join(", ");
};
