import { lazy } from "react";
const Driver = lazy(() => import("../../views/Drivers/Drivers/Driver"));
const Drivers = lazy(() => import("../../views/Drivers/Drivers"));
const FotoControl = lazy(() => import("../../views/Drivers/FotoControl"));
const ActiveDrivers = lazy(() => import("../../views/Drivers/Actives"));
const Vehicles = lazy(() => import("../../views/Drivers/Vehicles"));
const Map = lazy(() => import("../../views/Drivers/Map"));
const RegionRoute = lazy(() => import("../../views/Drivers/RegionRoute"));
const DriverStatistics = lazy(() => import("../../views/Drivers/Statistics"));
const AddDriver = lazy(() => import("../../views/Drivers/Drivers/AddDriver"));
const FotoControlUser = lazy(
  () => import("../../views/Drivers/FotoControl/User")
);
const SingleCar = lazy(() => import("../../views/Drivers/Vehicles/Car"));
const DriverReminder = lazy(() => import("../../views/Drivers/Reminders"));

export const driverList = [
  {
    parent: "drivers",
    link: "main",
    sidebar: true,
    title: "Ro'yxat",
    icon: "driving",
    element: <Drivers />,
    permissions: ["name", "phone"],
  },
  {
    parent: "drivers",
    link: "main/create",
    sidebar: false,
    title: "Haydovchi qo'shish sahifasi",
    icon: "",
    element: <Driver />,
    single_page: true,
  },
  {
    parent: "drivers",
    link: "main/:id",
    sidebar: false,
    title: "Haydovchi ichki sahifasi",
    icon: "",
    element: <Driver />,
    permissions: ["payment"],
  },
  {
    parent: "drivers",
    link: "active",
    sidebar: true,
    title: "Aktiv haydovchilar",
    icon: "smart_car",
    element: <ActiveDrivers />,
    permissions: ["note"],
  },
  {
    parent: "drivers",
    link: "fotocontrolusers",
    sidebar: true,
    title: "Foto nazorat",
    icon: "FotoControl",
    element: <FotoControl />,
  },
  {
    parent: "drivers",
    link: "fotocontrolusers/:id",
    sidebar: false,
    title: "Foto nazorat ichki sahifa",
    icon: "",
    element: <FotoControlUser />,
    single_page: true,
  },
  {
    parent: "drivers",
    link: "main/add",
    sidebar: false,
    title: "Haydovchi qo'shish",
    icon: "",
    element: <AddDriver />,
    single_page: true,
  },
  {
    parent: "drivers",
    link: "cars",
    sidebar: true,
    icon: "car",
    title: "Mashinalar",
    element: <Vehicles />,
  },
  {
    parent: "drivers",
    link: "cars/:id",
    sidebar: false,
    icon: "",
    title: "Mashina ichki sahifasi",
    element: <SingleCar />,
  },
  {
    parent: "drivers",
    link: "maps",
    sidebar: true,
    title: "Xarita",
    icon: "map",
    element: <Map />,
  },
  {
    parent: "drivers",
    link: "route",
    sidebar: true,
    title: "Viloyat qatnovi",
    icon: "routing",
    element: <RegionRoute />,
  },
  {
    parent: "drivers",
    link: "statisctics",
    sidebar: true,
    title: "Statistika: haydovchi",
    icon: "graph",
    element: <DriverStatistics />,
  },
  {
    parent: "drivers",
    link: "reminder",
    sidebar: true,
    title: "Haydovchilar eslatma",
    icon: "reminder",
    element: <DriverReminder />,
  },
  {
    parent: "drivers",
    link: "reminder/:id",
    sidebar: false,
    title: "Haydovchilar eslatma",
    icon: "reminder",
    element: <DriverReminder />,
  },
];
