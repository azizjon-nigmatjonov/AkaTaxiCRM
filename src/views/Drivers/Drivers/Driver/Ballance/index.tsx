import { useMemo } from "react"
import { useQuery } from "react-query"
import driverService from "../../../../../services/drivers"
import { useGetQueries } from "../../../../../hooks/useGetQueries"
import CCard from "../../../../../components/CElements/CCard"
import { BallanceIcon, TaxIcon, SallaryIcon } from "../../../../../components/UI/IconGenerator/Svg"
import CTable from "../../../../../components/CElements/CTable"
import { FormatTime } from "../../../../../utils/formatTime"
import CModal from "../../../../../components/CElements/CModal"
import usePageRouter from "../../../../../hooks/useObjectRouter"
import { useForm } from "react-hook-form"
import HFTextField from "../../../../../components/FormElements/HFTextField"
import AddButton from "../../../../../components/UI/Buttons/AddButton"
import CancelButton from "../../../../../components/UI/Buttons/Cancel"
import { useDispatch } from "react-redux"
import { websiteActions } from "../../../../../store/website"
import { useParams } from "react-router-dom"



const DriverBallance = () => {
    const { currentPage } = useGetQueries()
    const { getQueries, navigateQuery } = usePageRouter()
    const query = getQueries()
    const dispatch = useDispatch()
    const { id } = useParams()

    const { data, isLoading, refetch } = useQuery(['GET_DRIVERS_BALLANCE', id, currentPage], () => {
        return driverService.getDriverBallance({ id, page: currentPage })
    })

    const { control, getValues } = useForm();

    const successSubmit = () => {
        dispatch(
            websiteActions.setAlertData({
                mainTitle: "Amalga oshirildi!",
                title: "To'lov mufaqiyatli amalga oshirildi",
                translation: "common",
            }))
        refetch()

        navigateQuery({ amount: '' })
    }

    const failSubmited = () => {
        websiteActions.setAlertData({
            mainTitle: "Amalga oshirilmadi",
            title: "To'lov  amalga oshirilmadi",
            translation: "common",
            type: 'error'
        })

        navigateQuery({ amount: '' })
    }

    const topUpBalance = () => {
        const balance = getValues()
        driverService.topUpBallance({ id, balance }).then((data: any) => {
            data?.success ? successSubmit() : failSubmited()
        }
        )
    }


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

    console.log(data);



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

        <CModal footerActive={false} open={!!query.amount} title={'Balansni to’ldirish'} handleClose={() => { navigateQuery({ amount: "" }); }}>
            <p className="text-sm font-normal text-[#475467]">Admin tomonidan yo’lovchi hisobini to’ldirish</p>
            <div className="mt-5 space-y-8">
                <HFTextField name="amount" control={control} placeholder="50 000 so'm" />
                <div className="flex items-center justify-end gap-3">
                    <CancelButton text='Orqaga' onClick={() => navigateQuery({ amount: '' })} />
                    <AddButton iconLeft={false} text='To’ldirish' onClick={topUpBalance} />
                </div>
            </div>
        </CModal>
    </>
}

export default DriverBallance