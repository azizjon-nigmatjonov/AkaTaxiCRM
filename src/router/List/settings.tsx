import { lazy } from "react";
const Price = lazy(() => import("../../views/Settings/Price"));
const Regions = lazy(() => import("../../views/Settings/Regions"));
const ActionsHistory = lazy(
  () => import("../../views/Settings/ActionsHistory")
);
const ProfilePage = lazy(() => import("../../views/Settings/Profile"))

export const settingList = [
  {
    parent: "settings",
    link: "price_control",
    sidebar: true,
    title: "Narx nazorati",
    icon: "price_control",
    element: <Price />,
    permissions: ["edit_price", "edit_km"]
  },
  {
    parent: "settings",
    link: "regions",
    sidebar: true,
    title: "Viloyat qo'shish",
    icon: "earth",
    element: <Regions />,
  },
  {
    parent: "settings",
    link: "profile",
    sidebar: false,
    title: "Profile",
    icon: "",
    element: <ProfilePage />,
    permissions: ["logout"]
  },
  {
    parent: "settings",
    link: "actions",
    sidebar: true,
    title: "Amallar tarixi",
    icon: "layers",
    element: <ActionsHistory />,
  },
  {
    parent: "settings",
    link: "additional_functions",
    sidebar: false,
    title: "Qo'shimcha funksiyalar",
    icon: "",
    element: "",
    permissions: ["notification_sound", "profile_info", "show_notification"],
  },
];
