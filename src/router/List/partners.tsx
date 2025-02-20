import Partners from "../../views/Partners";
import Partner from "../../views/Partners/Partner";


export const partnersList = [
    {
        parent: 'partners',
        link: 'list',
        sidebar: true,
        title: 'Hamkorlar',
        icon: 'partners',
        element: <Partners />
    },
    {
        parent: 'partners',
        link: 'partner',
        sidebar: false,
        title: "Hamkor ichki sahifasi",
        icon: '',
        element: <Partner />,
        single_page: true
    }
]

