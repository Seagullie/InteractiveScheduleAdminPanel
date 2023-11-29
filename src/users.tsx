// in src/users.tsx
import { useMediaQuery, Theme } from "@mui/material";
import { List, Datagrid, TextField, EmailField, SimpleList } from "react-admin";
import MyUrlField from "./MyUrlField";

export const UserList = () => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));

  const viewForMobile = (
    <SimpleList
      primaryText={(record) => record.name}
      secondaryText={(record) => record.username}
      tertiaryText={(record) => record.email}
    />
  );

  const viewForDesktop = (
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="address.street" />
      <MyUrlField source="website" />
      <TextField source="company.name" />
      <TextField source="company.catchPhrase" />
    </Datagrid>
  );

  const viewToRender = isSmall ? viewForMobile : viewForDesktop;

  return <List>{viewToRender}</List>;
};
