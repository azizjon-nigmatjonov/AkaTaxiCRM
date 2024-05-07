import Driver from "../../views/Drivers/Drivers/Driver";
import Drivers from "../../views/Drivers/Drivers";

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
    link: "main",
    childlink: "driver",
    sidebar: false,
    title: "",
    icon: "",
    element: <Driver />
  },
];
