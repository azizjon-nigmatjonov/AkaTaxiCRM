// import SMSReports from "../../views/Notifications/SMSReports";
import { lazy } from "react";
import NewsNotification from "../../views/Notifications/News";
import AddNews from "../../views/Notifications/News/Addnew";
import Notification from "../../views/Notifications/Notification";
import AddNotification from "../../views/Notifications/Notification/AddNotification";
import SMSNotification from "../../views/Notifications/SMS";
import AddSMS from "../../views/Notifications/SMS/AddSMS";
const SmsCreateForm = lazy(() => import("../../views/Settings/SMS/Form"));

export const notificationsList = [
  {
    parent: "notifications",
    link: "notification",
    sidebar: true,
    title: "Bildirishnomalar",
    icon: "notifications",
    element: <Notification />,
  },
  {
    parent: "notifications",
    link: "notification/add_notification",
    sidebar: false,
    title: "Xabar qo'shish",
    icon: "",
    element: <AddNotification />,
    single_page: true,
  },
  {
    parent: "notifications",
    link: "notification/:id",
    sidebar: false,
    title: "Xabar tahrirlash",
    icon: "",
    element: <AddNotification />,
    single_page: true,
  },
  {
    parent: "notifications",
    link: "smsnotification",
    sidebar: true,
    title: "SMS xabarnoma",
    icon: "sms_notification",
    element: <SMSNotification />,
  },
  {
    parent: "notifications",
    link: "smsnotification/add_sms",
    sidebar: false,
    title: "SMS qo'shish",
    icon: "",
    element: <AddSMS />,
    single_page: true,
  },
  {
    parent: "notifications",
    link: "sms/create/:type",
    sidebar: false,
    title: "SMS qo'shish",
    icon: "",
    element: <SmsCreateForm />,
    single_page: true,
  },
  {
    parent: "notifications",
    link: "new_notification",
    sidebar: true,
    title: "Yangiliklar",
    icon: "news_notification",
    element: <NewsNotification />,
  },
  {
    parent: "notifications",
    link: "new_notification/add_news",
    sidebar: false,
    title: "Yangiliklar ichki sahifasi",
    icon: "news_notification",
    element: <AddNews />,
    single_page: true,
  },
  {
    parent: "notifications",
    link: "new_notification/:id",
    sidebar: false,
    title: "Yangiliklar ichki sahifasi tahrirlash",
    icon: "news_notification",
    element: <AddNews />,
    single_page: true,
  },
];
