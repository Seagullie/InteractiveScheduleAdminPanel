import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Edit,
  ReferenceInput,
  SimpleForm,
  TextInput,
  Create,
  useRecordContext,
} from "react-admin";
const subjectFilters = [
  // <TextInput source="q" label="Шукати" alwaysOn key={1} />,
  <TextInput source="name" label="Шукати" alwaysOn key={3} />,
  // <ReferenceInput source="userId" label="User" reference="users" key={2} />,
];

export const SubjectList = () => (
  <List filters={subjectFilters}>
    <Datagrid rowClick="edit">
      {/* <TextField source="id" /> */}
      <TextField source="name" label="Назва" />
    </Datagrid>
  </List>
);

export const SubjectEdit = () => (
  <Edit>
    <EditForm />
  </Edit>
);

export const SubjectCreate = () => (
  <Create>
    <EditForm />
  </Create>
);

const EditForm = () => {
  const record = useRecordContext();
  return (
    <SimpleForm>
      <TextInput source="name" fullWidth />
    </SimpleForm>
  );
};
