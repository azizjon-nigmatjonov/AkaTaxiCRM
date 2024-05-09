import NewsNotification from "../../views/Notifications/News";
import AddNews from "../../views/Notifications/News/Addnew";
import Notification from "../../views/Notifications/Notification";
import AddNotification from "../../views/Notifications/Notification/AddNotification";
import SMSNotification from "../../views/Notifications/SMS";
import AddSMS from "../../views/Notifications/SMS/AddSMS";

export const notificationsList = [
    {
        parent: 'notifications',
        link: 'notification',
        sidebar: true,
        title: 'Bildirishnomalar',
        icon: 'notifications',
        element: <Notification />
    },
    {
        parent: 'notifications',
        link: 'notification/add_notification',
        sidebar: false,
        title: "Xabar qo'shish",
        icon: '',
        element: <AddNotification />
    },
    {
        parent: 'notifications',
        link: 'smsnotification',
        sidebar: true,
        title: 'SMS xabarnoma',
        icon: 'sms_notification',
        element: <SMSNotification />
    },
    {
        parent: 'notifications',
        link: 'smsnotification/add_sms',
        sidebar: false,
        title: "SMS qo'shish",
        icon: '',
        element: <AddSMS />
    },
    {
        parent: 'notifications',
        link: 'new_notification',
        sidebar: true,
        title: 'Yangiliklar',
        icon: 'news_notification',
        element: <NewsNotification />
    },
    {
        parent: "notifications",
        link: "new_notification/add_news",
        sidebar: false,
        title: "Yangiliklar",
        icon: "news_notification",
        element: <AddNews />
    }
]