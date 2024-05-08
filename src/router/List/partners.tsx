import Partners from "../../views/Partners";
import Partner from "../../views/Partners/Partner";


export const partnersList = [
    {
        parent: 'partners',
        link: 'list',
        sidebar: true,
        title: 'partners',
        icon: 'partners',
        element: <Partners />
    },
    {
        parent: 'partners',
        link: 'partner',
        sidebar: false,
        title: '',
        icon: '',
        element: <Partner />
    }
]

