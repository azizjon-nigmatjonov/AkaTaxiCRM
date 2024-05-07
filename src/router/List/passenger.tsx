import Passanger from "../../views/Passengers/Passengers/Passanger";
import Passengers from "../../views/Passengers/Passengers";
import ActivePassengers from "../../views/Passengers/Active";
import Booking from "../../views/Passengers/Active/Booking";
import Statistics from "../../views/Passengers/Statistics";

export const passengerList = [
  {
    parent: "passengers",
    link: "main",
    sidebar: true,
    title: "Ro'yxat",
    icon: "list",
    element: <Passengers />,
  },
  {
    parent: "passengers",
    link: "passenger/:id",
    // childlink: 'single',
    sidebar: false,
    title: "",
    icon: "",
    element: <Passanger />
  },
  {
    parent: "passengers",
    link: "active_passengers",
    sidebar: true,
    title: "Aktiv yo‘lovchilar",
    icon: "admin",
    element: <ActivePassengers />
  },
  {
    parent: "passengers",
    link: "booking",
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
