import { useMemo } from "react"
import CBreadcrumbs from "../../../../components/CElements/CBreadcrumbs"
import { Header } from "../../../../components/UI/Header"
import AddButton from "../../../../components/UI/Buttons/AddButton"
import Rolls from "./Rolls"
import CCheckbox from "../../../../components/CElements/CCheckbox"
import HFTextField from "../../../../components/FormElements/HFTextField"
import { useForm } from "react-hook-form"


const passenger = [
    {
        name: "Ro'yxat",
        status: false,
    },
    {
        name: 'Aktiv',
        status: false
    },
    {
        name: 'Statistic',
        status: false
    },
    {
        name: "Ma'lumotnome",
        status: false
    },
    {
        name: "O'zgaruvchi",
        status: false
    },
    {
        name: "O’chirish",
        status: false
    }
]

const NewRolls = () => {

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
                    <CCheckbox text='Dashboard ma’lumotlari' />
                </Rolls>
                <Rolls text='Yo’lovchi'>
                    <div className="grid grid-cols-3 gap-4">
                        {passenger.map((val) => <CCheckbox text={val?.name} />)}
                    </div>
                </Rolls>
            </div>
        </>
    )
}

export default NewRolls