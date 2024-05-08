import { lazy } from "react";
import Driver from "../../views/Drivers/Drivers/Driver";
import Drivers from "../../views/Drivers/Drivers";
import FotoControl from "../../views/Drivers/FotoControl";
const FotoControlUser = lazy(() => import("../../views/Drivers/FotoControl/User"));

export const driverList = [
  {
    parent: "drivers",
    link: "main",
    sidebar: true,
    title: "Haydovchilar",
    icon: "driving",
    element: <Drivers />,
  },
  {
    parent: "drivers",
    link: "main/create",
    sidebar: false,
    title: "",
    icon: "",
    element: <Driver />
  },
  {
    parent: "drivers",
    link: "main/:id",
    sidebar: false,
    title: "",
    icon: "",
    element: <Driver />
  },
  {
    parent: "drivers",
    link: "fotocontrolusers",
    sidebar: true,
    title: "Foto nazorat",
    icon: "FotoControl",
    element: <FotoControl />
  },
  {
    parent: "drivers",
    link: "fotocontroluser/:id",
    sidebar: false,
    title: "Foto nazorat",
    icon: "",
    element: <FotoControlUser />
  }
];
