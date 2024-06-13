import { lazy } from "react";
const Passanger = lazy(() => import("../../views/Passengers/Passengers/Passanger"))
const Passengers = lazy(() => import("../../views/Passengers/Passengers"))
const ActivePassengers = lazy(() => import("../../views/Passengers/Active"))
const Booking = lazy(() => import("../../views/Passengers/Active/Booking"))
const Statistics = lazy(() => import("../../views/Passengers/Statistics"))
const DriverAttachment = lazy(() => import("../../views/Passengers/Active/Attachment"))

export const passengerList = [
  {
    parent: "passengers",
    link: "passenger-list",
    sidebar: true,
    title: "Ro'yxat",
    icon: "list",
    element: <Passengers />,
    permissions: ["phone"]
  },
  {
    parent: "passengers",
    link: "passenger-list/:id",
    sidebar: false,
    title: "Yo'lovchi tahrirlash sahifasi",
    icon: "",
    element: <Passanger />,
    // single_page: true
  },
  {
    parent: "passengers",
    link: "active-passengers",
    sidebar: true,
    title: "Aktiv yo‘lovchilar",
    icon: "admin",
    element: <ActivePassengers />,
    permissions: ["note", "view", "index"]
  },
  {
    parent: "passengers",
    link: "active-passengers/booking",
    sidebar: false,
    title: "Haydovchi buyurtma berish",
    icon: "",
    element: <Booking />,
    single_page: true
  },
  {
    parent: "passengers",
    link: "active-passengers/attachment/:id",
    sidebar: false,
    title: "Haydovchi biriktirish",
    icon: "",
    element: <DriverAttachment />,
    single_page: true
  },
  {
    parent: "passengers",
    link: "statistics",
    sidebar: true,
    title: "Statistika: yo‘lovchi",
    icon: "statistics",
    element: <Statistics />
  },
];
