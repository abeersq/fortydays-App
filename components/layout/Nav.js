import { createStackNavigator } from "react-navigation";

import Menu from "./Menu";
import Course from "../Course";
import Register from "../Register";
import SendTask from "../tasks/SendTask";
import Tasks from "../tasks/Tasks";
import Header from "../user/Header";
export default createStackNavigator({
  menu: Menu,
  header: Header,
  course: Course,
  register: Register,
  sendtask: SendTask,
  tasks: Tasks
});
