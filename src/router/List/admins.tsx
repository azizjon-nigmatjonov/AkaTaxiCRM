import Admins from "../../views/Admins/Admins";
import Rolls from "../../views/Admins/Rolls";
import NewRolls from "../../views/Admins/Rolls/AddRolls";
import { RoutePage } from "../../views/Admins/RoutePage";

export const adminList = [
  {
    parent: "admins",
    link: "admin",
    sidebar: true,
    title: "Adminlar",
    icon: "admin",
    element: <Admins />,
  },
  {
    parent: "admins",
    link: "rolls",
    sidebar: true,
    title: "Rollar",
    icon: "rolls_icon",
    element: <Rolls />,
  },
  {
    parent: "admins",
    link: "rolls/new_rolls",
    sidebar: false,
    title: "Yangi rollar",
    icon: "",
    element: <NewRolls />,
  },
  {
    parent: "admins",
    link: "rolls/create",
    sidebar: false,
    title: "Rol yaratish",
    icon: "",
    element: <NewRolls />,
  },
  {
    parent: "admins",
    link: "rolls/:id",
    sidebar: false,
    title: "Rol tahrirlash",
    icon: "",
    element: <NewRolls />,
  },
  {
    parent: "admins",
    link: "routes",
    sidebar: true,
    title: "Routes",
    icon: "list-squared",
    element: <RoutePage />,
  },
  {
    parent: "admins",
    link: "routes/:id",
    sidebar: false,
    title: "Route tahrirlash",
    icon: "",
    element: <RoutePage />,
  },
  {
    parent: "admins",
    link: "routes/create",
    sidebar: false,
    title: "Route yaratish",
    icon: "",
    element: <RoutePage />,
  },
];
