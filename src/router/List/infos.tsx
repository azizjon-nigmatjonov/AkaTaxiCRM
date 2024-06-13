import Chats from "../../views/Information/Chats";
import Calendar from "../../views/Information/Calendar";

export const infoLists = [
    {
        parent: 'infos',
        link: 'calendar',
        sidebar: true,
        title: 'Kalendar',
        icon: 'calendar',
        element: <Calendar />,
    },
    {
        parent: 'infos',
        link: ' chats',
        sidebar: true,
        title: 'Chatlar',
        icon: 'chat',
        element: <Chats />
    }
]