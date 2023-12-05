import {
  Datagrid,
  Edit,
  List,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";

const filters = [<TextInput source="name" label="Шукати" alwaysOn key={1} />];

export const StudentsGroupList = () => (
  <List filters={filters}>
    <Datagrid rowClick="edit">
      <TextField source="name" label="Назва" />
    </Datagrid>
  </List>
);

export const StudentsGroupEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" label="Назва" />
    </SimpleForm>
  </Edit>
);

export const StudentsGroupCreate = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" label="Назва" />
    </SimpleForm>
  </Edit>
);
