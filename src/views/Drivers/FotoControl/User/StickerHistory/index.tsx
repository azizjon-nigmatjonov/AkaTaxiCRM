import CTable from "../../../../../components/CElements/CTable"
import { useMemo } from "react"
import cls from '../../../style.module.scss';

const StickerHistory = ({ data }: { data?: any }) => {

    const headColumns = useMemo(() => {
        return [
            {
                title: 'Foto',
                id: 'stickerInfo',
                render: (val: any) => val && (
                    <div>
                        <div className="flex items-center gap-3">
                            <img src={val.image} alt="" className="h-9 w-9 rounded-lg " />
                            <p>{val.created_at}</p>
                        </div>
                    </div>
                )
            },
            {
                title: 'Izoh',
                id: 'status_reason'
            },
            {
                title: 'status',
                id: 'status',
                render: (val: any) => val && (
                    <p className={`${val == 'canceled' ? cls.reject : val == 'verified' ? cls.done : cls.onWay} inline rounded-2xl py-[2px] px-2`}>{val.canceled ? 'Rad etildi' : val == 'verified' ? 'Qabul qilindi' : "To'landi"}</p>
                )
            },
            {
                title: 'Muddat',
                id: 'created_at'
            }
        ]
    }, [])

    const bodyColumns = useMemo(() => {
        if (!data?.history) return []
        return data?.history?.map((val: any) => {
            return {
                ...val,
                stickerInfo: {
                    image: val.image,
                    created_at: val.created_at

                }
            }
        })
    }, [data])

    return (
        <>
            <p className="text-lg font-semibold">Nakleykalar tarixi</p>
            <CTable headColumns={headColumns} bodyColumns={bodyColumns} />
        </>
    )
}

export default StickerHistory