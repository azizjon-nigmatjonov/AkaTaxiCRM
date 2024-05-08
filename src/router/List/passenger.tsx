import Passanger from "../../views/Passengers/Passengers/Passanger";
import Passengers from "../../views/Passengers/Passengers";
import ActivePassengers from "../../views/Passengers/Active";
import Booking from "../../views/Passengers/Active/Booking";
import Statistics from "../../views/Passengers/Statistics";

export const passengerList = [
  {
    parent: "passengers",
    link: "passenger-list",
    sidebar: true,
    title: "Ro'yxat",
    icon: "list",
    element: <Passengers />,
  },
  {
    parent: "passengers",
    link: "passenger-list/:id",
    sidebar: false,
    title: "",
    icon: "",
    element: <Passanger />
  },
  {
    parent: "passengers",
    link: "active-passengers",
    sidebar: true,
    title: "Aktiv yo‘lovchilar",
    icon: "admin",
    element: <ActivePassengers />
  },
  {
    parent: "passengers",
    link: "active-passengers/booking",
    sidebar: false,
    title: "Passengers booking",
    icon: "",
    element: <Booking />
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
