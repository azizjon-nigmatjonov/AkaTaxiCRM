import { useMemo } from "react"
import CBreadcrumbs from "../../../../components/CElements/CBreadcrumbs"
import { Header } from "../../../../components/UI/Header"
import AddButton from "../../../../components/UI/Buttons/AddButton"
import Rolls from "./Rolls"
import CCheckbox from "../../../../components/CElements/CCheckbox"
import HFTextField from "../../../../components/FormElements/HFTextField"
import { useForm } from "react-hook-form"
import { useSelector } from "react-redux"
import { GetRoutes } from "./Logic"


const permissions = [
    {
        label: "Ro'yxat",
        value: 'list',
    },
    {
        label: 'Aktiv',
        value: 'active'
    },
    {
        label: 'Statistic',
        value: 'static'
    },
    {
        label: "Ma'lumotnome",
        value: 'info'
    },
    {
        label: "O'zgaruvchi",
        value: 'variable'
    },
    {
        label: "O’chirish",
        value: 'delete'
    }
]

const dashboard = {
    label: 'Dashboard ma’lumotlari',
    value: false
}

const NewRolls = () => {
    const routes = useSelector((state: any) => state.website.routes)
    const { allRoutes } = GetRoutes()
    const newRoutes = allRoutes(routes)

    const breadCrumbsItems = useMemo(() => {
        return [
            {
                label: 'Admin',
                link: '/admins/admin'
            },
            {
                label: 'Rollar',
                link: '/admins/rolls'
            },
            {
                label: 'Yangi rol yaratish'
            }
        ]
    }, [])

    const { control } = useForm()

    const handleCheck = (permission: any, route: any) => {
        console.log(permission);
        console.log('route', route);
        
        route.permissions.push(permission)
    }
    // console.log('newRoutes', newRoutes);
    
    return (
        <>
            <Header sticky={true}>
                <CBreadcrumbs items={breadCrumbsItems} progmatic={true} type='link' />
            </Header>
            <div className="flex items-start justify-between px-6">
                <div>
                    <h1 className="text-[#101828] text-lg font-semibold">Yangi rol yaratish</h1>
                    <p className="text-[#475467] text-sm font-normal">Admin dashboart yangi boshqaruvchi yaratish</p>
                </div>
                <div>
                    <AddButton iconLeft={false} text='Yaratish' />
                </div>
            </div>

            <div className="px-6 divide-y-[1px] divide-[#EAECF0] w-[80%] my-5">
                <Rolls text='Yangi rol nomi'>
                    <HFTextField name="new_roll" control={control} placeholder="e.g.Admin 1" />
                </Rolls>
                <Rolls text='Dashboard '>
                    <CCheckbox element={dashboard} />
                </Rolls>
                {newRoutes?.map((route) => (
                    <Rolls key={route.path} text={route.title}>
                        <div className="grid grid-cols-3 gap-4">
                            {permissions.map((element) => <CCheckbox handleCheck={(obj: any) => handleCheck(obj, route)} element={element} />)}
                        </div>
                    </Rolls>
                ))}

            </div>
        </>
    )
}

export default NewRolls