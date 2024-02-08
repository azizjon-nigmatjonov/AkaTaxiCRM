import { PartnersIcon } from "./Svg";
import {
  AdminsIcon,
  AdminIcon,
  StatisticsIcon,
  DrivingIcon,
  SmartCarIcon,
  CarIcon,
  RoutingIcon,
  GraphIcon,
  CalendarIcon,
  ChatIcon,
  RolsIcon,
  LockIcon,
} from "./Svg/Sidebar";

import { PassengerIcon, DriverIcon, PassengerVehicleIcon, DriverVehicleIcon } from './Svg'

export const iconsList = [
  {
    name: "admins",
    component: AdminsIcon,
  },
  {
    name: "admin",
    component: AdminIcon,
  },
  {
    name: "statistics",
    component: StatisticsIcon,
  },
  {
    name: "driving",
    component: DrivingIcon,
  },
  {
    name: "smart_car",
    component: SmartCarIcon,
  },
  {
    name: "car",
    component: CarIcon,
  },
  {
    name: "routing",
    component: RoutingIcon,
  },
  {
    name: "graph",
    component: GraphIcon,
  },
  {
    name: "calendar",
    component: CalendarIcon,
  },
  {
    name: "chat",
    component: ChatIcon,
  },
  {
    name: "rolls_icon",
    component: RolsIcon,
  },
  {
    name: 'lock',
    component: LockIcon
  },
  {
    name: 'partners',
    component: PartnersIcon
  },
  {
    name: 'bookings_count',
    component: DriverVehicleIcon
  },
  {
    name: 'driver_count',
    component: DriverIcon
  },
  {
    name: 'trip_count',
    component: PassengerVehicleIcon,
  },
  {
    name: 'passenger_count',
    component: PassengerIcon
  }

];

