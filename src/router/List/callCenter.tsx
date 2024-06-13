import { lazy } from "react"
const CallCenter = lazy(() => import("../../views/CallCenter"))


export const callCenterList = [
    {
        parent: 'call_center',
        link: 'call_center',
        sidebar: true,
        title: 'Call markazi',
        icon: 'headPhones',
        element: <CallCenter />
    }
]
