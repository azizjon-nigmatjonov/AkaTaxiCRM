import { useMemo } from 'react';
// import usePageRouter from '../../../../../../hooks/useObjectRouter'
import CancelButton from '../../../../../../components/UI/Buttons/Cancel';
import { RxCross2 } from "react-icons/rx";
import { CgArrowLongRight } from "react-icons/cg";
import driverService from '../../../../../../services/drivers';
import { useDispatch } from 'react-redux';
import { websiteActions } from '../../../../../../store/website'
import { useParams } from 'react-router-dom';

const Accepted = ({ date, setAction }: { date?: string; setAction: (val: string) => void }) => {
    const { id } = useParams()
    const dispatch = useDispatch()

    const showPeriodTime: any = useMemo(() => {
        const day = date?.slice(0, 2);
        const month = date?.slice(3, 5)
        const year = date?.slice(6, 11);


        const startDate = [day, month, year].join('.')
        const endDate = [day, month?.split('').map((a: string, index: number) => index == 1 ? parseFloat(a) + 1 : parseFloat(a)).join(''), year].join('.')

        return { startDate, endDate }

    }, [date])

    const acceptHandler = () => {
        driverService.updateFotoControl(id, { status: 'verified' }).then(() => {
            setAction("")
            dispatch(websiteActions.setAlertData({
                mainTitle: 'Qabul qilindi!',
                title: "Sizning so'rovingiz qabul qilindi!"
            }))

            setTimeout(() => {
                window.location.reload()
            }, 2000)
        })

    }

    return (
        <>
            <div className='flex items-start justify-between'>
                <div >
                    <span className='text-lg font-semibold '>Qabul qilish</span>
                    <p className='text-[var(--gray)] text-sm'>Haydovchini qabul qilganingizga to’lov vaqti yangilanadi va muddat cho’ziladi</p>
                </div>
                <div className='cursor-pointer' onClick={() => setAction("")}>
                    <RxCross2 />
                </div>
            </div>
            <div className='my-5 text-lg text-[#475467] font-normal flex items-center justify-between'>
                <p>{showPeriodTime.startDate}</p>
                <CgArrowLongRight />
                <p>{showPeriodTime.endDate}</p>
            </div>
            <div className='flex items-center justify-end gap-3'>
                <CancelButton text='Orqaga' onClick={() => setAction("")} />
                <button className='custom-btn' id='saveButton' onClick={acceptHandler}>Qabul qilsh</button>
            </div>
        </>
    )
}

export default Accepted