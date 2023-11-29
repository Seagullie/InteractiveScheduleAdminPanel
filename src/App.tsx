import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
  CustomRoutes,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { UserList } from "./users";
import { PostCreate, PostEdit, PostList } from "./posts";
import { Route } from "react-router-dom";

import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { Dashboard } from "./Dashboard";
import { authProvider } from "./authProvider";

import polyglotI18nProvider from "ra-i18n-polyglot";
import ukrainianMessages from "ra-language-ukrainian";

const i18nProvider = polyglotI18nProvider(() => ukrainianMessages, "ua");

export const App = () => (
  <Admin
    // locale="ua"
    i18nProvider={i18nProvider}
    authProvider={authProvider}
    dataProvider={dataProvider}
    dashboard={Dashboard}
  >
    <Resource
      name="posts"
      options={{ label: "Публікації" }}
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
    <Resource
      name="users"
      options={{ label: "Користувачі" }}
      list={UserList}
      show={ShowGuesser}
      recordRepresentation="name"
      icon={UserIcon}
    />
    <CustomRoutes>
      <Route path="/segments" element={<div>Custom</div>} />
    </CustomRoutes>
  </Admin>
);
