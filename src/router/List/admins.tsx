import { lazy } from "react";
const Admins = lazy(() => import("../../views/Admins/Admins"));
const Rolls = lazy(() => import("../../views/Admins/Rolls"));
const NewRolls = lazy(() => import("../../views/Admins/Rolls/AddRolls"));
const RoutePage = lazy(() => import("../../views/Admins/RoutePage"));

export const adminList = [
  {
    parent: "admins",
    link: "admin",
    sidebar: true,
    title: "Adminlar",
    icon: "admin",
    element: <Admins />
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
    link: "rolls/create",
    sidebar: false,
    title: "Rol yaratish",
    icon: "",
    element: <NewRolls />,
    single_page: true
  },
  {
    parent: "admins",
    link: "rolls/:id",
    sidebar: false,
    title: "Rol tahrirlash",
    icon: "",
    element: <NewRolls />,
    single_page: true
  },
  {
    parent: "admins",
    link: "routes",
    sidebar: true,
    title: "Sahifalar",
    icon: "list-squared",
    element: <RoutePage />,
    permissions: ["add_permission", "delete_permisson"]
  },
  // {
  //   parent: "admins",
  //   link: "routes/:id",
  //   sidebar: false,
  //   title: "Route tahrirlash",
  //   icon: "",
  //   element: <RoutePage />,
  // },
  // {
  //   parent: "admins",
  //   link: "routes/create",
  //   sidebar: false,
  //   title: "Route yaratish",
  //   icon: "",
  //   element: <RoutePage />,
  // },
];
