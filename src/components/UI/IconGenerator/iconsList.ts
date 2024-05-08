import {
  AdminsIcon,
  DrivingIcon,
  SmartCarIcon,
  CarIcon,
  RoutingIcon,
  GraphIcon,
  CalendarIcon,
  ChatIcon,
  RolsIcon,
  LockIcon,
  StatisticsIcon,
  SmsIcon,
  MapIcon,
  Dashboard,
  FotoControl,
  Notifications,
  // MessagesIconIcon,
  SMSIcon,
  NewsIcon,
  ListIcon,
  HeadPhones,
  AdminIcon,
} from "./Svg/Sidebar";

import { PassengerIcon, DriverIcon, PassengerVehicleIcon, DriverVehicleIcon, PartnersIcon } from "./Svg";

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
    name: "driving",
    component: DrivingIcon,
  },
  {
    name: "statistics",
    component: StatisticsIcon,
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
    name: "price_control",
    component: LockIcon,
  },
  {
    name: "partners",
    component: PartnersIcon
  },
  {
    name: "bookings_count",
    component: DriverVehicleIcon,
  },
  {
    name: "driver_count",
    component: DriverIcon,
  },
  {
    name: "trip_count",
    component: PassengerVehicleIcon,
  },
  {
    name: "passenger_count",
    component: PassengerIcon,
  },
  {
    name: "sms",
    component: SmsIcon,
  },
  {
    name: 'notifications',
    component: Notifications
  },
  {
    name: 'sms_notification',
    component: SMSIcon
  },
  {
    name: 'news_notification',
    component: NewsIcon
  },
  {
    name: "amocrm",
    component: SmsIcon,
  },

  {
    name: "map",
    component: MapIcon,
  },
  {
    name: "Dashboard",
    component: Dashboard,
  },
  {
    name: 'FotoControl',
    component: FotoControl
  },
  {
    name: 'list',
    component: ListIcon
  },
  {
    name: 'headPhones',
    component: HeadPhones
  }
];
