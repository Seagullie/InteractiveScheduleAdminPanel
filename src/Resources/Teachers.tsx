import {
  Create,
  Datagrid,
  EmailField,
  List,
  NumberField,
  ReferenceField,
  ShowButton,
  TextField,
} from "react-admin";

import { Edit, NumberInput, SimpleForm, TextInput } from "react-admin";
import { TeacherForReadDto } from "schedule-server-api-client";

const filters = [
  // <TextInput source="q" label="Шукати" alwaysOn key={1} />,
  <TextInput source="lastName" label="Прізвище" alwaysOn key={1} />,
  // <ReferenceInput source="userId" label="User" reference="users" key={2} />,
];

export const TeacherList = () => (
  <List filters={filters}>
    <Datagrid rowClick="show">
      <TextField source="lastName" label="Прізвище" />
      <TextField source="firstName" label="Ім'я" />
      <TextField source="middleName" label="По батькові" />
      <EmailField source="email" label="Пошта" />
      <TextField source="qualifications" label="Звання" />
      {/* <NumberField source="department.name" label="Кафедра" /> */}
      <ReferenceField
        source="department.id"
        reference="TeacherDepartment"
        label="Кафедра"
      />
    </Datagrid>
    {/* <AddItemButton /> */}
    <ShowButton />
  </List>
);

export const TeacherEdit = () => (
  <Edit>
    <EditForm />
  </Edit>
);
export const TeacherCreate = () => (
  <Create>
    <EditForm />
  </Create>
);

const EditForm = () => {
  return (
    <SimpleForm>
      <TextInput source="firstName" />
      <TextInput source="lastName" />
      <TextInput source="middleName" />
      <TextInput source="email" />
      <TextInput source="qualifications" />
      <NumberInput source="department.id" />
    </SimpleForm>
  );
};

export const getTeacherRecordRepresentation = (record: TeacherForReadDto) => {
  const lastName = record.lastName ?? "";

  return lastName;

  // const firstName = record.firstName ?? "";
  // const middleName = record.middleName ?? "";

  // const bits = [lastName, firstName, middleName].filter((x) => x.length > 0);
  // return bits.join(" ");
};
