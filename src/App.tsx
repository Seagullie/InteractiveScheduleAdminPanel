import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
  CustomRoutes,
  fetchUtils,
} from "react-admin";
import { Route } from "react-router-dom";

import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import TopicIcon from "@mui/icons-material/Topic";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GroupIcon from "@mui/icons-material/Group";
import SchoolIcon from "@mui/icons-material/School";
import HomeIcon from "@mui/icons-material/Home";
import ScheduleIcon from "@mui/icons-material/Schedule";

import { Dashboard } from "./Pages/Dashboard";
import { authProvider } from "./Providers/AuthProvider";

import { SubjectCreate, SubjectEdit, SubjectList } from "./Resources/Subjects";
import {
  LessonList,
  LessonEdit,
  LessonShow,
  LessonCreate,
  getLessonRecordRepresentation,
} from "./Resources/Lessons";
import {
  TeacherCreate,
  TeacherEdit,
  TeacherList,
  getTeacherRecordRepresentation,
} from "./Resources/Teachers";
import { RoomCreate, RoomEdit, RoomList } from "./Resources/Rooms";
import { restProvider } from "./Providers/DataProvider";
import { i18nProvider } from "./Providers/i18nProvider";
import {
  ScheduleLessonCreate,
  ScheduleLessonEdit,
  SchedulelessonList,
  ScheduleLessonShow,
} from "./Resources/ScheduleLessons/ScheduleLessons";
import {
  StudentsGroupCreate,
  StudentsGroupEdit,
  StudentsGroupList,
} from "./Resources/StudentsGroups";
import {
  TeacherDepartmentCreate,
  TeacherDepartmentEdit,
  TeacherdepartmentList,
} from "./Resources/TeacherDepartments";
import { appThemeDark, appThemeLight } from "./Themes/Theme";

export const App = () => (
  <Admin
    // locale="ua"

    i18nProvider={i18nProvider}
    authProvider={authProvider}
    dataProvider={restProvider}
    // dashboard={Dashboard}
    theme={appThemeLight}
    darkTheme={appThemeDark}
  >
    <Resource
      name="ScheduleLesson"
      options={{ label: "Розклади" }}
      list={SchedulelessonList}
      edit={ScheduleLessonEdit}
      create={ScheduleLessonCreate}
      show={ScheduleLessonShow}
      recordRepresentation={"name"}
      icon={ScheduleIcon}
    />

    <Resource
      name="Lesson"
      options={{ label: "Пари" }}
      list={LessonList}
      edit={LessonEdit}
      show={LessonShow}
      create={LessonCreate}
      recordRepresentation={getLessonRecordRepresentation}
      icon={CastForEducationIcon}
    />

    <Resource
      name="Subject"
      options={{ label: "Предмети" }}
      list={SubjectList}
      edit={SubjectEdit}
      create={SubjectCreate}
      // show={ShowGuesser}
      recordRepresentation={"name"}
      icon={TopicIcon}
    />
    <Resource
      name="Room"
      options={{ label: "Аудиторії" }}
      list={RoomList}
      // show={ShowGuesser}
      edit={RoomEdit}
      create={RoomCreate}
      recordRepresentation={"name"}
      icon={LocationOnIcon}
    />

    <Resource
      name="StudentsGroup"
      options={{ label: "Групи" }}
      list={StudentsGroupList}
      edit={StudentsGroupEdit}
      create={StudentsGroupCreate}
      show={ShowGuesser}
      // create={CreateGue}
      recordRepresentation={"name"}
      icon={GroupIcon}
    />

    <Resource
      name={"Teacher"}
      options={{ label: "Викладачі" }}
      list={TeacherList}
      edit={TeacherEdit}
      create={TeacherCreate}
      show={ShowGuesser}
      // show={ShowGuesser}
      recordRepresentation={getTeacherRecordRepresentation}
      icon={SchoolIcon}
    />

    <Resource
      name="TeacherDepartment"
      options={{ label: "Кафедри" }}
      list={TeacherdepartmentList}
      edit={TeacherDepartmentEdit}
      create={TeacherDepartmentCreate}
      show={ShowGuesser}
      // create={CreateGue}
      recordRepresentation={"name"}
      icon={HomeIcon}
    />

    {/* doesn't work */}
    <CustomRoutes>
      <Route path="/segments" element={<div>Custom</div>} />
    </CustomRoutes>
  </Admin>
);
