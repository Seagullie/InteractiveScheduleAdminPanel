import { Datagrid, List, TextField, UrlField } from "react-admin";
import { Edit, SimpleForm, TextInput } from "react-admin";

export const TeacherdepartmentList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="name" label="Назва" />
      <TextField source="abbreviation" label="Абревіація" />
      <UrlField source="link" label="Посилання" />
    </Datagrid>
  </List>
);

export const TeacherDepartmentEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" label="Назва" />
      <TextInput source="abbreviation" label="Абревіація" />
      <TextInput source="link" label="Посилання" />
    </SimpleForm>
  </Edit>
);

export const TeacherDepartmentCreate = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" label="Назва" />
      <TextInput source="abbreviation" label="Абревіація" />
      <TextInput source="link" label="Посилання" />
    </SimpleForm>
  </Edit>
);
