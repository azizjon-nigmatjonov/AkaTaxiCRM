import { lazy } from "react";
import Driver from "../../views/Drivers/Drivers/Driver";
import Drivers from "../../views/Drivers/Drivers";
import FotoControl from "../../views/Drivers/FotoControl";
import ActiveDrivers from "../../views/Drivers/Actives";
import Vehicles from "../../views/Drivers/Vehicles";
import Map from "../../views/Drivers/Map";
import RegionRoute from "../../views/Drivers/RegionRoute";
import DriverStatistics from "../../views/Drivers/Statistics";
const AddDriver = lazy(() => import("../../views/Drivers/Drivers/AddDriver"));
const FotoControlUser = lazy(() => import("../../views/Drivers/FotoControl/User"));
const SingleCar = lazy(() => import('../../views/Drivers/Vehicles/Car'))


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
  },
  {
    parent: 'drivers',
    link: 'main/add',
    sidebar: false,
    title: '',
    icon: '',
    element: <AddDriver />
  },
  {
    parent: 'drivers',
    link: 'active',
    sidebar: true,
    title: 'Aktiv',
    icon: 'smart_car',
    element: <ActiveDrivers />
  },
  {
    parent: 'drivers',
    link: 'cars/:id',
    sidebar: false,
    icon: '',
    title: '',
    element: <SingleCar />
  },
  {
    parent: 'drivers',
    link: 'cars',
    sidebar: true,
    icon: 'car',
    title: 'Mashinalar',
    element: <Vehicles />
  },
  {
    parent: 'drivers',
    link: 'maps',
    sidebar: true,
    title: 'Map',
    icon: 'map',
    element: <Map />
  },
  {
    parent: 'drivers',
    link: 'route',
    sidebar: true,
    title: 'Viloyat qatnovi',
    icon: 'routing',
    element: <RegionRoute />
  },
  {
    parent: 'drivers',
    link:'statisctics',
    sidebar: true,
    title: 'Statistika: haydovchi',
    icon: 'graph',
    element: <DriverStatistics/>
  },
 
];
