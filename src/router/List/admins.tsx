import { RollForm } from "../../views/Admins/Rolls/Form";
import Admins from "../../views/Admins/Admins";
import Rolls from "../../views/Admins/Rolls";
import NewRolls from "../../views/Admins/Rolls/AddRolls";

export const adminList = [
    {
        parent: 'admins',
        link: 'admin',
        sidebar: true,
        title: 'Adminlar',
        icon: 'admin',
        element: <Admins />
    },
    {
        parent: 'admins',
        link: 'rolls',
        sidebar: true,
        title: 'Rollar',
        icon: 'rolls_icon',
        element: <Rolls />
    },
    {
        parent: 'admins',
        link: 'rolls/new_rolls',
        sidebar: false,
        title: '',
        icon: '',
        element: <NewRolls />
    },
    {
        parent: 'admins',
        link: 'rolls/create',
        sidebar: false,
        title: '',
        icon: '',
        element: <NewRolls />
    },

    {
        parent: 'admins',
        link: 'rolls/:id',
        sidebar: false,
        title: '',
        icon: '',
        element: <RollForm />
    }
]