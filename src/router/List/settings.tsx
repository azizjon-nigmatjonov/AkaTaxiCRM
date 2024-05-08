import SMS from "../../views/Settings/SMS";
import Price from "../../views/Settings/Price";
import { SmsCreateForm } from "../../views/Settings/SMS/Form";
import AmoCrm from "../../views/Settings/AmoCrm";
import ProfilePage from "../../views/Settings/Profile";

export const settingList = [
    {
        parent: 'settings',
        link: 'price_control',
        sidebar: true,
        title: 'Narx nazorati',
        icon: 'price_control',
        element: <Price />
    },
    {
        parent: 'settings',
        link: 'sms',
        sidebar: true,
        title: 'SMS xabarnoma',
        icon: 'sms',
        element: <SMS />
    },
    {
        parent: 'settings',
        link: 'sms/create/:type',
        sidebar: false,
        title: '',
        icon: '',
        element: <SmsCreateForm />
    },
    {
        parent: 'settings',
        link: 'amocrm',
        sidebar: true,
        title: 'Amo Crm',
        icon: 'amocrm',
        element: <AmoCrm />
    },
    {
        parent: 'settings',
        link: 'profile',
        sidebar: false,
        title: 'Profile',
        icon: '',
        element: <ProfilePage />
    },
    
]