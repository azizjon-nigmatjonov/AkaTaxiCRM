import { lazy } from "react";
const Dashboard = lazy(() => import("../../views/Dashboard"))

export const dashboardList = [
  {
    parent: "dashboard",
    link: "dashboard",
    sidebar: true,
    title: "Boshqaruv paneli",
    icon: "Dashboard",
    element: <Dashboard />
  },
];
