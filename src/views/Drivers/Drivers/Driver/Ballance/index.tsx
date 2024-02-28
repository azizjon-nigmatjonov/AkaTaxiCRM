import { useMemo } from "react"
import { useQuery } from "react-query"
import driverService from "../../../../../services/drivers"
import { useGetQueries } from "../../../../../hooks/useGetQueries"
import CCard from "../../../../../components/CElements/CCard"
import { BallanceIcon, TaxIcon, SallaryIcon } from "../../../../../components/IconGenerator/Svg"
import CTable from "../../../../../components/CElements/CTable"
import { FormatTime } from "../../../../../utils/formatTime"

const DriverBallance = () => {
    const { id, currentPage } = useGetQueries()
    const { data, isLoading } = useQuery(['GET_DRIVERS_BALLANCE', id, currentPage], () => {
        return driverService.getDriverBallance({id, page:currentPage})
    })


    const ballanceData: any = useMemo(() => {
        if (data?.data.length) return []
        return {
            ...data,
            generalAmount: [
                { id: 'balance', name: 'Haydovchi balansi', amount: data?.data?.balance },
                { id: 'tax', name: 'Komissiya summasi', amount: data?.data?.commission },
                { id: 'salary', name: 'Ishlab topilgan summa', amount: data?.data?.earnings },
            ],
            operations: data?.data?.operations
        }
    }, [data])

    const headColums = useMemo(() => {
        return [
            {
                title: 'Summa',
                id: 'amount',
                render: (val?: any, item?: any) => val && (
                    <p className={item.type == 'income' ? 'text-[var(--green)]' : 'text-[var(--main)]'}>{item.type == 'income' ? '+' : '-' + val + ' ' + "so'm"}</p>
                )
            },
            {
                title: 'tranzaksiya turi',
                id: "type",
                render: (val?: any) => val && (
                    <p >{val == 'income' ? 'Hisob to’ldirildi' : 'Komissiya olindi'}</p>
                )
            },
            {
                title: 'Sana',
                id: 'created_at',
                render: (val?: any) => val && (
                    FormatTime(val)
                )
            }
        ]
    }, [])


    const bodyColumns = useMemo(() => {
        return ballanceData
    }, [ballanceData])


    return <>
        <div className="grid grid-cols-3 gap-[10px] mb-6">
            {ballanceData.generalAmount?.map((val: any) => (
                <CCard style={{ minHeight: 0 }} classes="flex items-center gap-[18px]">
                    <div className="p-[9px] bg-[#DD431F]/10 rounded-lg inline-flex">
                        {val.id == 'balance' ? <BallanceIcon /> : val.id == 'tax' ? <TaxIcon /> : <SallaryIcon />}
                    </div>
                    <div className="space-y-2">
                        <p className="text-[var(--black)] text-[28px] font-semibold">{val.amount} sum</p>
                        <p className="text-sm text-[var(--gray)] font-normal">{val?.name}</p>
                    </div>
                </CCard>
            ))}
        </div>
        <CTable headColumns={headColums} bodyColumns={bodyColumns.operations} isResizeble={true} isLoading={isLoading} currentPage={currentPage} count={bodyColumns?.meta?.totalCount} />
    </>
}

export default DriverBallance