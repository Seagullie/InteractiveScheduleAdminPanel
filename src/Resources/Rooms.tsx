import {
  ArrayField,
  ChipField,
  Create,
  CreateButton,
  Datagrid,
  Edit,
  List,
  SimpleForm,
  SingleFieldList,
  TextField,
  TextInput,
} from "react-admin";

const filters = [<TextInput source="name" label="Шукати" alwaysOn key={1} />];

export const RoomList = () => (
  <List filters={filters}>
    <Datagrid rowClick="edit">
      <TextField source="name" label="Назва" />
      {/* <ReferenceField source="lessonId" reference="Lesson" /> */}
      {/* <ArrayField source="lesson" label="Предмети">
        <SingleFieldList>
          <ChipField source="id" />
        </SingleFieldList>
      </ArrayField> */}
    </Datagrid>
  </List>
);

export const RoomEdit = () => {
  return (
    <Edit>
      <EditForm />
    </Edit>
  );
};

export const RoomCreate = () => {
  return (
    <Create>
      <EditForm />
    </Create>
  );
};

const EditForm = () => {
  return (
    <SimpleForm>
      <TextInput source="name" />
    </SimpleForm>
  );
};
